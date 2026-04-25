"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, ExternalLink, Eye } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useMemo } from "react"
import { useLanguage } from "@/components/language-provider"
import { portfolioBrandingItems, portfolioPageCopy, portfolioWebsiteItems, portfolioWhatsappItems } from "@/lib/site-copy"

export default function PortfolioPage() {
  const { language } = useLanguage()
  const copy = portfolioPageCopy(language)
  const whatsappUrl = `https://wa.me/5493516596061`

  const portfolioItems = useMemo(
    () => ({
      branding: portfolioBrandingItems(language),
      websites: portfolioWebsiteItems(language),
      whatsapp: portfolioWhatsappItems(language),
    }),
    [language],
  )

  return (
    <div>
      {/* Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {copy.titleLead}
            <span className="text-[#00FF80]">{copy.titleAccent}</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">{copy.subtitle}</p>
        </div>
      </section>

      {/* Portfolio Sections */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-20">
          {/* Branding */}
          <div>
            <h2 className="text-4xl font-bold mb-12 text-center">
              <span className="text-[#00FF80]">{copy.sectionBranding}</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioItems.branding.map((item, index) => (
                <Card
                  key={index}
                  className={`bg-gray-900 border-gray-800 hover:border-gray-700 transition-colors group ${
                    item.name === "Grupo DT" ||
                    item.name === "2G Iluminación" ||
                    item.name === "No Standar" ||
                    item.name === "SEB Consulting" ||
                    item.name === "Refugio Quitapena" ||
                    item.name === "MoodleXperts"
                      ? "cursor-pointer"
                      : ""
                  }`}
                >
                  <CardContent className="p-6">
                    {item.name === "Grupo DT" ? (
                      <a
                        href="https://www.behance.net/gallery/230666443/Grupo-Empresario-DT-Diseno-de-Identidad-Corporativa"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <div className="aspect-video bg-gray-800 rounded-lg mb-4 flex items-center justify-center">
                          <Image
                            src="/images/grupo-dt-branding.jpg"
                            alt="Grupo DT Branding"
                            width={300}
                            height={200}
                            className="rounded-lg opacity-50 group-hover:opacity-80 transition-opacity w-full h-full object-cover"
                          />
                        </div>
                        <Badge className="mb-3 bg-gray-700 text-gray-200">{item.category}</Badge>
                        <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-white transition-colors">
                          {item.name}
                        </h3>
                        <p className="text-gray-300">{item.description}</p>
                      </a>
                    ) : item.name === "2G Iluminación" ? (
                      <a
                        href="https://www.behance.net/gallery/231407723/2G-Iluminacion-Diseno-de-identidad-Catalogo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <div className="aspect-video bg-gray-800 rounded-lg mb-4 flex items-center justify-center">
                          <Image
                            src="/images/2g-iluminacion-branding.jpg"
                            alt="2G Iluminación Branding"
                            width={300}
                            height={200}
                            className="rounded-lg opacity-50 group-hover:opacity-80 transition-opacity w-full h-full object-cover"
                          />
                        </div>
                        <Badge className="mb-3 bg-gray-700 text-gray-200">{item.category}</Badge>
                        <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-white transition-colors">
                          {item.name}
                        </h3>
                        <p className="text-gray-300">{item.description}</p>
                      </a>
                    ) : item.name === "No Standar" ? (
                      <a
                        href="https://www.behance.net/gallery/230643423/No-Standard-Diseno-de-identidad-corporativa"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <div className="aspect-video bg-gray-800 rounded-lg mb-4 flex items-center justify-center">
                          <Image
                            src="/images/no-standard-branding.jpg"
                            alt="No Standard Branding"
                            width={300}
                            height={200}
                            className="rounded-lg opacity-50 group-hover:opacity-80 transition-opacity w-full h-full object-cover"
                          />
                        </div>
                        <Badge className="mb-3 bg-gray-700 text-gray-200">{item.category}</Badge>
                        <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-white transition-colors">
                          {item.name}
                        </h3>
                        <p className="text-gray-300">{item.description}</p>
                      </a>
                    ) : item.name === "SEB Consulting" ? (
                      <a
                        href="https://www.behance.net/gallery/224767211/SEB-Consulting-Diseno-de-identidad-corporativa"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <div className="aspect-video bg-gray-800 rounded-lg mb-4 flex items-center justify-center">
                          <Image
                            src="/images/seb-consulting-branding.jpg"
                            alt="SEB Consulting Branding"
                            width={300}
                            height={200}
                            className="rounded-lg opacity-50 group-hover:opacity-80 transition-opacity w-full h-full object-cover"
                          />
                        </div>
                        <Badge className="mb-3 bg-gray-700 text-gray-200">{item.category}</Badge>
                        <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-white transition-colors">
                          {item.name}
                        </h3>
                        <p className="text-gray-300">{item.description}</p>
                      </a>
                    ) : item.name === "Refugio Quitapena" ? (
                      <a
                        href="https://www.behance.net/gallery/224428973/Refugio-Quitapena-by-Resorte-Brand-Division"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <div className="aspect-video bg-gray-800 rounded-lg mb-4 flex items-center justify-center">
                          <Image
                            src="/images/refugio-quitapena-branding.jpg"
                            alt="Refugio Quitapena Branding"
                            width={300}
                            height={200}
                            className="rounded-lg opacity-50 group-hover:opacity-80 transition-opacity w-full h-full object-cover"
                          />
                        </div>
                        <Badge className="mb-3 bg-gray-700 text-gray-200">{item.category}</Badge>
                        <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-white transition-colors">
                          {item.name}
                        </h3>
                        <p className="text-gray-300">{item.description}</p>
                      </a>
                    ) : item.name === "MoodleXperts" ? (
                      <a
                        href="https://www.behance.net/resorteagencia"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <div className="aspect-video bg-gray-800 rounded-lg mb-4 flex items-center justify-center">
                          <Image
                            src="/images/moodlexperts-branding.jpg"
                            alt="MoodleXperts Branding"
                            width={300}
                            height={200}
                            className="rounded-lg opacity-50 group-hover:opacity-80 transition-opacity w-full h-full object-cover"
                          />
                        </div>
                        <Badge className="mb-3 bg-gray-700 text-gray-200">{item.category}</Badge>
                        <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-white transition-colors">
                          {item.name}
                        </h3>
                        <p className="text-gray-300">{item.description}</p>
                      </a>
                    ) : (
                      <>
                        <div className="aspect-video bg-gray-800 rounded-lg mb-4 flex items-center justify-center">
                          <Image
                            src="/placeholder.svg?height=200&width=300"
                            alt={item.name}
                            width={300}
                            height={200}
                            className="rounded-lg opacity-50"
                          />
                        </div>
                        <Badge className="mb-3 bg-gray-700 text-gray-200">{item.category}</Badge>
                        <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-white transition-colors">
                          {item.name}
                        </h3>
                        <p className="text-gray-300">{item.description}</p>
                      </>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Websites */}
          <div>
            <h2 className="text-4xl font-bold mb-12 text-center">
              <span className="text-[#00FF80]">{copy.sectionWebsites}</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioItems.websites.map((item, index) => (
                <Card key={index} className="bg-gray-900 border-gray-800 hover:border-gray-700 transition-colors group">
                  <CardContent className="p-6">
                    <div className="aspect-video bg-gray-800 rounded-lg mb-4 flex items-center justify-center">
                      <Image
                        src={
                          item.name === "Orbely"
                            ? "/images/orbely-website-new.jpg"
                            : item.name === "Grupo DT"
                              ? "/images/grupo-dt-website.jpg"
                              : item.name === "Pérez Prece Inmobiliaria"
                                ? "/images/perez-prece-website.jpg"
                                : item.name === "Todos Retenes S.A."
                                  ? "/images/todos-retenes-website.jpg"
                                  : item.name === "MR Pisos"
                                    ? "/images/mr-pisos-website-new.jpg"
                                    : item.name === "MARDES"
                                      ? "/images/mardes-website.jpg"
                                      : item.name === "Abordo Alimentos"
                                        ? "/images/abordo-alimentos-ecommerce.jpg"
                                        : "/images/utn-frn-website.jpg"
                        }
                        alt={item.name}
                        width={300}
                        height={200}
                        className="rounded-lg opacity-50 group-hover:opacity-80 transition-opacity w-full h-full object-cover"
                      />
                    </div>
                    <Badge className="mb-3 bg-gray-700 text-gray-200">{item.category}</Badge>
                    <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-white transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-gray-300 mb-4">{item.description}</p>
                    {item.url && (
                      <a
                        href={`https://${item.url}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-gray-300 hover:underline"
                      >
                        <ExternalLink className="h-4 w-4 mr-1" />
                        {item.url}
                      </a>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* WhatsApp Business */}
          <div>
            <h2 className="text-4xl font-bold mb-12 text-center">
              <span className="text-[#00FF80]">{copy.sectionWhatsapp}</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {portfolioItems.whatsapp.map((item, index) => (
                <Card key={index} className="bg-gray-900 border-gray-800 hover:border-gray-700 transition-colors group">
                  <CardContent className="p-6">
                    <div className="aspect-video bg-gray-800 rounded-lg mb-4 flex items-center justify-center">
                      {item.name === "2G Iluminación" ? (
                        <Image
                          src="/images/2g-iluminacion-whatsapp-business.jpg"
                          alt="2G Iluminación WhatsApp Business"
                          width={300}
                          height={200}
                          className="rounded-lg opacity-50 group-hover:opacity-80 transition-opacity w-full h-full object-cover"
                        />
                      ) : item.name === "Sinkromat" ? (
                        <Image
                          src="/images/sinkromat-whatsapp-business.jpg"
                          alt="Sinkromat WhatsApp Business"
                          width={300}
                          height={200}
                          className="rounded-lg opacity-50 group-hover:opacity-80 transition-opacity w-full h-full object-cover"
                        />
                      ) : (
                        <MessageCircle className="h-16 w-16 text-[#00FF80]" />
                      )}
                    </div>
                    <Badge className="mb-3 bg-gray-700 text-gray-200">{item.category}</Badge>
                    <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-white transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-gray-300 mb-4">{item.description}</p>
                    {item.name === "2G Iluminación" ? (
                      <Button
                        asChild
                        variant="outline"
                        className="border-[#00FF80] text-[#00FF80] hover:bg-[#00FF80] hover:text-black bg-transparent"
                      >
                        <a href="https://wa.me/c/5493513475706" target="_blank" rel="noopener noreferrer">
                          <Eye className="h-4 w-4 mr-2" />
                          {item.action}
                        </a>
                      </Button>
                    ) : item.name === "Sinkromat" ? (
                      <Button
                        asChild
                        variant="outline"
                        className="border-[#00FF80] text-[#00FF80] hover:bg-[#00FF80] hover:text-black bg-transparent"
                      >
                        <a href="https://wa.me/c/5493515306237" target="_blank" rel="noopener noreferrer">
                          <Eye className="h-4 w-4 mr-2" />
                          {item.action}
                        </a>
                      </Button>
                    ) : (
                      <Button
                        variant="outline"
                        className="border-[#00FF80] text-[#00FF80] hover:bg-[#00FF80] hover:text-black bg-transparent"
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        {item.action}
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">{copy.ctaTitle}</h2>
          <p className="text-xl text-gray-300 mb-8">{copy.ctaSubtitle}</p>
          <Button asChild size="lg" className="bg-[#00FF80] text-black hover:bg-[#00FF80]/90">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-5 w-5 mr-2" />
              {copy.ctaButton}
            </a>
          </Button>
        </div>
      </section>

    </div>
  )
}
