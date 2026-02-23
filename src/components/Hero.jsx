import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { MdOutlineArrowDownward } from 'react-icons/md';

const Hero = () => {
  const count = 30;
  const stage = useRef(null)

  useEffect(() => {
    for(let i = 0; i < count; i++){
      setTimeout(() => {
        makeNeon()
      }, 50 * i)
    }
  }, [])

  const makeNeon = () => {
    //Create <span> elements with random class of: .s1, .s2, .s3, .s4
    let span = document.createElement('span')
    span.classList.add("s" + gsap.utils.random(1, 4, 1))
    stage.current.appendChild(span)

    //Set random height between 2px - 8px tall
    let height = gsap.utils.random(2, 8, 2)

    //Set random width between 50px - 300px wide
    let width = gsap.utils.random(50, 300, 10)

    //Set random x position within viewport
    let left = gsap.utils.random(0, stage.current.offsetWidth)

     //Set random y position within viewport
    let top = gsap.utils.random(0, stage.current.offsetHeight)
    
    //Initial dimensions and positions
    gsap.set(
      span, {
        width: width,
        height: height,
        left: left,
        top: top
      }
    )

    let timeline = gsap.timeline({
      paused: true,
      onComplete: () => {
        span.remove();
        makeNeon();
      }
    })

    timeline.to(
      span, {
        x: gsap.utils.random(-stage.current.offsetWidth * 0.5, -stage.current.offsetWidth * 0.7, 20),
        duration: 7 - height / 2,
        ease: 'power0.easeNone'
      }, -.5
    )

    timeline.play();
  }
 
    useGSAP(() => {
     
     const timeline = gsap.timeline();

      timeline.from(
          '#hero h1', {opacity: 0, yPercent: -100, duration: 0.3}
      );

      timeline.from(
          '#hero h2', {opacity: 0, yPercent: -100, duration: 0.3}
      );
       timeline.from(
          '#hero-arrow', {opacity: 0, yPercent: -100, duration: 0.3}
      );
   })


  return (
    <section id='hero' className='min-h-[650px] md:min-h-[800px]'>
        <div ref={stage} className="stage absolute top-0 left-0 right-0 bottom-0 overflow-hidden w-full h-full">
          {/* <span> elements dynamically created here*/}
        </div>

        {/* Content */}
        <div className="hero-content text-center">
            <h1 className='text-4xl whitespace-nowrap md:text-7xl'>Jason Fleming</h1>
            <h2 className='text-lg md:text-3xl mt-4'>Front End Developer</h2>
        </div>

        {/* Scroll Bouncing Arrow */}
        <span id='hero-arrow' className='absolute bottom-[5%] left-[42%] md:left-[48%] translate-x-[-50%] text-7xl opacity-60'>
        <MdOutlineArrowDownward/>
        </span>
    </section>
  )
}

export default Hero
