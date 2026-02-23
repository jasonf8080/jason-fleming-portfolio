import React from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import { navigation } from "../../constants";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {

   useGSAP(() => {
     const timeline = gsap.timeline();

      timeline.fromTo(
      '#nav-content',
          { 
            opacity: 0,
            filter: 'blur(10px)',
          },
          { 
            opacity: 1,
            filter: 'blur(0px)',
            duration: 0.5,
            ease: 'power2.out',
      }
    );

   })

  return (
    <nav className="fixed top-0 left-0 z-[100] w-full border-b border-white/10  bg-[#1a1a1a] md:bg-transparent ">
      {/* Blur Layer */}
      <div className="absolute inset-0  md:backdrop-blur-md" />

      {/* Content */}
      <div id="nav-content" className="relative z-10 container mx-auto flex justify-between items-center py-6 text-white">
        <h1 className="uppercase font-bold">Jason</h1>

        <ul className="hidden md:flex items-center gap-4 capitalize font-semibold text-lg">
          {navigation.map((link) => (
            <li key={link.id}>
              <a href="#">{link.id}</a>
            </li>
          ))}

          <li className="text-2xl ml-4">
             <a href="#"><FaLinkedin/></a>
          </li>
          
          <li className="text-2xl">
             <a href="#"><FaGithub/></a>
          </li>
        </ul> 

        <button className="md:hidden text-4xl">
          <HiBars3BottomRight />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
