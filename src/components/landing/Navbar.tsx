'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const sections = ['Home', 'About', 'Education', 'Projects', 'Skills', 'Contact']

interface NavBarProps {
  activeSection: string
  setActiveSection: React.Dispatch<React.SetStateAction<string>>
  scrollToSection: (sectionId: string) => void
  isScrolled: boolean
  mobileMenuOpen: boolean
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const NavBar: React.FC<NavBarProps> = ({
  activeSection,
  scrollToSection,
  isScrolled,
  mobileMenuOpen,
  setMobileMenuOpen,
}) => {
  const [isXL, setIsXL] = useState(false)

  // Detect xl screens
  useEffect(() => {
    const checkScreen = () => setIsXL(window.innerWidth >= 1280)
    checkScreen()
    window.addEventListener('resize', checkScreen)
    return () => window.removeEventListener('resize', checkScreen)
  }, [])

  return (
    <nav
      className={`
        fixed top-0 w-full z-50 transition-all duration-500
        ${isXL && isScrolled ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}
        ${!isXL ? 'backdrop-blur-xl border-b border-zinc-800 bg-zinc-950/60' : ''}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div
          onClick={() => scrollToSection('Home')}
          className="cursor-pointer"
        >
          <Image src={'/logo.png'} alt='logo' width={40} height={30}/>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {sections.map((section) => {
            const isActive = activeSection === section
            return (
              <li key={section} className="relative">
                <button
                  type="button"
                  onClick={() => scrollToSection(section)}
                  className={`
                    text-sm font-medium transition-colors duration-300 cursor-pointer
                    ${isActive ? 'text-purple-400' : 'text-zinc-300 hover:text-white'}
                  `}
                >
                  {section}
                </button>

                {isActive && (
                  <span
                    className="
                      absolute -bottom-1 left-0 w-full h-0.5
                      bg-purple-400 rounded-full
                      shadow-[0_0_10px_rgba(168,85,247,0.8)]
                    "
                  />
                )}
              </li>
            )
          })}
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-zinc-200 p-2 rounded-lg hover:bg-zinc-800/60 transition"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-500
          ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
          bg-zinc-950/90 backdrop-blur-xl border-t border-zinc-800
        `}
      >
        <ul className="px-6 py-5 space-y-2">
          {sections.map((section) => (
            <li key={section}>
              <button
                onClick={() => {
                  scrollToSection(section)
                  setMobileMenuOpen(false)
                }}
                className={`
                  w-full text-left px-4 py-2 rounded-md text-sm transition
                  ${activeSection === section
                    ? 'text-purple-400 bg-purple-500/10'
                    : 'text-zinc-300 hover:text-white hover:bg-zinc-800/60'}
                `}
              >
                {section}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
