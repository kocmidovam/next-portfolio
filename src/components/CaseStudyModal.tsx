"use client";

import React, { useEffect, useId } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import type { ProjectCaseStudyModalProps } from "@/types";

const CaseStudyModal = ({
  title,
  techStack,
  caseStudy,
  caseStudyLabels,
  closeLabel,
  onClose,
}: ProjectCaseStudyModalProps): React.ReactNode => {
  const titleId = useId();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-x-0 bottom-0 top-[68px] z-[100] flex items-center justify-center bg-background/85 px-4 py-6 backdrop-blur-sm md:top-[72px]"
      role="presentation"
      onMouseDown={onClose}
    >
      <article
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="project-case-study-scrollbar relative max-h-[88vh] w-full max-w-5xl overflow-y-auto rounded-lg border border-brand-dark bg-background shadow-[0_0_40px_rgba(34,211,238,0.18)]"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          aria-label={closeLabel}
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full border border-subtle-dim p-2 text-subtle transition-colors hover:border-brand hover:text-brand"
        >
          <XMarkIcon className="h-5 w-5" />
        </button>

        <div className="p-5 md:p-7 lg:p-8">
          <header className="pr-12">
            <h3
              id={titleId}
              className="font-exo2 text-3xl font-extrabold text-foreground md:text-4xl"
            >
              {title}
            </h3>
            <p className="mt-3 font-mono text-xs font-bold uppercase tracking-[0.18em] text-brand md:text-sm">
              {caseStudy.subtitle}
            </p>
          </header>

          <dl className="mt-5 flex flex-wrap gap-x-8 gap-y-2 border-y border-divider py-4">
            <div className="flex items-baseline gap-2">
              <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-subtle-dim">
                {caseStudyLabels.type}
              </dt>
              <dd className="text-sm font-bold text-foreground md:text-base">
                {caseStudy.type}
              </dd>
            </div>
            <div className="flex items-baseline gap-2">
              <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-subtle-dim">
                {caseStudyLabels.year}
              </dt>
              <dd className="text-sm font-bold text-foreground md:text-base">
                {caseStudy.year}
              </dd>
            </div>
            <div className="flex items-baseline gap-2">
              <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-subtle-dim">
                {caseStudyLabels.role}
              </dt>
              <dd className="text-sm font-bold text-foreground md:text-base">
                {caseStudy.role}
              </dd>
            </div>
            <div className="flex flex-wrap items-baseline gap-2">
              <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-subtle-dim">
                {caseStudyLabels.stack}
              </dt>
              <dd className="flex flex-wrap gap-1.5">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-brand-dark bg-card px-2 py-0.5 text-xs font-semibold text-subtle-light"
                  >
                    {tech}
                  </span>
                ))}
              </dd>
            </div>
          </dl>

          <div className="mt-6 space-y-8">
            {caseStudy.overview && (
              <section>
                <h4 className="font-mono text-sm font-bold uppercase tracking-[0.35em] text-brand">
                  {caseStudyLabels.overview}
                </h4>
                <div className="mt-4 space-y-4">
                  {caseStudy.overview.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-base leading-relaxed text-subtle md:text-lg"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            )}
            {caseStudy.problem && (
              <section>
                <h4 className="font-mono text-sm font-bold uppercase tracking-[0.35em] text-brand">
                  {caseStudyLabels.problem}
                </h4>
                <p className="mt-4 text-base leading-relaxed text-subtle md:text-lg">
                  {caseStudy.problem}
                </p>
              </section>
            )}
            <section>
              <h4 className="font-mono text-sm font-bold uppercase tracking-[0.35em] text-brand">
                {caseStudyLabels.myRole}
              </h4>
              <p className="mt-4 text-base leading-relaxed text-subtle md:text-lg">
                {caseStudy.myRole}
              </p>
            </section>
            {caseStudy.workSections && (
              <section>
                <h4 className="font-mono text-sm font-bold uppercase tracking-[0.35em] text-brand">
                  {caseStudyLabels.whatIWorkedOn}
                </h4>
                <div className="mt-5 space-y-7">
                  {caseStudy.workSections.map((section) => (
                    <div key={section.title}>
                      <h5 className="text-xl font-bold text-foreground">
                        {section.title}
                      </h5>
                      <div className="mt-3 space-y-4">
                        {section.paragraphs.map((paragraph) => (
                          <p
                            key={paragraph}
                            className="text-base leading-relaxed text-subtle md:text-lg"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
            {caseStudy.whatIDid && (
              <section>
                <h4 className="font-mono text-sm font-bold uppercase tracking-[0.35em] text-brand">
                  {caseStudyLabels.whatIDid}
                </h4>
                <ul className="mt-4 space-y-3">
                  {caseStudy.whatIDid.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-base leading-relaxed text-subtle md:text-lg"
                    >
                      <span
                        className="mt-2 h-0 w-0 shrink-0 border-y-[5px] border-l-[7px] border-y-transparent border-l-brand"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
            {caseStudy.outcome && (
              <section>
                <h4 className="font-mono text-sm font-bold uppercase tracking-[0.35em] text-brand">
                  {caseStudyLabels.outcome}
                </h4>
                <p className="mt-4 text-base leading-relaxed text-subtle md:text-lg">
                  {caseStudy.outcome}
                </p>
              </section>
            )}
            {caseStudy.whatILearned && (
              <section>
                <h4 className="font-mono text-sm font-bold uppercase tracking-[0.35em] text-brand">
                  {caseStudyLabels.whatILearned}
                </h4>
                <p className="mt-4 text-base leading-relaxed text-subtle md:text-lg">
                  {caseStudy.whatILearned}
                </p>
              </section>
            )}
            {caseStudy.whyItMattered && (
              <section>
                <h4 className="font-mono text-sm font-bold uppercase tracking-[0.35em] text-brand">
                  {caseStudyLabels.whyItMattered}
                </h4>
                <p className="mt-4 text-base leading-relaxed text-subtle md:text-lg">
                  {caseStudy.whyItMattered}
                </p>
              </section>
            )}
            {caseStudy.projectShows && (
              <section>
                <h4 className="font-mono text-sm font-bold uppercase tracking-[0.35em] text-brand">
                  {caseStudyLabels.projectShows}
                </h4>
                <p className="mt-4 text-base leading-relaxed text-subtle md:text-lg">
                  {caseStudy.projectShows}
                </p>
              </section>
            )}
          </div>
        </div>
      </article>
    </div>
  );
};

export default CaseStudyModal;
