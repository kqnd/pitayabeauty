"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { whatsappLink } from "@/lib/whatsapp";
import Magnetic from "./Magnetic";
import { ArrowIcon } from "./icons";

const D = 2.5;
const ease = [0.16, 1, 0.3, 1] as const;

function Sparkle({ className, delay = 0 }: { className: string; delay?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`twinkle absolute h-5 w-5 ${className}`}
      style={{ color: "var(--gold-bright)", animationDelay: `${delay}s` }}
      aria-hidden="true"
    >
      <path d="M12 1l2.2 8.8L23 12l-8.8 2.2L12 23l-2.2-8.8L1 12l8.8-2.2z" fill="currentColor" />
    </svg>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const ghostY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const archY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-ink pt-28 sm:pt-32"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 55% at 78% 45%, rgba(197,138,150,0.32), transparent 70%), radial-gradient(40% 40% at 8% 100%, rgba(184,147,90,0.16), transparent 70%)",
        }}
      />

      <motion.div
        style={{ y: ghostY, WebkitTextStroke: "1px rgba(220,185,126,0.22)" }}
        className="font-display pointer-events-none absolute -bottom-[6vw] left-[-2vw] select-none whitespace-nowrap text-[38vw] italic leading-none text-transparent"
        aria-hidden="true"
      >
        Pitaya
      </motion.div>

      <div className="relative mx-auto grid w-full max-w-[1500px] flex-1 content-center grid-cols-1 gap-14 px-5 pb-20 sm:px-10 lg:grid-cols-12 lg:items-center lg:gap-6 lg:pb-12">
        <motion.div style={{ y: textY }} className="relative z-10 lg:col-span-7">
          <motion.p
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: D, duration: 0.8 }}
            className="mb-7 flex items-center gap-4 text-[11px] uppercase tracking-[0.4em] text-gold-bright"
          >
            <span className="h-px w-10 bg-gold" />
            Vila de Abrantes · Bahia
          </motion.p>

          <h1 className="font-display text-[17vw] leading-[0.92] tracking-tight text-cream-high sm:text-[11vw] lg:text-[8.4vw]">
            {["O brilho que", "fica com você."].map((line, i) => (
              <span key={line} className="block overflow-hidden pb-[0.1em]">
                <motion.span
                  className={`block ${i === 1 ? "text-rosegold italic" : ""}`}
                  initial={{ y: "115%", rotate: 3 }}
                  animate={{ y: "0%", rotate: 0 }}
                  transition={{ duration: 1.2, delay: D + 0.1 + i * 0.14, ease }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: D + 0.7, duration: 0.9 }}
            className="mt-9 max-w-md text-[15px] leading-relaxed text-cream-dim/90 sm:text-base"
          >
            Maquiagem, joias e acessórios escolhidos a dedo, com atendimento
            de quem conhece cada peça. A primeira loja especializada de Vila
            de Abrantes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: D + 0.9, duration: 0.8 }}
            className="mt-10 flex flex-wrap items-center gap-7"
          >
            <Magnetic>
              <a
                href={whatsappLink("Olá! Vim pelo site da Pitaya Beauty e gostaria de saber mais.")}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-rosegold group inline-flex items-center gap-3 rounded-full px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.2em] text-ink shadow-[0_18px_50px_-18px_rgba(217,159,142,0.8)]"
              >
                Falar no WhatsApp
                <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
              </a>
            </Magnetic>
            <a
              href="#colecao"
              className="text-[13px] uppercase tracking-[0.22em] text-cream-high underline decoration-gold underline-offset-[8px]"
            >
              Ver coleção
            </a>
          </motion.div>
        </motion.div>

        <motion.div style={{ y: archY }} className="relative z-10 mx-auto w-[78%] max-w-[26rem] lg:col-span-5 lg:ml-auto lg:mr-0 lg:w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: D + 0.2, duration: 1.4, ease }}
            className="relative"
          >
            <div
              className="absolute inset-0 translate-x-4 translate-y-4 rounded-t-[999px] border sm:translate-x-6 sm:translate-y-6"
              style={{ borderColor: "rgba(220,185,126,0.55)" }}
            />
            <motion.div
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              animate={{ clipPath: "inset(0% 0 0 0)" }}
              transition={{ delay: D + 0.1, duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
              className="relative aspect-[3/4] overflow-hidden rounded-t-[999px]"
            >
              <motion.div style={{ scale: imgScale }} className="absolute inset-0">
                <Image
                  src="/images/jewel-heart-pave-gold.jpg"
                  alt="Brincos de coração cravejados banhados a ouro da Pitaya Beauty"
                  fill
                  priority
                  sizes="(min-width: 1024px) 34vw, 78vw"
                  className="object-cover"
                />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: D + 1.3, duration: 0.9, ease }}
              className="absolute -left-8 bottom-14 hidden h-32 w-32 items-center justify-center sm:flex lg:-left-14 lg:h-36 lg:w-36"
            >
              <svg viewBox="0 0 120 120" className="spin-slow absolute inset-0" aria-hidden="true">
                <defs>
                  <path id="circ" d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" />
                </defs>
                <text fontSize="10.5" letterSpacing="3.6" fill="#dcb97e" fontFamily="var(--font-manrope)">
                  <textPath href="#circ">PITAYA BEAUTY ✦ MAQUIAGEM ✦ JOIAS ✦</textPath>
                </text>
              </svg>
              <div className="bg-rosegold flex h-14 w-14 items-center justify-center rounded-full">
                <span className="font-display text-xl italic text-ink">PB</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: [0, -10, 0] }}
              transition={{
                opacity: { delay: D + 1.4, duration: 0.8 },
                y: { delay: D + 1.4, duration: 5, repeat: Infinity, ease: "easeInOut" },
              }}
              className="absolute -right-3 top-[18%] h-24 w-24 overflow-hidden rounded-full border-2 sm:-right-10 sm:h-32 sm:w-32"
              style={{ borderColor: "var(--gold-bright)" }}
            >
              <Image
                src="/images/jewel-round-gold.jpg"
                alt=""
                fill
                sizes="140px"
                className="object-cover"
              />
            </motion.div>

            <Sparkle className="-top-4 left-[12%]" />
            <Sparkle className="right-[-6%] top-[62%]" delay={1.1} />
            <Sparkle className="bottom-[-3%] left-[44%] h-4 w-4" delay={2} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
