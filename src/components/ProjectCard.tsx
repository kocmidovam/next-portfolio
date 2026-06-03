"use client";

import React, { useState } from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import type { ProjectCardProps } from "@/types";
import CaseStudyModal from "./CaseStudyModal";

const ProjectCard = ({
  imgUrl,
  title,
  description,
  highlights,
  techStack,
  caseStudy,
  caseStudyLabels,
  caseStudyButtonLabel,
  closeLabel,
  gitUrl,
  previewUrl,
}: ProjectCardProps): React.ReactNode => {
  const [isCaseStudyOpen, setIsCaseStudyOpen] = useState(false);

  return (
    <div>
      <div className="aspect-video rounded-t-xl relative group overflow-hidden">
        <Image
          src={imgUrl}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {gitUrl || previewUrl ? (
          <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-card bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 z-10">
            {gitUrl && (
              <Link
                href={gitUrl}
                target="_blank"
                className="h-14 w-14 mr-2 border-2 relative rounded-full border-subtle hover:border-white group/link"
              >
                <CodeBracketIcon className="h-10 w-10 text-subtle absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
              </Link>
            )}
            {previewUrl && (
              <Link
                href={previewUrl}
                target="_blank"
                className="h-14 w-14 border-2 relative rounded-full border-subtle hover:border-white group/link"
              >
                <EyeIcon className="h-10 w-10 text-subtle absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
              </Link>
            )}
          </div>
        ) : null}
      </div>
      <div className="text-subtle-light rounded-b-xl mt-3 py-3">
        <h5 className="text-xl font-semibold mb-2 font-syne">{title}</h5>
        {highlights ? (
          <ul className="space-y-2 text-subtle md:text-lg">
            {highlights.map((highlight) => (
              <li key={highlight} className="flex gap-3 leading-relaxed">
                <span
                  className="mt-2 h-0 w-0 shrink-0 border-y-[4px] border-l-[6px] border-y-transparent border-l-brand"
                  aria-hidden="true"
                />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-subtle md:text-lg">{description}</p>
        )}
        <button
          type="button"
          onClick={() => setIsCaseStudyOpen(true)}
          className="mt-5 inline-flex items-center rounded-sm border border-brand-dark px-4 py-2 text-sm font-semibold text-brand transition-colors hover:border-brand hover:bg-brand/10 hover:text-brand-teal-light md:text-base"
        >
          {caseStudyButtonLabel}
        </button>
      </div>
      {isCaseStudyOpen && (
        <CaseStudyModal
          title={title}
          techStack={techStack}
          caseStudy={caseStudy}
          caseStudyLabels={caseStudyLabels}
          closeLabel={closeLabel}
          onClose={() => setIsCaseStudyOpen(false)}
        />
      )}
    </div>
  );
};

export default ProjectCard;
