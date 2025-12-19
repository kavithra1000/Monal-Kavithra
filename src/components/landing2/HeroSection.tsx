'use client'


import { ArrowDown } from 'lucide-react';
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section
      id="Home"
      className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden "
    >
      <div className="max-w-4xl mx-auto text-center relative ">
        {/* Heading */}
        <h1 className="title font-bold text-5xl mt-10 sm:mt-0 xl:mt-10 sm:text-6xl lg:text-7xl leading-tight mb-6">
          Hi<span className="inline-block animate-bounce">👋</span>, I&apos;m{' '}
          <span className="font-bold bg-linear-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Monal Kavithra.
          </span>
          <br />
          <span className=" block mt-3 text-5xl sm:text-6xl lg:text-7xl  text-zinc-300">
            I like building my ideas.
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="
            text-lg md:text-2xl text-zinc-400 mb-14 leading-relaxed
            max-w-[90%] sm:max-w-[80%] mx-auto text-center
          "
        >
          A passionate full-stack developer crafting modern, scalable web
          experiences with clean design and solid engineering.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-20 sm:mt-25">
          <a
            href="/Monal_Kavithra_CV.pdf"
            download="Monal_Kavithra_CV.pdf"
            className="flex gap-3 items-center px-8 py-4 rounded-2xl font-semibold text-white
              bg-linear-to-r from-indigo-500 to-purple-600
              hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            Download CV <ArrowDown />
          </a>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
