"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MAPS_URL, STORE_ADDRESS_LINES, whatsappLink } from "@/lib/whatsapp";
import { ArrowIcon, PinIcon } from "./icons";

export default function VisitStore() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const clip = useTransform(
    scrollYProgress,
    [0, 0.55],
    [
      "inset(14% 26% 14% 26% round 600px 600px 0px 0px)",
      "inset(0% 0% 0% 0% round 0px 0px 0px 0px)",
    ]
  );
  const scale = useTransform(scrollYProgress, [0, 0.6], [1.25, 1]);
  const textOpacity = useTransform(scrollYProgress, [0.5, 0.78], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.5, 0.78], [40, 0]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  return (
    <section id="loja" ref={ref} className="relative h-[240vh] bg-ink">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div style={{ clipPath: clip }} className="absolute inset-0">
          <motion.div style={{ scale }} className="absolute inset-0">
            <Image
              src="/images/store-interior-2.jpg"
              alt="Interior da loja Pitaya Beauty no Shopping Busca Vida, com letreiro dourado e neon rosa"
              fill
              sizes="100vw"
              className="object-cover object-[50%_35%]"
            />
          </motion.div>
          <motion.div
            style={{ opacity: textOpacity }}
            className="absolute inset-0"
          >
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(0deg, rgba(14,10,11,0.92) 8%, rgba(14,10,11,0.35) 55%, rgba(14,10,11,0.15))" }}
            />
          </motion.div>
        </motion.div>

        <motion.div
          style={{ opacity: titleOpacity }}
          className="pointer-events-none absolute inset-x-0 top-24 text-center sm:top-28"
        >
          <p className="text-[11px] uppercase tracking-[0.4em] text-gold-bright">A loja</p>
          <p className="font-display mt-2 text-3xl italic text-cream-high sm:text-4xl">Shopping Busca Vida</p>
        </motion.div>

        <motion.div
          style={{ opacity: textOpacity, y: textY }}
          className="absolute inset-x-0 bottom-0 mx-auto flex max-w-[1300px] flex-col gap-8 px-5 pb-14 sm:px-10 lg:flex-row lg:items-end lg:justify-between lg:pb-20"
        >
          <h2 className="font-display text-[14vw] leading-[0.92] text-cream-high sm:text-[8vw] lg:text-[6.4vw]">
            Venha viver
            <br />
            <span className="text-rosegold italic">a Pitaya.</span>
          </h2>

          <div className="max-w-sm">
            <div className="flex items-start gap-3">
              <PinIcon className="mt-1 h-5 w-5 shrink-0 text-gold-bright" />
              <div className="text-[15px] leading-relaxed text-cream-dim">
                {STORE_ADDRESS_LINES.map((l) => (
                  <p key={l}>{l}</p>
                ))}
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-5">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-rosegold group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-[12px] font-semibold uppercase tracking-[0.2em] text-ink"
              >
                Como chegar
                <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={whatsappLink("Olá! Gostaria de confirmar o horário de funcionamento da loja Pitaya Beauty.")}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12px] uppercase tracking-[0.2em] text-cream-high underline decoration-gold underline-offset-[7px]"
              >
                Perguntar horário
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
