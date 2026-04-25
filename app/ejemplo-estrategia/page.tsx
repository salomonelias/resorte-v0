"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, Calendar, Target, TrendingUp, Globe, Users, BookOpen, Video } from "lucide-react"
import Link from "next/link"

export default function ExampleStrategyPage() {
  const whatsappUrl = `https://wa.me/5493516596061`

  const quarterlyStrategy = [
    {
      quarter: "Meses 1 a 3",
      icon: <Globe className="h-8 w-8" />,
      color: "from-blue-500/20 to-blue-600/20",
      borderColor: "border-blue-500/30",
      activities: [
        "Publicación de nuevo sitio web con foco en generación de leads",
        'Serie gráfica "¿Por qué Moodle?" en redes sociales',
        "Integración con WhatsApp Business",
        "Desarrollo de 3 casos de éxito documentados",
      ],
    },
    {
      quarter: "Meses 4 a 6",
      icon: <Users className="h-8 w-8" />,
      color: "from-purple-500/20 to-purple-600/20",
      borderColor: "border-purple-500/30",
      activities: [
        "Lanzamiento de newsletter mensual",
        "Campañas en LinkedIn y Google Ads",
        "Inicio de blog con contenidos SEO y artículos de expertise",
      ],
    },
    {
      quarter: "Meses 7 a 9",
      icon: <BookOpen className="h-8 w-8" />,
      color: "from-orange-500/20 to-orange-600/20",
      borderColor: "border-orange-500/30",
      activities: [
        "Publicación de curso introductorio gratuito sobre Moodle",
        "Remarketing y segmentación de audiencias",
        "Videos breves explicativos para LinkedIn e Instagram",
      ],
    },
    {
      quarter: "Meses 10 a 12",
      icon: <Video className="h-8 w-8" />,
      color: "from-green-500/20 to-green-600/20",
      borderColor: "border-green-500/30",
      activities: [
        "Webinar anual con clientes y partners",
        "Evaluación de métricas y optimización del funnel",
        "Diseño de plan de fidelización y venta cruzada",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <Link href="/como-lo-hacemos" className="text-2xl font-bold hover:text-[#00FF80] transition-colors">
              ← Resorte <span className="text-[#00FF80]">Agencia</span>
            </Link>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Calendar className="h-4 w-4" />
              <span>Ejemplo de Estrategia</span>
            </div>
          </div>

          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Estrategia Digital de <span className="text-[#00FF80]">12 Meses</span>
            </h1>
            <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <Target className="h-6 w-6 text-[#00FF80]" />
                <h2 className="text-xl font-semibold">Objetivo General</h2>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                Posicionar a Moodle Experts como referentes nacionales y regionales en soluciones basadas en Moodle.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Planificación <span className="text-[#00FF80]">Trimestral</span>
            </h2>
            <p className="text-xl text-gray-300">
              Una hoja de ruta integral de 12 meses para alcanzar los objetivos estratégicos
            </p>
          </div>

          <div className="space-y-8">
            {quarterlyStrategy.map((quarter, index) => (
              <Card
                key={index}
                className={`bg-gradient-to-br ${quarter.color} border-2 ${quarter.borderColor} relative overflow-hidden`}
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    {/* Quarter Icon */}
                    <div className="flex-shrink-0 text-center">
                      <div className="text-[#00FF80] mb-4">{quarter.icon}</div>
                      <div className="text-2xl font-bold text-white bg-black/30 rounded-lg px-3 py-1">T{index + 1}</div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-6">{quarter.quarter}</h3>

                      <div className="space-y-4">
                        {quarter.activities.map((activity, activityIndex) => (
                          <div key={activityIndex} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-[#00FF80] rounded-full mt-2 flex-shrink-0" />
                            <p className="text-gray-300 leading-relaxed">{activity}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Key Metrics Section */}
          <Card className="bg-gray-900 border-gray-800 mt-12">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-2xl">
                <TrendingUp className="h-6 w-6 text-[#00FF80]" />
                <span>Indicadores Clave de Rendimiento</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center p-4 bg-black/30 rounded-lg border border-gray-700">
                  <div className="text-2xl font-bold text-[#00FF80] mb-2">25%</div>
                  <p className="text-sm text-gray-300">Aumento en Generación de Leads</p>
                </div>
                <div className="text-center p-4 bg-black/30 rounded-lg border border-gray-700">
                  <div className="text-2xl font-bold text-[#00FF80] mb-2">40%</div>
                  <p className="text-sm text-gray-300">Crecimiento del Tráfico Web</p>
                </div>
                <div className="text-center p-4 bg-black/30 rounded-lg border border-gray-700">
                  <div className="text-2xl font-bold text-[#00FF80] mb-2">15%</div>
                  <p className="text-sm text-gray-300">Mejora en Tasa de Conversión</p>
                </div>
                <div className="text-center p-4 bg-black/30 rounded-lg border border-gray-700">
                  <div className="text-2xl font-bold text-[#00FF80] mb-2">60%</div>
                  <p className="text-sm text-gray-300">Incremento en Reconocimiento de Marca</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Implementation Timeline */}
          <Card className="bg-gray-900 border-gray-800 mt-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-2xl">
                <Calendar className="h-6 w-6 text-[#00FF80]" />
                <span>Enfoque de Implementación</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#00FF80] text-black rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                    1
                  </div>
                  <h4 className="font-semibold text-white mb-2">Fundación</h4>
                  <p className="text-gray-300 text-sm">Establecer presencia digital y mensajes centrales</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#00FF80] text-black rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                    2
                  </div>
                  <h4 className="font-semibold text-white mb-2">Crecimiento</h4>
                  <p className="text-gray-300 text-sm">Escalar contenido y esfuerzos publicitarios</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#00FF80] text-black rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                    3
                  </div>
                  <h4 className="font-semibold text-white mb-2">Optimización</h4>
                  <p className="text-gray-300 text-sm">Refinar y mejorar basado en insights de datos</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">¿Necesitás una estrategia como esta?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Desarrollamos planes estratégicos personalizados para hacer crecer tu negocio
          </p>
          <Button asChild size="lg" className="bg-[#00FF80] text-black hover:bg-[#00FF80]/90">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-5 w-5 mr-2" />
              Solicitar estrategia personalizada
            </a>
          </Button>
        </div>
      </section>
    </div>
  )
}
