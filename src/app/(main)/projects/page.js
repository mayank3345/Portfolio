import ProjectsHero from "@/components/projects/ProjectsHero";
import FeaturedProjects from "@/components/projects/FeaturedProjects";
import ProjectsGrid from "@/components/projects/ProjectsGrid";
import ProjectsCTA from "@/components/projects/ProjectsCTA";

export const metadata = {
  title: "Projects | Aditya Singh",
  description:
    "Explore the portfolio projects of Aditya Singh, a Full Stack MERN Developer. View React.js, Next.js, Node.js, Express.js, MongoDB, and Tailwind CSS projects with live demos and GitHub repositories.",
  keywords: [
    "Aditya Singh",
    "MERN Stack Developer",
    "React Projects",
    "Next.js Projects",
    "Portfolio",
    "MongoDB",
    "Node.js",
    "Express.js",
    "Tailwind CSS",
    "JavaScript Developer",
  ],
};

export default function ProjectsPage() {
  return (
    <main>
      <ProjectsHero />
      <FeaturedProjects />
      <ProjectsGrid />
      <ProjectsCTA />
    </main>
  );
}
