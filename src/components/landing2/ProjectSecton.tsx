'use client'

import React, { useEffect, useRef, useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

interface Project {
  source: string;
  id: number;
  title: string;
  description: string;
  tags: string[];
  githubLink: string; // Optional githubLink
  public: boolean;
}

interface ProjectsSectionProps {
  projects: Project[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  // Set initial visible projects to 5
  const [visibleProjects, setVisibleProjects] = useState(3);

  // Toggle between showing all or just the initial set of projects
  const handleSeeMoreClick = () => {
    setVisibleProjects(visibleProjects === 3 ? projects.length : 3);
  };

  const projectsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (visibleProjects === 3 && projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [visibleProjects]);



  return (
    <section id="Projects" ref={projectsRef} className="px-6 xl:px-0 h-fit py-16 xl:pt-24 xl:pb-12">
      <div className="max-w-4xl mx-auto xl:mx-0">
        <h2 className="text-3xl md:text-4xl font-semibold text-left mb-4">
          Featured Projects
        </h2>
        <p className='text-zinc-400 mb-8 text-md'>
          A curated collection of my software development projects from GitHub
        </p>

        <div className="grid md:grid-cols-1 gap-6">
          {projects.slice(0, visibleProjects).map((project) => (
            <div
              key={project.id}
              className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4 hover:border-purple-500/50 hover:-translate-y-2 transition-all duration-300 cursor-pointer group flex flex-col md:flex-row"
            >
              {/* Left: Image */}
              <div className="mb-4 md:mb-0">
                <Image
                  src={project.source} // Use the imageUrl from the project data
                  alt={project.title}
                  width={120} // Set smaller width for the image
                  height={90} // Set smaller height for the image
                  className="h-40 md:h-full w-full md:w-50 object-cover rounded-lg"
                />
              </div>

              {/* Right: Content */}
              <div className="flex flex-col justify-between ml-0 md:ml-4 w-full">
                <p className='flex  text-green-700 animate-pulse xl:mb-2'>● {project.public ? 'Public' : 'Private'}</p>

                <div className="flex mb-4">
                  <h3 className="text-xl flex-1 font-semibold text-zinc-400 group-hover:text-purple-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  {/* GitHub Link Button with Icon desktop */}
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden md:inline-flex cursor-pointer items-center gap-2 px-4 py-2 h-10 text-purple-400 hover:text-purple-300 hover:bg-purple-800/10 rounded-full text-xs transition-all duration-300 border border-purple-500/30"
                  >
                    <FaGithub className="text-lg" />
                    <span>View Code</span>
                  </a>
                </div>
                <p className="text-zinc-400 mb-4 text-sm leading-relaxed grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-zinc-800/50 hover:bg-purple-500/20 text-purple-400 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* GitHub Link Button with Icon mobile */}
                <button type="button" className="md:hidden p-3 w-50 border border-purple-600 hover:bg-purple-800/10 flex justify-center rounded-2xl mx-auto">
                  <Link
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-2 items-center justify-start text-purple-400 hover:text-purple-300"
                  >
                    <FaGithub size={24} />
                    <span>View Code</span>
                    <ArrowUpRight size={24} />
                  </Link>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* See More Button */}
        {projects.length > 5 && (
          <div className="text-center mt-8">
            <button
              type='button'
              onClick={handleSeeMoreClick}
              className="border border-zinc-800 hover:border-purple-400 text-zinc-400 hover:text-purple-400 rounded-full py-2 px-6 text-lg transition-all duration-300"
            >
              {visibleProjects === 3 ? 'See More' : 'See Less'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
