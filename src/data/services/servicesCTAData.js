import { FaEnvelope, FaGithub } from "react-icons/fa";

export const servicesCTAData = {
  title: "Ready to Start Your Project?",

  description:
    "Whether you need a portfolio website, business website, or a complete MERN Stack application, I'm ready to help you build a fast, responsive, and SEO-friendly solution.",

  buttons: [
    {
      type: "internal",
      href: "/contact",
      text: "Contact Me",
      icon: FaEnvelope,
    },
    {
      type: "external",
      href: "https://github.com/mayank3345",
      text: "View GitHub",
      icon: FaGithub,
    },
  ],
};
