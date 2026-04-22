const diferenciais = [
  {
    numero: '01',
    icone: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#33BC65" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    titulo: 'Estrutura pensada para conversão',
    descricao: 'Cada elemento da página tem uma função estratégica: reduzir fricção, transmitir confiança e encaminhar o visitante para o contato.',
  },
  {
    numero: '02',
    icone: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="10" stroke="#33BC65" strokeWidth="1.5" />
        <path d="M12 8v4l3 3" stroke="#33BC65" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    titulo: 'Comunicação clara e profissional',
    descricao: 'Sem excesso de texto, sem termos técnicos desnecessários. Só o que precisa estar lá para gerar resultado para o seu escritório.',
  },
  {
    numero: '03',
    icone: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#33BC65" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="9" cy="7" r="4" stroke="#33BC65" strokeWidth="1.5" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="#33BC65" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    titulo: 'Sem soluções genéricas',
    descricao: 'Trabalho exclusivamente com advogados. Isso significa entendimento do contexto jurídico — e o que realmente funciona nesse mercado.',
  },
]

export function DiferencialSection() {
  return (
    <section className="relative py-24 md:py-36 overflow-hidden" aria-label="Diferenciais">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_0%_50%,rgba(51,188,101,0.05),transparent)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-24 items-start">

          {/* Left — sticky heading */}
          <div className="lg:sticky lg:top-28">
            <p className="text-brand-green text-xs font-bold tracking-widest uppercase mb-5">
              Por que escolher
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight text-balance mb-6">
              Sem excesso.{' '}
              <span className="text-gradient-green">Sem soluções genéricas.</span>
            </h2>
            <p className="text-white/45 leading-relaxed mb-8">
              Trabalho exclusivamente com advogados. Isso significa que entendo o que funciona nesse contexto — e o que não funciona.
            </p>

            {/* Stat */}
            <div className="inline-flex items-center gap-4 border border-white/8 rounded-2xl px-6 py-5 glass">
              <div className="text-3xl font-black text-gradient-green">200+</div>
              <div>
                <p className="text-white font-semibold text-sm">projetos desenvolvidos</p>
                <p className="text-white/40 text-xs">para profissionais do Direito</p>
              </div>
            </div>
          </div>

          {/* Right — list */}
          <div className="flex flex-col divide-y divide-white/8">
            {diferenciais.map((item, i) => (
              <div key={i} className="flex gap-6 py-8 first:pt-0 group">
                <div className="flex-shrink-0 mt-0.5">
                  <div className="w-10 h-10 rounded-xl bg-brand-green/10 border border-brand-green/20 flex items-center justify-center group-hover:bg-brand-green/15 transition-colors duration-300">
                    {item.icone}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2.5">
                    <span className="text-brand-green/35 text-xs font-mono font-bold">{item.numero}</span>
                    <h3 className="text-white font-bold text-base">{item.titulo}</h3>
                  </div>
                  <p className="text-white/45 text-sm leading-relaxed">{item.descricao}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
