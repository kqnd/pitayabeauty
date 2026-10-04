"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { whatsappLink } from "@/lib/whatsapp";
import { ArrowIcon } from "./icons";

const PIECES = [
  { name: "Coração cravejado", finish: "Banhado a ouro", image: "/images/jewel-heart-pave-gold.jpg" },
  { name: "Coração cravejado", finish: "Ródio branco", image: "/images/jewel-heart-pave-silver.jpg" },
  { name: "Mini coração solitário", finish: "Banhado a ouro", image: "/images/jewel-heart-gold.jpg" },
  { name: "Solitário redondo", finish: "Banhado a ouro", image: "/images/jewel-round-gold.jpg" },
  { name: "Solitário quadrado", finish: "Banhado a ouro", image: "/images/jewel-square-gold.jpg" },
  { name: "Mini coração solitário", finish: "Ródio branco", image: "/images/jewel-heart-silver.jpg" },
];

export default function FeaturedPieces() {
  const section = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);
  const { scrollYProgress } = useScroll({ target: section, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);
  const bar = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const measure = () => setDistance(Math.max(0, el.scrollWidth - window.innerWidth));
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <section id="colecao" ref={section} className="relative h-[360vh] bg-ink">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(50% 60% at 20% 20%, rgba(197,138,150,0.18), transparent 70%)" }}
        />

        <div className="relative px-5 pt-20 sm:px-10">
          <p className="flex items-center gap-4 text-[11px] uppercase tracking-[0.4em] text-gold-bright">
            <span className="h-px w-10 bg-gold" />
            Seleção da semana
          </p>
          <h2 className="font-display mt-4 max-w-3xl text-[10vw] leading-[0.98] text-cream-high sm:text-[5vw] lg:text-[3.6vw]">
            Brincos para guardar na bolsa, <span className="text-rosegold italic">ou nunca mais tirar.</span>
          </h2>
        </div>

        <motion.div ref={track} style={{ x }} className="relative mt-8 flex w-max items-center gap-5 px-5 sm:mt-10 sm:gap-8 sm:px-10">
          {PIECES.map((p, i) => (
            <a
              key={p.name + p.finish}
              href={whatsappLink(
                `Olá! Tenho interesse na peça "${p.name} — ${p.finish}" que vi no site da Pitaya Beauty. Ainda está disponível?`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block w-[58vw] shrink-0 sm:w-[30vw] lg:w-[21vw]"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px]">
                <Image
                  src={p.image}
                  alt={`${p.name}, ${p.finish.toLowerCase()}, Pitaya Beauty`}
                  fill
                  sizes="(min-width: 1024px) 21vw, (min-width: 640px) 30vw, 58vw"
                  className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.1]"
                />
                <span className="font-display absolute bottom-4 left-1/2 -translate-x-1/2 text-5xl italic text-cream-high/90 drop-shadow">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="font-display mt-4 text-2xl text-cream-high">{p.name}</p>
              <p className="text-[11px] uppercase tracking-[0.22em] text-gold-bright">{p.finish}</p>
            </a>
          ))}

          <a
            href={whatsappLink("Olá! Vi a seleção de brincos no site e gostaria de saber disponibilidade e valores.")}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-rosegold group flex aspect-[4/5] w-[58vw] shrink-0 flex-col items-center justify-center rounded-t-[999px] p-8 text-center sm:w-[30vw] lg:w-[21vw]"
          >
            <span className="font-display text-4xl italic leading-tight text-ink sm:text-5xl">
              Ver tudo no WhatsApp
            </span>
            <ArrowIcon className="mt-6 h-8 w-8 text-ink transition-transform duration-500 group-hover:translate-x-3" />
          </a>
          <div className="w-[8vw] shrink-0" />
        </motion.div>

        <div className="absolute inset-x-5 bottom-8 h-px bg-cream-high/15 sm:inset-x-10">
          <motion.div style={{ scaleX: bar }} className="bg-rosegold h-full origin-left" />
        </div>
      </div>
    </section>
  );
}
