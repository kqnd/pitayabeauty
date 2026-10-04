"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { whatsappLink } from "@/lib/whatsapp";
import { MenuIcon, CloseIcon } from "./icons";

const LINKS = [
  { href: "#pitaya", label: "A Pitaya" },
  { href: "#colecao", label: "Coleção" },
  { href: "#loja", label: "A Loja" },
];

const MSG = "Olá! Vim pelo site da Pitaya Beauty e gostaria de saber mais.";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-40 transition-[background-color,backdrop-filter] duration-500"
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      transition={{ delay: 2.9, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      style={{
        backgroundColor: scrolled ? "rgba(14,10,11,0.78)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        boxShadow: scrolled ? "0 1px 0 rgba(220,185,126,0.18)" : "none",
      }}
    >
      <div className="mx-auto flex max-w-[1500px] items-center justify-between px-5 py-4 sm:px-10 sm:py-5">
        <a href="#top" className="font-display text-2xl italic text-cream-high sm:text-[1.7rem]">
          Pitaya <span className="text-rosegold not-italic">Beauty</span>
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative text-[12px] uppercase tracking-[0.24em] text-cream-high/80 transition-colors hover:text-cream-high"
            >
              {l.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 bg-rosegold transition-transform duration-500 group-hover:scale-x-100" />
            </a>
          ))}
          <a
            href={whatsappLink(MSG)}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-rosegold rounded-full px-6 py-2.5 text-[12px] font-semibold uppercase tracking-[0.2em] text-ink transition-transform hover:scale-[1.05]"
          >
            WhatsApp
          </a>
        </nav>

        <button
          className="flex h-10 w-10 items-center justify-center md:hidden"
          onClick={() => setOpen(true)}
          aria-label="Abrir menu"
        >
          <MenuIcon className="h-7 w-7 text-cream-high" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex flex-col bg-ink px-6 py-6 md:hidden"
            initial={{ clipPath: "circle(0% at 90% 5%)" }}
            animate={{ clipPath: "circle(150% at 90% 5%)" }}
            exit={{ clipPath: "circle(0% at 90% 5%)" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-2xl italic text-cream-high">Pitaya Beauty</span>
              <button
                className="flex h-10 w-10 items-center justify-center"
                onClick={() => setOpen(false)}
                aria-label="Fechar menu"
              >
                <CloseIcon className="h-7 w-7 text-cream-high" />
              </button>
            </div>
            <nav className="mt-20 flex flex-col gap-6">
              {LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-6xl italic text-rosegold"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.08, duration: 0.6 }}
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>
            <a
              href={whatsappLink(MSG)}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-rosegold mt-auto rounded-full px-6 py-4 text-center text-sm font-semibold uppercase tracking-[0.2em] text-ink"
            >
              Falar no WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
