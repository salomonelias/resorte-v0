"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, Palette, Globe, ShoppingCart, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { useLanguage } from "@/components/language-provider"

export default function HomePage() {
  const { t } = useLanguage()
  const whatsappUrl = `https://wa.me/5493516596061`

  const services = [
    {
      icon: <Palette className="h-12 w-12" />,
      title: t("services.branding.title"),
      description: t("services.branding.description"),
      features: ["Logotipo profesional", "Manual de marca", "Aplicaciones corporativas"],
      highlight: "Desde identidad básica hasta branding corporativo completo",
    },
    {
      icon: <Globe className="h-12 w-12" />,
      title: t("services.web.title"),
      description: t("services.web.description"),
      features: ["Diseño responsivo", "SEO optimizado", "Panel administrativo"],
      highlight: "Sitios web que convierten visitantes en clientes",
    },
    {
      icon: <ShoppingCart className="h-12 w-12" />,
      title: t("services.ecommerce.title"),
      description: t("services.ecommerce.description"),
      features: ["Catálogo ilimitado", "Múltiples pagos", "Gestión completa"],
      highlight: "Tiendas online listas para vender desde el día uno",
    },
    {
      icon: <MessageCircle className="h-12 w-12" />,
      title: t("services.whatsapp.title"),
      description: t("services.whatsapp.description"),
      features: ["Setup profesional", "Catálogos digitales", "Automatización"],
      highlight: "Optimizá tu comunicación comercial al máximo",
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            {t("home.hero.title")} <span className="text-[#00FF80]">{t("home.hero.title.accent")}</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">{t("home.hero.subtitle")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#00FF80] text-black hover:bg-[#00FF80]/90">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5 mr-2" />
                {t("home.hero.cta.primary")}
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white bg-transparent"
            >
              <Link href="/portfolio">{t("home.hero.cta.secondary")}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview - Enhanced */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              {t("home.services.title")} <span className="text-[#00FF80]">{t("home.services.title.accent")}</span>
            </h2>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">{t("home.services.subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-black border-gray-800 hover:border-[#00FF80]/50 transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#00FF80]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardContent className="p-8 relative">
                  <div className="flex items-start space-x-6 mb-6">
                    <div className="text-[#00FF80] group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-[#00FF80] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-lg text-gray-300 mb-4 leading-relaxed">{service.description}</p>
                      <p className="text-[#00FF80] font-medium text-sm mb-6">{service.highlight}</p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-[#00FF80] rounded-full mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    asChild
                    className="w-full bg-transparent border border-gray-700 text-gray-300 hover:border-[#00FF80] hover:bg-[#00FF80] hover:text-black transition-all group-hover:border-[#00FF80]"
                  >
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                      Consultar este servicio
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-[#00FF80] text-black hover:bg-[#00FF80]/90">
              <Link href="/services">
                {t("home.services.cta")}
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Selected Projects */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">
              {t("home.work.title")} <span className="text-[#00FF80]">{t("home.work.title.accent")}</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">{t("home.work.subtitle")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Branding Project */}
            <Card className="bg-gray-900 border-gray-800 hover:border-gray-700 transition-colors group cursor-pointer">
              <CardContent className="p-6">
                <a
                  href="https://www.behance.net/gallery/224767211/SEB-Consulting-Diseno-de-identidad-corporativa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="aspect-video bg-gray-800 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                    <Image
                      src="/images/seb-consulting.jpg"
                      alt="SEB Consulting Branding"
                      width={300}
                      height={200}
                      className="rounded-lg opacity-60 group-hover:opacity-80 transition-opacity"
                    />
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="border-gray-600 text-gray-300">
                      Branding
                    </Badge>
                    <Palette className="h-4 w-4 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">SEB Consulting</h3>
                  <p className="text-gray-300 text-sm">Identidad corporativa completa para consultora empresarial</p>
                </a>
              </CardContent>
            </Card>

            {/* Web Design Project */}
            <Card className="bg-gray-900 border-gray-800 hover:border-gray-700 transition-colors group">
              <CardContent className="p-6">
                <a href="https://www.frn.utn.edu.ar/" target="_blank" rel="noopener noreferrer" className="block">
                  <div className="aspect-video bg-gray-800 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                    <Image
                      src="/images/utn-frn-website.jpg"
                      alt="UTN FRN Website"
                      width={300}
                      height={200}
                      className="rounded-lg opacity-60 group-hover:opacity-80 transition-opacity w-full h-full object-cover"
                    />
                  </div>
                </a>
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="outline" className="border-gray-600 text-gray-300">
                    Web Design
                  </Badge>
                  <Globe className="h-4 w-4 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">UTN FRN</h3>
                <p className="text-gray-300 text-sm">
                  Sitio web institucional para la Universidad Tecnológica Nacional
                </p>
              </CardContent>
            </Card>

            {/* WhatsApp Business Project */}
            <Card className="bg-gray-900 border-gray-800 hover:border-gray-700 transition-colors group cursor-pointer">
              <CardContent className="p-6">
                <a href="https://wa.me/c/5493513475706" target="_blank" rel="noopener noreferrer" className="block">
                  <div className="aspect-video bg-gray-800 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                    <Image
                      src="/images/2g-iluminacion-logo.jpg"
                      alt="2G Iluminación WhatsApp Business"
                      width={300}
                      height={200}
                      className="rounded-lg opacity-60 group-hover:opacity-80 transition-opacity w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="border-gray-600 text-gray-300">
                      WhatsApp Business
                    </Badge>
                    <MessageCircle className="h-4 w-4 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">2G Iluminación</h3>
                  <p className="text-gray-300 text-sm">
                    Catálogo digital integrado con WhatsApp Business para productos LED
                  </p>
                </a>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white bg-transparent"
            >
              <Link href="/portfolio">{t("home.work.cta")}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">{t("home.cta.title")}</h2>
          <p className="text-xl text-gray-300 mb-8">{t("home.cta.subtitle")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#00FF80] text-black hover:bg-[#00FF80]/90">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5 mr-2" />
                {t("home.cta.primary")}
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-[#00FF80] text-[#00FF80] hover:bg-[#00FF80] hover:text-black bg-transparent"
            >
              <Link href="/contact">{t("home.cta.secondary")}</Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  )
}
