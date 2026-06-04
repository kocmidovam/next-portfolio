"use client";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import SkillIcon from "./SkillIcon";

const About = (): React.ReactNode => {
  const t = useTranslations("about");
  const paragraphs = t.raw("paragraphs") as string[];
  const skills = t.raw("skills.items") as string[];

  return (
    <section className="text-white" id="about">
      <div className="flow-root pb-8 pt-8 sm:pb-16 md:pt-24 xl:px-16">
        <h2 className="mb-10 text-center font-syne text-4xl font-bold text-subtle-light">
          {t("title")}
        </h2>

        <Image
          src="/images/about-image.png"
          width={500}
          height={500}
          alt="About me illustration"
          className="mb-10 mr-14 hidden h-auto w-[42%] max-w-[500px] float-left rounded-lg shadow-[10px_10px_22px_0_rgba(45,212,191,0.96)] transition duration-500 hover:shadow-[12px_12px_5px_2px_rgba(45,212,191,0.96)] md:block lg:w-[38%]"
          sizes="(max-width: 768px) 0px, (max-width: 1280px) 42vw, 500px"
          loading="lazy"
        />

        <div className="text-left">
          <div className="space-y-4 text-subtle lg:text-base">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="clear-both pt-10">
            <h3 className="font-mono text-sm font-bold uppercase tracking-[0.18em] text-brand">
              {t("skills.title")}
            </h3>

            <ul className="mt-5">
              {skills.map((item: string) => (
                <li key={item} className="mb-3 mr-3 inline-block">
                  <span className="inline-flex items-center gap-2 rounded-full border border-brand-dark bg-card px-3 py-1.5 text-sm font-semibold text-subtle-light shadow-[0_0_14px_rgba(34,211,238,0.14)] md:text-base">
                    <SkillIcon skill={item} />
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
