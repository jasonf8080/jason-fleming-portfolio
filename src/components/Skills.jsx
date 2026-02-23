import React, { useRef } from 'react'
import { skills } from '../../constants'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import Underline from './Underline'

const Skills = () => {
    const sectionRef = useRef(null)

    useGSAP(() => {
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 30%',
                toggleActions: "play none none reverse",
            }
        })

         timeline.from(
             '#skills-title', {opacity: 0, xPercent: -100}
         )

         timeline.from(
            '#skills article > *', {opacity: 0, yPercent: 100, stagger: {amount: 0.6}}
         )

        

    })

  return (
    <section ref={sectionRef} id='skills' className='py-16 md:py-25 bg-[#1a1a1a] border-b-[1px] border-b-[#444]'>
        <div className="container">
            <h1 id='skills-title' className="title-xl mb-12 md:mb-20">My Skills</h1>
            
            {/* Skill Cards */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24  ">
                {skills.map((skill) => (
                    <article className=''>
                        <h1 className='title-md mb-3'>{skill.name}</h1>
                        <Underline mobileWidth={'100'} width={'200'}/>
                        <p className='text-lg md:text-2xl'>{skill.description}</p>
                        <div className="flex flex-wrap gap-4 uppercase font-bold mt-8">
                            {skill.frameworks.map((framework) => (
                                <span className='py-2 px-4 rounded-sm bg-[#333] shadow-lg' key={framework}>{framework}</span>
                            ))}
                        </div>
                    </article>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Skills
