import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Arthur Allioux | Portfolio",
  description: "Portfolio by Arthur Allioux",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
