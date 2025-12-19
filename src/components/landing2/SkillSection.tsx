'use client'
import Image from "next/image";

const skillImages: { [key: string]: string } = {
  // Languages
  Java: "/lang/java.svg",
  Python: "/lang/python.svg",
  C: "/lang/c.svg",
  "C++": "/lang/cplusplus.svg",
  Kotlin: "/lang/kotlin.svg",
  JavaScript: "/lang/javascript.svg",

  // Web & App
  React: "/web/react.svg",
  "Node.js": "/web/nodejs.svg",
  Express: "/web/express.svg",
  MongoDB: "/web/mongodb.svg",
  Flutter: "/web/flutter.svg",
  Firebase: "/web/firebase.svg",

  // Tools
  Git: "/tools/git.svg",
  MySQL: "/tools/mysql.svg",
  HTML5: "/tools/html.svg",
  CSS3: "/tools/css.svg",
  Tailwind: "/tools/tailwindcss.svg",
};


const skills = {
  languages: ['Java', 'Python', 'C', 'C++', 'Kotlin', 'JavaScript'],
  webTech: ['React', 'Node.js', 'Express', 'MongoDB', 'Flutter', 'Firebase'],
  tools: ['Git', 'MySQL', 'HTML5', 'CSS3', 'Tailwind'],
};

const SkillsSection: React.FC = () => {
  return (
    <section id="Skills" className="py-16 xl:py-24 px-6 ">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-start mb-12">
          Skills & Expertise
        </h2>

        {/* Programming Languages */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-6 text-zinc-400">Programming Languages</h3>
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.languages.map((skill) => (
              <li
                key={skill}
                className="group transition hover:scale-110 flex flex-col items-center text-zinc-400 text-lg"
              >
                <Image
                  src={skillImages[skill]}
                  alt={skill}
                  width={48}
                  height={48}
                  className="mb-2 opacity-80 transition
               group-hover:opacity-100
               group-hover:drop-shadow-[0_0_12px_rgba(168,85,247,0.8)]"
                />
                <span className="text-sm">{skill}</span>
              </li>


            ))}
          </ul>
        </div>

        {/* Web & App Technologies */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-6 text-zinc-400">Web & App Technologies</h3>
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.webTech.map((skill) => (
              <li
                key={skill}
                className="group transition hover:scale-110 flex flex-col items-center text-zinc-400 text-lg"
              >
                <Image
                  src={skillImages[skill]}
                  alt={skill}
                  width={48}
                  height={48}
                  className="mb-2 opacity-80 transition
               group-hover:opacity-100
               group-hover:drop-shadow-[0_0_12px_rgba(168,85,247,0.8)]"
                />
                <span className="text-sm">{skill}</span>
              </li>


            ))}
          </ul>
        </div>

        {/* DevOps & Tools */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-zinc-400">DevOps & Tools</h3>
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.tools.map((skill) => (
              <li
                key={skill}
                className="group transition hover:scale-110 flex flex-col items-center text-zinc-400 text-lg"
              >
                <Image
                  src={skillImages[skill]}
                  alt={skill}
                  width={48}
                  height={48}
                  className="mb-2 opacity-80 transition
               group-hover:opacity-100
               group-hover:drop-shadow-[0_0_12px_rgba(168,85,247,0.8)]"
                />
                <span className="text-sm">{skill}</span>
              </li>


            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;
