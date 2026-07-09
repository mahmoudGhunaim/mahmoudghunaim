"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/content";

export default function Contact() {
  return (
    <section id="contact" className="relative py-28">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-3xl p-10 sm:p-16 text-center"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-[#22d3ee] mb-4">Contact</p>
          <h2 className="font-display font-bold text-3xl sm:text-5xl mb-6">
            Let&apos;s build something.
          </h2>
          <p className="text-white/65 max-w-xl mx-auto mb-10">
            Open to front-end roles and freelance work. Based in {profile.location} — happy to
            work remotely.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full bg-white text-[#05050a] px-6 py-3 text-sm font-semibold hover:bg-white/90 transition-colors"
            >
              {profile.email}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/85 hover:border-[#22d3ee]/60 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={`tel:${profile.phone.replace(/\s+/g, "")}`}
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/85 hover:border-[#22d3ee]/60 hover:text-white transition-colors"
            >
              {profile.phone}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
