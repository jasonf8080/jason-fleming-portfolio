import React, { useRef } from 'react'
import { GoLinkExternal } from "react-icons/go";
import { FaGithub } from "react-icons/fa";
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/all'
import Underline from './Underline';


const Project = ({name, description, index}) => {
    const projectRef = useRef(null)

    useGSAP(() => {
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: projectRef.current,
                start: 'top center',
                toggleActions: "play none none reverse",

            }
        })

        const titleSplit = SplitText.create('.rotate-in', {type: 'chars'})
        const paragraphSplit = SplitText.create('.rotate-in-2', {type: 'lines'})
    
        timeline.from(
            titleSplit.chars, {opacity: 0, rotateX: 60, duration: 0.3, stagger: {amount: 0.6}}
        )

        timeline.from(
            'button', {opacity: 0, rotateX: 60, duration: 0.3, stagger: {amount: 0.2}}, "<"
        )

        timeline.from(
            '.text-underline', {opacity: 0}, "<"
        )

        timeline.from(
            'img', {xPercent: -100, opacity: 0, duration: 0.2}
        )

        timeline.from(
            paragraphSplit.lines, {opacity: 0, rotateX: 60, duration: 0.3, stagger: {amount: 0.3}}
        )

    }, { scope: projectRef })
    
  return (
    <div ref={projectRef} className="mb-16 md:mb-32 py-12">
            {/*Title & Links*/}
             <header className="flex justify-between md:items-center flex-col gap-5 md:flex-row ">
                <div className="flex items-center">
                    <h1 className="title-lg rotate-in">0{index + 1} {name}</h1>
                </div>

                <div className="flex gap-3">
                    <button className="text-3xl md:text-5xl"><GoLinkExternal/></button>
                    <button className="text-3xl md:text-5xl"><FaGithub/></button>
                </div>
            </header>

            <Underline mobileWidth={'100'} width={'200'}/>

             {/* Content (image & description */}
            <div className="flex flex-col md:flex-row gap-5 md:gap-10 mt-10">
                <div className="basis-[35%]">
                    <img
                        className="min-w-full max-w-full h-auto object-cover"
                        src="https://i.etsystatic.com/33394562/r/il/1ac36a/5966807628/il_fullxfull.5966807628_op8n.jpg"
                        alt="Project Inage" 
                    />
                </div>
                <p className="basis-[65%] text-lg px-3 md:px-0 md:text-2xl leading-10 md:leading-16 py-4 rotate-in-2 ">{description}</p>
            </div>
        </div>
  )
}

export default Project
