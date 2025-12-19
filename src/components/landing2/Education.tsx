'use client'
import Image from 'next/image'

const edu = [{
  qulification: 'BSc (Hons) in Information Technology',
  year: '2023 - 2027',
  place: 'Sri Lanka Institute of Information Technology',
  source: '/education/SLIIT_Logo_Crest.png'
},{
  qulification: 'Advance Level',
  year: '2020 - 2023',
  place: 'Ruwannwella Rajasinghe College',
  source: '/education/rcc.jpg'
},{
  qulification: 'Ordinary Level',
  year: '2019',
  place: 'Seethawaka National College',
  source: '/education/smmv.png'
}]

const Education = () => {
  return (
    <section id="Education" className="px-6 xl:px-0 h-fit py-16  xl:pt-24 xl:pb-12">
      <div className="max-w-4xl mx-auto xl:mx-0">
        <h2 className="text-3xl md:text-4xl font-semibold text-left mb-4">
          Education
        </h2>

        <p className="text-zinc-400 mb-8 text-md text-left max-w-full mx-auto xl:mx-0">
          My academic background and certifications
        </p>

        <div className="grid gap-6 pl-10">
          {edu.map((item) => (
            <div
              key={item.place}
              className="
                border-l-6 rounded-sm border-zinc-800 hover:border-purple-400 p-4
                transition-all duration-300 cursor-pointer
                flex flex-row items-c sm:items-start
                gap-4
                group
              "
            >
              {/* Image */}
              <div className="shrink-0 w-10 h-10 sm:w-14 sm:h-14">
                <Image
                  src={item.source}
                  alt={item.qulification}
                  width={96}
                  height={96}
                  className="object-contain rounded-md"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col w-full text-left">
                <h3
                  className="
                    text-lg sm:text-xl font-semibold
                    text-zinc-300
                    leading-snug
                    group-hover:text-purple-400
                    transition-colors duration-300
                  "
                >
                  {item.qulification}
                </h3>

                <p className="text-zinc-400 text-sm mt-1">
                  {item.place}
                </p>

                <p className="text-zinc-500 text-xs mt-0.5">
                  {item.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
