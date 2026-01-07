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
import ProgressBar from './Progressbar';

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
      source: '/git-icon/FinanceFlow.png',
      id: 1,
      title: 'AI-Based Financial Document Processing Tool',
      description: 'AI-assisted system to extract and normalize transaction data from bank statement PDFs',
      tags: ['TypeScript', 'Nextjs', 'Tailwind', 'Clerk', 'Neondb'],
      githubLink: 'https://github.com/kavithra1000/FinanceFlow',
      public: true,
      inProgress: false,
    },
    {
      source: '/git-icon/mchat.png',
      id: 2,
      title: 'Chat-GPT Message Store Extension',
      description: 'A browser extension that stores and organizes ChatGPT messages in an interactive container.',
      tags: ['JavaScript', 'HTML', 'CSS'],
      githubLink: 'https://github.com/kavithra1000/MChat-Browser-Extension',
      public: true,
      inProgress: false,
    },
    
    {
      source: '/git-icon/chat.png',
      id: 3,
      title: 'Chat Application (MERN Stack)',
      description: 'A real-time messaging app with private chat and WebSocket integration for instant communication.',
      tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Socket.io', 'JWT Authentication'],
      githubLink: 'https://github.com/kavithra1000/fullstack-chat-app',
      public: true,
      inProgress: false,
    },
    {
      source: '/git-icon/B-Tech.png',
      id: 4,
      title: 'E-Commerce Website for Printer Shop - B Tech',
      description: 'A full-stack e-commerce solution with user authentication, shopping cart functionality, and payment integration.',
      tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT Authentication'],
      githubLink: 'https://github.com/kavithra1000/B-Tech-Printers',
      public: true,
      inProgress: false,
    },
    {
      source: '/git-icon/doculence.png',
      id: 5,
      title: 'DocuLens (Frontend) - Web Content Extraction & AI Chat Tool',
      description: 'A platform for extracting, summarizing, and interacting with web content through an AI-powered chat interface.',
      tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT Authentication', 'OpenAI API', 'Zustand'],
      githubLink: 'https://github.com/kavithra1000/doculence-ai-frontend',
      public: true,
      inProgress: true,
    },
    {
      source: '/git-icon/doculence.png',
      id: 6,
      title: 'DocuLens (Backend) - Web Content Extraction & AI Chat Tool',
      description: 'The backend of a platform for extracting, summarizing, and interacting with web content through an AI-powered chat interface.',
      tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT Authentication', 'OpenAI API', 'Zustand'],
      githubLink: 'https://github.com/kavithra1000/doculence-ai-backend',
      public: true,
      inProgress: true,
    },
    {
      source: '/git-icon/cocktail.png',
      id: 7,
      title: 'Mojito Cocktail Landing Page - Frontend',
      description: 'A dynamic landing page for a cocktail shop with smooth GSAP animations and a modern UI built with React and Tailwind CSS.',
      tags: ['React.js', 'GSAP', 'Tailwind CSS'],
      githubLink: 'https://github.com/kavithra1000/mojito-cocktail',
      public: true,
      inProgress: false,
    },
    {
      source: '/git-icon/git.png',
      id: 8,
      title: 'Web Summarizer Extension',
      description: 'A browser extension that summarizes web content into short, bullet, or long formats using the Gemini API.',
      tags: ['JavaScript', 'HTML', 'CSS', 'Gemini API'],
      githubLink: 'https://github.com/kavithra1000/Pocket-GPT-Browser-Extension',
      public: true,
      inProgress: false,
    },
    {
      source: '/git-icon/livedoc.png',
      id: 9,
      title: 'LiveDoc - Live Collaboration Platform',
      description: 'A real-time document creation and sharing app with Liveblocks integration for instant collaboration.',
      tags: ['JavaScript', 'HTML', 'CSS'],
      githubLink: 'https://github.com/kavithra1000/LiveDocs',
      public: true,
      inProgress: true,
    },
  ]

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
      <ProgressBar/>
      <div className="fixed inset-0 bg-linear-to-br z-10 from-purple-500/10 via-transparent to-pink-500/10 animate-pulse animate-8s scroll-smooth" />
      <div className="fixed inset-0 bg-linear-to-br z-10 from-purple-500/10 via-transparent to-pink-500/10 animate-pulse animate-8s scroll-smooth" />

      <div className="relative min-h-screen bg-zinc-950 text-white required: ">
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
