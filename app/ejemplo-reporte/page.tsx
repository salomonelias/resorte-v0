"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  MessageCircle,
  FileText,
  User,
  Calendar,
  Brain,
  Target,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  X,
} from "lucide-react"
import Link from "next/link"

export default function ExampleReportPage() {
  const whatsappUrl = `https://wa.me/5493516596061`

  const competitorData = [
    {
      brand: "Moodle Experts",
      visualStyle: "Profesional",
      valueProp: true,
      contentStrategy: false,
      differentiation: "Alta",
    },
    {
      brand: "LMS ProTech",
      visualStyle: "Desactualizado",
      valueProp: false,
      contentStrategy: false,
      differentiation: "Baja",
    },
    {
      brand: "EduFlex",
      visualStyle: "Genérico",
      valueProp: true,
      contentStrategy: true,
      differentiation: "Media",
    },
  ]

  const swotData = {
    strengths: ["Especialización en Moodle", "Identidad visual coherente"],
    weaknesses: ["Escasa generación de contenido", "Tono técnico, poco emocional"],
    opportunities: ["Crecimiento de la educación corporativa", "Demanda de plataformas estables"],
    threats: ["Proliferación de LMS propietarios", "Reducción presupuestaria institucional"],
  }

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
              <FileText className="h-4 w-4" />
              <span>Ejemplo de Reporte</span>
            </div>
          </div>

          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Reporte de <span className="text-[#00FF80]">Diagnóstico</span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="flex items-center justify-center space-x-2">
                <User className="h-5 w-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-400">Cliente</p>
                  <p className="font-semibold">Moodle Experts</p>
                  <p className="text-xs text-gray-500">Soluciones e-learning para organizaciones</p>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Calendar className="h-5 w-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-400">Duración</p>
                  <p className="font-semibold">30 días</p>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Brain className="h-5 w-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-400">Consultor</p>
                  <p className="font-semibold">Lic. Leandro Salomón</p>
                  <p className="text-xs text-gray-500">Director de Resorte Agencia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Section 1: Competitive Context Analysis */}
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-2xl">
                <Target className="h-6 w-6 text-[#00FF80]" />
                <span>1. Análisis del Contexto Competitivo</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-white">Competidores directos</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Proveedores locales y regionales especializados en Moodle</li>
                  <li>• Consultores de plataformas LMS (Canvas, Chamilo, Blackboard)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-white">Principales hallazgos</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• La mayoría de los competidores no expresan un diferencial técnico claro</li>
                  <li>• Presencias digitales débiles o desactualizadas</li>
                  <li>• Poca generación de contenido educativo o recursos para onboarding</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4 text-white">Matriz comparativa</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left py-3 px-4 text-gray-300">Marca</th>
                        <th className="text-left py-3 px-4 text-gray-300">Estilo visual</th>
                        <th className="text-left py-3 px-4 text-gray-300">Propuesta de valor clara</th>
                        <th className="text-left py-3 px-4 text-gray-300">Estrategia de contenido</th>
                        <th className="text-left py-3 px-4 text-gray-300">Diferenciación</th>
                      </tr>
                    </thead>
                    <tbody>
                      {competitorData.map((competitor, index) => (
                        <tr key={index} className="border-b border-gray-800">
                          <td className="py-3 px-4 font-medium text-white">{competitor.brand}</td>
                          <td className="py-3 px-4 text-gray-300">{competitor.visualStyle}</td>
                          <td className="py-3 px-4">
                            {competitor.valueProp ? (
                              <CheckCircle className="h-5 w-5 text-green-500" />
                            ) : (
                              <X className="h-5 w-5 text-red-500" />
                            )}
                          </td>
                          <td className="py-3 px-4">
                            {competitor.contentStrategy ? (
                              <CheckCircle className="h-5 w-5 text-green-500" />
                            ) : (
                              <X className="h-5 w-5 text-red-500" />
                            )}
                          </td>
                          <td className="py-3 px-4">
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-medium ${
                                competitor.differentiation === "Alta"
                                  ? "bg-green-900 text-green-300"
                                  : competitor.differentiation === "Media"
                                    ? "bg-yellow-900 text-yellow-300"
                                    : "bg-red-900 text-red-300"
                              }`}
                            >
                              {competitor.differentiation}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 2: Brand Identity Analysis */}
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-2xl">
                <User className="h-6 w-6 text-[#00FF80]" />
                <span>2. Análisis de Identidad de Marca</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-white mb-2">Nombre:</h4>
                  <p className="text-gray-300">Técnico y preciso.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Sistema visual:</h4>
                  <p className="text-gray-300">Desarrollado por Resorte, sólido y profesional.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Tono de comunicación:</h4>
                  <p className="text-gray-300">Coherente pero con baja emocionalidad.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Conclusión:</h4>
                  <p className="text-gray-300">Identidad visual robusta, oportunidad para humanizar la marca.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 3: Target Audience Analysis */}
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-2xl">
                <Target className="h-6 w-6 text-[#00FF80]" />
                <span>3. Análisis del Público Objetivo</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-white">Herramientas utilizadas</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Arquetipos de cliente</li>
                  <li>• Customer Journey institucional</li>
                  <li>• Entrevistas cualitativas</li>
                </ul>
              </div>

              <div className="bg-black/30 rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-semibold mb-3 text-[#00FF80]">Arquetipo principal</h3>
                <h4 className="font-semibold text-white mb-2">"Responsable Académico Digital"</h4>
                <p className="text-gray-300">
                  35 a 55 años, staff universitario o de RR.HH. corporativo. Valora la estabilidad de la plataforma y la
                  atención técnica postventa.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4 text-white">Customer Journey</h3>
                <div className="space-y-3">
                  {[
                    "Necesidad de mejorar o migrar su LMS",
                    "Búsqueda de proveedores especializados en Moodle",
                    "Solicita demo o presupuesto",
                    "Evalúa casos anteriores y soporte ofrecido",
                    "Contrata servicio y comienza implementación",
                  ].map((step, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-[#00FF80] text-black rounded-full flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </div>
                      <p className="text-gray-300">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 4: SWOT Matrix */}
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-2xl">
                <TrendingUp className="h-6 w-6 text-[#00FF80]" />
                <span>4. Matriz FODA</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-green-900/20 border border-green-700/30 rounded-lg p-4">
                    <h4 className="font-semibold text-green-300 mb-3 flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2" />
                      Fortalezas
                    </h4>
                    <ul className="space-y-2">
                      {swotData.strengths.map((item, index) => (
                        <li key={index} className="text-gray-300 text-sm">
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-blue-900/20 border border-blue-700/30 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-300 mb-3 flex items-center">
                      <Target className="h-5 w-5 mr-2" />
                      Oportunidades
                    </h4>
                    <ul className="space-y-2">
                      {swotData.opportunities.map((item, index) => (
                        <li key={index} className="text-gray-300 text-sm">
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-red-900/20 border border-red-700/30 rounded-lg p-4">
                    <h4 className="font-semibold text-red-300 mb-3 flex items-center">
                      <X className="h-5 w-5 mr-2" />
                      Debilidades
                    </h4>
                    <ul className="space-y-2">
                      {swotData.weaknesses.map((item, index) => (
                        <li key={index} className="text-gray-300 text-sm">
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-orange-900/20 border border-orange-700/30 rounded-lg p-4">
                    <h4 className="font-semibold text-orange-300 mb-3 flex items-center">
                      <AlertTriangle className="h-5 w-5 mr-2" />
                      Amenazas
                    </h4>
                    <ul className="space-y-2">
                      {swotData.threats.map((item, index) => (
                        <li key={index} className="text-gray-300 text-sm">
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">¿Te interesa un diagnóstico como este?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Contactanos para iniciar el proceso de consultoría estratégica para tu marca
          </p>
          <Button asChild size="lg" className="bg-[#00FF80] text-black hover:bg-[#00FF80]/90">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-5 w-5 mr-2" />
              Iniciar consultoría estratégica
            </a>
          </Button>
        </div>
      </section>
    </div>
  )
}
