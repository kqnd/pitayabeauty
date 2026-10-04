"use client";

import { motion } from "framer-motion";
import type { CSSProperties } from "react";

type RevealTextProps = {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p";
  style?: CSSProperties;
};

export default function RevealText({
  text,
  className,
  delay = 0,
  as = "h2",
  style,
}: RevealTextProps) {
  const words = text.split(" ");
  const tagMap = {
    h1: motion.h1,
    h2: motion.h2,
    h3: motion.h3,
    p: motion.p,
  } as const;
  const Tag = tagMap[as];

  return (
    <Tag
      className={className}
      style={style}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] mr-[0.28em]">
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: "110%", opacity: 0, filter: "blur(6px)" },
              visible: {
                y: "0%",
                opacity: 1,
                filter: "blur(0px)",
                transition: {
                  duration: 0.8,
                  delay: delay + i * 0.045,
                  ease: [0.16, 1, 0.3, 1],
                },
              },
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
