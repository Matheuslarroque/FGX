import type { Metadata } from 'next'
import { Archivo } from 'next/font/google'
import './globals.css'

const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'Sites e Landing Pages para Advogados | Estrutura que Gera Contatos',
  description:
    'Criação de sites e landing pages para advogados. Estruturas pensadas para gerar contatos e transmitir confiança no digital.',
  icons: {
    icon: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favicon-OHyFCcO2rsI0JHV9iGLu1JI9cPVbUx.webp',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${archivo.variable} bg-brand-dark`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
