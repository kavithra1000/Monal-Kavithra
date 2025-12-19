'use client'

import React from 'react';

interface NavBarProps {
  activeSection: string;
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
  scrollToSection: (sectionId: string) => void;
  isScrolled: boolean;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavBar: React.FC<NavBarProps> = ({
  activeSection,
  scrollToSection,
  isScrolled,
  mobileMenuOpen,
  setMobileMenuOpen,
}) => {
  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-700
        ${isScrolled ? 'hidden' : 'bg-transparent'}
        max-xl:bg-zinc-950/40 max-xl:backdrop-blur-xl max-xl:border-b max-xl:border-zinc-800/60
      `}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-4xl font-bold bg-linear-to-r from-purple-500 to-blue-600 bg-clip-text text-transparent story-script-regular">
          monal.
        </div>

        {/* Desktop Menu (UNCHANGED) */}
        <ul className="hidden md:flex gap-8">
          {['Home','Education', 'Projects', 'Skills', 'Contact'].map((section) => (
            <li key={section} className="relative">
              <button
                type="button"
                onClick={() => scrollToSection(section)}
                className={`capitalize transition-colors cursor-pointer duration-300
                  ${activeSection === section
                    ? 'text-purple-500'
                    : 'text-white hover:text-purple-400'}
                `}
              >
                {section}
              </button>

              {/* Active indicator */}
              {activeSection === section && (
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-purple-500" />
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          type="button"
          title="Menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white p-2 rounded-lg hover:bg-zinc-800/60 transition"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-zinc-950/90 backdrop-blur-xl border-t border-zinc-800">
          <ul className="px-6 py-5 space-y-3">
            {['home', 'projects', 'skills', 'contact'].map((section) => (
              <li key={section}>
                <button
                  onClick={() => {
                    scrollToSection(section);
                    setMobileMenuOpen(false);
                  }}
                  className={`capitalize w-full text-left px-3 py-2 rounded-md transition
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
      )}
    </nav>
  );
};

export default NavBar;
