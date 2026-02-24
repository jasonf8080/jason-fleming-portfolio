import React, { useRef } from "react";
import { navigation, socials } from "../../constants";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Footer = () => {
  const sectionRef = useRef()
  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top+=100 bottom',
        toggleActions: "play none none reverse",
      }
    })

    timeline.from(
      '.footer-column', {opacity: 0, y: -100}
    )

    


  })
  return (
    <footer id="footer" ref={sectionRef} className="bg-[#1a1a1a] uppercase font-bold">
      <div className="container">

        {/* Navigation & Socials */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-24 border-b-[1px] border-b-[#444]">

          {/* Navigation */}
          <div className="footer-column basis-1/2">
            <h3 className="title-md mb-4">Navigation</h3>
            <div className="border-b-[1px] border-b-[#444]" />

            <ul>
              {navigation.map((link) => (
                <li className="text-lg md:text-2xl px-3 my-6 underline" key={link.id}>
                  <a href={link.href}>
                    {link.id}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div className="footer-column basis-1/2">
            <h3 className="title-md mb-4">Socials</h3>
            <div className="border-b-[1px] border-b-[#444]" />

            <ul>
              {socials.map((link) => (
                <li className="text-lg md:text-2xl px-3 my-6 underline" key={link.id}>
                  <a href={link.href}>
                    {link.id}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex items-center h-[100px] uppercase font-bold">
              <p className="text-lg md:text-2xl">Copyright© 2026 Jason Fleming.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
