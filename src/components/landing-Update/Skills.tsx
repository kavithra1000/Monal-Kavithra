"use client";

import { ArrowRightCircle } from "lucide-react";
import Button from "./Button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef, useEffect } from "react"



gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: "Backend Development", category: "dev" },
  { name: "Wireframes & Prototypes", category: "design" },
  { name: "Website Development", category: "dev" },
  { name: "Figma Design", category: "design" },
  { name: "Frontend Development", category: "dev" },
  { name: "User Interface Design", category: "design" },
  { name: "Software Development", category: "dev" },
  { name: "User Experience Optimization", category: "design" },
  { name: "Logo & Branding", category: "design" },
  { name: "Web Applications", category: "dev" },
  { name: "Android (learning)", category: "dev" },
];

const Skills = () => {
  const designRefs = useRef<HTMLButtonElement[]>([]);
  const devRefs = useRef<HTMLButtonElement[]>([]);


  // ---------- GSAP ----------
  useGSAP(() => {
    // Only proceed if the refs are populated
    if (designRefs.current.length === 0 && devRefs.current.length === 0) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#skills",
          start: "top top",
          end: "bottom+=3500",
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      // Design buttons background color change, then revert back after a delay
      tl.to(
        ".designing",
        {
          color: "#7C3AED",  // Design buttons color change
          duration: 1,
        });

      tl.to(
        designRefs.current,
        {
          backgroundImage: "linear-gradient(to bottom right, #7C3AED)",  // Design buttons color change
          stagger: 0.5,
          duration: 1,
        });

      tl.to(
        ".developing",
        {
          color: " #3B82F6",  // Dev buttons color change
          stagger: 0.5,
          duration: 1,
        },
        //"<"   This makes the dev buttons start after design buttons revert
      );

      // Background color transition for dev buttons after design
      tl.to(
        devRefs.current,
        {
          backgroundImage: "linear-gradient(to bottom right,  #3B82F6)",  // Dev buttons color change
          stagger: 0.5,
          duration: 1,
        },
        //"<"   This makes the dev buttons start after design buttons revert
      );

      return () => tl.kill();
    });

    return () => mm.kill();
  });






  // ---------- Populate refs AFTER mount ----------
  useEffect(() => {
    designRefs.current = [];
    devRefs.current = [];
  }, []);

  return (
    <section className="min-h-screen w-full px-10">
      <div id="skills" className="pt-20 lg:pt-30 max-w-6xl mx-auto w-full">
        <h2 className="text-xl font-bold mb-8 flex gap-2 items-center">
          PROCESS AND EXPERTISE <ArrowRightCircle size={24} />
        </h2>

        {/* ---------- DESKTOP ---------- */}
        <div className="hidden lg:flex justify-between">
          <div className="flex flex-col gap-10 justify-start">
            <h3 className={`story-script-regular pl-10 text-3xl font-semibold designing`}>Designing</h3>
            <h3 className={`story-script-regular pl-10 text-3xl font-semibold developing`}>Developing</h3>
          </div>

          <div className="flex flex-wrap justify-end gap-4 max-w-2xl">
            {skills.map((skill, idx) => (
              <Button
                key={idx}
                name={skill.name}
                ref={(el) => {
                  if (!el) return;
                  if (skill.category === "design") designRefs.current.push(el);
                  else devRefs.current.push(el);
                }}
                className="skill-btn font-semibold my-3 px-8 py-3 rounded-full"
              />
            ))}
          </div>
        </div>

        {/* ---------- MOBILE ---------- */}
        <div className="lg:hidden space-y-10">
          <div>
            <h3 className="text-xl font-semibold mb-4">Designing</h3>
            <div className="flex flex-wrap gap-4">
              {skills
                .filter((s) => s.category === "design")
                .map((s, i) => (
                  <Button
                    key={i}
                    name={s.name}
                    className="px-8 py-3 font-semibold rounded-full bg-linear-to-br from-violet-600 to-indigo-500"
                  />
                ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Developing</h3>
            <div className="flex flex-wrap gap-4">
              {skills
                .filter((s) => s.category === "dev")
                .map((s, i) => (
                  <Button
                    key={i}
                    name={s.name}
                    className="px-8 py-3 font-semibold rounded-full bg-linear-to-br from-violet-600 to-indigo-500"
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
