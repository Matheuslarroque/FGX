const etapas = [
  {
    numero: '01',
    titulo: 'Entendimento',
    descricao: 'Conversamos para entender seu objetivo, sua área de atuação e o que você precisa: gerar contatos para um serviço específico ou fortalecer a presença do escritório.',
  },
  {
    numero: '02',
    titulo: 'Estrutura',
    descricao: 'Definimos juntos qual tipo de página faz mais sentido e como ela deve ser organizada para comunicar de forma clara e direta.',
  },
  {
    numero: '03',
    titulo: 'Desenvolvimento',
    descricao: 'A página é desenvolvida com foco na clareza, na comunicação profissional e na facilidade de contato — sem excesso, sem genérico.',
  },
  {
    numero: '04',
    titulo: 'Ajustes',
    descricao: 'Revisamos tudo juntos antes da entrega. Você sugere ajustes, eu refino até o projeto estar completamente alinhado ao que você precisa.',
  },
]

export function ComoFuncionaSection() {
  return (
    <section
      id="processo"
      className="relative py-24 md:py-36 overflow-hidden"
      aria-label="Como funciona"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_100%_50%,rgba(18,220,239,0.04),transparent)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-brand-green text-xs font-bold tracking-widest uppercase mb-5">
            Processo
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight text-balance">
            Do briefing à entrega final
          </h2>
        </div>

        {/* Steps — horizontal on desktop, vertical on mobile */}
        <div className="relative">

          {/* Horizontal connector line (desktop) */}
          <div className="hidden md:block absolute top-8 left-[calc(12.5%+16px)] right-[calc(12.5%+16px)] h-px bg-gradient-to-r from-transparent via-brand-green/30 to-transparent" />

          <div className="grid md:grid-cols-4 gap-8 md:gap-6">
            {etapas.map((etapa, i) => (
              <div key={i} className="flex flex-col items-start md:items-center text-left md:text-center">

                {/* Number circle */}
                <div className="relative mb-6 flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-brand-dark border-2 border-brand-green/40 flex items-center justify-center z-10 relative group-hover:border-brand-green transition-colors duration-300">
                    <span className="text-brand-green font-black text-sm font-mono">{etapa.numero}</span>
                  </div>
                  {/* Glow */}
                  <div className="absolute inset-0 rounded-full bg-brand-green/8 blur-md scale-110" />
                </div>

                <h3 className="text-white font-bold text-lg mb-3">{etapa.titulo}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{etapa.descricao}</p>

                {/* Mobile connector */}
                {i < etapas.length - 1 && (
                  <div className="md:hidden w-px h-8 bg-gradient-to-b from-brand-green/30 to-transparent mt-6 self-start ml-8" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Prazo info */}
        <div className="mt-16 md:mt-20 grid md:grid-cols-2 gap-5 max-w-2xl mx-auto">
          {[
            { tipo: 'Landing Page', prazo: 'até 5 dias úteis', color: 'brand-green' },
            { tipo: 'Site Institucional', prazo: 'até 10 dias úteis', color: 'brand-cyan' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 border border-white/8 rounded-xl px-6 py-4 glass">
              <div className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-brand-green' : 'bg-brand-cyan'} flex-shrink-0`} />
              <div>
                <p className="text-white/40 text-xs uppercase tracking-wider">{item.tipo}</p>
                <p className="text-white font-semibold text-sm">{item.prazo}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
