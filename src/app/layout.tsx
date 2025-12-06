import "./globals.css"
import GoogleAnalytics from "./components/Analytics"
import React from "react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Marta Kočmídová | Medior Frontend Developer",
  description:
    "Medior Frontend Developer building web applications with React, Next.js, and TypeScript.",
  icons: {
    icon: "./favicon.ico",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <GoogleAnalytics GA_MEASUREMENT_ID='G-ZPWQKZWGET' />
      <body>{children}</body>
    </html>
  )
}
