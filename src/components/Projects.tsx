"use client"
import { useState, useRef } from "react"
import ProjectCard from "./ProjectCard"
import ProjectTag from "./ProjectTag"
import { motion, useInView } from "framer-motion"
import { useTranslations } from "next-intl"

type Project = {
  id: number
  titleKey: string
  descriptionKey: string
  image: string
  tag: string[]
  gitUrl: string
  previewUrl: string
}

const projectsData: Project[] = [
  {
    id: 8,
    titleKey: "projects.8.title",
    descriptionKey: "projects.8.description",
    image: "/images/projects/notes-app.png",
    tag: ["All", "Personal"],
    gitUrl: "https://github.com/kocmidovam/notes-app",
    previewUrl: "https://mellifluous-sawine-27161a.netlify.app/",
  },
  {
    id: 7,
    titleKey: "projects.7.title",
    descriptionKey: "projects.7.description",
    image: "/images/projects/Prospector.png",
    tag: ["All", "Work"],
    gitUrl: "",
    previewUrl: "https://www.bizmachine.com/en/prospector",
  },
  {
    id: 6,
    titleKey: "projects.6.title",
    descriptionKey: "projects.6.description",
    image: "/images/projects/sofian.png",
    tag: ["All", "Work"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 5,
    titleKey: "projects.5.title",
    descriptionKey: "projects.5.description",
    image: "/images/projects/socialbakers-main.png",
    tag: ["All", "Work"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 4,
    titleKey: "projects.4.title",
    descriptionKey: "projects.4.description",
    image: "/images/projects/socialbakers-careers.png",
    tag: ["All", "Work"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 3,
    titleKey: "projects.3.title",
    descriptionKey: "projects.3.description",
    image: "/images/projects/robotfriends.png",
    tag: ["All", "Personal"],
    gitUrl: "https://github.com/kocmidovam/Robofriends",
    previewUrl: "https://kocmidovam.github.io/Robofriends/",
  },
  {
    id: 2,
    titleKey: "projects.2.title",
    descriptionKey: "projects.2.description",
    image: "/images/projects/trillo.png",
    tag: ["All", "Personal"],
    gitUrl: "https://github.com/kocmidovam/Trillo",
    previewUrl: "https://kocmidovam.github.io/Trillo/",
  },
  {
    id: 1,
    titleKey: "projects.1.title",
    descriptionKey: "projects.1.description",
    image: "/images/projects/todo.png",
    tag: ["All", "Personal"],
    gitUrl: "https://github.com/kocmidovam/Todo-list",
    previewUrl: "https://kocmidovam.github.io/Todo-list/",
  },
  {
    id: 0,
    titleKey: "projects.0.title",
    descriptionKey: "projects.0.description",
    image: "/images/projects/rgb.png",
    tag: ["All", "Personal"],
    gitUrl: "https://github.com/kocmidovam/RGBgame",
    previewUrl: "https://kocmidovam.github.io/RGBgame/",
  },
]

const ProjectsSection = () => {
  const t = useTranslations()
  const [tag, setTag] = useState("All")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const handleTagChange = (newTag: string) => {
    setTag(newTag)
  }

  const filteredProjects = projectsData?.filter((project: Project) => project.tag.includes(tag))

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  }

  return (
    <section id='projects'>
      <h2 className='text-center text-4xl font-bold text-subtle-light  mt-4 md:mt-12 mb-10'>
        {t("projects.title")}
      </h2>
      <div className='text-white flex flex-row justify-center items-center gap-2 mb-6 md:mb-10'>
        <ProjectTag onClick={handleTagChange} name={t("projects.all")} value='All' isSelected={tag === "All"} />
        <ProjectTag onClick={handleTagChange} name={t("projects.work")} value='Work' isSelected={tag === "Work"} />
        <ProjectTag onClick={handleTagChange} name={t("projects.personal")} value='Personal' isSelected={tag === "Personal"} />
      </div>
      <ul ref={ref} className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12'>
        {filteredProjects.map((project: Project, index: number) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial='initial'
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}>
            <ProjectCard
              key={project.id}
              title={t(project.titleKey)}
              description={t(project.descriptionKey)}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  )
}

export default ProjectsSection
