'use client'

import React from 'react'
import Image from 'next/image'

interface SidebarProps {
  scrollToSection: (sectionId: string) => void
}

const Sidebar: React.FC<SidebarProps> = ({ scrollToSection }) => {
  return (
    <div
      className="
        group
        w-80
        rounded-xl
        backdrop-blur-xl
        border border-zinc-800/70
        shadow-[0_0_30px_rgba(0,0,0,0.35)]
        transition-all duration-300
        flex flex-col justify-between
        hover:border-purple-500/30
        bg-zinc-950/60
      "
    >
      {/* ===== Profile ===== */}
      <div className="px-6 pt-6">
        <div className="relative w-20 h-20 mb-4">
          {/* Profile Image with border change on sidebar hover */}
          <div className="relative w-20 h-20 rounded-full overflow-hidden border border-zinc-700 transition-colors duration-300 group-hover:border-purple-500/30">
            <Image
              src="/your-image.png"
              alt="Monal Kavithra"
              width={96}
              height={96}
              className="object-cover"
            />
          </div>
        </div>

        <h2 className="text-lg font-semibold tracking-wide">
          Monal Kavithra
        </h2>

        <p className="text-zinc-400 text-sm mt-0.5">
          Software Engineering Student · SLIIT
        </p>

        <p className="text-zinc-500 text-sm leading-relaxed mt-3">
          Full-stack developer focused on building practical, scalable web
          applications with modern technologies.
        </p>

        {/* Middle line with border change on sidebar hover */}
        <div className="border-b border-zinc-800/70 my-5 transition-colors duration-300 group-hover:border-purple-500/30" />
      </div>

      {/* ===== Navigation ===== */}
      <div className="px-6 pb-6">
        <h3 className="text-zinc-500 font-medium mb-4 tracking-widest text-xs">
          NAVIGATION
        </h3>

        <ul className="flex flex-col gap-1">
          {['Home','About', 'Education', 'Projects', 'Skills', 'Contact'].map(
            (section) => (
              <li key={section}>
                <button
                  type="button"
                  onClick={() => scrollToSection(section)}
                  className="
                    group cursor-pointer
                    w-full text-left
                    px-3 py-2
                    rounded-md
                    capitalize
                    text-sm
                    text-zinc-300
                    transition-all duration-300
                    hover:bg-purple-500/10
                    hover:text-purple-400
                  "
                >
                  <span className="flex items-center gap-3">
                    <span
                      className="
                        w-1.5 h-1.5
                        rounded-full
                        bg-purple-400
                        opacity-0
                        group-hover:opacity-100
                        transition
                      "
                    />
                    {section}
                  </span>
                </button>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
