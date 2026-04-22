const areas = [
  { nome: 'Previdenciário', icone: '⚖' },
  { nome: 'Trabalhista', icone: '📋' },
  { nome: 'Civil', icone: '🏛' },
  { nome: 'Empresarial', icone: '💼' },
  { nome: 'Criminal', icone: '🔏' },
  { nome: 'Família', icone: '🤝' },
  { nome: 'Imobiliário', icone: '🏠' },
  { nome: 'Tributário', icone: '📊' },
]

export function AreasSection() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-white" aria-label="Áreas atendidas">
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <p className="text-brand-dark/40 text-xs font-bold tracking-widest uppercase mb-4">
              Especialidades atendidas
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark leading-tight text-balance">
              Advogados de diferentes{' '}
              <span className="text-brand-green">especialidades</span>
            </h2>
          </div>
          <p className="text-brand-dark/45 text-sm leading-relaxed max-w-sm">
            Cada projeto é adaptado à linguagem e às necessidades específicas da sua área de atuação.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {areas.map((area, i) => (
            <div
              key={i}
              className="group flex items-center gap-3 border border-brand-dark/8 bg-white rounded-xl px-5 py-4 hover:border-brand-green/40 hover:bg-brand-green/4 transition-all duration-300 cursor-default"
            >
              <span className="text-lg select-none" aria-hidden="true">{area.icone}</span>
              <span className="text-brand-dark/70 text-sm font-medium group-hover:text-brand-dark transition-colors">
                {area.nome}
              </span>
            </div>
          ))}
        </div>

        <p className="text-center text-brand-dark/35 text-sm mt-8">
          Não encontrou a sua área?{' '}
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-green font-semibold hover:underline"
          >
            Fale comigo
          </a>
          {' '}— provavelmente atendo.
        </p>

      </div>
    </section>
  )
}
