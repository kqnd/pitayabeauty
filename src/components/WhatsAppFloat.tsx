"use client";

import { motion } from "framer-motion";
import { whatsappLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./icons";

export default function WhatsAppFloat() {
  return (
    <motion.a
      href={whatsappLink("Olá! Vim pelo site da Pitaya Beauty e gostaria de saber mais.")}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-6 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-lg sm:bottom-8 sm:right-8"
      style={{ backgroundColor: "var(--color-ink)" }}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 3.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.07 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Falar no WhatsApp"
    >
      <WhatsAppIcon className="h-6 w-6 text-gold-bright" />
      <span
        className="pointer-events-none absolute right-16 whitespace-nowrap rounded-full px-3 py-1.5 text-xs opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ backgroundColor: "var(--color-ink)", color: "var(--color-cream-high)" }}
      >
        Fale conosco
      </span>
    </motion.a>
  );
}
