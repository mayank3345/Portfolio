import { Monitor, Server, Database, Wrench, Brain } from "lucide-react";

export const skillsData = {
  badge: "Technical Skills",

  title: "Technologies I Work With",

  description:
    "I enjoy building modern, responsive, scalable, and SEO-friendly web applications using the MERN stack and continuously expanding my technical knowledge.",

  professionalSkillIcon: Brain,

  professionalSkillTitle: "Professional Skills",

  categories: [
    {
      icon: Monitor,
      title: "Frontend",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript (ES6+)",
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "Bootstrap",
        "Redux Toolkit",
        "Shadcn UI",
      ],
    },

    {
      icon: Server,
      title: "Backend",
      skills: ["Node.js", "Express.js", "REST API", "JWT Authentication"],
    },

    {
      icon: Database,
      title: "Database",
      skills: ["MongoDB", "Mongoose", "Cloudinary"],
    },

    {
      icon: Wrench,
      title: "Tools",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Postman",
        "Vercel",
        "Render",
        "npm",
      ],
    },
  ],

  professionalSkills: [
    "Problem Solving",
    "Team Collaboration",
    "Continuous Learning",
    "Clean Code",
    "Responsive Design",
    "Performance Optimization",
    "SEO Friendly Development",
    "Time Management",
  ],
};
