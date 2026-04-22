import Image from 'next/image'

const WA_LINK = 'https://wa.me/5500000000000'

export function CTASection() {
  return (
    <section className="relative py-28 md:py-40 overflow-hidden" aria-label="Chamada para ação final">
      {/* BG */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%2061-2-kfAj5WPBT0LOJPn3dl2x1diPj2HeWd.webp"
          alt=""
          fill
          className="object-cover object-center opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-brand-dark/85 to-brand-dark" />
      </div>

      {/* Radial green glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_50%,rgba(51,188,101,0.14),transparent)] z-0" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

        {/* Label */}
        <div className="inline-flex items-center gap-2.5 border border-brand-green/25 bg-brand-green/8 text-brand-green text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-10">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
          Pronto para começar?
        </div>

        {/* Headline */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.08] tracking-tight text-balance mb-6">
          Se seu site não gera contato, o problema não é o tráfego{' '}
          <span className="text-gradient-green">— é a estrutura</span>
        </h2>

        <p className="text-white/50 text-lg leading-relaxed max-w-2xl mx-auto mb-12">
          Fale comigo e descubra o que faz mais sentido para o seu caso. Sem enrolação, sem compromisso — só uma conversa objetiva.
        </p>

        {/* CTA Button */}
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-brand-green text-brand-dark font-bold text-base px-10 py-5 rounded-full hover:bg-brand-mint transition-all duration-300 glow-green"
        >
          <WhatsAppIcon />
          Falar no WhatsApp
        </a>

        {/* Reassurance */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10">
          {[
            'Resposta rápida',
            'Sem compromisso',
            'Atendimento personalizado',
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-white/35 text-sm">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M1.5 6l2.5 2.5L10.5 2" stroke="#33BC65" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {item}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
