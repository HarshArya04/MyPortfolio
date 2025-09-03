import { Canvas } from "@react-three/fiber";
import { section } from "motion/react-client";
import HeroText from "../components/HeroText";
import ParallaxBG from "../components/ParallaxBG";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { Ship } from "../components/Ship";
import { Environment } from "@react-three/drei";

export const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  const scale = isMobile ? 2.5 : 3;
  const position = isMobile ? [3, -5, 0] : [6, -4, 0];
  const rotation = isMobile ? [-0.5, -0.4, 0] : [-0.6, 0.6, 0];
  return (
    <section className="flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space">
      <HeroText />
      <ParallaxBG />
      <figure
        className="absolute inset-0 w-full h-full"
        style={{ width: "100%", height: "100%" }}
      >
        <Canvas camera={{ position: [0, 2, 3], near: 0.1, far: 1000 }}>
          <ambientLight intensity={0.1} />
          <directionalLight position={[5, 5, 5]} intensity={-1.5} />
          <Environment preset="studio" />
          <Float floatIntensity={0.1} rotationIntensity={0.3}>
            <Ship scale={scale} position={position} rotation={rotation} />
          </Float>
          <Rig />
        </Canvas>
      </figure>
    </section>
  );
};

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      (state.pointer.x / 10, 1 + state.pointer.y / 10, 3),
      0.5,
      delta
    );
  });
}
export default Hero;
