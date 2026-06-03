import "../globals.css";
import GoogleAnalytics from "../components/Analytics";
import React from "react";
import { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { Syne, Space_Mono, Exo_2, Jura } from "next/font/google";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "600", "700", "800"],
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
  weight: ["400", "700"],
});

const exo2 = Exo_2({
  subsets: ["latin"],
  variable: "--font-exo2",
  weight: ["300", "400", "500", "600"],
});

const jura = Jura({
  subsets: ["latin"],
  variable: "--font-jura",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://martakocmidova.cz"),
  title: "Marta Kočmídová | React & Next.js Frontend Developer",
  description:
    "Frontend Developer focused on React, Next.js and TypeScript. I build maintainable product interfaces, data-heavy workflows and responsive web applications.",
  openGraph: {
    title: "Marta Kočmídová | React & Next.js Frontend Developer",
    description:
      "Frontend Developer focused on React, Next.js and TypeScript, with experience in product UI, GraphQL, state management and responsive web applications.",
    url: "https://martakocmidova.cz",
    siteName: "Marta Kočmídová Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Marta Kočmídová — React & Next.js Frontend Developer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marta Kočmídová | React & Next.js Frontend Developer",
    description:
      "Frontend Developer focused on React, Next.js and TypeScript, product UI, GraphQL and responsive web applications.",
    images: ["/og-image.png"],
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${syne.variable} ${spaceMono.variable} ${exo2.variable} ${jura.variable}`}
    >
      <GoogleAnalytics GA_MEASUREMENT_ID="G-ZPWQKZWGET" />
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
