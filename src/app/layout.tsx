import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Cursor from "@/components/Cursor";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Pitaya Beauty — Maquiagem, Joias & Acessórios em Vila de Abrantes",
  description:
    "A primeira loja especializada em maquiagem e acessórios de Vila de Abrantes. Visite a Pitaya Beauty no Shopping Busca Vida ou fale com a gente no WhatsApp.",
  openGraph: {
    title: "Pitaya Beauty — Maquiagem, Joias & Acessórios",
    description:
      "Peças selecionadas, atendimento próximo. Shopping Busca Vida, Vila de Abrantes.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${cormorant.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <SmoothScroll />
        <Cursor />
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
