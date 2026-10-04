"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 380, damping: 32, mass: 0.35 });
  const sy = useSpring(y, { stiffness: 380, damping: 32, mass: 0.35 });
  const [enabled, setEnabled] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)");
    const sync = () => setEnabled(fine.matches);
    fine.addEventListener("change", sync);
    const t = setTimeout(sync, 0);

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = (e: MouseEvent) => {
      setHover(!!(e.target as HTMLElement).closest("a, button"));
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      clearTimeout(t);
      fine.removeEventListener("change", sync);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[90] -ml-5 -mt-5 h-10 w-10 rounded-full"
      style={{
        x: sx,
        y: sy,
        border: "1px solid var(--gold-bright)",
        backgroundColor: hover ? "rgba(220,185,126,0.18)" : "transparent",
      }}
      animate={{ scale: hover ? 1.9 : 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    />
  );
}
