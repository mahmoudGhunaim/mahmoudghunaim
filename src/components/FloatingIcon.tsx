"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function FloatingIcon() {
  const { scrollYProgress } = useScroll();

  const y = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [0, -50, 40, -35, 45, 0]
  );
  const x = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, 70, -50, 60, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0, 0.22, 0.22, 0]);

  return (
    <motion.div
      style={{ y, x, rotate, opacity }}
      className="pointer-events-none fixed left-[10%] top-[20%] z-[-1] hidden sm:block"
    >
      <Image
        src="/images/visualstudio.svg"
        alt=""
        width={56}
        height={56}
        className="invert drop-shadow-[0_0_24px_rgba(34,211,238,0.4)]"
      />
    </motion.div>
  );
}
