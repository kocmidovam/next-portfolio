"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="mb-7 lg:my-24">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-7 place-self-center self-start text-center sm:text-left justify-self-center sm:justify-self-start mb-5"
        >
          <h1 className="text-[#ccd6f6] mb-7 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-700 to-secondary-300">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={["Marta", 2000, "Frontend Developer", 2000]}
              wrapper="span"
              speed={30}
              repeat={Infinity}
            />
          </h1>
          <div className="px-10 sm:px-0">
            <Link
              href="#about"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-700 to-secondary-400 hover:bg-gradient-to-r text-white"
            >
              Know more
            </Link>
            <Link
              href="/kocmidova-cv.pdf"
              download
              target="_blank"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-600 to-secondary-400 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-5 place-self-center md:place-self-start mt-4 lg:mt-0 md:ml-auto"
        >
          <div className="rounded-full bg-[#181818] w-[240px] h-[240px] lg:w-[350px] lg:h-[350px] relative overflow-hidden">
            <Image
              src="/images/profile-photo.jpg"
              alt="hero image"
              className=" transform -translate-y-[42px]  lg:-translate-y-[60px] "
              width={350}
              height={350}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;