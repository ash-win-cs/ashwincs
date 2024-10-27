import React from "react";
import Image from "next/image";

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
            Hi, I&apos;m <span className="text-blue-400 text-nowrap">Ashwin C S</span>
          </span>
          <p className="mt-2">
            Software Engineer crafting seamless experiences with Angular, React,
            and .NET. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
