"use client";

import Link from "next/link";
import { useSelector } from "react-redux";

import { FaEnvelope, FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

export default function ContactCTA() {
  const theme = useSelector((state) => state.theme.darkMode);

  return (
    <section
      className={`py-20 transition-colors duration-300 ${
        theme ? "bg-slate-950" : "bg-slate-50"
      }`}
    >
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div
          className="
rounded-3xl
bg-gradient-to-r
from-blue-600
to-indigo-600
p-10
text-center
text-white
shadow-2xl
md:p-16
"
        >
          {/* Badge */}

          <span
            className="
inline-flex
rounded-full
bg-white/20
px-4
py-2
text-sm
font-medium
backdrop-blur
"
          >
            🚀 Ready to Work Together?
          </span>

          {/* Heading */}

          <h2
            className="
mt-6
text-4xl
font-bold
"
          >
            Let's Build Something Great
          </h2>

          {/* Description */}

          <p
            className="
mx-auto
mt-6
max-w-3xl
text-lg
text-blue-100
"
          >
            Whether you're hiring a Full Stack MERN Developer, looking for a
            freelancer, or want to collaborate on an exciting project, I'd love
            to hear from you.
          </p>

          {/* Buttons */}

          <div
            className="
mt-10
flex
flex-wrap
justify-center
gap-4
"
          >
            {/* Contact */}

            <Link
              href="#contact-form"
              className="
inline-flex
items-center
rounded-xl
bg-white
px-6
py-3
font-semibold
text-blue-700
transition
hover:bg-slate-100
"
            >
              <FaEnvelope className="mr-2" />
              Send Message
            </Link>

            {/* Resume */}

            <a
              href="/resume/Resume2026_Aug.pdf"
              download
              className="
inline-flex
items-center
rounded-xl
border
border-white/40
px-6
py-3
font-semibold
text-white
transition
hover:bg-white
hover:text-blue-700
"
            >
              <FaDownload className="mr-2" />
              Download Resume
            </a>

            {/* Github */}

            <a
              href="https://github.com/mayank3345"
              target="_blank"
              rel="noopener noreferrer"
              className="
inline-flex
items-center
rounded-xl
border
border-white/40
px-6
py-3
font-semibold
text-white
transition
hover:bg-white
hover:text-blue-700
"
            >
              <FaGithub className="mr-2" />
              GitHub
            </a>

            {/* LinkedIn */}

            <a
              href="https://www.linkedin.com/in/aditya-singh0100/"
              target="_blank"
              rel="noopener noreferrer"
              className="
inline-flex
items-center
rounded-xl
border
border-white/40
px-6
py-3
font-semibold
text-white
transition
hover:bg-white
hover:text-blue-700
"
            >
              <FaLinkedin className="mr-2" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
