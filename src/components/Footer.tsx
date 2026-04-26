import { useTranslations } from "next-intl"
import Image from "next/image"

const Footer = () => {
  const t = useTranslations()
  return (
    <footer className='footer border z-10 border-t-divider border-l-0 border-r-0 border-b-0 text-white'>
      <div className='container p-4 md:p-10 flex justify-between items-center mx-auto md:px-8 lg:px-16'>
        <div className=' border rounded-full p-1 border-brand-teal-light'>
          <Image src='/images/logo.png' alt='Logo' width={50} height={50} />
        </div>
        <p className='text-slate-600'>© {new Date().getFullYear()} {t("name")}</p>
      </div>
    </footer>
  )
}

export default Footer
