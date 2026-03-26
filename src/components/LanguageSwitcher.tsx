"use client"
import { useLocale } from "next-intl"
import { useRouter } from "next/navigation"

const LanguageSwitcher = () => {
  const locale = useLocale()
  const router = useRouter()

  const toggle = () => {
    const next = locale === "en" ? "cs" : "en"
    document.cookie = `locale=${next}; path=/; max-age=31536000; SameSite=Lax`
    router.refresh()
  }

  return (
    <button
      onClick={toggle}
      className='text-sm font-medium px-2 py-1 border rounded border-[#8892b0] text-[#8892b0] hover:text-white hover:border-white transition-colors'>
      {locale === "en" ? "CS" : "EN"}
    </button>
  )
}

export default LanguageSwitcher
