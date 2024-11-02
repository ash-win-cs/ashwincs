import React from "react";
import Image from "next/image";
import { socialHandles } from "./../models/skillsModel";
import * as Icons from "react-icons/fa";

const socials: Array<socialHandles> = [
  {
    id: 1,
    socialIconName: "FaGithub",
    socialUrl: "https://github.com/ash-win-cs",
  },
  {
    id: 2,
    socialIconName: "FaEnvelope",
    socialUrl: "mailto:ashwincsuresh@outlook.com",
  },
  {
    id: 3,
    socialIconName: "FaLinkedin",
    socialUrl: "https://www.linkedin.com/in/ashwin-c-s/",
  },
  {
    id: 4,
    socialIconName: "FaWhatsapp",
    socialUrl: `https://wa.me/+917559055760?text=${encodeURIComponent(
      "Hi, I would like to connect with you!"
    )}`,
  },
];

const DynamicFaIcon = ({ fname }) => {
  const IconComponent = Icons[fname];
  if (!IconComponent) {
    return <Icons.FaBeer size={30} />;
  }
  return <IconComponent size={30} />;
};

const HeroSection = () => {
  return (
    <section>
      <div className="grid sm:grid-cols-2 gap-1 m-3 min-h-screen ">
        <div className="w-full flex items-center justify-center sm:order-2">
          <Image
            src="/home/ashwin.svg"
            alt={"ashwin"}
            width={400}
            height={400}
            className="-z-10"
          ></Image>
        </div>
        <div className="p-5 content-center sm:order-1">
          <span className="text-5xl font-bold line-clamp-2 sm:line-clamp-2 ">
            Hi, I&apos;m{" "}
            <span className="text-blue-400 text-nowrap">Ashwin C S</span>
          </span>
          <p className="mt-2">
            I’m a Software Engineer with a passion for creating meaningful
            solutions. Right now at <strong>GE HealthCare</strong>, I work with
            Angular, Ionic, and TypeScript to develop mobile applications for
            clinical usage. I love tackling problems from a broader perspective.
            To me, software engineering isn’t just about coding; it’s about
            understanding the entire journey, from development and testing to
            DevOps.
          </p>
          <div className="flex flex-row  max-w-xl mx-auto justify-between md:justify-start">
            {socials.map(({ id, socialIconName, socialUrl }) => (
              <div key={id} className="m-5 ml-0 flex items-center ">
                <a href={socialUrl} target="_blank" rel="noopener noreferrer">
                  <DynamicFaIcon fname={socialIconName} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
