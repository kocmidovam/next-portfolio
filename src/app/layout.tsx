import { Inter } from 'next/font/google'
import './globals.css'
import GoogleAnalytics from "./components/Analytics";
import React from "react";
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Marta Kočmídová | Frontend Developer',
  description: 'Marta Kočmídová | Frontend Developer',
  icons: {
    icon: "./favicon.ico"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <GoogleAnalytics GA_MEASUREMENT_ID="G-ZPWQKZWGET" />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
