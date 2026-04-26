"use client"
import { useTransition, useState } from "react"
import Image from "next/image"
import { useTranslations } from "next-intl"
import TabButton from "./TabButton"

const TABS = ["skills", "education", "certificates"]

const About = () => {
  const t = useTranslations("about")
  const [tab, setTab] = useState("skills")
  const [isPending, startTransition] = useTransition()

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id)
    })
  }

  return (
    <section className='text-white' id='about'>
      <div className='md:grid md:grid-cols-2 gap-14 pb-8 pt-8 md:pt-24 xl:gap-16 sm:pb-16 xl:px-16'>
        <Image
          src='/images/about-img.png'
          width={500}
          height={500}
          alt='About me illustration'
          className='transition duration-500 shadow-[10px_10px_22px_0_rgba(45,212,191,0.96)] hover:shadow-[12px_12px_5px_2px_rgba(45,212,191,0.96)] hidden md:block md:mt-24 rounded-lg'
          sizes='(max-width: 768px) 0px, (max-width: 1280px) 500px, 600px'
          loading='lazy'
        />

        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
          <h2 className='text-4xl font-bold text-subtle-light mb-10'>{t("title")}</h2>

          <p className='text-subtle-light lg:text-lg'>{t("description1")}</p>
          <p className='text-subtle-light lg:text-lg mt-4'>{t("description2")}</p>

          <div className='flex flex-row justify-start mt-8 lg:text-lg'>
            {TABS.map((tabId) => (
              <TabButton
                key={tabId}
                selectTab={() => handleTabChange(tabId)}
                active={tab === tabId}>
                {t(`${tabId}.title`)}
              </TabButton>
            ))}
          </div>

          <div className='mt-8'>
            <ul className='list-disc pl-2 text-subtle-light mx-[0.5rem] lg:text-lg'>
              {(t.raw(`${tab}.items`) as string[]).map((item: string) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
