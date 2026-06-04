import React from "react";
import {
  BeakerIcon,
  CircleStackIcon,
  CodeBracketIcon,
  CommandLineIcon,
  CubeTransparentIcon,
  DevicePhoneMobileIcon,
  LanguageIcon,
  SwatchIcon,
} from "@heroicons/react/24/outline";

type SkillIconProps = {
  skill: string;
};

const DATA_SKILLS = new Set(["GraphQL", "REST APIs"]);
const STATE_SKILLS = new Set(["Redux", "Zustand"]);
const STYLE_SKILLS = new Set(["Tailwind CSS", "SCSS"]);
const TEST_SKILLS = new Set(["Playwright"]);

const SkillIcon = ({ skill }: SkillIconProps): React.ReactNode => {
  const className = "h-4 w-4 shrink-0 text-brand";

  if (DATA_SKILLS.has(skill)) {
    return <CircleStackIcon className={className} aria-hidden="true" />;
  }

  if (STATE_SKILLS.has(skill)) {
    return <CubeTransparentIcon className={className} aria-hidden="true" />;
  }

  if (STYLE_SKILLS.has(skill)) {
    return <SwatchIcon className={className} aria-hidden="true" />;
  }

  if (TEST_SKILLS.has(skill)) {
    return <BeakerIcon className={className} aria-hidden="true" />;
  }

  if (skill === "i18n / Localization") {
    return <LanguageIcon className={className} aria-hidden="true" />;
  }

  if (skill === "Responsive UI") {
    return <DevicePhoneMobileIcon className={className} aria-hidden="true" />;
  }

  if (skill === "Node.js") {
    return <CommandLineIcon className={className} aria-hidden="true" />;
  }

  return <CodeBracketIcon className={className} aria-hidden="true" />;
};

export default SkillIcon;
