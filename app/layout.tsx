import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import ClientLayout from "./clientLayout"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Studio Poetics",
  description: "A design studio exploring the beauty in everyday objects and experiences",
    generator: 'poetics'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.className}>
      <ClientLayout>{children}</ClientLayout>
    </html>
  )
}
