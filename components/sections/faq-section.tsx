'use client'

import { useState } from 'react'

const WA_LINK = 'https://wa.me/5500000000000'

const faqs = [
  {
    numero: '01/',
    pergunta: 'Posso solicitar alterações no projeto?',
    resposta:
      'Sim. Durante o desenvolvimento, você pode solicitar ajustes para garantir que o projeto fique alinhado com o que você precisa. Trabalhamos com um fluxo organizado de revisões — o que cobre com tranquilidade a maioria dos ajustes. O objetivo é entregar algo realmente alinhado ao seu escritório.',
  },
  {
    numero: '02/',
    pergunta: 'Vocês oferecem suporte ou manutenção?',
    resposta:
      'Sim. Após a entrega, você conta com 30 dias de suporte gratuito, garantindo que tudo funcione corretamente. Possíveis ajustes iniciais são resolvidos sem custo adicional dentro desse período.',
  },
  {
    numero: '03/',
    pergunta: 'Em quanto tempo o site fica pronto?',
    resposta:
      'O prazo varia conforme o tipo de projeto: Landing Page em até 5 dias úteis e Site Institucional em até 10 dias úteis. Esse prazo começa após o envio de todas as informações e alinhamento inicial.',
  },
  {
    numero: '04/',
    pergunta: 'Qual ferramenta é utilizada para construir o site?',
    resposta:
      'Utilizamos plataformas consolidadas como WordPress com construtores visuais ou outras ferramentas adequadas ao projeto. A escolha sempre considera facilidade de uso, estabilidade e possibilidade de edição futura — assim você mantém autonomia.',
  },
  {
    numero: '05/',
    pergunta: 'Domínio e hospedagem estão inclusos?',
    resposta:
      'Não. O domínio e a hospedagem são contratados diretamente por você — o que é o mais recomendado para manter tudo no seu nome. Mas você não fica sozinho: indicamos os melhores provedores e orientamos todo o processo.',
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  function toggle(i: number) {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section
      id="faq"
      className="relative py-24 md:py-36 overflow-hidden"
      aria-label="Perguntas frequentes"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_25%_50%,rgba(51,188,101,0.04),transparent)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">

        <div className="grid lg:grid-cols-[1fr_360px] gap-12 lg:gap-16 items-start">

          {/* Left — FAQ */}
          <div>
            <p className="text-brand-green text-xs font-bold tracking-widest uppercase mb-5">
              Dúvidas
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight text-balance mb-10">
              Perguntas Frequentes
            </h2>

            <div className="flex flex-col gap-2.5">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className={`border rounded-xl overflow-hidden transition-all duration-300 ${
                    openIndex === i
                      ? 'border-brand-green/35 bg-brand-green/5'
                      : 'border-white/8 glass hover:border-white/15'
                  }`}
                >
                  <button
                    onClick={() => toggle(i)}
                    className="w-full flex items-center gap-4 px-6 py-5 text-left group"
                    aria-expanded={openIndex === i}
                  >
                    <span className="text-white/25 text-xs font-mono font-bold flex-shrink-0 w-8">
                      {faq.numero}
                    </span>
                    <span className="text-white font-medium flex-1 leading-snug text-sm md:text-base">
                      {faq.pergunta}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                        openIndex === i
                          ? 'border-brand-green bg-brand-green/15 rotate-45'
                          : 'border-white/20 group-hover:border-white/40'
                      }`}
                    >
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                        <path
                          d="M5 1v8M1 5h8"
                          stroke={openIndex === i ? '#33BC65' : 'rgba(255,255,255,0.6)'}
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </button>

                  {openIndex === i && (
                    <div className="px-6 pb-6 ml-12">
                      <p className="text-white/55 text-sm leading-relaxed">{faq.resposta}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-brand-green text-brand-dark font-bold text-sm px-7 py-3.5 rounded-full hover:bg-brand-mint transition-colors glow-green-sm"
              >
                <WhatsAppIcon />
                Falar no WhatsApp
              </a>
            </div>
          </div>

          {/* Right — Contact card */}
          <div className="lg:sticky lg:top-28 border border-white/10 rounded-2xl p-8 glass overflow-hidden relative">
            {/* Glow */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-green/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative">
              {/* Avatar placeholder */}
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-brand-green/40 to-brand-cyan/20 border border-brand-green/25 flex items-center justify-center mb-6">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="#33BC65" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="12" cy="7" r="4" stroke="#33BC65" strokeWidth="1.5" />
                </svg>
              </div>

              <h3 className="text-white text-xl font-bold leading-snug mb-3">
                Ainda ficou com alguma dúvida?
              </h3>
              <p className="text-white/45 text-sm leading-relaxed mb-8">
                Posso te explicar melhor o que faz mais sentido para o seu caso e qual tipo de página é ideal para o seu escritório.
              </p>

              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 bg-brand-green text-brand-dark font-bold text-sm w-full py-4 rounded-xl hover:bg-brand-mint transition-colors"
              >
                <WhatsAppIcon />
                Falar com o suporte
              </a>

              <p className="text-white/25 text-xs text-center mt-4">
                Resposta em até 24h em dias úteis
              </p>
            </div>
          </div>

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
