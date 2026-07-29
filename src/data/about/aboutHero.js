import { GraduationCap, MapPin, Briefcase, Mail } from "lucide-react";

export const aboutHeroData = {
  badge: "About Me",

  title: "Passionate Full Stack",

  highlight: "MERN Developer",

  description1:
    "Hi, I'm Aditya Singh, a B.Tech (Computer Science & Engineering) graduate passionate about building modern, responsive, and SEO-friendly web applications using React, Next.js, Node.js, Express.js, and MongoDB.",

  description2:
    "I enjoy transforming ideas into fast, scalable, and user-friendly digital experiences while continuously learning new technologies and best development practices.",

  imageAlt: "Aditya Singh - Full Stack MERN Developer",

  infoCards: [
    {
      icon: GraduationCap,
      title: "B.Tech (CSE) • 2025",
      description: "Computer Science Graduate",
    },

    {
      icon: MapPin,
      title: "Bengaluru, India",
      description: "India • Open to Relocate",
    },

    {
      icon: Briefcase,
      title: "Open to Work",
      description: "Full-Time & Remote",
    },

    {
      icon: Mail,
      title: "Contact Me",
      description: "Available for Opportunities",
    },
  ],

  buttons: {
    primary: {
      text: "Contact Me",
      href: "/contact",
    },

    secondary: {
      text: "Download Resume",
    },
  },
};
