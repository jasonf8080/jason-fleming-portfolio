import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { projects } from "../../constants";
import Project from "./Project";

const Projects = () => {

  useGSAP(() => {
    const timeline = gsap.timeline({
        scrollTrigger:{
            trigger: '#projects-title',
            start: 'top center',
            toggleActions: "play none none reverse"
        }
    })

    timeline.from(
        '#projects-title', {opacity: 0, xPercent: -100}
    )

     const pinTimeline = gsap.timeline({
        scrollTrigger: {
            trigger:  '#projects',
            start: "bottom 85%",
            end: "bottom 5%",
            scrub: true,
            pin: true,
             pinSpacing: false,
        }

    })

    pinTimeline.to(
        '#projects', {opacity: 0, yPercent: -20}
        //  '.projects-section', {opacity: 0}
    )

  }, []);

  return (
    <>
        <section id="projects" className="relative">
                {/* Background */}
                <div className="absolute top-0 left-0 w-full h-full z-0 bg-[#222]" id="gradient-background"></div>

                <div className="relative z-50  container mx-auto py-[75px] md:py-[150px]">
                     {/* Project Title */}
                     <h1 id="projects-title" className="text-white z-10 title-xl mb-4 md:mb-12">Projects</h1>

                     {/* Projects */}
                    {projects.map((project, index) => (
                        <Project 
                            key={project.title}
                            index={index}
                            {...project}
                        />
                    ))}
                </div>
        </section>
    </>
  );
};

export default Projects;


 