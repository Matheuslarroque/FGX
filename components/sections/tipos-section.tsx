import Image from 'next/image'

const WA_LINK = 'https://wa.me/5500000000000'

export function TiposSection() {
  return (
    <section
      id="servicos"
      className="relative py-24 md:py-36 overflow-hidden"
      aria-label="Tipos de página"
    >
      {/* BG overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%2061-2-kfAj5WPBT0LOJPn3dl2x1diPj2HeWd.webp"
          alt=""
          fill
          className="object-cover object-center opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-brand-dark/90 to-brand-dark" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-brand-green text-xs font-bold tracking-widest uppercase mb-5">
            Qual você precisa?
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight text-balance mb-5">
            Dois tipos de presença digital para advogados
          </h2>
          <p className="text-white/45 max-w-xl mx-auto leading-relaxed">
            Cada projeto é estruturado com base no seu objetivo: gerar contatos ou fortalecer autoridade.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* Landing Page */}
          <div className="relative border border-brand-green/25 rounded-2xl p-8 md:p-10 overflow-hidden group hover:border-brand-green/50 transition-all duration-500 glass">
            {/* Corner glow */}
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-brand-green/12 rounded-full blur-3xl pointer-events-none group-hover:w-52 group-hover:h-52 transition-all duration-700" />

            <div className="relative">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-brand-green/15 text-brand-green text-xs font-bold tracking-wider uppercase px-3.5 py-1.5 rounded-full mb-7">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                  <path d="M5 1L9 5L5 9" stroke="#33BC65" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M1 5h8" stroke="#33BC65" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                Landing Page
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Captação</h3>
              <p className="text-white/45 text-sm leading-relaxed mb-8">
                Indicada quando você quer captar clientes para um serviço específico. Foco total em conversão — uma oferta, um objetivo.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  'Foco em um serviço específico',
                  'Estrutura direta para conversão',
                  'Ideal para tráfego pago',
                  'Prazos mais curtos de entrega',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand-green/15 flex items-center justify-center flex-shrink-0">
                      <CheckIcon color="#33BC65" />
                    </div>
                    <span className="text-white/70 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-white/8">
                <p className="text-white/35 text-xs uppercase tracking-wider mb-2">Exemplos de uso</p>
                <div className="flex flex-wrap gap-2">
                  {['Aposentadoria', 'Revisão previdenciária', 'Rescisão trabalhista'].map((tag) => (
                    <span key={tag} className="border border-brand-green/20 text-brand-green/70 text-xs px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Site Institucional */}
          <div className="relative border border-brand-cyan/20 rounded-2xl p-8 md:p-10 overflow-hidden group hover:border-brand-cyan/40 transition-all duration-500 glass">
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-brand-cyan/8 rounded-full blur-3xl pointer-events-none group-hover:w-52 group-hover:h-52 transition-all duration-700" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 bg-brand-cyan/12 text-brand-cyan text-xs font-bold tracking-wider uppercase px-3.5 py-1.5 rounded-full mb-7">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                  <rect x="1" y="1" width="8" height="8" rx="1.5" stroke="#12DCEF" strokeWidth="1.3" />
                  <path d="M3 5h4M5 3v4" stroke="#12DCEF" strokeWidth="1.3" strokeLinecap="round" />
                </svg>
                Site Institucional
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Autoridade</h3>
              <p className="text-white/45 text-sm leading-relaxed mb-8">
                Indicado para apresentar seu escritório como um todo. Estrutura completa para reforçar sua presença digital e construir confiança.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  'Apresentação completa do escritório',
                  'Múltiplas áreas de atuação',
                  'Transmite mais autoridade e confiança',
                  'Ideal para autoridade orgânica',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand-cyan/12 flex items-center justify-center flex-shrink-0">
                      <CheckIcon color="#12DCEF" />
                    </div>
                    <span className="text-white/70 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-white/8">
                <p className="text-white/35 text-xs uppercase tracking-wider mb-2">Inclui</p>
                <div className="flex flex-wrap gap-2">
                  {['Áreas de atuação', 'Bio profissional', 'Formulário de contato'].map((tag) => (
                    <span key={tag} className="border border-brand-cyan/20 text-brand-cyan/70 text-xs px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-white/40 text-sm mb-5">Não sabe qual faz mais sentido para o seu caso?</p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 border border-brand-green/35 text-brand-green text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-brand-green/10 hover:border-brand-green/60 transition-all duration-300"
          >
            <WhatsAppIcon />
            Tirar dúvidas no WhatsApp
          </a>
        </div>

      </div>
    </section>
  )
}

function CheckIcon({ color }: { color: string }) {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
      <path d="M1.5 5l2.5 2.5L8.5 2" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
