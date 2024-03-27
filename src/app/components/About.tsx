"use client";
import React, {useTransition, useState, ReactElement} from "react";
import Image from "next/image";
import TabButton from "./TabButton";

type Tab = {
  title: string
  id: string
  content: ReactElement
}

const TAB_DATA: Tab[] = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2 text-[#ccd6f6] mx-[0.5rem] lg:text-lg">
        <li>React</li>
        <li>Redux</li>
        <li>NextJs</li>
        <li>TypeScript</li>
        <li>JavaScript</li>
        <li>REST API</li>
        <li>HTML & CSS/SCSS</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2 text-[#ccd6f6] mx-[0.5rem] lg:text-lg">
        <li>Frontend Developer Hatchery, Unicorn</li>
        <li>The Complete Web Developer, Udemy</li>
        <li>Secondary industrial school of clothing</li>
      </ul>
    ),
  },
  {
    title: "Certificates",
    id: "certificates",
    content: (
      <ul className="list-disc pl-2 text-[#ccd6f6] mx-[0.5rem] lg:text-lg">
        <li>First Certificate in English, University of Cambridge</li>
      </ul>
    ),
  },
];

const About = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-14 pb-8 pt-8 md:pt-24 xl:gap-16 sm:pb-16 xl:px-16">
          <Image
              src="/images/about-img.png"
              width={500}
              height={500}
              alt=""
              className="transition duration-500 shadow-[10px_10px_22px_0_rgba(45,212,191,0.96)] hover:shadow-[12px_12px_5px_2px_rgba(45,212,191,0.96)] hidden md:block md:mt-24 rounded-lg "
          />

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-[#dbe2f8] mb-10">About Me</h2>
          <p className="text-[#dbe2f8] lg:text-lg">
            I am Marta, a Frontend Developer with a passion for creating
            intuitive and dynamic user experiences. I have an understanding of
            JavaScript, CSS, HTML, and various libraries and frameworks like
            React or NextJs with TypeScript.{" "}
          </p>
          <br></br>
          <p className="text-[#dbe2f8] lg:text-lg">
            My experience includes working on several web development projects
            where I was responsible for creating responsive and interactive
            websites. I am always eager to learn new technologies and improve my
            skills.
          </p>
          <div className="flex flex-row justify-start mt-8 lg:text-lg">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certificates")}
              active={tab === "certificates"}
            >
              {" "}
              Certificates{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA?.find((t: Tab) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
