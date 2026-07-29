import ServicesHero from "@/components/services/ServicesHero";
import ServicesGrid from "@/components/services/ServicesGrid";
import DevelopmentProcess from "@/components/services/DevelopmentProcess";
import Technologies from "@/components/services/Technologies";
import WhyChooseMe from "@/components/services/WhyChooseMe";
import ServicesCTA from "@/components/services/ServicesCTA";

export const metadata = {
  title: "Services | Aditya Singh",
  description:
    "Professional Full Stack MERN Developer offering React.js, Next.js, Node.js, Express.js, MongoDB, responsive web development, SEO optimization, and portfolio website development.",
  keywords: [
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Portfolio Website",
    "Frontend Developer",
    "Full Stack Developer",
  ],
};

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <ServicesGrid />
      <DevelopmentProcess />
      <Technologies />
      <WhyChooseMe />
      <ServicesCTA />
    </main>
  );
}
