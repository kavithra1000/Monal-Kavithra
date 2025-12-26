import { ArrowDown } from 'lucide-react'
import React from 'react'

const Hero = () => {
  return (
    <section
      id="Home"
      className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden"
    >
      <div className="max-w-6xl lg:w-fit text-center relative lg:text-left lg:flex lg:justify-between items-center">


        {/* Blob and Profile Image */}
        <div className="flex justify-center items-center border border-purple-800 blob w-50 h-50 lg:w-78 lg:h-78 mb-6 lg:mb-0 ">
          <div className="blob w-48 h-48 lg:w-72 lg:h-72 profile border border-purple-800" />
        </div>

        {/* Text and Button */}
        <div className="text-center mx-auto lg:text-left lg:w-fit lg:min-w-xl">
          <h1 className="title font-bold text-4xl lg:text-5xl xl:text-6xl leading-tight mb-6">
            Hi<span className="inline-block animate-bounce">👋</span>, I&apos;m{' '}
            <span className="font-bold bg-linear-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Monal Kavithra.
            </span>
            <br />
            <span className="block mt-3 text-3xl sm:text-4xl lg:text-5xl text-zinc-300 story-script-regular">
              I like building my ideas . . .
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-lg md:text-2xl text-zinc-400 mb-14 leading-relaxed max-w-[90%] sm:max-w-[80%] mx-auto lg:mx-0 text-center lg:text-left"
          >
            A passionate full-stack developer crafting modern, scalable web
            experiences with clean design and solid engineering.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10 sm:mt-12">
            <a
              href="/resume/Monal_Kavithra.pdf"
              download="Monal_Kavithra_CV.pdf"
              className="flex gap-3 items-center px-8 py-4 rounded-2xl font-semibold text-white
                bg-linear-to-r from-indigo-500 to-purple-600
                hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              Download CV <ArrowDown />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
