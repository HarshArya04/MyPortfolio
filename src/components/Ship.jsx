import React, { useEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useMotionValue, useSpring } from 'motion/react';
import { useFrame } from '@react-three/fiber';

export function Ship({
  position = [0, 0, 0],
  scale = 1,
  enableYSpring = true, // can turn off if you want raw position control
  ...props
}) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/models/Ship.glb');
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (animations?.length > 0) {
      const firstName = animations[0].name;
      if (actions[firstName]) {
        actions[firstName].reset().play();
      }
    }
  }, [actions, animations]);

  // springed Y offset
  const yPosition = useMotionValue(5);
  const ySpring = useSpring(yPosition, { damping: 30 });

  useEffect(() => {
    if (enableYSpring) {
      ySpring.set(-1);
    } else {
      ySpring.set(0);
    }
  }, [ySpring, enableYSpring]);

  useFrame(() => {
    if (!group.current) return;
    const [x, y, z] = position;
    const yOffset = enableYSpring ? ySpring.get() : 0;
    group.current.position.set(x,y, yOffset, z);
  });

  return (
    <group
      ref={group}
      position={position} // initial; will be managed in useFrame
      scale={scale}
      dispose={null}
      {...props}
    >
       <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_115.geometry}
        material={materials.material_3}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_115_1.geometry}
        material={materials.material_1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_115_2.geometry}
        material={materials.material_5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_115_3.geometry}
        material={materials.material_2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_115_4.geometry}
        material={materials.material_4}
      />
    </group>
  )
}

useGLTF.preload('/models/Ship.glb');
