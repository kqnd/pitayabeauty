"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Reveal from "./Reveal";
import Magnetic from "./Magnetic";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL, whatsappLink } from "@/lib/whatsapp";
import { ArrowIcon, InstagramIcon } from "./icons";

export default function FinalCTA() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const glowY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const textX = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-ink px-5 py-32 sm:px-10 sm:py-48">
      <motion.div
        style={{ y: glowY, background: "radial-gradient(closest-side, rgba(197,138,150,0.4), transparent)" }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[90vw] w-[90vw] max-h-[900px] max-w-[900px] -translate-x-1/2 -translate-y-1/2"
      />

      <div className="relative mx-auto max-w-[1300px] text-center">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.4em] text-gold-bright">
            Pronta para se olhar no espelho e sorrir?
          </p>
        </Reveal>

        <motion.h2
          style={{ x: textX }}
          className="font-display mt-8 text-[17vw] leading-[0.92] sm:text-[11vw] lg:text-[9.5vw]"
        >
          <span className="block text-cream-high">Vem provar</span>
          <span className="text-rosegold block italic">de perto.</span>
        </motion.h2>

        <Reveal delay={0.2} className="mt-14 flex flex-col items-center gap-8">
          <Magnetic strength={0.4}>
            <a
              href={whatsappLink("Olá! Vim pelo site da Pitaya Beauty e gostaria de falar com vocês.")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-rosegold group inline-flex items-center gap-4 rounded-full px-10 py-6 text-[13px] font-semibold uppercase tracking-[0.22em] text-ink shadow-[0_24px_70px_-20px_rgba(217,159,142,0.85)] sm:px-14 sm:py-7"
            >
              Falar no WhatsApp agora
              <ArrowIcon className="h-5 w-5 transition-transform group-hover:translate-x-2" />
            </a>
          </Magnetic>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-[12px] uppercase tracking-[0.22em] text-cream-dim transition-colors hover:text-cream-high"
          >
            <InstagramIcon className="h-5 w-5 text-gold-bright" />
            {INSTAGRAM_HANDLE}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
