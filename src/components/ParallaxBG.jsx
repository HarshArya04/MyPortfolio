import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const ParallaxBG = () => {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { damping: 50});
  const mountain3Y = useTransform(x, [0, 0.5], ['64%', '70%']);
  const planetX = useTransform(x, [0, 0.5], ['0%', '-20%']);
  const mountain2Y = useTransform(x, [0, 0.5], ['-10%', '30%']);
  const mountain1Y = useTransform(x, [0, 0.5], ['60%', '0%']);

  return (
    <section className="absolute inset-0 bg-black/40">
      <div className="relative min-h-screen overflow-hidden">
        {/* Background Sky */}
        <div
          className="absolute inset-0 -z-50 bg-bottom bg-cover"
          style={{
            backgroundImage: "url('/assets/sky.jpg')",
            backgroundPosition: "bottom",
            backgroundSize: "cover"
          }}
        />

        {/* Mountain Layer 3 */}
        <motion.div
          className="absolute inset-0 z-1  bg-bottom bg-cover"
          style={{
            backgroundImage: "url('/assets/mountain-32.png')",
            backgroundPosition: "bottom",
            backgroundSize: "contain",
            y: mountain3Y,
          }}
        />

        {/* Planets */}
        <motion.div
          className="absolute inset-0 -z-30 bg-bottom bg-cover"
          style={{
            backgroundImage: "url('/assets/planets.png')",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            x: planetX,
          }}
        />

        {/* Mountain Layer 2 */}
        <motion.div
          className="absolute inset-0 -z-20 bg-bottom bg-cover"
          style={{
            backgroundImage: "url('/assets/mountain-2.png')",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mountain2Y,
          }}
        />

        {/* Mountain Layer 1 */}
        <motion.div
          className="absolute inset-0 z-2 bg-bottom bg-cover"
          style={{
            backgroundImage: "url('/assets/mountain-32.png')",
            backgroundPosition: "bottom",
            backgroundSize: "contain",
            y: mountain1Y,
          }}
        />
      </div>
    </section>
  );
};

export default ParallaxBG;
