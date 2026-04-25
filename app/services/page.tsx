"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, Palette, Globe, ShoppingCart, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useMemo } from "react"
import { useLanguage } from "@/components/language-provider"
import { servicesPageCopy } from "@/lib/site-copy"

const serviceIcons = {
  branding: <Palette className="h-8 w-8" />,
  web: <Globe className="h-8 w-8" />,
  ecommerce: <ShoppingCart className="h-8 w-8" />,
  whatsapp: <MessageCircle className="h-8 w-8" />,
} as const

export default function ServicesPage() {
  const { language } = useLanguage()
  const copy = servicesPageCopy(language)
  const whatsappUrl = `https://wa.me/5493516596061`

  const services = useMemo(
    () =>
      copy.services.map((s) => ({
        icon: serviceIcons[s.iconKey],
        title: s.title,
        description: s.description,
        options: s.options,
        highlights: s.highlights,
      })),
    [copy.services],
  )

  return (
    <div>
      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {copy.titleLead}
            <span className="text-[#00FF80]">{copy.titleAccent}</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">{copy.subtitle}</p>
          <Button asChild size="lg" className="bg-[#00FF80] text-black hover:bg-[#00FF80]/90">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-5 w-5 mr-2" />
              {copy.consultNow}
            </a>
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-gray-900 border-gray-800 hover:border-gray-700 transition-all group">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="text-gray-400 group-hover:text-[#00FF80] transition-colors">{service.icon}</div>
                    <div>
                      <CardTitle className="text-2xl text-white mb-2">{service.title}</CardTitle>
                      <p className="text-gray-300">{service.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  {/* Options */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">{copy.optionsLabel}</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.options.map((option, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700"
                        >
                          {option}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">{copy.includesLabel}</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.highlights.map((highlight, idx) => (
                        <span key={idx} className="text-gray-300 text-sm">
                          {highlight}
                          {idx < service.highlights.length - 1 && <span className="text-gray-600 mx-2">•</span>}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Button
                    asChild
                    className="w-full bg-transparent border border-[#00FF80] text-[#00FF80] hover:bg-[#00FF80] hover:text-black transition-all group-hover:bg-[#00FF80] group-hover:text-black"
                  >
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                      {copy.consultPrice}
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">{copy.howTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-[#00FF80] text-black rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">{copy.step1Title}</h3>
              <p className="text-gray-300 text-sm">{copy.step1Desc}</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#00FF80] text-black rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">{copy.step2Title}</h3>
              <p className="text-gray-300 text-sm">{copy.step2Desc}</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#00FF80] text-black rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">{copy.step3Title}</h3>
              <p className="text-gray-300 text-sm">{copy.step3Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">{copy.ctaTitle}</h2>
          <p className="text-xl text-gray-300 mb-8">{copy.ctaSubtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#00FF80] text-black hover:bg-[#00FF80]/90">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5 mr-2" />
                {copy.ctaPrimary}
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white bg-transparent"
            >
              <Link href="/portfolio">{copy.ctaSecondary}</Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  )
}
