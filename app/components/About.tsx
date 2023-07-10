import React from "react";
import { SocialButton } from "./SocialButton";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillDribbbleCircle,
} from "react-icons/ai";

const About = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4 mt-24">
      <div className="backdrop-blur-xl h-[30rem] rounded-xl p-10 flex flex-col gap-16 bg-[url('/gradient-bg.png')] bg-right">
        <h1
          id="about"
          className="md:text-3xl font-semibold text-[#d9d9d9] text-lg"
        >
          Hallo, I'am Software Enginer and Ui Designer with 1 year of experience
        </h1>
        <p className="flex-1 text-[#d9d9d9] md:text-xl text-base text-start font-thin">
          I care a lot about using design and tech stack performance for
          positive impact and enjoy creating user-centric, delightfull, and
          human experience
        </p>

        <div className="flex flex-col lg:flex-row items-center gap-4 justify-self-end">
          <button className="bg-slate-950 text-[#d9d9d9] font-medium md:py-3 md:px-12 py-2 px-8 rounded-full w-60 lg:w-auto hover:bg-slate-900 transition duration-200 ease-in-out">
            Contact me
          </button>

          <div className="flex items-center gap-4">
            <SocialButton bgColor="dribble">
              <AiFillDribbbleCircle className="w-5 h-5 mx-auto" />
            </SocialButton>
            <SocialButton bgColor="linkedin">
              <AiFillLinkedin className="w-5 h-5 mx-auto" />
            </SocialButton>
            <SocialButton bgColor="instagram">
              <AiFillInstagram className="w-5 h-5 mx-auto" />
            </SocialButton>
          </div>
        </div>
      </div>
      <div>
        <div className="h-[30rem] p-10 bg-[url('/gue.png')] bg-cover bg-center" />
      </div>
    </section>
  );
};

export default About;
