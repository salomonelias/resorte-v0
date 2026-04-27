export type SiteLang = "es" | "en"

export function portfolioBrandingItems(lang: SiteLang) {
  const d = (es: string, en: string) => (lang === "es" ? es : en)
  return [
    { name: "Grupo DT", description: d("Identidad visual corporativa para empresa constructora", "Corporate visual identity for a construction company"), category: "Branding" },
    { name: "2G Iluminación", description: d("Identidad visual para empresa de iluminación LED", "Visual identity for an LED lighting company"), category: "Branding" },
    { name: "No Standard", description: d("Marca y concepto visual para proyecto innovador", "Brand and visual concept for an innovative project"), category: "Branding" },
    { name: "MoodleXperts", description: d("Branding para consultora especializada en Moodle", "Branding for a Moodle-focused consultancy"), category: "Branding" },
    { name: "SEB Consulting", description: d("Identidad corporativa para consultora empresarial", "Corporate identity for a business consultancy"), category: "Branding" },
    { name: "Refugio Quitapena", description: d("Branding para refugio de montaña", "Branding for a mountain shelter"), category: "Branding" },
  ]
}

export function portfolioWebsiteItems(lang: SiteLang) {
  const d = (es: string, en: string) => (lang === "es" ? es : en)
  return [
    { name: "UTN FRN", description: d("Sitio web institucional para la Universidad Tecnológica Nacional", "Institutional website for the National Technological University"), url: "frn.utn.edu.ar", category: "Website" },
    { name: "Orbely", description: d("Plataforma web para servicios digitales", "Web platform for digital services"), url: "orbely.com", category: "Website" },
    { name: "Grupo DT", description: d("Sitio web corporativo para empresa constructora", "Corporate website for a construction company"), url: "grupodt.com.ar", category: "Website" },
    { name: "Todos Retenes S.A.", description: d("Sitio web para empresa de repuestos automotrices", "Website for an automotive parts company"), url: "todosretenes.com.ar", category: "Website" },
    { name: "Pérez Prece Inmobiliaria", description: d("Portal inmobiliario con gestión de propiedades", "Real estate portal with property management"), url: "perezprece.com.ar", category: "Website" },
    {
      name: "MR Pisos",
      description: d(
        "Sitio web institucional para marca especializada en pisos vinílicos y soluciones de diseño para espacios interiores",
        "Institutional website for a brand specialized in vinyl flooring and interior design solutions",
      ),
      url: "grupodt.com.ar/mr-pisos.html",
      category: "Website",
    },
    {
      name: "MARDES",
      description: d(
        "Sitio web institucional para empresa de desarrollos inmobiliarios en zonas de alto valor estratégico",
        "Institutional website for a real estate development company in high-value strategic areas",
      ),
      url: "grupodt.com.ar/mardes.html",
      category: "Website",
    },
    { name: "Abordo Alimentos", description: d("E-commerce completo para distribuidora de alimentos", "Full e-commerce for a food distributor"), url: "abordoalimentos.com", category: "Website" },
  ]
}

export function portfolioWhatsappItems(lang: SiteLang) {
  const d = (es: string, en: string) => (lang === "es" ? es : en)
  return [
    {
      name: "2G Iluminación",
      description: d("Catálogo digital de productos LED integrado con WhatsApp Business", "Digital LED product catalog integrated with WhatsApp Business"),
      action: d("Ver catálogo", "View catalog"),
      category: "WhatsApp Business",
    },
    {
      name: "Sinkromat",
      description: d("Setup completo de WhatsApp Business con catálogo de productos", "Full WhatsApp Business setup with product catalog"),
      action: d("Ver catálogo", "View catalog"),
      category: "WhatsApp Business",
    },
  ]
}

export function portfolioPageCopy(lang: SiteLang) {
  const d = (es: string, en: string) => (lang === "es" ? es : en)
  return {
    titleAccent: d("Portfolio", "Portfolio"),
    titleLead: d("Nuestro ", "Our "),
    subtitle: d(
      "Conocé algunos de los proyectos que hemos desarrollado para nuestros clientes",
      "Explore some of the projects we have developed for our clients",
    ),
    sectionBranding: "Branding",
    sectionWebsites: "Websites",
    sectionWhatsapp: "WhatsApp Business",
    ctaTitle: d("¿Te gustó lo que viste?", "Did you like what you saw?"),
    ctaSubtitle: d(
      "Estos son solo algunos ejemplos de nuestro trabajo. Hablemos sobre tu proyecto y creemos algo increíble juntos.",
      "These are just a few examples of our work. Let’s talk about your project and build something amazing together.",
    ),
    ctaButton: d("Empezar mi proyecto", "Start my project"),
  }
}

export function aboutPageCopy(lang: SiteLang) {
  const d = (es: string, en: string) => (lang === "es" ? es : en)
  return {
    heroLead: d("Sobre ", "About "),
    heroAccent: d("Nosotros", "Us"),
    heroSubtitle: d(
      "Somos una agencia creativa apasionada por ayudar a las marcas a conectar con su audiencia de manera auténtica y efectiva.",
      "We are a creative agency passionate about helping brands connect with their audience in an authentic and effective way.",
    ),
    historyLead: d("Nuestra ", "Our "),
    historyAccent: d("Historia", "Story"),
    historyP1: d(
      "Resorte Agencia nació en Córdoba, Argentina, con la misión de ayudar a las empresas a potenciar su presencia digital y conectar de manera más efectiva con sus clientes.",
      "Resorte Agencia was born in Córdoba, Argentina, with the mission of helping companies strengthen their digital presence and connect more effectively with their customers.",
    ),
    historyP2: d(
      "Nos especializamos en crear soluciones integrales que van desde el desarrollo de identidad visual hasta la implementación de estrategias digitales completas, siempre con un enfoque humano y personalizado.",
      "We specialize in comprehensive solutions—from visual identity development to full digital strategy implementation—always with a human, tailored approach.",
    ),
    historyP3: d(
      "Creemos que cada marca tiene una historia única que contar, y nuestro trabajo es ayudarla a comunicarla de la manera más efectiva posible.",
      "We believe every brand has a unique story to tell, and our job is to help communicate it in the most effective way possible.",
    ),
    valuesLead: d("Nuestros ", "Our "),
    valuesAccent: d("Valores", "Values"),
    valuesSubtitle: d(
      "Los principios que guían nuestro trabajo y definen nuestra forma de hacer las cosas",
      "The principles that guide our work and define how we do things",
    ),
    teamLead: d("Nuestro ", "Our "),
    teamAccent: d("Equipo", "Team"),
    teamSubtitle: d("Conocé a las personas que hacen posible cada proyecto", "Meet the people who make every project possible"),
    ctaTitle: d("¿Querés conocer más sobre nosotros?", "Want to know more about us?"),
    ctaSubtitle: d(
      "Estamos siempre dispuestos a conversar sobre nuevos proyectos y oportunidades de colaboración.",
      "We are always open to talking about new projects and collaboration opportunities.",
    ),
    ctaWhatsapp: d("Hablemos por WhatsApp", "Let’s talk on WhatsApp"),
    ctaContact: d("Enviar mensaje", "Send message"),
    values: [
      {
        title: d("Enfoque Humano", "Human-centered approach"),
        description: d(
          "Creemos que detrás de cada marca hay personas reales con historias únicas que contar.",
          "We believe that behind every brand there are real people with unique stories to tell.",
        ),
      },
      {
        title: d("Resultados Medibles", "Measurable results"),
        description: d(
          "Nos enfocamos en crear soluciones que generen un impacto real y medible en tu negocio.",
          "We focus on creating solutions that generate real, measurable impact on your business.",
        ),
      },
      {
        title: d("Innovación Constante", "Constant innovation"),
        description: d(
          "Mantenemos nuestros conocimientos actualizados para ofrecer las mejores soluciones del mercado.",
          "We keep our skills up to date to deliver the best solutions in the market.",
        ),
      },
    ],
    team: [
      {
        name: "Leandro Salomón",
        role: d("Director", "Director"),
        description: d(
          "Líder creativo con amplia experiencia en branding y estrategia digital. Especializado en crear identidades visuales que conectan con las audiencias.",
          "Creative leader with extensive experience in branding and digital strategy. Specialized in building visual identities that connect with audiences.",
        ),
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        name: "Paula Rosano",
        role: d("Brand & Communication Advisor", "Brand & Communication Advisor"),
        description: d(
          "Experta en comunicación estratégica y desarrollo de marca. Se encarga de que cada proyecto transmita el mensaje correcto de manera efectiva.",
          "Expert in strategic communication and brand development. She ensures every project communicates the right message effectively.",
        ),
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        name: "Carolina Moine",
        role: d("Leader in Illustration & Branding Design", "Leader in Illustration & Branding Design"),
        description: d(
          "Especialista en ilustración y diseño de marca con un enfoque único en la narrativa visual. Transforma conceptos complejos en elementos gráficos memorables y efectivos.",
          "Specialist in illustration and brand design with a unique focus on visual storytelling. She turns complex concepts into memorable, effective graphic elements.",
        ),
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        name: "Ricardo Matuk",
        role: d("Web Designer", "Web Designer"),
        description: d(
          "Diseñador web con experiencia en crear interfaces intuitivas y funcionales. Se enfoca en desarrollar experiencias digitales que combinan estética moderna con usabilidad excepcional.",
          "Web designer experienced in building intuitive, functional interfaces. He focuses on digital experiences that combine modern aesthetics with exceptional usability.",
        ),
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        name: "Elías Salomón",
        role: d("Web Designer", "Web Designer"),
        description: d(
          "Diseñador web especializado en soluciones digitales innovadoras. Combina creatividad y técnica para desarrollar sitios web que destacan por su diseño limpio y funcionalidad optimizada.",
          "Web designer specialized in innovative digital solutions. He blends creativity and technique to build websites known for clean design and optimized functionality.",
        ),
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        name: "Martín Muñoz Beni",
        role: d("AI Specialist & Digital Media Consultant", "AI Specialist & Digital Media Consultant"),
        description: d(
          "Martín trabaja en la intersección entre la tecnología y la estrategia digital. Con experiencia en análisis de datos, automatización y machine learning, asesora a marcas sobre cómo aprovechar herramientas basadas en IA para optimizar procesos, mejorar campañas y generar experiencias innovadoras.",
          "Martín works at the intersection of technology and digital strategy. With experience in data analysis, automation, and machine learning, he advises brands on leveraging AI-based tools to optimize processes, improve campaigns, and create innovative experiences.",
        ),
        image: "/placeholder.svg?height=300&width=300",
      },
    ],
  }
}

export function servicesPageCopy(lang: SiteLang) {
  const d = (es: string, en: string) => (lang === "es" ? es : en)
  return {
    titleLead: d("Nuestros ", "Our "),
    titleAccent: d("Servicios", "Services"),
    subtitle: d("Soluciones integrales para hacer crecer tu presencia digital", "Comprehensive solutions to grow your digital presence"),
    consultNow: d("Consultar ahora", "Book a consultation"),
    optionsLabel: d("Opciones", "Options"),
    includesLabel: d("Incluye", "Includes"),
    consultPrice: d("Consultar precio", "Request pricing"),
    howTitle: d("¿Cómo trabajamos?", "How do we work?"),
    step1Title: d("Conversamos", "We talk"),
    step1Desc: d("Entendemos tu negocio y objetivos", "We understand your business and goals"),
    step2Title: d("Creamos", "We create"),
    step2Desc: d("Desarrollamos la solución perfecta", "We develop the right solution"),
    step3Title: d("Entregamos", "We deliver"),
    step3Desc: d("Tu proyecto listo para crecer", "Your project ready to grow"),
    ctaTitle: d("¿Listo para empezar?", "Ready to get started?"),
    ctaSubtitle: d("Hablemos sobre tu proyecto y creemos algo increíble juntos", "Let’s talk about your project and build something amazing together"),
    ctaPrimary: d("Empezar mi proyecto", "Start my project"),
    ctaSecondary: d("Ver trabajos anteriores", "See previous work"),
    services: [
      {
        iconKey: "branding" as const,
        title: d("Branding", "Branding"),
        description: d("Identidades visuales que conectan con tu audiencia", "Visual identities that connect with your audience"),
        options: d(["Brand Starter", "Brand Corporativo"], ["Brand Starter", "Brand Corporate"]),
        highlights: d(["Logotipo", "Manual de marca", "Aplicaciones"], ["Logo", "Brand guidelines", "Applications"]),
      },
      {
        iconKey: "web" as const,
        title: d("Web Design", "Web Design"),
        description: d("Sitios web modernos y funcionales", "Modern, functional websites"),
        options: d(["Web Starter", "Web Corporativo", "Online Store"], ["Web Starter", "Corporate Web", "Online Store"]),
        highlights: d(["Diseño responsivo", "SEO optimizado", "Panel admin"], ["Responsive design", "SEO optimized", "Admin panel"]),
      },
      {
        iconKey: "ecommerce" as const,
        title: d("E-commerce", "E-commerce"),
        description: d("Tiendas online que convierten", "Online stores built to convert"),
        options: d(["Tienda Completa"], ["Full store"]),
        highlights: d(["Catálogo ilimitado", "Múltiples pagos", "Analytics"], ["Unlimited catalog", "Multiple payments", "Analytics"]),
      },
      {
        iconKey: "whatsapp" as const,
        title: d("WhatsApp Business", "WhatsApp Business"),
        description: d("Comunicación comercial optimizada", "Optimized business communication"),
        options: d(["Setup Completo"], ["Full setup"]),
        highlights: d(["Perfil comercial", "Catálogo digital", "Automatización"], ["Business profile", "Digital catalog", "Automation"]),
      },
    ],
  }
}

export function contactPageCopy(lang: SiteLang) {
  const d = (es: string, en: string) => (lang === "es" ? es : en)
  return {
    heroTitle: d("Contacto", "Contact"),
    heroSubtitle: d(
      "¿Tenés un proyecto en mente? Hablemos sobre cómo podemos ayudarte a hacerlo realidad.",
      "Have a project in mind? Let’s talk about how we can help you make it happen.",
    ),
    formTitle: d("Enviar Mensaje", "Send message"),
    nameLabel: d("Nombre *", "Name *"),
    namePlaceholder: d("Tu nombre completo", "Your full name"),
    emailLabel: d("Email *", "Email *"),
    emailPlaceholder: d("tu@email.com", "you@email.com"),
    messageLabel: d("Mensaje *", "Message *"),
    messagePlaceholder: d("Contanos sobre tu proyecto...", "Tell us about your project..."),
    successMsg: d("¡Mensaje enviado correctamente! Te contactaremos pronto.", "Message sent successfully! We’ll get back to you soon."),
    errorMsg: d("Hubo un error al enviar el mensaje. Por favor, intentá nuevamente.", "There was an error sending the message. Please try again."),
    sending: d("Enviando...", "Sending..."),
    submit: d("Enviar Mensaje", "Send message"),
    otherTitle: d("Otras formas de contacto", "Other ways to reach us"),
    otherSubtitle: d("Elegí la forma que más te convenga para ponerte en contacto con nosotros.", "Choose the option that works best for you to get in touch."),
    waTitle: d("WhatsApp Business", "WhatsApp Business"),
    waSubtitle: d("La forma más rápida de contactarnos", "The fastest way to reach us"),
    emailTitle: d("Email", "Email"),
    emailSubtitle: d("Para consultas detalladas", "For detailed inquiries"),
    locTitle: d("Ubicación", "Location"),
    locLine1: d("Córdoba, Argentina", "Córdoba, Argentina"),
    locLine2: d("Trabajamos de forma remota", "We work remotely"),
    preferTitle: d("¿Preferís hablar directamente?", "Prefer to talk directly?"),
    preferBody: d(
      "WhatsApp es nuestra forma preferida de comunicación. Es rápido, directo y podemos compartir ideas al instante.",
      "WhatsApp is our preferred channel. It’s fast, direct, and we can share ideas instantly.",
    ),
    openWa: d("Abrir WhatsApp", "Open WhatsApp"),
    faqTitleLead: d("Preguntas ", "Frequently "),
    faqTitleAccent: d("Frecuentes", "Asked Questions"),
    faqSubtitle: d("Respondemos las dudas más comunes sobre nuestros servicios", "We answer the most common questions about our services"),
    faq1q: d("¿Cuánto tiempo toma desarrollar un proyecto?", "How long does it take to develop a project?"),
    faq1a: d(
      "Los tiempos varían según la complejidad del proyecto. Un branding básico puede tomar 2-3 semanas, mientras que un sitio web corporativo puede requerir 4-6 semanas. Te daremos un cronograma detallado al inicio del proyecto.",
      "Timelines vary by complexity. Basic branding may take 2–3 weeks, while a corporate website may require 4–6 weeks. We’ll share a detailed schedule at project kickoff.",
    ),
    faq2q: d("¿Trabajan con empresas de otros países?", "Do you work with companies in other countries?"),
    faq2a: d(
      "Sí, trabajamos de forma remota con clientes de toda Latinoamérica. Utilizamos herramientas digitales que nos permiten colaborar efectivamente sin importar la distancia.",
      "Yes—we work remotely with clients across Latin America. We use digital tools to collaborate effectively regardless of distance.",
    ),
    faq3q: d("¿Ofrecen soporte post-lanzamiento?", "Do you offer post-launch support?"),
    faq3a: d(
      "Absolutamente. Incluimos un período de soporte gratuito después del lanzamiento y ofrecemos planes de mantenimiento para mantener tu sitio web actualizado y funcionando perfectamente.",
      "Absolutely. We include a free support period after launch and offer maintenance plans to keep your site updated and running smoothly.",
    ),
    mailSubjectLead: d("Consulta de", "Inquiry from"),
    mailBodyName: d("Nombre", "Name"),
    mailBodyEmail: d("Email", "Email"),
    mailBodyMessage: d("Mensaje", "Message"),
  }
}

export function metodoStations(lang: SiteLang) {
  const d = (es: string, en: string) => (lang === "es" ? es : en)
  return [
    {
      number: 1,
      title: d("Radiografía de contexto", "Context scan"),
      shortDescription: d("Análisis del mercado y competencia", "Market and competitor analysis"),
      fullDescription: d(
        "Analizamos el mercado, la competencia y las tendencias que rodean a la marca. Esta etapa nos da un mapa claro del entorno en el que se mueve tu empresa.",
        "We analyze the market, competition, and trends around the brand. This stage gives a clear map of the environment your company operates in.",
      ),
      color: "from-blue-500/20 to-blue-600/20",
      borderColor: "border-blue-500/30",
      iconColor: "text-blue-400",
    },
    {
      number: 2,
      title: d("Auditoría interna de marca", "Internal brand audit"),
      shortDescription: d("Identidad, valores y visión empresarial", "Identity, values, and company vision"),
      fullDescription: d(
        "Exploramos la identidad, los valores y la visión de la empresa. Revisamos qué funciona y qué debe mejorarse para proyectar coherencia y profesionalismo.",
        "We explore the company’s identity, values, and vision. We review what works and what should improve to project coherence and professionalism.",
      ),
      color: "from-purple-500/20 to-purple-600/20",
      borderColor: "border-purple-500/30",
      iconColor: "text-purple-400",
    },
    {
      number: 3,
      title: d("Escucha de la audiencia", "Audience listening"),
      shortDescription: d("Percepciones y expectativas del público", "Audience perceptions and expectations"),
      fullDescription: d(
        "Le damos voz a los clientes actuales y potenciales para conocer sus percepciones, experiencias y expectativas. Esta estación nos brinda información clave para alinear la marca con lo que realmente valora su público.",
        "We give current and potential customers a voice to understand perceptions, experiences, and expectations. This station provides key information to align the brand with what the audience truly values.",
      ),
      color: "from-green-500/20 to-green-600/20",
      borderColor: "border-green-500/30",
      iconColor: "text-green-400",
    },
    {
      number: 4,
      title: d("Reporte de diagnóstico", "Diagnosis report"),
      shortDescription: d("Documento integral de hallazgos", "Comprehensive findings document"),
      fullDescription: d(
        "Integramos los hallazgos de las estaciones anteriores en un documento completo. Este reporte sirve como espejo para entender dónde está la marca hoy y qué camino debe tomar para crecer.",
        "We integrate findings from previous stations into one complete document. This report acts as a mirror to understand where the brand is today and the path it should take to grow.",
      ),
      color: "from-orange-500/20 to-orange-600/20",
      borderColor: "border-orange-500/30",
      iconColor: "text-orange-400",
    },
    {
      number: 5,
      title: d("Planificación estratégica (12 meses)", "Strategic planning (12 months)"),
      shortDescription: d("Plan de acción detallado", "Detailed action plan"),
      fullDescription: d(
        "Diseñamos un plan de acción detallado para el próximo año, con objetivos claros, estrategias de comunicación y marketing, y pasos concretos para alcanzar resultados medibles.",
        "We design a detailed action plan for the next year with clear objectives, communication and marketing strategies, and concrete steps to achieve measurable results.",
      ),
      color: "from-[#00FF80]/20 to-[#00FF80]/30",
      borderColor: "border-[#00FF80]/30",
      iconColor: "text-[#00FF80]",
    },
  ]
}

export function metodoPageCopy(lang: SiteLang) {
  const d = (es: string, en: string) => (lang === "es" ? es : en)
  return {
    heroLead: d("👉 El Método ", "👉 The Resorte "),
    heroAccent: d("Resorte", "Method"),
    heroP1Before: d(
      "El Método Resorte es nuestro sistema de trabajo diseñado para ayudar a las marcas a ",
      "The Resorte Method is our working system designed to help brands ",
    ),
    heroP1Bold: d("detenerse, repensarse y proyectarse", "pause, rethink, and project themselves"),
    heroP1Mid: d(" con claridad. Consta de ", " with clarity. It includes "),
    heroStationsBold: d("5 estaciones", "5 stations"),
    heroP1After: d(
      " que nos permiten realizar un diagnóstico integral y luego diseñar un plan de acción estratégico a 12 meses.",
      " that allow us to run a full diagnosis and then design a 12-month strategic action plan.",
    ),
    heroP2: d(
      "Cada estación es una parada clave para darle a tu marca dirección, identidad y resultados.",
      "Each station is a key stop to give your brand direction, identity, and results.",
    ),
    benefitsTitleLead: d("¿Por qué funciona el ", "Why does the "),
    benefitsAccent: d("Método Resorte", "Resorte Method"),
    benefitsTitleEnd: d("?", " work?"),
    benefitsSubtitle: d(
      "Nuestro enfoque sistemático garantiza que cada decisión esté respaldada por datos y análisis profundo",
      "Our systematic approach ensures every decision is backed by data and deep analysis",
    ),
    benefits: [
      {
        title: d("Diagnóstico Integral", "Comprehensive diagnosis"),
        description: d(
          "No dejamos nada al azar. Cada aspecto de tu marca es analizado meticulosamente.",
          "We leave nothing to chance. Every aspect of your brand is analyzed in detail.",
        ),
        icon: "🔍",
      },
      {
        title: d("Estrategia Personalizada", "Tailored strategy"),
        description: d(
          "Cada plan se diseña específicamente para tu industria, audiencia y objetivos únicos.",
          "Each plan is designed specifically for your industry, audience, and unique goals.",
        ),
        icon: "🎯",
      },
      {
        title: d("Resultados Medibles", "Measurable results"),
        description: d(
          "Establecemos KPIs claros y métricas de éxito para cada etapa del proceso.",
          "We set clear KPIs and success metrics for each stage of the process.",
        ),
        icon: "📈",
      },
    ],
    ctaTitleLead: d("👉 ¿Querés llevar tu marca a la ", "👉 Want to take your brand to the "),
    ctaAccent: d("próxima estación", "next station"),
    ctaTitleEnd: d("?", "?"),
    ctaSubtitle: d(
      "Comenzá tu viaje con el Método Resorte y transformá tu marca en una herramienta estratégica de crecimiento",
      "Start your journey with the Resorte Method and turn your brand into a strategic growth engine",
    ),
    ctaWhatsapp: d("Agendá una reunión con nosotros", "Book a meeting with us"),
    ctaMore: d("Más información", "More information"),
  }
}
