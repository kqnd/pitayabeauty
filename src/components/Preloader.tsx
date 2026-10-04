"use client";

import { animate, motion } from "framer-motion";
import { useEffect, useState } from "react";

type Phase = "loading" | "opening" | "done";

export default function Preloader() {
  const [count, setCount] = useState(0);
  const [phase, setPhase] = useState<Phase>("loading");

  useEffect(() => {
    document.documentElement.style.overflow = "hidden";
    const controls = animate(0, 100, {
      duration: 1.9,
      ease: [0.65, 0, 0.35, 1],
      onUpdate: (v) => setCount(Math.round(v)),
      onComplete: () => {
        setTimeout(() => setPhase("opening"), 280);
      },
    });
    return () => controls.stop();
  }, []);

  useEffect(() => {
    if (phase !== "opening") return;
    const t = setTimeout(() => {
      setPhase("done");
      document.documentElement.style.overflow = "";
    }, 1200);
    return () => clearTimeout(t);
  }, [phase]);

  if (phase === "done") return null;

  const opening = phase === "opening";
  const curtain = { duration: 1.1, ease: [0.76, 0, 0.24, 1] as const };

  return (
    <div className="fixed inset-0 z-[100]" aria-hidden="true">
      <motion.div
        className="absolute inset-x-0 top-0 h-1/2 bg-ink"
        animate={{ y: opening ? "-100%" : "0%" }}
        transition={curtain}
      />
      <motion.div
        className="absolute inset-x-0 bottom-0 h-1/2 bg-ink"
        animate={{ y: opening ? "100%" : "0%" }}
        transition={curtain}
      />

      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center"
        animate={{ opacity: opening ? 0 : 1, scale: opening ? 1.06 : 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.svg
          viewBox="0 0 24 24"
          className="twinkle mb-6 h-6 w-6"
          style={{ color: "var(--gold-bright)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <path
            d="M12 1l2.2 8.8L23 12l-8.8 2.2L12 23l-2.2-8.8L1 12l8.8-2.2z"
            fill="currentColor"
          />
        </motion.svg>

        <div className="overflow-hidden px-2">
          <motion.h1
            className="font-display text-rosegold text-[17vw] italic leading-[1.05] sm:text-[11vw] lg:text-[8vw]"
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            Pitaya
          </motion.h1>
        </div>
        <motion.p
          className="mt-1 text-[11px] uppercase tracking-[0.7em] pl-[0.7em]"
          style={{ color: "var(--rose-pale)" }}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          Beauty
        </motion.p>

        <div className="mt-12 flex w-56 items-center gap-4 sm:w-72">
          <div className="relative h-px flex-1" style={{ background: "rgba(220,185,126,0.25)" }}>
            <div
              className="absolute inset-y-0 left-0 bg-rosegold"
              style={{ width: `${count}%` }}
            />
          </div>
          <span
            className="w-9 text-right font-display text-lg tabular-nums"
            style={{ color: "var(--cream-high)" }}
          >
            {count}
          </span>
        </div>
      </motion.div>
    </div>
  );
}
