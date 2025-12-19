'use client'

import { Mail } from 'lucide-react';
import React from 'react';

const socials = [
  {
    name: 'GitHub',
    link: 'https://github.com/kavithra1000'
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/monal-kavithra/'
  },
  {
    name: 'Twitter',
    link: ''
  },
  {
    name: 'Dribbble',
    link: ''
  }
];

const ContactSection: React.FC = () => {
  return (
    <section
      id="Contact"
      className="h-screen w-full flex flex-col items-center px-6 pt-32"
    >
      {/* Main Content */}
      <div className="max-w-3xl mx-auto flex-1 mt-10">
        <div className="text-center">
          <h2 className="text-5xl xl:text-7xl font-bold mb-6">
            Get In{' '}
            <span className="bg-linear-to-r from-purple-500 to-blue-600 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>

          <p className="text-lg md:text-xl text-zinc-400 mb-20 leading-relaxed">
            I&apos;m always open to new opportunities, collaborations, or just a
            friendly chat. Feel free to reach out — I’d love to hear from you.
          </p>

          {/* Primary CTA */}
          <a
            href="mailto:monalwickramasinghe@gmail.com"
            className="w-full max-w-60 px-6 py-4 rounded-full font-semibold text-white
            bg-linear-to-r from-indigo-500 to-purple-600
            hover:scale-105 transition-all duration-300
            hover:shadow-lg mb-12 flex items-center justify-center gap-2 mx-auto animate-bounce"
          >
            <span>Send Me an Email</span>
            <Mail size={24} />
          </a>

          {/* Social Links */}
          <div className="flex justify-center gap-8 text-base md:text-lg">
            {socials.map(
              (social) =>
                social.link && (
                  <a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative text-zinc-400 transition-colors duration-300
                      hover:text-purple-400 after:absolute after:left-0 after:-bottom-1
                      after:h-0.5 after:w-0 after:bg-purple-400
                      hover:after:w-full after:transition-all after:duration-300"
                  >
                    {social.name}
                  </a>
                )
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full py-8 border-t border-zinc-800 text-center text-sm text-zinc-500">
        <p>&copy; 2025 Monal Kavithra. Built with passion ☕</p>
      </footer>
    </section>
  );
};

export default ContactSection;
