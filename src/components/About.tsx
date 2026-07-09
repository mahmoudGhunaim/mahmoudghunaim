"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { languages, profile, softSkills } from "@/data/content";

export default function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="section-container grid md:grid-cols-[280px_1fr] gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto md:mx-0 w-56 h-56 md:w-full md:h-auto md:aspect-square"
        >
          <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-[#22d3ee]/30 via-[#a78bfa]/20 to-transparent blur-xl" />
          <div className="relative w-full h-full rounded-3xl overflow-hidden glass-card">
            <Image
              src="/images/avatar.png"
              alt="Illustrated avatar of Mahmoud Ghunaim"
              fill
              sizes="(min-width: 768px) 280px, 224px"
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-[#22d3ee] mb-4">About</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl mb-6">
            A full stack developer who likes making things move.
          </h2>
          <p className="text-white/70 leading-relaxed max-w-2xl">{profile.summary}</p>

          <div className="mt-8 flex flex-wrap gap-2.5">
            {softSkills.map((skill) => (
              <span
                key={skill}
                className="rounded-full glass-card px-4 py-1.5 text-sm text-white/80"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="mt-8 flex gap-8 text-sm text-white/60">
            {languages.map((lang) => (
              <div key={lang.name}>
                <p className="text-white/90 font-medium">{lang.name}</p>
                <p>{lang.level}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
