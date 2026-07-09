"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const SESSION_KEY = "mg-intro-played";

export default function IntroOverlay() {
  const [mounted, setMounted] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (!sessionStorage.getItem(SESSION_KEY)) {
      setShow(true);
    }
  }, []);

  const dismiss = () => {
    sessionStorage.setItem(SESSION_KEY, "1");
    setShow(false);
  };

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#05050a]"
        >
          <video
            className="h-full w-full object-cover"
            src="/videos/intro.mp4"
            autoPlay
            muted
            playsInline
            onEnded={dismiss}
          />
          <button
            onClick={dismiss}
            className="absolute bottom-8 right-8 rounded-full border border-white/20 px-5 py-2 text-xs uppercase tracking-widest text-white/70 transition-colors hover:border-white/50 hover:text-white"
          >
            Skip intro
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
