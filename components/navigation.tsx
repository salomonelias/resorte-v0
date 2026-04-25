"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, Globe, Menu, X } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import { usePathname } from "next/navigation"
import { useState } from "react"
import Image from "next/image"

export function Navigation() {
  const { language, setLanguage, t } = useLanguage()
  const pathname = usePathname()
  const whatsappUrl = `https://wa.me/5493516596061`
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const isActive = (path: string) => pathname === path

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <nav className="border-b border-gray-800 bg-black/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center" onClick={closeMobileMenu}>
              <Image
                src="/images/resorte-logo-white.png"
                alt="Resorte Agencia"
                width={160}
                height={40}
                className="h-8 w-auto sm:h-10"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <Link
                href="/"
                className={`hover:text-[#00FF80] transition-colors ${isActive("/") ? "text-[#00FF80]" : ""}`}
              >
                {t("nav.home")}
              </Link>
              <Link
                href="/services"
                className={`hover:text-[#00FF80] transition-colors ${isActive("/services") ? "text-[#00FF80]" : ""}`}
              >
                {t("nav.services")}
              </Link>
              <Link
                href="/portfolio"
                className={`hover:text-[#00FF80] transition-colors ${isActive("/portfolio") ? "text-[#00FF80]" : ""}`}
              >
                {t("nav.portfolio")}
              </Link>
              <Link
                href="/about"
                className={`hover:text-[#00FF80] transition-colors ${isActive("/about") ? "text-[#00FF80]" : ""}`}
              >
                {t("nav.about")}
              </Link>
              <Link
                href="/el-metodo-resorte"
                className={`hover:text-[#00FF80] transition-colors ${isActive("/el-metodo-resorte") ? "text-[#00FF80]" : ""}`}
              >
                {t("nav.metodo")}
              </Link>
              <Link
                href="/contact"
                className={`hover:text-[#00FF80] transition-colors ${isActive("/contact") ? "text-[#00FF80]" : ""}`}
              >
                {t("nav.contact")}
              </Link>
            </div>

            {/* Desktop Controls */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Language Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setLanguage(language === "es" ? "en" : "es")}
                className="w-9 h-9 p-0"
              >
                <Globe className="h-4 w-4" />
                <span className="sr-only">Toggle language</span>
              </Button>
              <span className="text-xs text-gray-400 uppercase">{language}</span>

              {/* WhatsApp Button */}
              <Button asChild className="bg-[#00FF80] text-black hover:bg-[#00FF80]/90">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  {t("nav.whatsapp")}
                </a>
              </Button>
            </div>

            {/* Mobile Controls */}
            <div className="flex md:hidden items-center space-x-2">
              {/* Language Toggle Mobile */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setLanguage(language === "es" ? "en" : "es")}
                className="w-9 h-9 p-0"
              >
                <Globe className="h-4 w-4" />
                <span className="sr-only">Toggle language</span>
              </Button>
              <span className="text-xs text-gray-400 uppercase mr-2">{language}</span>

              {/* Hamburger Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleMobileMenu}
                className="w-9 h-9 p-0"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={closeMobileMenu} aria-hidden="true" />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-16 right-0 h-[calc(100vh-4rem)] w-80 bg-black border-l border-gray-800 transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Navigation Links */}
          <div className="flex-1 py-6">
            <div className="space-y-1">
              <Link
                href="/"
                onClick={closeMobileMenu}
                className={`block px-6 py-4 text-lg font-medium hover:text-[#00FF80] hover:bg-gray-900/50 transition-colors ${
                  isActive("/") ? "text-[#00FF80] bg-gray-900/30" : "text-white"
                }`}
              >
                {t("nav.home")}
              </Link>
              <Link
                href="/services"
                onClick={closeMobileMenu}
                className={`block px-6 py-4 text-lg font-medium hover:text-[#00FF80] hover:bg-gray-900/50 transition-colors ${
                  isActive("/services") ? "text-[#00FF80] bg-gray-900/30" : "text-white"
                }`}
              >
                {t("nav.services")}
              </Link>
              <Link
                href="/portfolio"
                onClick={closeMobileMenu}
                className={`block px-6 py-4 text-lg font-medium hover:text-[#00FF80] hover:bg-gray-900/50 transition-colors ${
                  isActive("/portfolio") ? "text-[#00FF80] bg-gray-900/30" : "text-white"
                }`}
              >
                {t("nav.portfolio")}
              </Link>
              <Link
                href="/about"
                onClick={closeMobileMenu}
                className={`block px-6 py-4 text-lg font-medium hover:text-[#00FF80] hover:bg-gray-900/50 transition-colors ${
                  isActive("/about") ? "text-[#00FF80] bg-gray-900/30" : "text-white"
                }`}
              >
                {t("nav.about")}
              </Link>
              <Link
                href="/el-metodo-resorte"
                onClick={closeMobileMenu}
                className={`block px-6 py-4 text-lg font-medium hover:text-[#00FF80] hover:bg-gray-900/50 transition-colors ${
                  isActive("/el-metodo-resorte") ? "text-[#00FF80] bg-gray-900/30" : "text-white"
                }`}
              >
                {t("nav.metodo")}
              </Link>
              <Link
                href="/contact"
                onClick={closeMobileMenu}
                className={`block px-6 py-4 text-lg font-medium hover:text-[#00FF80] hover:bg-gray-900/50 transition-colors ${
                  isActive("/contact") ? "text-[#00FF80] bg-gray-900/30" : "text-white"
                }`}
              >
                {t("nav.contact")}
              </Link>
            </div>
          </div>

          {/* WhatsApp Button */}
          <div className="p-6 border-t border-gray-800">
            <Button asChild className="w-full bg-[#00FF80] text-black hover:bg-[#00FF80]/90" onClick={closeMobileMenu}>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4 mr-2" />
                {t("nav.whatsapp")}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
