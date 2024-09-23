import type { Metadata } from "next"
import "./globals.css"
import { Inter, Overpass } from "next/font/google"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Arthur Allioux | Portfolio",
  description: "Portfolio by Arthur Allioux",
}

const headingsFont = Overpass({
  subsets: ["latin"],
  variable: "--font-headings",
})
const textFont = Inter({
  subsets: ["latin"],
  variable: "--font-p",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={cn(headingsFont.variable, textFont.variable)}>
        {children}
      </body>
    </html>
  )
}
