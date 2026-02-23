import { FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const projects = [
    {
        name: 'Gardenside Kitchen',
        image: '',
        description: `Gardenside Kitchen is a website I developed for a newly opened café in need of a professional online presence. The goal was to create a clean, modern site that clearly represented the brand and made it easy for local customers to discover the business in the Cross River/Lewisboro area.`,
        links: {
            live: '',
            github: ''
        }
    },
    {
        name: 'South Salem Winery',
        image: '',
        description: `Gardenside Kitchen is a website I developed for a newly opened café in need of a professional online presence. The goal was to create a clean, modern site that clearly represented the brand and made it easy for local customers to discover the business in the Cross River/Lewisboro area.`,
        links: {
            live: '',
            github: ''
        }
    },
    {
        name: 'Pixelize',
        image: '',
        description: `Gardenside Kitchen is a website I developed for a newly opened café in need of a professional online presence. The goal was to create a clean, modern site that clearly represented the brand and made it easy for local customers to discover the business in the Cross River/Lewisboro area.`,
        links: {
            live: '',
            github: ''
        }
    },
    {
        name: 'Sofascore',
        image: '',
        description: `Gardenside Kitchen is a website I developed for a newly opened café in need of a professional online presence. The goal was to create a clean, modern site that clearly represented the brand and made it easy for local customers to discover the business in the Cross River/Lewisboro area.`,
        links: {
            live: '',
            github: ''
        }
    },
]

 const skills = [
  {
    name: "Frontend Development",
    description:
      "Building responsive, animated interfaces with React, Tailwind, and modern JavaScript.",
    frameworks: ['html', 'css', 'javascript', 'react']
  },
  {
    name: "Animation & Interaction",
    description:
      "Scroll-based animations using GSAP, Framer Motion, and performance-first techniques.",
    frameworks: ['gsap', 'framer motion']
  },
  {
    name: "Full-Stack Foundations",
    description:
      "REST APIs, authentication, and databases with Node, Express, and MongoDB.",
    frameworks: ['node', 'express', 'mongodb']
  },
  {
    name: "Design-Driven Development",
    description:
      "Translating visual identity into clean, maintainable UI.",
    frameworks: ['figma']
  },
];


 const contactInfo = [
  {
    id: "linkedin",
    icon: FaLinkedinIn,
    content: "LinkedIn",
  },
  {
    id: "location",
    icon: FaMapMarkerAlt,
    content: "New York",
  },
  {
    id: "number",
    icon: FaPhoneAlt,
    content: "845-204-4236",
  },
  {
    id: "email",
    icon: FaEnvelope,
    content: "jasonf8080@gmail.com",
  },
];

 const navigation = [
  {
    id: "home",
    name: "Home",
    href: "#home",
  },
  {
    id: "projects",
    name: "Projects",
    href: "#projects",
  },
  {
    id: "about",
    name: "About",
    href: "#about",
  },
  {
    id: "contact",
    name: "Contact Me",
    href: "#contact",
  },
];

 const socials = [
  {
    id: "linkedin",
    name: "LinkedIn",
    href: "https://linkedin.com/in/yourusername",
  },
  {
    id: "github",
    name: "GitHub",
    href: "https://github.com/yourusername",
  },
  {
    id: "whatsapp",
    name: "WhatsApp",
    href: "https://wa.me/yourphonenumber",
  },
];


export { projects, skills, contactInfo, navigation, socials }