'use client'

import Image from 'next/image'

const WA_LINK = 'https://wa.me/5500000000000'

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden"
      aria-label="Hero"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%2061-qZh27S2ra9bh0TlIUFhtMVrmRMAdYM.webp"
          alt=""
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-brand-dark/75" />
        {/* Radial glow center-left */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_20%_60%,rgba(51,188,101,0.08),transparent)]" />
      </div>

      {/* Navbar */}
      <header className="relative z-20 flex items-center justify-between px-6 md:px-12 lg:px-16 py-7 glass-dark border-b border-white/5">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20horizontal-OhK3Mwu5VKn4ipTC78uGteIwrhAz3F.webp"
          alt="Logo"
          width={148}
          height={36}
          className="object-contain w-auto"
          priority
        />
        <nav className="hidden md:flex items-center gap-8">
          <a href="#servicos" className="text-white/50 text-sm font-medium hover:text-white transition-colors">Serviços</a>
          <a href="#processo" className="text-white/50 text-sm font-medium hover:text-white transition-colors">Processo</a>
          <a href="#faq" className="text-white/50 text-sm font-medium hover:text-white transition-colors">FAQ</a>
        </nav>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 border border-brand-green/35 text-brand-green text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-brand-green/10 hover:border-brand-green/60 transition-all duration-300"
        >
          <WhatsAppIcon size={14} />
          Falar no WhatsApp
        </a>
      </header>

      {/* Main hero content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left — copy */}
            <div className="animate-fade-up">
              {/* Badge */}
              <div className="inline-flex items-center gap-2.5 border border-brand-green/25 bg-brand-green/8 text-brand-green text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
                Especializado em advogados
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] xl:text-6xl font-bold text-white leading-[1.1] tracking-tight text-balance mb-6">
                Sites e landing pages para advogados que precisam gerar{' '}
                <span className="text-gradient-green">contatos com consistência</span>
              </h1>

              <p className="text-white/55 text-lg md:text-xl leading-relaxed max-w-xl mb-10">
                Estruturas pensadas para transmitir confiança e transformar visitantes em clientes.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-brand-green text-brand-dark font-bold text-base px-8 py-4 rounded-full hover:bg-brand-mint transition-all duration-300 glow-green-sm animate-pulse-glow"
                >
                  <WhatsAppIcon size={18} />
                  Falar no WhatsApp
                </a>
                <a
                  href="#portfolio"
                  className="inline-flex items-center justify-center gap-2 border border-white/15 text-white/80 text-base font-medium px-8 py-4 rounded-full hover:border-white/30 hover:text-white transition-all duration-300"
                >
                  Ver exemplos
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>

              {/* Social proof micro */}
              <div className="flex items-center gap-4 mt-10 pt-10 border-t border-white/8">
                <div className="flex -space-x-2.5">
                  {['A', 'B', 'C', 'D'].map((l, i) => (
                    <div
                      key={i}
                      className="w-9 h-9 rounded-full bg-gradient-to-br from-brand-green/30 to-brand-cyan/20 border-2 border-brand-dark flex items-center justify-center text-xs font-bold text-brand-green"
                    >
                      {l}
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">+200 projetos entregues</p>
                  <p className="text-white/40 text-xs">para advogados de todo o Brasil</p>
                </div>
              </div>
            </div>

            {/* Right — visual */}
            <div className="hidden lg:flex items-center justify-center relative animate-float">
              {/* Glow behind image */}
              <div className="absolute w-80 h-80 rounded-full bg-brand-green/10 blur-3xl" />
              <div className="absolute w-48 h-48 rounded-full bg-brand-cyan/8 blur-2xl translate-x-16 translate-y-8" />

              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favicon-OHyFCcO2rsI0JHV9iGLu1JI9cPVbUx.webp"
                alt="Elemento visual 3D verde"
                width={420}
                height={480}
                className="object-contain relative z-10 drop-shadow-2xl w-auto"
              />
            </div>

          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="relative z-10 flex flex-col items-center pb-8 gap-2 text-white/25 text-xs">
        <span className="tracking-widest uppercase text-[10px]">scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/25 to-transparent" />
      </div>
    </section>
  )
}

function WhatsAppIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
