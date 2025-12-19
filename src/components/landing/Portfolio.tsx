'use client'

import React, { useState, useEffect } from 'react';
import NavBar from './Navbar';
import HeroSection from './HeroSection';
import ProjectsSection from './ProjectSecton';
import SkillsSection from './SkillSection';
import ContactSection from './ContactSection';
import Sidebar from './Sidebar';
import Education from './Education';
import About from './About';

const Portfolio: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      source: '/git-icon/mchat.png',
      id: 1,
      title: 'Chat-GPT Message Store Extension',
      description: 'A browser extension that stores and organizes ChatGPT messages in an interactive container.',
      tags: ['JavaScript', 'HTML', 'CSS'],
      githubLink: 'https://github.com/kavithra1000/MChat-Browser-Extension',
      public: true
    },
    {
      source: '/git-icon/livedoc.png',
      id: 2,
      title: 'LiveDoc-Live collobarating platform',
      description: 'A real-time document creating and shairing app liveblocks integration for instant communication.',
      tags: ['JavaScript', 'HTML', 'CSS'],
      githubLink: 'https://github.com/kavithra1000/LiveDocs',
      public: true
    },
    {

      source: '/git-icon/chat.png',
      id: 3,
      title: 'Chat Application (MERN Stack)',
      description: 'A real-time messaging app with private chat and WebSocket integration for instant communication.',
      tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Socket.io', 'JWT Authentication'],
      githubLink: 'https://github.com/kavithra1000/fullstack-chat-app',
      public: true
    },
    {

      source: '/git-icon/B-Tech.png',
      id: 4,
      title: 'E-Commerce Website for Printer Shop - B Tech',
      description: 'A full-stack e-commerce solution with user authentication, shopping cart functionality, and payment integration.',
      tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT Authentication'],
      githubLink: 'https://github.com/kavithra1000/B-Tech-Printers',
      public: true
    },
    {
      source: '/git-icon/doculence.png',
      id: 5,
      title: 'DocuLens (Web Content Extraction & AI Chat Tool) - Frontend',
      description: 'A platform for extracting, summarizing, and interacting with web content through AI-powered chat.',
      tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT Authentication', 'OpenAI API', 'Zustand'],
      githubLink: 'https://github.com/kavithra1000/doculence-ai-frontend',
      public: true
    },
    {
      source: '/git-icon/doculence.png',
      id: 6,
      title: 'DocuLens (Web Content Extraction & AI Chat Tool) - Backend',
      description: 'A platform for extracting, summarizing, and interacting with web content through AI-powered chat.',
      tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT Authentication', 'OpenAI API', 'Zustand'],
      githubLink: 'https://github.com/kavithra1000/doculence-ai-backend',
      public: true
    },
    {

      source: '/git-icon/cocktail.png',
      id: 7,
      title: 'Mojito Cocktail Landing Page with GSAP Animations - Frontend',
      description: 'A dynamic landing page for a cocktail shop featuring smooth animations with GSAP and a modern UI built with React and Tailwind CSS.',
      tags: ['React.js', 'GSAP', 'Tailwind CSS'],
      githubLink: 'https://github.com/kavithra1000/mojito-cocktail',
      public: true
    },
    {

      source: '/git-icon/git.png',
      id: 8,
      title: 'Web Summarizer Extension',
      description: 'A browser extension that summarizes web content into short, bullet, or long formats using the Gemini API.',
      tags: ['JavaScript', 'HTML', 'CSS', 'Gemini API'],
      githubLink: 'https://github.com/kavithra1000/Pocket-GPT-Browser-Extension',
      public: true
    },
  ];




  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="fixed inset-0 bg-linear-to-br z-10 from-purple-500/10 via-transparent to-pink-500/10 animate-pulse animate-8s scroll-smooth" />
      <div className="fixed inset-0 bg-linear-to-br z-10 from-purple-500/10 via-transparent to-pink-500/10 animate-pulse animate-8s scroll-smooth" />

      <div className="relative min-h-screen bg-zinc-950 text-white required:">
        <div className="relative z-11">
          <NavBar
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            scrollToSection={scrollToSection}
            isScrolled={isScrolled}
            mobileMenuOpen={mobileMenuOpen}
            setMobileMenuOpen={setMobileMenuOpen}
          />
          <HeroSection />

          <div className="flex relative pt-24 md:pt-0 xl:px-40 xl:gap-18">
            {/* Sidebar */}
            <div className=" hidden sticky h-screen top-0 left-0 bottom-50 bg w-fit xl:flex justify-end items-center py-20">
              <Sidebar scrollToSection={scrollToSection} />
            </div>

            {/* Main Content Area */}
            <div className="flex-1 ml-0">
              <About />
              <Education />
              <ProjectsSection projects={projects} />
              <SkillsSection />
            </div>
          </div>

          <ContactSection />
        </div>

      </div>
    </>
  );
};

export default Portfolio;
