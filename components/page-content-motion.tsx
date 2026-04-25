"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"
import { useLanguage } from "@/components/language-provider"

export function PageContentMotion({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const { language } = useLanguage()

  return (
    <motion.div
      key={`${pathname}-${language}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  )
}
