const WA_LINK = 'https://wa.me/5500000000000'

const portfolioItems = [
  {
    tipo: 'Landing Page',
    nome: 'Advocacia Previdenciária',
    area: 'Aposentadoria por Tempo de Contribuição',
    tag: 'Previdenciário',
    colorClass: 'border-brand-green/25 bg-brand-green/5',
    badgeClass: 'bg-brand-green/15 text-brand-green',
    dotClass: 'bg-brand-green',
  },
  {
    tipo: 'Site Institucional',
    nome: 'Escritório Trabalhista',
    area: 'Rescisão, FGTS e Horas Extras',
    tag: 'Trabalhista',
    colorClass: 'border-brand-cyan/20 bg-brand-cyan/4',
    badgeClass: 'bg-brand-cyan/12 text-brand-cyan',
    dotClass: 'bg-brand-cyan',
  },
  {
    tipo: 'Landing Page',
    nome: 'Consultoria Empresarial',
    area: 'Contratos e Proteção Patrimonial',
    tag: 'Empresarial',
    colorClass: 'border-brand-mint/15 bg-brand-mint/4',
    badgeClass: 'bg-brand-mint/12 text-brand-mint',
    dotClass: 'bg-brand-mint',
  },
]

export function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="relative py-24 md:py-36 overflow-hidden"
      aria-label="Portfólio"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(18,220,239,0.04),transparent)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-brand-green text-xs font-bold tracking-widest uppercase mb-5">
            Portfólio
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight text-balance mb-5">
            Projetos desenvolvidos para advogados
          </h2>
          <p className="text-white/45 max-w-lg mx-auto text-sm leading-relaxed">
            Cada trabalho com estrutura pensada para o objetivo do cliente — gerar contatos ou fortalecer autoridade.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-12">
          {portfolioItems.map((item, i) => (
            <div
              key={i}
              className={`border rounded-2xl overflow-hidden group hover:scale-[1.01] transition-all duration-300 ${item.colorClass}`}
            >
              {/* Mockup area */}
              <div className="aspect-[16/10] flex items-center justify-center relative overflow-hidden border-b border-white/6">
                {/* Fake browser bar */}
                <div className="absolute top-3 left-4 right-4 flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-white/15" />
                  <div className="w-2 h-2 rounded-full bg-white/10" />
                  <div className="w-2 h-2 rounded-full bg-white/8" />
                  <div className="flex-1 h-4 rounded bg-white/5 ml-2" />
                </div>

                {/* Content placeholder */}
                <div className="flex flex-col items-center gap-3 p-6 text-center mt-4">
                  <div className={`w-8 h-8 rounded-lg ${item.badgeClass} flex items-center justify-center text-xs font-bold`}>
                    {item.tipo[0]}P
                  </div>
                  <div className="space-y-1.5 w-full max-w-[160px]">
                    <div className="h-2.5 bg-white/10 rounded-full w-3/4 mx-auto" />
                    <div className="h-2 bg-white/6 rounded-full w-full" />
                    <div className="h-2 bg-white/6 rounded-full w-5/6 mx-auto" />
                  </div>
                  <div className="h-6 w-24 rounded-full bg-white/8 mt-1" />
                </div>

                <p className="absolute bottom-3 right-4 text-white/20 text-[10px]">
                  Ver via WhatsApp
                </p>
              </div>

              {/* Info */}
              <div className="p-5">
                <div className={`inline-flex items-center gap-1.5 ${item.badgeClass} text-xs font-semibold px-2.5 py-1 rounded-md mb-3`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${item.dotClass}`} />
                  {item.tipo}
                </div>
                <h3 className="text-white font-semibold text-sm mb-1">{item.nome}</h3>
                <p className="text-white/35 text-xs">{item.area}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-white/35 text-sm mb-5">
            Os projetos reais são compartilhados diretamente no WhatsApp
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 border border-brand-green/35 text-brand-green text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-brand-green/10 hover:border-brand-green/60 transition-all duration-300"
          >
            <WhatsAppIcon />
            Ver exemplos no WhatsApp
          </a>
        </div>

      </div>
    </section>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
