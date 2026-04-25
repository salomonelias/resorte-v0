import type React from "react"
import type { Metadata } from "next"
import { Barlow } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/components/language-provider"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { PageContentMotion } from "@/components/page-content-motion"

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "Resorte Agencia - Potenciá tu negocio",
  description:
    "Agencia creativa especializada en branding, diseño web, e-commerce y WhatsApp Business. Córdoba, Argentina.",
  keywords: "branding, diseño web, e-commerce, whatsapp business, córdoba, argentina, agencia creativa",
  authors: [{ name: "Resorte Agencia" }],
  openGraph: {
    title: "Resorte Agencia - Potenciá tu negocio",
    description: "Agencia creativa especializada en branding, diseño web, e-commerce y WhatsApp Business.",
    type: "website",
    locale: "es_AR",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={barlow.className}>
        <LanguageProvider defaultLanguage="es" storageKey="resorte-language">
          <div className="min-h-screen bg-black text-white flex flex-col">
            <Navigation />
            <main className="flex-1">
              <PageContentMotion>{children}</PageContentMotion>
            </main>
            <SiteFooter />
          </div>
        </LanguageProvider>
      </body>
    </html>
  )
}
