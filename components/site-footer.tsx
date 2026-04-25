"use client"

import Link from "next/link"
import { useLanguage } from "@/components/language-provider"

export function SiteFooter() {
  const { t } = useLanguage()
  const whatsappNumber = "+54 9 3516 59-6061"
  const whatsappUrl = "https://wa.me/5493516596061"

  return (
    <footer className="border-t border-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              Resorte <span className="text-[#00FF80]">Agencia</span>
            </h3>
            <p className="text-gray-300 mb-4">{t("footer.description")}</p>
            <p className="text-gray-400">{t("footer.location")}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{t("footer.services")}</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/services" className="hover:text-[#00FF80]">
                  Branding
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#00FF80]">
                  Web Design
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#00FF80]">
                  E-commerce
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#00FF80]">
                  WhatsApp Business
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{t("footer.contact")}</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#00FF80]">
                  {whatsappNumber}
                </a>
              </li>
              <li>
                <a href="mailto:resorteagenciaweb@gmail.com" className="hover:text-[#00FF80]">
                  resorteagenciaweb@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Resorte Agencia. {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  )
}
