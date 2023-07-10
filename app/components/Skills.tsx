"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Html from "../../public/html.png";
import Firebase from "../../public/firebase.png";
import Css from "../../public/css.png";
import Javascript from "../../public/javascript.png";
import ReactImg from "../../public/react.png";
import Github from "../../public/gb.png";
import Mongo from "../../public/mongo.png";
import NextJS from "../../public/nextjs.png";

import React from "react";

const Skills = () => {
  return (
    <motion.div
      id="skills"
      className="mx-auto flex flex-col justify-center h-full w-full my-4"
      initial="initial"
      whileInView="animate"
      variants={SkillsAnimation}
    >
      <div className="grid gird-cols-2 lg:grid-cols-4 gap-8">
        <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-200">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="mx-auto">
              <Image src={Html} width="64" height="64" alt="/" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-[#d9d9d9] font-medium">HTML</h3>
            </div>
          </div>
        </div>

        <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-200">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="mx-auto">
              <Image src={Firebase} width="64" height="64" alt="/" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-[#d9d9d9] font-medium">Firebase</h3>
            </div>
          </div>
        </div>

        <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-200">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="mx-auto">
              <Image src={Css} width="64" height="64" alt="/" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-[#d9d9d9] font-medium">CSS</h3>
            </div>
          </div>
        </div>

        <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-200">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="mx-auto">
              <Image src={Javascript} width="64" height="64" alt="/" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-[#d9d9d9] font-medium">JavaScript</h3>
            </div>
          </div>
        </div>

        <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-200">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="mx-auto">
              <Image src={ReactImg} width="64" height="64" alt="/" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-[#d9d9d9] font-medium">React</h3>
            </div>
          </div>
        </div>

        <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-200">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="mx-auto">
              <Image src={Github} width="64" height="64" alt="/" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-[#d9d9d9] font-medium">Github</h3>
            </div>
          </div>
        </div>

        <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-200">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="mx-auto">
              <Image src={NextJS} width="64" height="64" alt="/" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-[#d9d9d9] font-medium">NextJs</h3>
            </div>
          </div>
        </div>

        <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-200">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="mx-auto">
              <Image src={Mongo} width="64" height="64" alt="/" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-[#d9d9d9] font-medium">Mongo</h3>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const SkillsAnimation = {
  initial: {
    y: 30,
    opacity: 0,
    scale: 0.9,
  },
  animate: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 0.8,
    },
  },
};

export default Skills;
