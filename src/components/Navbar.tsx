"use client"

import Link from "next/link"
import { useState } from "react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import Image from "next/image"
import { useTranslations } from "next-intl"
import LanguageSwitcher from "./LanguageSwitcher"

const Navbar = () => {
  const t = useTranslations("navBar")
  const [navbarOpen, setNavbarOpen] = useState(false)

  const navLinks = [
    { label: t("about"), href: "#about" },
    { label: t("projects"), href: "#projects" },
    { label: t("contact"), href: "#contact" },
  ]

  return (
    <nav className='sticky top-0 z-50 bg-background/50 backdrop-blur-md border-b border-white/5 shadow-[0_0_24px_0_rgba(45,212,191,0.96)]'>
      <div className='flex items-center justify-between px-6 md:px-11 py-2'>
        {/* Logo */}
        <Image src='/images/logo.png' alt='Logo' width={50} height={50} priority />

        {/* Desktop nav */}
        <ul className='hidden md:flex gap-7'>
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                className='font-mono text-[16px] text-subtle hover:text-brand-teal transition-colors tracking-widest'>
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className='flex items-center gap-3'>
          <LanguageSwitcher />

          {/* Mobile toggle */}
          <button
            onClick={() => setNavbarOpen((prev) => !prev)}
            className='md:hidden text-sm font-medium px-2 py-1 border rounded border-subtle text-subtle hover:text-white hover:border-white transition-colors'>
            {navbarOpen ? <XMarkIcon className='h-5 w-5' /> : <Bars3Icon className='h-5 w-5' />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {navbarOpen && (
        <div className='md:hidden px-6 pb-4'>
          <ul className='flex flex-col gap-4'>
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  onClick={() => setNavbarOpen(false)}
                  className='block font-mono text-subtle hover:text-brand transition-colors tracking-widest'>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
