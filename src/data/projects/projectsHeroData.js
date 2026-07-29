import { FaFolderOpen, FaGithub } from "react-icons/fa";
import { IoArrowForward } from "react-icons/io5";

export const projectsHeroData = {
  badge: {
    text: "My Portfolio Projects",
    icon: FaFolderOpen,
  },

  title: {
    first: "Featured Projects &",
    second: "Real-World Applications",
  },

  description:
    "Explore my collection of full-stack and frontend web development projects built with React.js, Next.js, Node.js, Express.js, MongoDB, Tailwind CSS, and modern web technologies. Each project demonstrates my skills in responsive design, clean architecture, API integration, authentication, and performance optimization.",

  buttons: [
    {
      type: "internal",
      href: "#featured-projects",
      text: "View Projects",
      icon: IoArrowForward,
    },
    {
      type: "external",
      href: "https://github.com/mayank3345",
      text: "GitHub Profile",
      icon: FaGithub,
    },
  ],

  stats: [
    {
      value: "5+",
      label: "Completed Projects",
    },
    {
      value: "8+",
      label: "Technologies Used",
    },
    {
      value: "100%",
      label: "Responsive Design",
    },
    {
      value: "SEO",
      label: "Optimized Websites",
    },
  ],
};
