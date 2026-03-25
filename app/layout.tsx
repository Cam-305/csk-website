import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Child Safe Kit® - Free Child Safety Documentation Kits",
  description: "Get your FREE Child Safe Kit with vital child identification information. Help law enforcement in emergencies. Order today - completely free shipping.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
