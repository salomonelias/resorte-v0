"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, Search, CheckCircle, Users, FileText, Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useMemo, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "@/components/language-provider"
import { metodoPageCopy, metodoStations } from "@/lib/site-copy"

export default function MetodoResortePage() {
  const { language } = useLanguage()
  const copy = metodoPageCopy(language)
  const whatsappUrl = `https://wa.me/5493516596061`
  const [activeStation, setActiveStation] = useState<number | null>(null)

  const stations = useMemo(() => {
    const base = metodoStations(language)
    const icons = [
      <Search className="h-8 w-8" key="s1" />,
      <CheckCircle className="h-8 w-8" key="s2" />,
      <Users className="h-8 w-8" key="s3" />,
      <FileText className="h-8 w-8" key="s4" />,
      <Calendar className="h-8 w-8" key="s5" />,
    ]
    return base.map((s, i) => ({ ...s, icon: icons[i] }))
  }, [language])

  return (
    <div>
      {/* Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {copy.heroLead}
            <span className="text-[#00FF80]">{copy.heroAccent}</span>
          </h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-300 leading-relaxed">
              {copy.heroP1Before}
              <span className="text-white font-semibold">{copy.heroP1Bold}</span>
              {copy.heroP1Mid}
              <span className="text-[#00FF80] font-semibold">{copy.heroStationsBold}</span>
              {copy.heroP1After}
            </p>
            <p className="text-lg text-gray-400 mt-4">{copy.heroP2}</p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Desktop Timeline */}
          <div className="hidden lg:block">
            {/* Timeline Line */}
            <div className="relative mb-16">
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 via-green-500 via-orange-500 to-[#00FF80] opacity-30 transform -translate-y-1/2"></div>

              {/* Station Dots */}
              <div className="flex justify-between items-center relative">
                {stations.map((station, index) => (
                  <motion.div
                    key={station.number}
                    className="relative z-10"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <div
                      className={`w-6 h-6 rounded-full bg-gradient-to-r ${station.color} border-2 ${station.borderColor} cursor-pointer hover:scale-125 transition-transform`}
                      onClick={() => setActiveStation(activeStation === station.number ? null : station.number)}
                    />
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                      <span className="text-sm font-bold text-gray-400">E{station.number}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Station Cards */}
            <div className="grid grid-cols-5 gap-6">
              {stations.map((station, index) => (
                <motion.div
                  key={station.number}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card
                    className={`bg-gradient-to-br ${station.color} border-2 ${station.borderColor} cursor-pointer transition-all duration-300 hover:scale-105 ${
                      activeStation === station.number ? "ring-2 ring-[#00FF80]/50" : ""
                    }`}
                    onClick={() => setActiveStation(activeStation === station.number ? null : station.number)}
                  >
                    <CardContent className="p-6 text-center">
                      <div className={`${station.iconColor} mb-4 flex justify-center`}>{station.icon}</div>
                      <div className="w-8 h-8 bg-[#00FF80] text-black rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                        {station.number}
                      </div>
                      <h3 className="text-lg font-bold text-white mb-3 leading-tight">{station.title}</h3>
                      <p className="text-gray-300 text-sm mb-4">{station.shortDescription}</p>

                      <AnimatePresence>
                        {activeStation === station.number && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="border-t border-gray-600 pt-4 mt-4">
                              <p className="text-gray-300 text-sm leading-relaxed">{station.fullDescription}</p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden space-y-8">
            {stations.map((station, index) => (
              <motion.div
                key={station.number}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative"
              >
                {/* Connection Line */}
                {index < stations.length - 1 && (
                  <div className="absolute left-6 top-24 w-0.5 h-16 bg-gradient-to-b from-gray-600 to-transparent"></div>
                )}

                <Card className={`bg-gradient-to-br ${station.color} border-2 ${station.borderColor}`}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-[#00FF80] text-black rounded-full flex items-center justify-center font-bold text-xl mb-2">
                          {station.number}
                        </div>
                        <div className={`${station.iconColor} flex justify-center`}>{station.icon}</div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">{station.title}</h3>
                        <p className="text-gray-300 mb-3">{station.shortDescription}</p>
                        <p className="text-gray-300 text-sm leading-relaxed">{station.fullDescription}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              {copy.benefitsTitleLead}
              <span className="text-[#00FF80]">{copy.benefitsAccent}</span>
              {copy.benefitsTitleEnd}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">{copy.benefitsSubtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {copy.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="bg-black border-gray-800 text-center h-full">
                  <CardContent className="p-8">
                    <div className="text-4xl mb-4">{benefit.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-gradient-to-br from-[#00FF80]/10 to-[#00FF80]/5 border-2 border-[#00FF80]/30 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00FF80]/5 to-transparent"></div>
              <CardContent className="p-12 text-center relative">
                <h2 className="text-4xl font-bold mb-6">
                  {copy.ctaTitleLead}
                  <span className="text-[#00FF80]">{copy.ctaAccent}</span>
                  {copy.ctaTitleEnd}
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">{copy.ctaSubtitle}</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-[#00FF80] text-black hover:bg-[#00FF80]/90 text-lg px-8 py-4">
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="h-5 w-5 mr-2" />
                      {copy.ctaWhatsapp}
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-[#00FF80] text-[#00FF80] hover:bg-[#00FF80] hover:text-black bg-transparent text-lg px-8 py-4"
                  >
                    <Link href="/contact">
                      {copy.ctaMore}
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
