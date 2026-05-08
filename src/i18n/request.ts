import { getRequestConfig } from "next-intl/server"
import { cookies } from "next/headers"

const locales = ["en", "cs"]

export default getRequestConfig(async (): Promise<{ locale: string; messages: Record<string, unknown> }> => {
  const cookieStore = await cookies()
  const cookieLocale = cookieStore.get("locale")?.value
  const locale = cookieLocale && locales.includes(cookieLocale) ? cookieLocale : "en"

  return {
    locale,
    messages: (await import(`../../translations/${locale}.json`)).default,
  }
})
