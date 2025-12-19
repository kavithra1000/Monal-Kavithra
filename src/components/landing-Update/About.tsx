'use client'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import SplitText from 'gsap/SplitText';
import { useTheme } from 'next-themes';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(SplitText, ScrollTrigger)


const About = () => {

    const { theme } = useTheme();
    const media = gsap.matchMedia();

    useGSAP(() => {

        const paragraphSplit = SplitText.create(".about-text", {
            type: "words, chars"
        })

        // const heroSplit = new SplitText(".title", {
        //     type: "lines",
        // });


        // Apply text-gradient class once before animating
        //heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

        // gsap.from(heroSplit.chars, {
        //     yPercent: 100,
        //     duration: 1.8,
        //     ease: "expo.out",
        //     stagger: 0.06,
        // });


        media.add("(max-width: 767px)", () => {

            // Mobile animation
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: "#about-container",
                    start: "top 80%",
                    end: "bottom 50%",
                    scrub: true,
                    
                },
            })

            timeline.fromTo(paragraphSplit.words,
                {
                    color: theme == 'dark' ? '#374151' : '#D1D5DB'
                },
                {
                    color: theme == 'dark' ? '#fff' : '#000',
                    stagger: 0.05,
                }
            )

            return () => { }; // cleanup
        });

        media.add("(min-width: 768px)", () => {

            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: "#about-container",
                    start: "center center",
                    end: "bottom 50%",
                    scrub: true,
                    pin: true,
                    anticipatePin: 1
                },
            })

            // Desktop animation
            timeline.fromTo(paragraphSplit.words,
                {
                    color: theme == 'dark' ? '#374151' : '#D1D5DB'
                },
                {
                    color: theme == 'dark' ? '#fff' : '#000',
                    stagger: 0.05,
                }
            )

            return () => { }; // cleanup
        });


    });


    return (
        <section className='md:min-h-dvh w-full p-5 sm:p-10 lg:p-0 '>
            <div id='about-container' className=' text-container  mx-auto  bg-linear-to-r from-purple-600 to-blue-500   rounded-2xl max-w-7xl'>
                <div className="w-full text-center space-y-6 p-6 sm:p-10 md:p-10 font-sans font-normal">
                    <p className=" about-text
                    max-w-6xl mx-auto 
                    text-xl sm:text-2xl lg:text-3xl
                    text-gray-700 dark:text-gray-300
                    leading-relaxed
                    text-justify
                    hyphens-auto
                    ">
                        I’m an IT undergraduate with a strong interest in software engineering and building practical, real-world solutions. I enjoy breaking down problems, learning new technologies, and turning ideas into working applications.
                    </p>

                    <p className=" about-text
                    max-w-6xl mx-auto
                    text-xl sm:text-2xl lg:text-3xl
                    text-gray-700 dark:text-gray-300
                    leading-relaxed
                    text-justify
                    hyphens-auto
                    ">
                        Currently, I’m gaining hands-on experience in full-stack development and exploring the fundamentals of artificial intelligence and machine learning through projects and self-learning. I’m motivated by continuous improvement and enjoy working in environments that challenge me to grow both technically and personally.
                    </p>

                    <p className=" about-text
                    max-w-6xl mx-auto
                    text-xl sm:text-2xl lg:text-3xl
                    text-gray-700 dark:text-gray-300
                    leading-relaxed
                    text-justify
                    hyphens-auto
                    ">
                        Always learning, building, and open to new opportunities in the tech space.
                    </p>
                </div>
            </div>

        </section>
    )
}

export default About