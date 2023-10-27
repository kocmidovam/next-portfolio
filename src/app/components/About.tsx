"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA: any = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2 text-[#ccd6f6] mx-[0.5rem]">
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
      <ul className="list-disc pl-2 text-[#ccd6f6] mx-[0.5rem]">
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
      <ul className="list-disc pl-2 text-[#ccd6f6] mx-[0.5rem]">
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
      <div className="md:grid md:grid-cols-2 gap-8 py-8 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-img.png"
          width={500}
          height={500}
          alt=""
          className="hidden md:block md:mt-16 rounded-lg"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-[#dbe2f8] mb-4">About Me</h2>
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
          <div className="flex flex-row justify-start mt-8">
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
            {TAB_DATA.find((t: any) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
