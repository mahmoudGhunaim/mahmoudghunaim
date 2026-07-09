"use client";

import { motion } from "framer-motion";
import { education, experience } from "@/data/content";

export default function Experience() {
  return (
    <section id="experience" className="relative py-28">
      <div className="section-container">
        <p className="text-xs tracking-[0.3em] uppercase text-[#22d3ee] mb-4">Experience</p>
        <h2 className="font-display font-bold text-3xl sm:text-4xl mb-14">
          Where I&apos;ve worked
        </h2>

        <div className="space-y-10">
          {experience.map((job) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="glass-card rounded-2xl p-8"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-6">
                <h3 className="font-display font-bold text-xl">
                  {job.role} · {job.company}
                </h3>
                <span className="text-sm text-white/50">{job.period}</span>
              </div>
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-3 text-white/70 text-sm leading-relaxed">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#22d3ee]" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card rounded-2xl p-8 flex flex-wrap items-baseline justify-between gap-2"
          >
            <div>
              <h3 className="font-display font-bold text-xl">{education.degree}</h3>
              <p className="text-white/60 text-sm mt-1">{education.school}</p>
            </div>
            <span className="text-sm text-white/50">{education.period}</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
