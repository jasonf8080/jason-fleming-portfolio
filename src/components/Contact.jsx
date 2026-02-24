import React, { useRef, useState } from 'react'
import { MdOutlineArrowOutward } from "react-icons/md"
import { contactInfo } from '../../constants'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import Underline from './Underline'

const Contact = () => {
  const sectionRef = useRef(null)
  const [status, setStatus] = useState("idle");

    const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.target;
    const data = new FormData(form);

  

    try {
        await fetch("/", {
        method: "POST",
        body: data,
        });

        setStatus("success");
        form.reset();
    } catch (err) {
        setStatus("error");
    }
    };

  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 30%',
        toggleActions: "play none none reverse",
      }
    })

    timeline.from(
      ['#contact-title', '#contact p', '#contact .text-underline'],
      { opacity: 0, xPercent: -100 }
    )

    timeline.from(
      '#contact-title span',
      { opacity: 0, x: -50, y: 50 }
    )

    timeline.from(
      '#message-form > *',
      { opacity: 0, yPercent: -100, stagger: { amount: 0.3 } }
    )

    timeline.from(
      '#contact article',
      { opacity: 0, yPercent: -100, stagger: { amount: 0.3 } },
      "<"
    )
  })

  return (
    <section ref={sectionRef} id='contact' className='bg-[#1a1a1a] py-16 md:py-25'>
      <div className="container">
        {/* Header */}
        <header>
          <h1 id='contact-title' className="title-xl flex items-center mb-4">
            Let's Connect
            <span className='ml-6 text-9xl'><MdOutlineArrowOutward /></span>
          </h1>

          <p className='text-xl md:text-2xl mb-8'>
            Want to discuss your project with me? Send me a message.
          </p>
        </header>

        {/* Underline */}
        <Underline mobileWidth={'150'} width={'250'} />

        {/* Content */}
        <div className="flex flex-col md:flex-row gap-16 md:gap-24 mt-12">
          {/* Message Form */}
          <form
            id="message-form"
            className="basis-[45%]"
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            {/* required for Netlify */}
            <input type="hidden" name="form-name" value="contact" />

            {/* honeypot (hidden field for bots) */}
            <p className="hidden">
              <label>
                Don’t fill this out: <input name="bot-field" />
              </label>
            </p>

            <input type="text" name="name" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email" required />
            <textarea name="message" id="message" placeholder="Write your message here" required />
            <button type="submit" className="bg-[#333] rounded-sm uppercase font-bold py-3 px-6">
              Send Message
            </button>
            {status === "loading" && (
            <p className="mt-4 text-gray-400">Sending message…</p>
            )}

            {status === "success" && (
            <p className="mt-4 text-green-400">Message sent successfully!</p>
            )}

            {status === "error" && (
            <p className="mt-4 text-red-400">Something went wrong. Try again.</p>
            )}
          </form>

          {/* Contact Info */}
          <div>
            {contactInfo.map((contact) => {
              const Icon = contact.icon
              return (
                <article key={contact.id} className="flex items-center gap-4 mb-6 text-xl">
                  <span className='text-3xl rounded-lg p-4 bg-[#333]'>
                    <Icon />
                  </span>
                  <p className='font-bold uppercase'>{contact.content}</p>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact