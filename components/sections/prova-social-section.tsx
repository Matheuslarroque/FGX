const depoimentos = [
  {
    nome: 'Dr. Rodrigo Almeida',
    area: 'Direito Previdenciário',
    texto: 'Antes eu dependia só de indicações. Com a landing page, comecei a receber contatos pelo WhatsApp diretamente do site. A estrutura ficou muito clara e profissional.',
    inicial: 'R',
  },
  {
    nome: 'Dra. Camila Ferreira',
    area: 'Direito Trabalhista',
    texto: 'O projeto foi entregue dentro do prazo e exatamente como o combinado. O mais importante é que a página transmite confiança — os clientes chegam já mais preparados para fechar.',
    inicial: 'C',
  },
  {
    nome: 'Dr. Lucas Monteiro',
    area: 'Direito Civil',
    texto: 'Procurava alguém que entendesse o mercado jurídico. A comunicação foi objetiva, sem enrolação, e o resultado final ficou muito acima do que eu esperava.',
    inicial: 'L',
  },
]

function StarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="#33BC65" aria-hidden="true">
      <path d="M7 1l1.545 3.09L12 4.5l-2.5 2.41.59 3.41L7 8.77l-3.09 1.55.59-3.41L2 4.5l3.455-.41L7 1z" />
    </svg>
  )
}

export function ProvaSocialSection() {
  return (
    <section className="relative py-24 md:py-36 overflow-hidden" aria-label="Depoimentos">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(51,188,101,0.05),transparent)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-brand-green text-xs font-bold tracking-widest uppercase mb-5">
            Depoimentos
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight text-balance mb-5">
            O que dizem quem já trabalhou comigo
          </h2>
          <p className="text-white/40 max-w-lg mx-auto text-sm leading-relaxed">
            Advogados de diferentes áreas que hoje têm uma presença digital que gera contatos com consistência.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-3 gap-5">
          {depoimentos.map((d, i) => (
            <div
              key={i}
              className="relative flex flex-col border border-white/8 rounded-2xl p-7 glass hover:border-brand-green/25 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <StarIcon key={j} />
                ))}
              </div>

              {/* Quote */}
              <p className="text-white/60 text-sm leading-relaxed flex-1 mb-7">
                &ldquo;{d.texto}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-white/8">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-green/30 to-brand-cyan/20 border border-brand-green/20 flex items-center justify-center text-brand-green font-bold text-sm flex-shrink-0">
                  {d.inicial}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{d.nome}</p>
                  <p className="text-white/35 text-xs">{d.area}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom stat */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-16 pt-16 border-t border-white/6">
          {[
            { valor: '200+', label: 'projetos entregues' },
            { valor: '5 dias', label: 'prazo para landing page' },
            { valor: '100%', label: 'foco em advogados' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-3xl font-black text-gradient-green mb-1">{stat.valor}</p>
              <p className="text-white/40 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
