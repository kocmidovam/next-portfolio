import "../globals.css"
import GoogleAnalytics from "../components/Analytics"
import React from "react"
import { Metadata } from "next"
import { NextIntlClientProvider } from "next-intl"
import { getLocale, getMessages } from "next-intl/server"

export const metadata: Metadata = {
  title: "Marta Kočmídová | Medior Frontend Developer",
  description:
    "Medior Frontend Developer building web applications with React, Next.js, and TypeScript.",
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale()
  const messages = await getMessages()

  return (
    <html lang={locale}>
      <GoogleAnalytics GA_MEASUREMENT_ID='G-ZPWQKZWGET' />
      <body>
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
      </body>
    </html>
  )
}
