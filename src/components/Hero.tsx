"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import { profile } from "@/data/content";

const HeroScene = dynamic(() => import("@/components/scene/HeroScene"), {
  ssr: false,
});

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const sceneY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
    >
      <motion.div style={{ y: bgY }} className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/hero-bg.png)" }}
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#05050a] via-[#05050a]/85 to-[#05050a]" />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 section-container grid lg:grid-cols-[1.1fr_1fr] gap-4 lg:gap-8 items-center py-16"
      >
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm tracking-[0.3em] uppercase text-[#22d3ee] mb-6"
          >
            {profile.role}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-bold text-5xl sm:text-6xl xl:text-7xl leading-[1.05]"
          >
            Hi, I&apos;m <span className="text-gradient">{profile.name}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-lg text-lg text-white/70"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#experience"
              className="rounded-full bg-white text-[#05050a] px-6 py-3 text-sm font-semibold hover:bg-white/90 transition-colors"
            >
              My experience
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/85 hover:border-[#22d3ee]/60 hover:text-white transition-colors"
            >
              Get in touch
            </a>
          </motion.div>
        </div>

        <motion.div
          style={{ y: sceneY }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative h-72 sm:h-96 lg:h-[520px]"
        >
          <HeroScene />
        </motion.div>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/40 text-xs tracking-widest uppercase">
        Scroll
      </div>
    </section>
  );
}
