import { HeroSection } from '@/components/sections/hero-section'
import { ProblemaSection } from '@/components/sections/problema-section'
import { TiposSection } from '@/components/sections/tipos-section'
import { DiferencialSection } from '@/components/sections/diferencial-section'
import { ResultadoSection } from '@/components/sections/resultado-section'
import { AreasSection } from '@/components/sections/areas-section'
import { PortfolioSection } from '@/components/sections/portfolio-section'
import { ProvaSocialSection } from '@/components/sections/prova-social-section'
import { ComoFuncionaSection } from '@/components/sections/como-funciona-section'
import { CTASection } from '@/components/sections/cta-section'
import { FAQSection } from '@/components/sections/faq-section'
import { Footer } from '@/components/sections/footer'

export default function HomePage() {
  return (
    <main className="bg-brand-dark text-white">
      {/* 1. Hero — proposta de valor + CTAs */}
      <HeroSection />

      {/* 2. Problema — identificação das dores */}
      <ProblemaSection />

      {/* 3. Solução — tipos de página (Landing Page vs Site Institucional) */}
      <TiposSection />

      {/* 4. Diferenciais — por que escolher */}
      <DiferencialSection />

      {/* 5. Resultados — impacto visual (fundo branco) */}
      <ResultadoSection />

      {/* 6. Áreas atendidas (fundo branco, continuidade) */}
      <AreasSection />

      {/* 7. Portfólio — exemplos de projetos */}
      <PortfolioSection />

      {/* 8. Prova social — depoimentos */}
      <ProvaSocialSection />

      {/* 9. Processo — como funciona */}
      <ComoFuncionaSection />

      {/* 10. CTA final */}
      <CTASection />

      {/* 11. FAQ */}
      <FAQSection />

      {/* 12. Footer */}
      <Footer />
    </main>
  )
}
