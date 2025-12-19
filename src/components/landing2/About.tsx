'use client'
import { FaUser, FaCode, FaRocket } from 'react-icons/fa'

const about = [
  {
    title: 'Who I Am',
    description:
      'I am an Information Technology undergraduate with a strong interest in software engineering and building practical, real-world solutions. I enjoy breaking down complex problems and turning ideas into clean, functional applications.',
    icon: FaUser
  },
  {
    title: 'What I Do',
    description:
      'I am gaining hands-on experience in full-stack development by building projects with modern web technologies. Alongside this, I am exploring the fundamentals of artificial intelligence and machine learning through self-learning and experimentation.',
    icon: FaCode
  },
  {
    title: 'How I Think',
    description:
      'I value continuous improvement and enjoy working in environments that challenge me to grow. I am always learning, building, and staying open to new opportunities in the tech space.',
    icon: FaRocket
  }
]

const About = () => {
  return (
    <section id="About" className="px-6 xl:px-0 h-fit py-16 xl:pt-24 xl:pb-12">
      <div className="max-w-4xl mx-auto xl:mx-0">
        <h2 className="text-3xl md:text-4xl font-semibold text-left mb-4">
          About Me
        </h2>

        <p className="text-zinc-400 mb-10 text-md text-left max-w-full mx-auto xl:mx-0">
          A brief introduction about who I am and what I’m passionate about
        </p>

        <div className="grid gap-8">
          {about.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="
                  flex items-start gap-4
                  transition-all duration-300
                "
              >
                {/* Icon */}
                <div
                  className="
                    shrink-0
                    w-12 h-12
                    rounded-full
                    flex items-center justify-center
                    bg-zinc-900
                    text-zinc-300
                  "
                >
                  <Icon size={20} />
                </div>

                {/* Content */}
                <div className="flex flex-col text-left">
                  <h3 className="text-lg sm:text-xl font-semibold text-zinc-300">
                    {item.title}
                  </h3>

                  <p className="text-zinc-400 text-sm mt-2 leading-relaxed max-w-2xl">
                    {item.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default About
