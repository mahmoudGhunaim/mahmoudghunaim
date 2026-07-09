"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/content";

export default function Skills() {
  const categories = Object.entries(skills);

  return (
    <section id="skills" className="relative py-28">
      <div className="section-container">
        <p className="text-xs tracking-[0.3em] uppercase text-[#22d3ee] mb-4">Skills</p>
        <h2 className="font-display font-bold text-3xl sm:text-4xl mb-14">What I work with</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map(([category, items], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="glass-card rounded-2xl p-6"
            >
              <h3 className="font-display font-semibold text-sm uppercase tracking-wide text-white/50 mb-4">
                {category}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg bg-white/5 border border-white/10 px-3 py-1.5 text-sm text-white/80"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
