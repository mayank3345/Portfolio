"use client";

import Link from "next/link";
import { useSelector } from "react-redux";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function ContactHero() {
  const theme = useSelector((state) => state.theme.darkMode);

  return (
    <section
      className={`relative overflow-hidden py-24 lg:py-32 ${
        theme
          ? "bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800"
          : "bg-gradient-to-br from-slate-50 via-white to-blue-50"
      }`}
    >
      {/* Background Blur */}
      <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <span
            className={`inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium ${
              theme
                ? "border-blue-500/30 bg-blue-500/20 text-blue-400"
                : "border-blue-200 bg-blue-50 text-blue-700"
            }`}
          >
            📩 Contact Me
          </span>

          {/* Heading */}
          <h1
            className={`mt-8 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl ${
              theme ? "text-white" : "text-slate-900"
            }`}
          >
            Let's Build Something
            <span className="block text-blue-600">Amazing Together</span>
          </h1>

          {/* Description */}
          <p
            className={`mx-auto mt-8 max-w-3xl text-lg leading-8 ${
              theme ? "text-slate-300" : "text-slate-600"
            }`}
          >
            I'm <strong>Aditya Singh</strong>, a Full Stack MERN Developer
            passionate about building modern, responsive, fast, and SEO-friendly
            web applications. I'm open to full-time opportunities, internships,
            freelance projects, and collaborations.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="#contact-form"
              className="inline-flex items-center rounded-xl bg-blue-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-blue-700"
            >
              <FaEnvelope className="mr-2" />
              Send Message
            </Link>

            <a
              href="https://github.com/mayank3345"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center rounded-xl border px-6 py-3 text-base font-semibold transition ${
                theme
                  ? "border-slate-700 text-slate-200 hover:border-blue-500 hover:text-blue-400"
                  : "border-slate-300 text-slate-700 hover:border-blue-600 hover:text-blue-600"
              }`}
            >
              <FaGithub className="mr-2" />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/aditya-singh0100/"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center rounded-xl border px-6 py-3 text-base font-semibold transition ${
                theme
                  ? "border-slate-700 text-slate-200 hover:border-blue-500 hover:text-blue-400"
                  : "border-slate-300 text-slate-700 hover:border-blue-600 hover:text-blue-600"
              }`}
            >
              <FaLinkedin className="mr-2" />
              LinkedIn
            </a>
          </div>

          {/* Quick Stats */}
          <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              { value: "MERN", label: "Tech Stack" },
              { value: "2025", label: "B.Tech Graduate" },
              { value: "Remote", label: "Available" },
              { value: "100%", label: "Responsive" },
            ].map((item) => (
              <div
                key={item.label}
                className={`rounded-2xl border p-6 shadow-sm transition ${
                  theme
                    ? "border-slate-700 bg-slate-800"
                    : "border-slate-200 bg-white"
                }`}
              >
                <h3 className="text-2xl font-bold text-blue-600">
                  {item.value}
                </h3>

                <p
                  className={`mt-2 text-sm ${
                    theme ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
