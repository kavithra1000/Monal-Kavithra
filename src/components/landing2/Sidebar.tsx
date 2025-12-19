'use client'

import React from 'react';
import Image from 'next/image';

interface SidebarProps {
  scrollToSection: (sectionId: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ scrollToSection }) => {
  return (
    <div className="
      border border-zinc-800 rounded-xl w-80
      bg-zinc-900/60 backdrop-blur-xl
      shadow-[0_0_40px_rgba(0,0,0,0.4)]
      transition-all duration-300
      flex flex-col justify-between
      hover:border-purple-500/30
    ">

      {/* ===== Profile ===== */}
      <div className="px-6 pt-6">
        <div className="relative w-20 h-20 mb-4">
          {/* glow */}
          <div className="absolute inset-0 rounded-full bg-purple-500/30 blur-xl opacity-0 group-hover:opacity-100 transition" />
          
          <div className="relative w-20 h-20 rounded-full overflow-hidden border border-zinc-700">
            <Image
              src="/your-image.png"
              alt="Monal Kavithra"
              width={96}
              height={96}
              className="object-cover"
            />
          </div>
        </div>

        <h2 className="text-xl font-semibold mb-1 tracking-wide">
          Monal Kavithra
        </h2>

        <p className="text-zinc-400 text-sm mb-2">
          Software Engineering Student @ SLIIT
        </p>

        <p className="text-zinc-500 text-sm leading-relaxed">
          Full-Stack Developer specializing in scalable solutions with modern web & DevOps practices.
        </p>

        <div className="border-b border-zinc-800 my-4" />
      </div>

      {/* ===== Navigation ===== */}
      <div className="px-6 pb-6">
        <h3 className="text-zinc-400 font-semibold mb-4 tracking-wider text-sm">
          NAVIGATION
        </h3>

        <ul className="flex flex-col gap-1">
          {['home', 'education', 'projects', 'skills', 'contact'].map((section) => (
            <li key={section}>
              <button
                type="button"
                onClick={() => scrollToSection(section)}
                className="cursor-pointer
                  group w-full text-left px-3 py-2 rounded-md capitalize
                  text-zinc-300
                  transition-all duration-300
                  hover:bg-purple-500/10
                  hover:text-purple-400
                  hover:translate-x-1
                "
              >
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500 opacity-0 group-hover:opacity-100 transition" />
                  {section}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default Sidebar;
