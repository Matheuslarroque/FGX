const problemas = [
  {
    titulo: 'Seu site não gera contatos',
    descricao: 'Visitantes chegam, olham e vão embora sem entrar em contato. A estrutura não encaminha o usuário para a ação.',
  },
  {
    titulo: 'Não transmite confiança',
    descricao: 'Um site desatualizado ou genérico pode gerar dúvida em vez de segurança. O cliente precisa confiar antes de falar com você.',
  },
  {
    titulo: 'Não deixa claro o que você faz',
    descricao: 'Se o visitante precisa descobrir qual é a sua especialidade, ele vai embora. A comunicação precisa ser direta e objetiva.',
  },
]

export function ProblemaSection() {
  return (
    <section className="relative py-24 md:py-36 overflow-hidden" aria-label="Problema">
      {/* Subtle glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_100%,rgba(51,188,101,0.05),transparent)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="max-w-2xl mb-16 md:mb-20">
          <p className="text-brand-green text-xs font-bold tracking-widest uppercase mb-5">
            O problema
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight text-balance mb-5">
            Se o seu escritório está nessa situação
          </h2>
          <p className="text-white/45 text-lg leading-relaxed">
            Provavelmente o problema está na estrutura da sua presença digital — não na sua competência como advogado.
          </p>
        </div>

        {/* Problem cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {problemas.map((p, i) => (
            <div
              key={i}
              className="group relative border border-white/8 rounded-2xl p-7 overflow-hidden hover:border-red-500/25 transition-all duration-500 glass"
            >
              {/* Number */}
              <span className="absolute top-5 right-6 text-white/5 text-7xl font-black font-mono leading-none select-none pointer-events-none">
                0{i + 1}
              </span>

              {/* Icon */}
              <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-6 group-hover:bg-red-500/15 transition-colors duration-300">
                <XIcon />
              </div>

              <h3 className="text-white font-bold text-lg mb-3 leading-snug">
                {p.titulo}
              </h3>
              <p className="text-white/45 text-sm leading-relaxed">
                {p.descricao}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

function XIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M10.5 3.5L3.5 10.5M3.5 3.5l7 7" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}
