"use client"
import Link from "next/link"
import { useState } from "react"
import NavLink from "./Navlink"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import MenuOverlay from "./MenuOverlay"
import Image from "next/image"
import { useTranslations } from "next-intl"
import LanguageSwitcher from "./LanguageSwitcher"

export type Link = {
  title: string
  path: string
}

const Navbar = () => {
  const t = useTranslations("navBar")
  const [navbarOpen, setNavbarOpen] = useState(false)

  const navLinks: Link[] = [
    {
      title: t("about"),
      path: "#about",
    },
    {
      title: t("projects"),
      path: "#projects",
    },
    {
      title: t("contact"),
      path: "#contact",
    },
  ]

  return (
    <nav className='fixed mx-auto bg-[#0a192f] top-0 left-0 right-0 z-10 bg-opacity-100 shadow-[0_0_24px_0_rgba(45,212,191,0.96)]'>
      <div className='flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 md:px-8 py-2 lg:px-16'>
        <Link href='/' className=' border rounded-full p-1 border-secondary-200'>
          <Image src='/images/logo.png' alt='Logo' width={50} height={50} priority />
        </Link>
        <div className='flex items-center gap-2 md:hidden'>
          <LanguageSwitcher />
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
              <Bars3Icon className='h-5 w-5' />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
              <XMarkIcon className='h-5 w-5' />
            </button>
          )}
        </div>
        <div className='menu hidden md:flex md:w-auto items-center gap-8' id='navbar'>
          <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
          <LanguageSwitcher />
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  )
}

export default Navbar
