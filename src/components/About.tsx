"use client";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const About = (): React.ReactNode => {
  const t = useTranslations("about");
  const paragraphs = t.raw("paragraphs") as string[];
  const skills = t.raw("skills.items") as string[];

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-14 pb-8 pt-8 md:pt-24 xl:gap-16 sm:pb-16 xl:px-16">
        <Image
          src="/images/about-image.png"
          width={500}
          height={500}
          alt="About me illustration"
          className="transition duration-500 shadow-[10px_10px_22px_0_rgba(45,212,191,0.96)] hover:shadow-[12px_12px_5px_2px_rgba(45,212,191,0.96)] hidden md:block md:mt-24 rounded-lg"
          sizes="(max-width: 768px) 0px, (max-width: 1280px) 500px, 600px"
          loading="lazy"
        />

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-subtle-light mb-10 font-syne">
            {t("title")}
          </h2>

          <div className="space-y-4 text-subtle lg:text-base">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8">
            <h3 className="font-mono text-sm font-bold uppercase tracking-[0.18em] text-brand">
              {t("skills.title")}
            </h3>

            <ul className="mt-5 flex flex-wrap gap-3">
              {skills.map((item: string) => (
                <li key={item}>
                  <span className="inline-flex rounded-full border border-brand-dark bg-card px-3 py-1.5 text-sm font-semibold text-subtle-light shadow-[0_0_14px_rgba(34,211,238,0.14)] transition-colors hover:border-brand hover:text-foreground hover:shadow-[0_0_18px_rgba(34,211,238,0.22)] md:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
