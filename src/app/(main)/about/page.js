import AboutHero from "@/components/about/AboutHero";
import MyStory from "@/components/about/MyStory";
import Education from "@/components/about/Education";
import Skills from "@/components/about/Skills";
import WhyWorkWithMe from "@/components/about/WhyWorkWithMe";
import AboutCTA from "@/components/about/AboutCTA";
import CertificateSection from "@/components/about/CertificateSection";

export const metadata = {
  title: "About",
  description:
    "Learn more about Aditya Singh, a Full Stack MERN Developer specializing in React.js, Next.js, Node.js, Express.js, and MongoDB.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <MyStory />
      <Education />
      <Skills />
      <CertificateSection />
      <WhyWorkWithMe />
      <AboutCTA />
    </main>
  );
}
