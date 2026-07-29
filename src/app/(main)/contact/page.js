import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import FAQ from "@/components/contact/FAQ";
import ContactCTA from "@/components/contact/ContactCTA";

export const metadata = {
  title: "Contact | Aditya Singh",
  description:
    "Get in touch with Aditya Singh, a Full Stack MERN Developer. Available for full-time jobs, internships, freelance work, and collaborations.",
  keywords: [
    "Contact Aditya Singh",
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Portfolio Contact",
  ],
};

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <FAQ />
      <ContactCTA />
    </main>
  );
}
