"use client";

import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Reveal from "./Reveal";

const TEXT =
  "Autocuidado não é vaidade. É o jeito mais simples de se tratar bem, com um batom que dura e um brinco que você não quer mais tirar.";

function Word({ word, range, progress }: { word: string; range: [number, number]; progress: MotionValue<number> }) {
  const opacity = useTransform(progress, range, [0.16, 1]);
  return (
    <motion.span style={{ opacity }} className="mr-[0.26em] inline-block">
      {word}
    </motion.span>
  );
}

const FACTS = [
  ["01", "Curadoria de maquiagem e acessórios feita por quem entende do que combina com você, sem empurrar o que não serve."],
  ["02", "A primeira loja especializada do segmento em Vila de Abrantes, dentro do Shopping Busca Vida."],
  ["03", "Atendimento de verdade no WhatsApp: pergunte, mande foto do look e reserve a peça antes de vir."],
];

export default function BrandStatement() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.55"] });
  const words = TEXT.split(" ");

  return (
    <section id="pitaya" className="relative bg-cream px-5 py-28 sm:px-10 sm:py-44">
      <div className="mx-auto max-w-[1300px]">
        <Reveal>
          <p className="mb-10 flex items-center gap-4 text-[11px] uppercase tracking-[0.4em] text-rose-deep">
            <span className="h-px w-10 bg-gold" />A Pitaya
          </p>
        </Reveal>

        <div ref={ref}>
          <p className="font-display text-balance text-[9.2vw] leading-[1.06] tracking-tight text-ink sm:text-[5.6vw] lg:text-[4.4vw]">
            {words.map((w, i) => (
              <Word key={i} word={w} range={[i / words.length, (i + 1) / words.length]} progress={scrollYProgress} />
            ))}
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 border-t border-ink/15 pt-12 sm:grid-cols-3 sm:gap-10">
          {FACTS.map(([n, t], i) => (
            <Reveal key={n} delay={i * 0.12}>
              <p className="font-display text-5xl italic text-rosegold">{n}</p>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">{t}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
