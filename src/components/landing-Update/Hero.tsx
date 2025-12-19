'use client'
import { Button } from "../ui/button"
import { Mail } from "lucide-react"
import { LuGithub } from "react-icons/lu";
import { CiLinkedin } from "react-icons/ci";
import { IoCloudDownloadOutline } from "react-icons/io5";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import SplitText from 'gsap/SplitText';
import { useTheme } from 'next-themes';


const Hero = () => {

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


        // media.add("(max-width: 767px)", () => {

        //     // Mobile animation
        //     const timeline = gsap.timeline({
        //         scrollTrigger: {
        //             trigger: "",
        //             start: "top 80%",
        //             end: "bottom 50%",
        //             scrub: true,

        //         },
        //     })

        //     timeline.fromTo(paragraphSplit.words,
        //         {
        //             color: theme == 'dark' ? '#374151' : '#D1D5DB'
        //         },
        //         {
        //             color: theme == 'dark' ? '#fff' : '#000',
        //             stagger: 0.05,
        //         }
        //     )

        //     return () => { }; // cleanup
        // });


        media.add("(min-width: 768px)", () => {

            gsap.from(".btn-2", {
                opacity: 0,
                duration: 1,
                x: 50,
                y: 50,
                rotate: 4,
                ease: 'power1.inOut'
            }
            );

            gsap.from(".btn-1", {
                opacity: 0,
                duration: 1,
                x: -50,
                y: 50,
                rotate: 4,
                ease: 'power1.inOut'
            }
            );

            return () => { }; // cleanup
        });


    });

    return (
        <section className='md:min-h-screen w-full overflow-x-hidden mb-20 pb-10 md:pb-40'>

            <div className='text-center mt-30 sm:mt-40 '>
                <h1 className={`title font-bold text-4xl sm:text-5xl lg:text-7xl`}>Hi<span className='animate-bounce'>👋</span>, I&apos;m <span className="bg-linear-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Monal Kavithra</span><br />
                    I like building my ideas.</h1>
                <div id="btn-blob-container" className="relative flex justify-center items-center mt-20">
                    <div
                        className=" relative z-5
                            blob
                            flex
                            justify-center
                            items-center
                            h-61 w-68
                            overflow-hidden
                            border-2 border-purple-300 dark:border-purple-700
                            shadow-xl
                            animate-[blobMorph_10s_ease-in-out_infinite]
                        "
                    >
                        <div
                            className="
                            blob
                            relative z-6
                            h-62 w-64
                            overflow-hidden
                            border-2 border-purple-300 dark:border-purple-700
                            shadow-xl
                            animate-[blobMorph_10s_ease-in-out_infinite]
                            profile
                        "
                        ></div>
                    </div>
                    <div className="hidden lg:block absolute w-64 h-64">
                        <button
                            type='button'
                            className="btn-1 story-script-regular btn-4 font-semibold absolute -right-60 top-10 p-3 px-5 flex gap-2 items-center bg-purple-600 rounded-xl text-white rotate-16"
                        >
                            My Resume <IoCloudDownloadOutline size={24} />
                        </button>

                        <button
                            type="button"
                            className="btn-2 story-script-regular btn-contact font-semibold absolute -left-60 top-10 p-3 px-5 flex gap-2 w-fit items-center bg-blue-500 rounded-xl text-white 
                            -rotate-18"
                        >
                            Contact Me<Mail size={24} />
                        </button>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero