const WORDS = ["Maquiagem", "Joias", "Acessórios", "Autocuidado", "Brilho", "Vila de Abrantes"];

function Row() {
  return (
    <div className="flex shrink-0 items-center">
      {WORDS.map((w) => (
        <div key={w} className="flex items-center">
          <span className="font-display px-8 text-[9vw] italic leading-none text-ink sm:px-12 sm:text-[5vw]">
            {w}
          </span>
          <svg viewBox="0 0 24 24" className="h-5 w-5 text-ink/70 sm:h-7 sm:w-7" aria-hidden="true">
            <path d="M12 1l2.2 8.8L23 12l-8.8 2.2L12 23l-2.2-8.8L1 12l8.8-2.2z" fill="currentColor" />
          </svg>
        </div>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <div className="bg-rosegold relative z-10 overflow-hidden py-5 sm:py-6" aria-hidden="true">
      <div className="marquee-track">
        <Row />
        <Row />
      </div>
    </div>
  );
}
