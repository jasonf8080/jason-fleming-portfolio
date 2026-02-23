import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
    import { useEffect } from "react";
import Lenis from "lenis";
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'



gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      smoothTouch: false, // keep false for phones unless you really want it
    });

    // Tell ScrollTrigger to update on Lenis scroll
    lenis.on("scroll", ScrollTrigger.update);

    // Use GSAP's ticker to drive Lenis (keeps everything in sync)
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000); // gsap time is in seconds, lenis expects ms
    });

    // Optional: avoid laggy feel
    gsap.ticker.lagSmoothing(0);

    // Cleanup
    return () => {
      gsap.ticker.remove((time) => lenis.raf(time * 1000)); // (see note below)
      lenis.destroy();
    };
  }, []);

 

  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Projects/>
    <Skills/> 
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
