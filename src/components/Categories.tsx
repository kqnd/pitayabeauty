"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { whatsappLink } from "@/lib/whatsapp";
import { ArrowIcon } from "./icons";

const CATEGORIES = [
  {
    n: "01",
    title: "Maquiagem",
    copy: "Bases, fixadores, corretivos e o batom certo. Das marcas que a gente testa antes de indicar.",
    image: "/images/makeup-flatlay.jpg",
    alt: "Produtos de maquiagem selecionados na loja Pitaya Beauty",
    message: "Olá! Quero saber mais sobre a linha de maquiagem da Pitaya Beauty.",
    offset: "",
  },
  {
    n: "02",
    title: "Joias & Acessórios",
    copy: "Brincos, colares e peças banhadas para o dia a dia ou para aquela ocasião que pede brilho.",
    image: "/images/jewel-square-gold.jpg",
    alt: "Brincos quadrados cravejados banhados a ouro da Pitaya Beauty",
    message: "Olá! Quero saber mais sobre joias e acessórios da Pitaya Beauty.",
    offset: "md:mt-28",
  },
];

export default function Categories() {
  return (
    <section className="bg-cream-dim px-5 py-28 sm:px-10 sm:py-40">
      <div className="mx-auto max-w-[1300px]">
        <Reveal>
          <p className="flex items-center gap-4 text-[11px] uppercase tracking-[0.4em] text-rose-deep">
            <span className="h-px w-10 bg-gold" />O que você encontra
          </p>
          <h2 className="font-display mt-6 max-w-2xl text-[11vw] leading-[0.98] text-ink sm:text-[6vw] lg:text-[4.6vw]">
            Duas vitrines, <span className="text-rosegold italic">um só cuidado</span> com você.
          </h2>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-14">
          {CATEGORIES.map((c) => (
            <div key={c.title} className={c.offset}>
              <a
                href={whatsappLink(c.message)}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <motion.div
                  initial={{ clipPath: "inset(100% 0 0 0)" }}
                  whileInView={{ clipPath: "inset(0% 0 0 0)" }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1] }}
                  className="relative aspect-[4/5] overflow-hidden rounded-t-[999px]"
                >
                  <Image
                    src={c.image}
                    alt={c.alt}
                    fill
                    sizes="(min-width: 768px) 44vw, 92vw"
                    className="object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.09]"
                  />
                  <div
                    className="absolute inset-0 opacity-70 transition-opacity duration-700 group-hover:opacity-40"
                    style={{ background: "linear-gradient(0deg, rgba(14,10,11,0.7), transparent 55%)" }}
                  />
                </motion.div>

                <Reveal className="mt-8 flex items-start gap-6">
                  <span className="font-display text-4xl italic text-rosegold">{c.n}</span>
                  <div>
                    <h3 className="font-display text-4xl text-ink sm:text-5xl">{c.title}</h3>
                    <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-ink-soft">{c.copy}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.22em] text-rose-deep">
                      Consultar no WhatsApp
                      <ArrowIcon className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-2" />
                    </span>
                  </div>
                </Reveal>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
