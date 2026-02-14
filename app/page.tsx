import React from "react";
import { Navbar } from "../components/Navbar";
import { Spotlight } from "../components/ui/Spotlight";
import { Projects } from "../components/Projects";
import { TechStack } from "../components/TechStack";
import { Contact } from "../components/Contact";

export default function Home() {
  return (
    <main className="relative bg-black-space flex justify-center items-center flex-col overflow-hidden mx-auto">

      {/* 1. Navbar hamesha top par rahega */}
      <Navbar />

      {/* 2. Hero Section Container */}
      <div id="about" className="h-screen w-full flex items-center justify-center relative bg-black-space antialiased">

        {/* Spotlight Effect - Background mein light beam */}
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />

        {/* Main Content Area */}
        <div className="p-4 max-w-7xl mx-auto relative z-10 w-full flex flex-col items-center justify-center">

          {/* Subtle Sub-heading */}
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80 mb-4">
            Modern Web Experiences with Next.js
          </p>

          {/* Title: Building the Future */}
          <h1 className="font-orbitron text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 leading-tight">
            Building the <span className="text-neon">Future</span> <br />
            one line at a time.
          </h1>

          {/* Description */}
          <p className="mt-6 font-normal text-base md:text-lg text-neutral-300 max-w-lg text-center mx-auto">
            Hi! I&apos;m a Mechanical Engineer at DTU , Name : Satyam Yadav . I transform complex ideas into
            seamless digital realities with a touch of <span className="text-neon">neon</span>.
          </p>

          {/* 3. Resume Button with Glow Effect */}
          <div className="mt-10">
            <a href="/resume.pdf" download="Satyam_Yadav_Resume.pdf" className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none group">
              {/* Button Border Animation (Glow) */}
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00f0ff_0%,#393BB2_50%,#00f0ff_100%)]" />

              {/* Button Inner Content */}
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl font-orbitron group-hover:bg-transparent transition-all">
                DOWNLOAD RESUME
              </span>
            </a>
          </div>

        </div>
      </div>

      <TechStack />
      <Projects />
      <Contact />

      {/* Grid Background (Optional but Recommended) */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-black-space [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="h-full w-full bg-grid-white/[0.03]"></div>
      </div>

    </main>
  );
}