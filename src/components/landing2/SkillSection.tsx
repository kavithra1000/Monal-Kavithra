'use client'
import Image from 'next/image'

const skillImages: { [key: string]: string } = {
  Java: '/lang/java.svg',
  Python: '/lang/python.svg',
  C: '/lang/c.svg',
  'C++': '/lang/cplusplus.svg',
  Kotlin: '/lang/kotlin.svg',
  JavaScript: '/lang/javascript.svg',

  React: '/web/react.svg',
  'Node.js': '/web/nodejs.svg',
  Express: '/web/express.svg',
  MongoDB: '/web/mongodb.svg',
  Flutter: '/web/flutter.svg',
  Firebase: '/web/firebase.svg',

  Git: '/tools/git.svg',
  MySQL: '/tools/mysql.svg',
  HTML5: '/tools/html.svg',
  CSS3: '/tools/css.svg',
  Tailwind: '/tools/tailwindcss.svg',
}

const skills = {
  languages: ['Java', 'Python', 'C', 'C++', 'Kotlin', 'JavaScript'],
  webTech: ['React', 'Node.js', 'Express', 'MongoDB', 'Flutter', 'Firebase'],
  tools: ['Git', 'MySQL', 'HTML5', 'CSS3', 'Tailwind'],
}

/* ---------------- reusable grid ---------------- */

const SkillGrid = ({ title, items }: { title: string; items: string[] }) => (
  <div className="mb-12">
    <h3 className="text-xl md:text-2xl font-semibold mb-6 text-zinc-300">
      {title}
    </h3>

    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {items.map((skill) => (
        <li
          key={skill}
          className="
            group
            flex items-center gap-3
            rounded-xl
            bg-zinc-900/60
            px-4 py-3
            border border-zinc-800
            transition-all duration-300
            hover:-translate-y-1
            hover:border-purple-400/40
            hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]
          "
        >
          <Image
            src={skillImages[skill]}
            alt={skill}
            width={28}
            height={28}
            className="
              opacity-80
              transition-all duration-300
              group-hover:opacity-100
              group-hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]
            "
          />

          <span className="text-sm text-zinc-300 font-medium">
            {skill}
          </span>
        </li>
      ))}
    </ul>
  </div>
)

/* ---------------- main section ---------------- */

const SkillsSection = () => {
  return (
    <section id="Skills" className="py-16 xl:py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-left mb-4">
          Skills & Expertise
        </h2>

        <p className="text-zinc-400 mb-12 max-w-2xl">
          Technologies and tools I use to build reliable, scalable, and
          user-focused applications.
        </p>

        <SkillGrid
          title="Programming Languages"
          items={skills.languages}
        />

        <SkillGrid
          title="Web & App Technologies"
          items={skills.webTech}
        />

        <SkillGrid
          title="Tools & Databases"
          items={skills.tools}
        />
      </div>
    </section>
  )
}

export default SkillsSection
