"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

type Project = {
  id: number
  title: string
  description: string
  image: string
  tag: string[]
  gitUrl: string
  previewUrl: string
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Sofian Eshop",
    description:
      "One of several projects as part of Sherwood Digital (and only public project)",
    image: "/images/projects/sofian.png",
    tag: ["All", "Work"],
    gitUrl: "",
    previewUrl: "https://eshop.sofian.cz/",
  },
  {
    id: 2,
    title: "Socialbakers Website",
    description:
      "The website of the Socialbakers company with CMS. We were transforming existing Socialbakers " +
      "website from PHP to Next.js. Not available anymore.",
    image: "/images/projects/socialbakers-main.png",
    tag: ["All", "Work"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 3,
    title: "Socialbakers Careers",
    description:
      "Careers website for Socialbakers. Standalone website with list of all open positions. " +
      "Can be filtered by Location or Department, connected to Greenhouse. Not available anymore.",
    image: "/images/projects/socialbakers-careers.png",
    tag: ["All", "Work"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 4,
    title: "Robotfriends",
    description:
      "This application generates a list of users from an API. The features include filtering users, " +
      "search box, scroll bar, loading time and error boundary message.",
    image: "/images/projects/robotfriends.png",
    tag: ["All", "Personal"],
    gitUrl: "https://github.com/kocmidovam/Robofriends",
    previewUrl: "https://kocmidovam.github.io/Robofriends/",
  },
  {
    id: 5,
    title: "Trillo",
    description:
      "Static HTML page with layout done with flexbox - no functionality. In this project I " +
      "learned not just flexbox but also working with Sass preprocessor, custom CSS properties, media queries, masks and SVG.",
    image: "/images/projects/trillo.png",
    tag: ["All", "Personal"],
    gitUrl: "https://github.com/kocmidovam/Trillo",
    previewUrl: "https://kocmidovam.github.io/Trillo/",
  },
  {
    id: 6,
    title: "Simple ToDo list",
    description:
      "jQuery based ToDo app that allows user to add, remove and check/uncheck tasks spiced with little CSS animations and effects.",
    image: "/images/projects/todo.png",
    tag: ["All", "Personal"],
    gitUrl: "https://github.com/kocmidovam/Todo-list",
    previewUrl: "https://kocmidovam.github.io/Todo-list/",
  },
  {
    id: 7,
    title: "RGB Game",
    description:
      "Nice little app for training RGB skills. Build with HTML, bit of CSS and JavaScript. I practiced DOM manipulation and event handling.",
    image: "/images/projects/rgb.png",
    tag: ["All", "Personal"],
    gitUrl: "https://github.com/kocmidovam/RGBgame",
    previewUrl: "https://kocmidovam.github.io/RGBgame/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: string) => {
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
      <h2 className="text-center text-4xl font-bold text-[#dbe2f8]  mt-4 md:mt-12 mb-10">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 mb-6 md:mb-10">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Work"
          isSelected={tag === "Work"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Personal"
          isSelected={tag === "Personal"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
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
              title={project.title}
              description={project.description}
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
