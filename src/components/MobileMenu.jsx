import React, { useRef } from 'react'
import { LiaTimesSolid } from "react-icons/lia";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { navigation } from '../../constants';
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';

const MobileMenu = ({ showMenu, setShowMenu }) => {
    const menuRef = useRef();

    useGSAP(() => {
        const timeline = gsap.timeline();
        timeline.from(
            menuRef.current, {opacity: 0, duration: 0.3, ease: 'power1.inOut'}
        )

        timeline.from(
            'li', {opacity: 0, y: -40, stagger: {amount: 0.3}, duration: 0.3}
        )

        timeline.from(
            '#menu-btns button',  {opacity: 0, x: -40, stagger: {amount: 0.1}, duration: 0.3}
        )

    }, {scope: menuRef})


  return (
    <aside ref={menuRef} className="md:hidden fixed inset-0 top-0 left-0 w-[100vw] h-[100vh] z-[50] overscroll-contain touch-none">
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-[60] backdrop-blur-md"></div>

      <div id="menu-content" className="relative z-[70] h-full w-full p-10">
        {/* Exit Button */}
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="absolute top-5 right-3 text-4xl"
        >
          <LiaTimesSolid />
        </button>

        <ul className="uppercase font-bold text-2xl mt-[125px]">
          {navigation.map((link) => (
            <li
              key={link.id}
              className="w-full border-b-2 border-b-white mb-3 pl-3 py-4"
            >
              <a href="#">{link.id}</a>
            </li>
          ))}
        </ul>

        <div id="menu-btns" className="flex gap-6 mt-8">
          <button className="text-5xl">
            <FaLinkedin />
          </button>
          <button className="text-5xl">
            <FaGithub />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default MobileMenu;