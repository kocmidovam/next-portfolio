import React from "react";
import GithubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

const EmailSection = (): React.ReactNode => {
  const t = useTranslations("email");
  const emailAddress = t("address");

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-8 md:py-20 gap-12 md:gap-4 relative"
    >
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2 font-syne">
          {t("title")}
        </h5>
        <p className="text-subtle mb-4 max-w-md md:text-lg"> {t("message")}</p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/kocmidovam" target="_blank">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/marta-kocmidova/"
            target="_blank"
          >
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div className="z-10 flex flex-col items-start justify-center gap-4 md:items-center">
        <Link
          href={`mailto:${emailAddress}`}
          className="font-mono text-sm text-subtle-light underline decoration-brand-dark underline-offset-4 transition-colors hover:text-foreground md:text-base"
        >
          {emailAddress}
        </Link>
        <Link
          href={`mailto:${emailAddress}`}
          className="transition-all z-10 text-white font-medium py-2.5 px-5 rounded-lg w-max bg-gradient-to-r from-brand-dark to-brand-teal hover:bg-gradient-to-tr h-max"
        >
          {t("button")}
        </Link>
      </div>
    </section>
  );
};

export default EmailSection;
