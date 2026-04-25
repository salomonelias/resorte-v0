"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, Users, Target, Lightbulb } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/components/language-provider"
import { aboutPageCopy } from "@/lib/site-copy"

export default function AboutPage() {
  const { language } = useLanguage()
  const copy = aboutPageCopy(language)
  const whatsappUrl = `https://wa.me/5493516596061`

  const values = [
    { icon: <Users className="h-12 w-12" />, ...copy.values[0] },
    { icon: <Target className="h-12 w-12" />, ...copy.values[1] },
    { icon: <Lightbulb className="h-12 w-12" />, ...copy.values[2] },
  ]

  return (
    <div>
      {/* Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {copy.heroLead}
            <span className="text-[#00FF80]">{copy.heroAccent}</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">{copy.heroSubtitle}</p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                {copy.historyLead}
                <span className="text-[#00FF80]">{copy.historyAccent}</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-300">
                <p>{copy.historyP1}</p>
                <p>{copy.historyP2}</p>
                <p>{copy.historyP3}</p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-md aspect-square bg-gray-800 rounded-lg flex items-center justify-center">
                <Image
                  src="/images/resorte-logo.jpg"
                  alt="Resorte Agencia"
                  width={400}
                  height={400}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              {copy.valuesLead}
              <span className="text-[#00FF80]">{copy.valuesAccent}</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">{copy.valuesSubtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-black border-gray-800 text-center">
                <CardContent className="p-8">
                  <div className="text-gray-400 mb-6 flex justify-center">{value.icon}</div>
                  <h3 className="text-2xl font-semibold mb-4 text-white">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              {copy.teamLead}
              <span className="text-[#00FF80]">{copy.teamAccent}</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">{copy.teamSubtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {copy.team.map((member, index) => (
              <Card key={index} className="bg-gray-900 border-gray-800">
                <CardContent className="p-8 text-center">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gray-800">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover opacity-50"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold mb-2 text-white">{member.name}</h3>
                  <p className="text-gray-300 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-300">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">{copy.ctaTitle}</h2>
          <p className="text-xl text-gray-300 mb-8">{copy.ctaSubtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#00FF80] text-black hover:bg-[#00FF80]/90">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5 mr-2" />
                {copy.ctaWhatsapp}
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-[#00FF80] text-[#00FF80] hover:bg-[#00FF80] hover:text-black bg-transparent"
            >
              <Link href="/contact">{copy.ctaContact}</Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  )
}
