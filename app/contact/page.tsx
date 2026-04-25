"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MessageCircle, Mail, MapPin } from "lucide-react"
import { useState } from "react"
import { useLanguage } from "@/components/language-provider"
import { contactPageCopy } from "@/lib/site-copy"

export default function ContactPage() {
  const { language } = useLanguage()
  const copy = contactPageCopy(language)
  const whatsappUrl = `https://wa.me/5493516596061`
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(`${copy.mailSubjectLead} ${formData.name}`)
      const body = encodeURIComponent(
        `${copy.mailBodyName}: ${formData.name}
${copy.mailBodyEmail}: ${formData.email}

${copy.mailBodyMessage}:
${formData.message}
`,
      )

      // Open mailto link
      window.location.href = `mailto:resorteagenciaweb@gmail.com?subject=${subject}&body=${body}`

      // Show success message
      setSubmitStatus("success")
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div>
      {/* Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-[#00FF80]">{copy.heroTitle}</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">{copy.heroSubtitle}</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-2xl text-white">{copy.formTitle}</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-white">
                      {copy.nameLabel}
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-2 bg-black border-gray-700 text-white focus:border-gray-500"
                      placeholder={copy.namePlaceholder}
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-white">
                      {copy.emailLabel}
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-2 bg-black border-gray-700 text-white focus:border-gray-500"
                      placeholder={copy.emailPlaceholder}
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-white">
                      {copy.messageLabel}
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="mt-2 bg-black border-gray-700 text-white focus:border-gray-500"
                      placeholder={copy.messagePlaceholder}
                    />
                  </div>

                  {submitStatus === "success" && (
                    <div className="p-4 bg-green-900/50 border border-green-700 rounded-lg">
                      <p className="text-green-300">{copy.successMsg}</p>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="p-4 bg-red-900/50 border border-red-700 rounded-lg">
                      <p className="text-red-300">{copy.errorMsg}</p>
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#00FF80] text-black hover:bg-[#00FF80]/90 disabled:opacity-50"
                  >
                    {isSubmitting ? copy.sending : copy.submit}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-white">{copy.otherTitle}</h2>
                <p className="text-gray-300 mb-8">{copy.otherSubtitle}</p>
              </div>

              <div className="space-y-6">
                <Card className="bg-gray-900 border-gray-800">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-gray-700 p-3 rounded-lg">
                        <MessageCircle className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">{copy.waTitle}</h3>
                        <p className="text-gray-300">{copy.waSubtitle}</p>
                        <a
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-300 hover:underline"
                        >
                          +54 9 3516 59-6061
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900 border-gray-800">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-gray-700 p-3 rounded-lg">
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">{copy.emailTitle}</h3>
                        <p className="text-gray-300">{copy.emailSubtitle}</p>
                        <a href="mailto:resorteagenciaweb@gmail.com" className="text-gray-300 hover:underline">
                          resorteagenciaweb@gmail.com
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900 border-gray-800">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-gray-700 p-3 rounded-lg">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">{copy.locTitle}</h3>
                        <p className="text-gray-300">{copy.locLine1}</p>
                        <p className="text-gray-400">{copy.locLine2}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-gray-900/50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-white">{copy.preferTitle}</h3>
                <p className="text-gray-300 mb-4">{copy.preferBody}</p>
                <Button asChild className="bg-[#00FF80] text-black hover:bg-[#00FF80]/90">
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    {copy.openWa}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              {copy.faqTitleLead}
              <span className="text-[#00FF80]">{copy.faqTitleAccent}</span>
            </h2>
            <p className="text-xl text-gray-300">{copy.faqSubtitle}</p>
          </div>
          <div className="space-y-6">
            <Card className="bg-black border-gray-800">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-white">{copy.faq1q}</h3>
                <p className="text-gray-300">{copy.faq1a}</p>
              </CardContent>
            </Card>
            <Card className="bg-black border-gray-800">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-white">{copy.faq2q}</h3>
                <p className="text-gray-300">{copy.faq2a}</p>
              </CardContent>
            </Card>
            <Card className="bg-black border-gray-800">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-white">{copy.faq3q}</h3>
                <p className="text-gray-300">{copy.faq3a}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

    </div>
  )
}
