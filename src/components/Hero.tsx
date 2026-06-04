"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

export default function Hero(): React.ReactNode {
  const t = useTranslations("Hero");
  const locale = useLocale();
  const cvHref =
    locale === "cs" ? "/CV-Kočmídová-CZ.pdf" : "/CV-Kocmidova-EN.pdf";

  return (
    <section className="relative flex flex-col min-h-[calc(100vh-72px)]">
      <div className="relative z-10 flex-1 w-full mt-12 md:mt-20 lg:mt-28 2xl:mt-52">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 lg:gap-16">
          <div className="max-w-lg xl:max-w-xl 2xl:max-w-2xl">
            <p className="text-brand text-xs lg:text-sm font-mono tracking-[0.08em] mb-4">
              {t("tag")}
            </p>

            <h1 className="text-foreground font-extrabold tracking-wide mb-1 font-exo2 leading-none text-[clamp(42px,4.5vw,85px)]">
              Marta
              <br />
              Kočmídová
            </h1>

            <div className="w-10 h-0.5 bg-brand my-4 lg:my-6" />

            <p className="text-subtle-light text-xs lg:text-sm tracking-[0.18em] uppercase">
              {t("stack")}
            </p>

            <p className="text-subtle leading-relaxed max-w-md mt-5 mb-8">
              {t("desc")}
            </p>

            <div className="flex gap-3 flex-wrap">
              <Link
                href="#about"
                className="bg-brand text-background font-extrabold px-6 py-3 rounded-sm transition-opacity hover:opacity-90"
              >
                {t("cta_primary")}
              </Link>
              <a
                href={cvHref}
                download
                className="text-foreground font-extrabold flex items-center gap-1 px-6 py-3 rounded-sm border border-white/15 transition-colors hover:bg-white/5"
              >
                {t("cta_cv")}{" "}
                <svg
                  width="16"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    d="M12 5v14M19 12l-7 7-7-7"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="flex-shrink-0 flex justify-center items-center">
            <div className="relative">
              <div className="absolute -top-3 right-0 z-10 px-3.5 py-1 rounded-full border border-brand/35 text-brand text-xs whitespace-nowrap bg-background/95 font-mono">
                {t("badge_hire")}
              </div>

              <div className="relative w-[240px] h-[305px] md:w-[320px] md:h-[405px] 2xl:w-[380px] 2xl:h-[480px] border border-brand/50 overflow-hidden rounded-lg">
                <Image
                  src="/images/profile-photo.jpg"
                  alt="Marta Kočmídová"
                  fill
                  className="object-cover object-top"
                  priority
                />
                <span className="absolute top-[18px] left-[18px] w-7 h-7 border-t-[1.5px] border-l-[1.5px] border-brand/60 z-10 pointer-events-none" />
                <span className="absolute bottom-[18px] right-[18px] w-7 h-7 border-b-[1.5px] border-r-[1.5px] border-brand/60 z-10 pointer-events-none" />
              </div>

              <div className="absolute -bottom-8 -left-8 z-15 flex flex-col px-4 py-3 rounded-md border border-brand/[0.18] bg-background/[92%]">
                <span className="text-foreground text-2xl lg:text-3xl font-extrabold leading-none">
                  {t("badge_years")}
                </span>
                <span className="text-subtle-dim text-xs font-mono mt-0.5">
                  {t("badge_years_label")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex z-10 items-center gap-2.5 pb-7 2xl:pb-16 invisible md:visible">
        <div className="w-8 h-0.5 bg-brand/40" />
        <span className="text-subtle text-xs tracking-[0.18em] font-mono">
          {t("scroll")}
        </span>
      </div>
    </section>
  );
}
