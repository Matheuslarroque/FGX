const resultados = [
  {
    label: 'MAIS CONTATOS',
    desc: 'Uma estrutura pensada para transformar visitantes em potenciais clientes que entram em contato com o seu escritório.',
  },
  {
    label: 'MAIS PREVISIBILIDADE',
    desc: 'Com uma presença digital que funciona, você tem uma fonte mais consistente de novos contatos ao longo do tempo.',
  },
  {
    label: 'MAIS CLAREZA',
    desc: 'Seu público entende exatamente o que você faz e como pode te contatar — sem esforço, sem dúvida.',
  },
]

export function ResultadoSection() {
  return (
    <section className="relative py-24 md:py-36 overflow-hidden bg-white" aria-label="Resultados esperados">
      {/* Subtle texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(51,188,101,0.03),transparent)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">

        {/* Label */}
        <p className="text-brand-dark/40 text-xs font-bold tracking-widest uppercase mb-10 text-center">
          Com a estrutura correta, você tende a ter
        </p>

        {/* Big statement */}
        <div className="flex flex-col items-center gap-4 md:gap-6 mb-20 md:mb-24">
          {resultados.map((r, i) => (
            <div key={i} className="flex items-center gap-4 md:gap-6 group">
              <span className="text-brand-green text-3xl md:text-5xl lg:text-6xl font-black leading-none">+</span>
              <span className="text-3xl md:text-5xl lg:text-7xl font-black text-brand-dark tracking-tighter leading-none">
                {r.label}
              </span>
            </div>
          ))}
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {resultados.map((r, i) => (
            <div
              key={i}
              className="border border-brand-dark/8 bg-brand-dark/[0.03] rounded-2xl p-7 hover:border-brand-green/40 hover:bg-brand-green/5 transition-all duration-300"
            >
              <div className="w-8 h-8 rounded-lg bg-brand-green/15 flex items-center justify-center mb-5">
                <CheckIcon />
              </div>
              <h3 className="text-brand-dark font-bold mb-2.5 capitalize">
                {r.label.charAt(0) + r.label.slice(1).toLowerCase()}
              </h3>
              <p className="text-brand-dark/50 text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M2 7l3.5 3.5L12 3" stroke="#33BC65" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
