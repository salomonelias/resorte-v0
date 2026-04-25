"use client"

import * as React from "react"

type Language = "es" | "en"

type LanguageProviderProps = {
  children: React.ReactNode
  defaultLanguage?: Language
  storageKey?: string
}

type LanguageProviderState = {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

const LanguageProviderContext = React.createContext<LanguageProviderState | undefined>(undefined)

const translations = {
  es: {
    // Navigation
    "nav.home": "Inicio",
    "nav.services": "Servicios",
    "nav.portfolio": "Portfolio",
    "nav.about": "Nosotros",
    "nav.process": "¿Cómo lo hacemos?",
    "nav.contact": "Contacto",
    "nav.metodo": "El Método",
    "nav.whatsapp": "WhatsApp",

    // Home page
    "home.hero.title": "Potenciá tu",
    "home.hero.title.accent": "negocio",
    "home.hero.subtitle":
      "Somos una agencia creativa especializada en branding, diseño web, e-commerce y WhatsApp Business. Transformamos ideas en experiencias digitales que conectan con tu audiencia.",
    "home.hero.cta.primary": "Hablemos por WhatsApp",
    "home.hero.cta.secondary": "Ver nuestro trabajo",

    "home.services.title": "Nuestros",
    "home.services.title.accent": "Servicios",
    "home.services.subtitle": "Ofrecemos soluciones integrales para hacer crecer tu presencia digital",
    "home.services.cta": "Ver todos los servicios",

    "home.work.title": "Nuestro",
    "home.work.title.accent": "Trabajo",
    "home.work.subtitle": "Algunos proyectos destacados que reflejan la calidad de nuestro trabajo",
    "home.work.cta": "Ver todos los proyectos",

    "home.cta.title": "¿Listo para hacer crecer tu negocio?",
    "home.cta.subtitle": "Contactanos hoy y descubrí cómo podemos ayudarte a alcanzar tus objetivos digitales",
    "home.cta.primary": "Escribinos al +54 9 3516 59-6061",
    "home.cta.secondary": "Enviar mensaje",

    // Process page
    "process.hero.title": "¿Cómo lo",
    "process.hero.title.accent": "hacemos?",
    "process.hero.subtitle":
      "Nuestro proceso de consultoría estratégica liderado por Leandro Salomón, director de Resorte Agencia",

    "process.step1.title": "Reunión Inicial",
    "process.step1.description": "Breve encuentro para entender el negocio del cliente, sus objetivos y desafíos.",

    "process.step2.title": "Diagnóstico Estratégico",
    "process.step2.duration": "Proceso de 1 mes",
    "process.step2.item1": "Análisis de mercado y competencia",
    "process.step2.item2": "Auditoría interna de marca",
    "process.step2.item3": "Análisis de audiencia objetivo",
    "process.step2.techniques": "Incluyendo técnicas como:",
    "process.step2.technique1": "Empathy Mapping",
    "process.step2.technique2": "Customer Journey",
    "process.step2.technique3": "Client Archetypes",
    "process.step2.technique4": "Business Model Canvas",

    "process.step3.title": "Reporte de Diagnóstico",
    "process.step3.description": "Documento detallado que presenta hallazgos clave, estado de la marca e insights.",

    "process.step4.title": "Plan de Estrategia Digital de 12 Meses",
    "process.step4.item1": "Pasos accionables para el próximo año",
    "process.step4.item2": "Canales y formatos recomendados",
    "process.step4.item3": "Cronograma y objetivos",
    "process.step4.item4": "Sugerencias tácticas para comunicación de marca",

    "process.cta.title": "¿Listo para comenzar tu estrategia digital?",
    "process.cta.subtitle": "Contactanos para iniciar el proceso de consultoría estratégica",
    "process.cta.button": "Iniciar consultoría estratégica",

    // Services
    "services.branding.title": "Branding",
    "services.branding.description": "Creamos identidades visuales que conectan con tu audiencia",
    "services.web.title": "Web Design",
    "services.web.description": "Sitios web modernos y funcionales para tu negocio",
    "services.ecommerce.title": "E-commerce",
    "services.ecommerce.description": "Tiendas online que convierten visitantes en clientes",
    "services.whatsapp.title": "WhatsApp Business",
    "services.whatsapp.description": "Optimizá tu comunicación comercial con WhatsApp",

    // Footer
    "footer.description": "Agencia creativa especializada en branding, diseño web, e-commerce y WhatsApp Business.",
    "footer.location": "Córdoba, Argentina",
    "footer.services": "Servicios",
    "footer.contact": "Contacto",
    "footer.copyright": "Todos los derechos reservados.",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.portfolio": "Portfolio",
    "nav.about": "About",
    "nav.process": "How we do it?",
    "nav.contact": "Contact",
    "nav.metodo": "The Method",
    "nav.whatsapp": "WhatsApp",

    // Home page
    "home.hero.title": "Boost your",
    "home.hero.title.accent": "business",
    "home.hero.subtitle":
      "We are a creative agency specialized in branding, web design, e-commerce and WhatsApp Business. We transform ideas into digital experiences that connect with your audience.",
    "home.hero.cta.primary": "Let's talk on WhatsApp",
    "home.hero.cta.secondary": "View our work",

    "home.services.title": "Our",
    "home.services.title.accent": "Services",
    "home.services.subtitle": "We offer comprehensive solutions to grow your digital presence",
    "home.services.cta": "View all services",

    "home.work.title": "Our",
    "home.work.title.accent": "Work",
    "home.work.subtitle": "Some featured projects that reflect the quality of our work",
    "home.work.cta": "View all projects",

    "home.cta.title": "Ready to grow your business?",
    "home.cta.subtitle": "Contact us today and discover how we can help you achieve your digital goals",
    "home.cta.primary": "Text us at +54 9 3516 59-6061",
    "home.cta.secondary": "Send message",

    // Process page
    "process.hero.title": "How we",
    "process.hero.title.accent": "do it?",
    "process.hero.subtitle": "Our strategic consulting process led by Leandro Salomón, director of Resorte Agencia",

    "process.step1.title": "Initial Meeting",
    "process.step1.description": "Brief meeting to understand the client's business, goals, and challenges.",

    "process.step2.title": "Strategic Diagnosis",
    "process.step2.duration": "1-month process",
    "process.step2.item1": "Market and competitor analysis",
    "process.step2.item2": "Internal brand audit",
    "process.step2.item3": "Target audience analysis",
    "process.step2.techniques": "Including techniques such as:",
    "process.step2.technique1": "Empathy Mapping",
    "process.step2.technique2": "Customer Journey",
    "process.step2.technique3": "Client Archetypes",
    "process.step2.technique4": "Business Model Canvas",

    "process.step3.title": "Diagnosis Report",
    "process.step3.description": "Detailed document presenting key findings, brand status, and insights.",

    "process.step4.title": "12-Month Digital Strategy Plan",
    "process.step4.item1": "Actionable steps for the next year",
    "process.step4.item2": "Recommended channels and formats",
    "process.step4.item3": "Timeline and milestones",
    "process.step4.item4": "Tactical suggestions for brand communication",

    "process.cta.title": "Ready to start your digital strategy?",
    "process.cta.subtitle": "Contact us to begin the strategic consulting process",
    "process.cta.button": "Start strategic consulting",

    // Services
    "services.branding.title": "Branding",
    "services.branding.description": "We create visual identities that connect with your audience",
    "services.web.title": "Web Design",
    "services.web.description": "Modern and functional websites for your business",
    "services.ecommerce.title": "E-commerce",
    "services.ecommerce.description": "Online stores that convert visitors into customers",
    "services.whatsapp.title": "WhatsApp Business",
    "services.whatsapp.description": "Optimize your commercial communication with WhatsApp",

    // Footer
    "footer.description": "Creative agency specialized in branding, web design, e-commerce and WhatsApp Business.",
    "footer.location": "Córdoba, Argentina",
    "footer.services": "Services",
    "footer.contact": "Contact",
    "footer.copyright": "All rights reserved.",
  },
}

export function LanguageProvider({
  children,
  defaultLanguage = "es",
  storageKey = "resorte-language",
  ...props
}: LanguageProviderProps) {
  const [language, setLanguageState] = React.useState<Language>(defaultLanguage)

  React.useEffect(() => {
    try {
      const stored = localStorage.getItem(storageKey) as Language | null
      if (stored === "es" || stored === "en") {
        setLanguageState(stored)
        return
      }
    } catch {
      // ignore
    }
    if (typeof document === "undefined") return
    const escapedKey = storageKey.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    const match = document.cookie.match(new RegExp(`(?:^|; )${escapedKey}=([^;]*)`))
    const raw = match?.[1] ? decodeURIComponent(match[1]) : ""
    if (raw === "es" || raw === "en") setLanguageState(raw)
  }, [storageKey])

  const setLanguage = React.useCallback(
    (next: Language) => {
      if (typeof document !== "undefined") {
        document.cookie = `${storageKey}=${encodeURIComponent(next)};path=/;max-age=31536000;SameSite=Lax`
      }
      try {
        localStorage.setItem(storageKey, next)
      } catch {
        // ignore
      }
      setLanguageState(next)
    },
    [storageKey],
  )

  const value = React.useMemo(
    () => ({
      language,
      setLanguage,
      t: (key: string) => {
        const dict = translations[language] as Record<string, string>
        return dict[key] ?? key
      },
    }),
    [language, setLanguage],
  )

  return (
    <LanguageProviderContext.Provider {...props} value={value}>
      {children}
    </LanguageProviderContext.Provider>
  )
}

export const useLanguage = () => {
  const context = React.useContext(LanguageProviderContext)
  if (!context) throw new Error("useLanguage must be used within a LanguageProvider")
  return context
}
