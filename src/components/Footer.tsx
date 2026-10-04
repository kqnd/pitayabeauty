import {
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  MAPS_URL,
  STORE_ADDRESS_LINES,
  WHATSAPP_DISPLAY,
  whatsappLink,
} from "@/lib/whatsapp";

export default function Footer() {
  return (
    <footer className="px-5 py-16 sm:px-8" style={{ backgroundColor: "var(--color-ink)" }}>
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">
          <div>
            <p className="font-display text-2xl" style={{ color: "var(--color-cream-high)" }}>
              Pitaya Beauty
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed" style={{ color: "var(--color-cream-dim)" }}>
              Maquiagem, joias e acessórios em Vila de Abrantes. Beleza como
              forma de autocuidado, todos os dias.
            </p>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-[0.3em]" style={{ color: "var(--color-gold-bright)" }}>
              Visite a loja
            </p>
            <div className="mt-3 text-sm leading-relaxed" style={{ color: "var(--color-cream-dim)" }}>
              {STORE_ADDRESS_LINES.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sm underline decoration-[var(--color-gold)] underline-offset-[5px]"
              style={{ color: "var(--color-cream-high)" }}
            >
              Ver no mapa
            </a>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-[0.3em]" style={{ color: "var(--color-gold-bright)" }}>
              Fale com a gente
            </p>
            <a
              href={whatsappLink("Olá! Vim pelo site da Pitaya Beauty e gostaria de saber mais.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block text-sm"
              style={{ color: "var(--color-cream-dim)" }}
            >
              WhatsApp — {WHATSAPP_DISPLAY}
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1.5 block text-sm"
              style={{ color: "var(--color-cream-dim)" }}
            >
              Instagram — {INSTAGRAM_HANDLE}
            </a>
          </div>
        </div>

        <div className="hairline mt-14" />

        <p className="mt-6 text-xs" style={{ color: "var(--color-cream-dim)", opacity: 0.6 }}>
          © {new Date().getFullYear()} Pitaya Beauty. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
