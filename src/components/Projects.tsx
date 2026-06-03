"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import { useTranslations } from "next-intl";
import type { Project } from "@/types";

const projectsData: Project[] = [
  {
    id: 0,
    titleKey: "projects.0.title",
    descriptionKey: "projects.0.description",
    highlightsKey: "projects.0.highlights",
    techStackKey: "projects.0.techStack",
    caseStudyKey: "projects.0.caseStudy",
    image: "/images/projects/prospector-cover.png",
    tag: ["All", "Work"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 1,
    titleKey: "projects.1.title",
    descriptionKey: "projects.1.description",
    highlightsKey: "projects.1.highlights",
    techStackKey: "projects.1.techStack",
    caseStudyKey: "projects.1.caseStudy",
    image: "/images/projects/case-management-cover.png",
    tag: ["All", "Work"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 2,
    titleKey: "projects.2.title",
    descriptionKey: "projects.2.description",
    highlightsKey: "projects.2.highlights",
    techStackKey: "projects.2.techStack",
    caseStudyKey: "projects.2.caseStudy",
    image: "/images/projects/sherwood-cover.png",
    tag: ["All", "Work"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 3,
    titleKey: "projects.3.title",
    descriptionKey: "projects.3.description",
    highlightsKey: "projects.3.highlights",
    techStackKey: "projects.3.techStack",
    caseStudyKey: "projects.3.caseStudy",
    image: "/images/projects/socialbakers-website-cover.png",
    tag: ["All", "Work"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 4,
    titleKey: "projects.4.title",
    descriptionKey: "projects.4.description",
    highlightsKey: "projects.4.highlights",
    techStackKey: "projects.4.techStack",
    caseStudyKey: "projects.4.caseStudy",
    image: "/images/projects/socialbakers-careers-cover.png",
    tag: ["All", "Work"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 5,
    titleKey: "projects.5.title",
    descriptionKey: "projects.5.description",
    techStackKey: "projects.5.techStack",
    caseStudyKey: "projects.5.caseStudy",
    image: "/images/projects/notes-app.png",
    tag: ["All", "Personal"],
    gitUrl: "https://github.com/kocmidovam/notes-app",
    previewUrl: "https://mellifluous-sawine-27161a.netlify.app/",
  },
  {
    id: 6,
    titleKey: "projects.6.title",
    descriptionKey: "projects.6.description",
    techStackKey: "projects.6.techStack",
    caseStudyKey: "projects.6.caseStudy",
    image: "/images/projects/robotfriends.png",
    tag: ["All", "Personal"],
    gitUrl: "https://github.com/kocmidovam/Robofriends",
    previewUrl: "https://kocmidovam.github.io/Robofriends/",
  },
  {
    id: 7,
    titleKey: "projects.7.title",
    descriptionKey: "projects.7.description",
    techStackKey: "projects.7.techStack",
    caseStudyKey: "projects.7.caseStudy",
    image: "/images/projects/trillo.png",
    tag: ["All", "Personal"],
    gitUrl: "https://github.com/kocmidovam/Trillo",
    previewUrl: "https://kocmidovam.github.io/Trillo/",
  },
  {
    id: 8,
    titleKey: "projects.8.title",
    descriptionKey: "projects.8.description",
    techStackKey: "projects.8.techStack",
    caseStudyKey: "projects.8.caseStudy",
    image: "/images/projects/todo.png",
    tag: ["All", "Personal"],
    gitUrl: "https://github.com/kocmidovam/Todo-list",
    previewUrl: "https://kocmidovam.github.io/Todo-list/",
  },
  {
    id: 9,
    titleKey: "projects.9.title",
    descriptionKey: "projects.9.description",
    techStackKey: "projects.9.techStack",
    caseStudyKey: "projects.9.caseStudy",
    image: "/images/projects/rgb.png",
    tag: ["All", "Personal"],
    gitUrl: "https://github.com/kocmidovam/RGBgame",
    previewUrl: "https://kocmidovam.github.io/RGBgame/",
  },
];

const ProjectsSection = (): React.ReactNode => {
  const t = useTranslations();
  const [tag, setTag] = useState<string>("All");
  const ref = useRef<HTMLUListElement>(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: string): void => {
    setTag(newTag);
  };

  const filteredProjects = projectsData?.filter((project: Project) =>
    project.tag.includes(tag),
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-subtle-light mt-4 md:mt-12 mb-10 font-syne">
        {t("projects.title")}
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 mb-6 md:mb-10">
        <ProjectTag
          onClick={handleTagChange}
          name={t("projects.all")}
          value="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name={t("projects.work")}
          value="Work"
          isSelected={tag === "Work"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name={t("projects.personal")}
          value="Personal"
          isSelected={tag === "Personal"}
        />
      </div>
      <ul
        ref={ref}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
      >
        {filteredProjects.map((project: Project, index: number) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={t(project.titleKey)}
              description={t(project.descriptionKey)}
              highlights={
                project.highlightsKey ? t.raw(project.highlightsKey) : undefined
              }
              techStack={t.raw(project.techStackKey)}
              caseStudy={t.raw(project.caseStudyKey)}
              caseStudyLabels={t.raw("projects.caseStudyLabels")}
              caseStudyButtonLabel={t("projects.caseStudyButton")}
              closeLabel={t("projects.closeCaseStudy")}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
