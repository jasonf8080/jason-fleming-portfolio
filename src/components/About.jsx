import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";


const About = () => {
   const sectionRef = useRef();
  
  useGSAP(() => {

    //Text Reveal
    const textSplit = SplitText.create('#about-text', {type: 'words'})
    
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center-=200",
        toggleActions: "play none none reverse",
      },
    });


    timeline.from(textSplit.words, {
      opacity: 0,
      y: 20,
      duration: 0.2,
      ease: "power2.out",
      stagger: {amount: 0.5},
    });

    
    //Section animate out
    const pinTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "center center",
        end: "+=1200",
        scrub: true,
        pin: "#about .about-pin",
        pinSpacing: true,
        anticipatePin: 1,
      },
    })

    pinTimeline.to("#about-text", {
      opacity: 0,
      y: -20,
      ease: "none"
    });
  });

  return (
    <section ref={sectionRef} id="about" className="pt-24 pb-4 md:pt-32 md:pb-12">
      <div className="container">
        
        <div className="about-pin">
          <p id='about-text' className="mb-10 text-lg leading-[3rem] md:text-3xl md:leading-[5rem] text-center">
              I hold a Bachelor's degree in Marketing from Western Connecticut State University,
              where I graduated in 2022. Since then,
              I have immersed myself in the dynamic world of front-end development as a freelance
              professional.
              My passion lies in creating visually appealing and user-friendly interfaces, and I
              thrive on the ever-evolving challenges of web development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;