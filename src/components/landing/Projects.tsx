import React from 'react';
import { 
  Card, 
  CardAction, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from '@/components/ui/button'; // Assuming Button component is available
import Link from 'next/link';

// Sample project data
const projects = [
  {
    title: 'Chat-GPT Message Store Extension',
    description: 'A Chrome extension that stores messages from ChatGPT.',
    link: 'https://github.com/your-project-link',
  },
  {
    title: 'Web Summarizer Extension',
    description: 'A browser extension that summarizes articles or webpages.',
    link: 'https://github.com/your-project-link',
  },
  {
    title: 'MERN Stack Chat Application',
    description: 'A full-fledged chat app built with the MERN stack, featuring private chat and JWT authentication.',
    link: 'https://github.com/your-project-link',
  },
  // Add more projects here
];

const Projects = () => {
  return (
    <div className='h-screen w-full bg-gray-100 p-8'>
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="shadow-xl rounded-lg overflow-hidden bg-white">
            <CardHeader className="bg-gradient-to-r from-violet-600 to-indigo-500 p-4 text-white">
              <CardTitle className="text-xl font-semibold">{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-gray-700">{project.description}</p>
            </CardContent>
            <CardFooter className="flex justify-end p-4">
              <CardAction>
                <Button  
                  className="bg-indigo-600 text-white rounded-full px-6 py-2 hover:bg-indigo-700 transition"
                >
                  <Link 
                  href={project.link} >View Project</Link>
                </Button>
              </CardAction>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Projects;
