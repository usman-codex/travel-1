"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const cities = [
  { code: "LH", name: "Lahore" },
  { code: "TAS", name: "Tashkent" },
];

const Loader = () => {
  const [show, setShow] = useState(true);
  const [progress, setProgress] = useState(0);
  const [mounted, setMounted] = useState(false); // Added mount check

  useEffect(() => {
    setMounted(true); // Signal that we are on the client
    
    // Lock scroll while loading
    document.body.style.overflow = 'hidden';

    let raf;
    const start = performance.now();
    const duration = 2600;

    const tick = (now) => {
      const elapsed = now - start;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);
      if (elapsed < duration) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setShow(false), 350);
      }
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    if (!show) document.body.style.overflow = '';
  }, [show]);

  // Prevent SSR rendering of the loader content to avoid hydration mismatch
  if (!mounted) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#0e1a2b]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
        >
          {/* atmospheric glows */}
          <div className="absolute -top-40 -right-32 w-[600px] h-[600px] rounded-full bg-[#c7654d]/25 blur-[120px]" />
          <div className="absolute -bottom-48 -left-40 w-[600px] h-[600px] rounded-full bg-[#143656]/50 blur-[120px]" />

          {/* twinkling star dots */}
          {[...Array(28)].map((_, i) => (
            <motion.span
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: i % 5 === 0 ? 3 : 1.5,
                height: i % 5 === 0 ? 3 : 1.5,
                top: `${(i * 37) % 100}%`,
                left: `${(i * 53) % 100}%`,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.8, 0.2] }}
              transition={{ duration: 2.2, delay: (i % 7) * 0.2, repeat: Infinity, repeatType: "reverse" }}
            />
          ))}

          <div className="relative flex flex-col items-center px-6 w-full max-w-2xl">
            {/* Flight path SVG */}
            <div className="relative w-full max-w-md h-32 mb-6">
              <svg viewBox="0 0 400 130" className="w-full h-full overflow-visible">
                <motion.path
                  d="M 30 100 Q 200 -25 370 100"
                  fill="none"
                  stroke="#e7a892"
                  strokeWidth="2"
                  strokeDasharray="6 7"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.7 }}
                  transition={{ duration: 2.2, ease: "easeInOut" }}
                />

                <motion.circle cx="30" cy="100" r="6" fill="#fbf9f6"
                  initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2 }} />
                <motion.circle cx="30" cy="100" r="6" fill="none" stroke="#fbf9f6" strokeWidth="1.5"
                  animate={{ r: [6, 14], opacity: [0.6, 0] }} transition={{ duration: 1.6, repeat: Infinity }} />

                <motion.circle cx="370" cy="100" r="6" fill="#c7654d"
                  initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 2 }} />
                <motion.circle cx="370" cy="100" r="6" fill="none" stroke="#c7654d" strokeWidth="1.5"
                  initial={{ opacity: 0 }} animate={{ r: [6, 14], opacity: [0.6, 0] }}
                  transition={{ duration: 1.6, repeat: Infinity, delay: 2 }} />

                <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}>
                  <motion.g
                    animate={{ offsetDistance: ["0%", "100%"] }}
                    transition={{ duration: 2.2, ease: "easeInOut" }}
                    style={{
                      offsetPath: "path('M 30 100 Q 200 -25 370 100')",
                      offsetRotate: "auto",
                    }}
                  >
                    <g transform="translate(-12,-12) rotate(45 12 12)">
                      <path
                        d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"
                        fill="#fbf9f6"
                        stroke="#fbf9f6"
                        strokeWidth="0.5"
                        strokeLinejoin="round"
                      />
                    </g>
                  </motion.g>
                </motion.g>
              </svg>

              <div className="absolute left-0 bottom-0 -translate-x-1 translate-y-2 text-left">
                <div className="text-[#fbf9f6] font-serif italic text-lg leading-none">{cities[0].code}</div>
                <div className="text-white/40 text-[9px] uppercase tracking-[0.2em] mt-1">{cities[0].name}</div>
              </div>
              <div className="absolute right-0 bottom-0 translate-x-1 translate-y-2 text-right">
                <div className="text-[#e7a892] font-serif italic text-lg leading-none">{cities[1].code}</div>
                <div className="text-white/40 text-[9px] uppercase tracking-[0.2em] mt-1">{cities[1].name}</div>
              </div>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="font-serif text-white text-4xl md:text-6xl tracking-tight text-center leading-none"
            >
              Travel <span className="italic text-[#e7a892]">Operations</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="text-white/50 text-[10px] md:text-xs uppercase tracking-[0.5em] mt-4 mb-8 text-center"
            >
              Crafting your journey
            </motion.p>

            <div className="w-56 md:w-72">
              <div className="h-[3px] w-full bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#e7a892] to-[#c7654d] rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="flex justify-between mt-3">
                <span className="text-white/40 text-[10px] uppercase tracking-[0.3em]">Boarding</span>
                <span className="text-[#e7a892] text-[10px] font-semibold tabular-nums">{progress}%</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;