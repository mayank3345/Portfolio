"use client";

import { useSelector } from "react-redux";
import {
  FaEnvelope,
  FaLocationDot,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

const contacts = [
  {
    icon: <FaEnvelope />,
    title: "Email",
    value: "adimayank55@gmail.com",
    href: "mailto:adimayank55@gmail.com",
  },
  {
    icon: <FaLocationDot />,
    title: "Location",
    value: "Bengaluru, India",
    href: "#",
  },
  {
    icon: <FaGithub />,
    title: "GitHub",
    value: "github.com/mayank3345",
    href: "https://github.com/mayank3345",
  },
  {
    icon: <FaLinkedin />,
    title: "LinkedIn",
    value: "linkedin.com/in/aditya-singh0100/",
    href: "https://www.linkedin.com/in/aditya-singh0100/",
  },
];

export default function ContactInfo() {
  const theme = useSelector((state) => state.theme.darkMode);

  return (
    <section className={`py-20 ${theme ? "bg-slate-900" : "bg-white"}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span
            className={`inline-flex rounded-full px-4 py-2 text-sm font-medium ${
              theme
                ? "bg-blue-500/20 text-blue-400"
                : "bg-blue-100 text-blue-700"
            }`}
          >
            Contact Information
          </span>

          <h2
            className={`mt-6 text-3xl font-bold md:text-4xl ${
              theme ? "text-white" : "text-slate-900"
            }`}
          >
            Let's Connect
          </h2>

          <p
            className={`mt-5 text-lg leading-8 ${
              theme ? "text-slate-300" : "text-slate-600"
            }`}
          >
            Whether you have a job opportunity, freelance project, or just want
            to connect, I'd love to hear from you.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contacts.map((item) => {
            const href = item.href?.trim();
            const isExternalLink = Boolean(href && href.startsWith("http"));

            return (
              <a
                key={item.title}
                href={href || undefined}
                target={isExternalLink ? "_blank" : undefined}
                rel={isExternalLink ? "noopener noreferrer" : undefined}
                className={`group rounded-2xl border p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl ${
                  theme
                    ? "border-slate-700 bg-slate-800"
                    : "border-slate-200 bg-white"
                }`}
              >
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-xl text-2xl transition group-hover:bg-blue-600 group-hover:text-white ${
                  theme
                    ? "bg-blue-500/20 text-blue-400"
                    : "bg-blue-100 text-blue-600"
                }`}
              >
                {item.icon}
              </div>

              <h3
                className={`mt-5 text-lg font-semibold ${
                  theme ? "text-white" : "text-slate-900"
                }`}
              >
                {item.title}
              </h3>

                <p
                  className={`mt-2 break-words text-sm ${
                    theme ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  {item.value}
                </p>
              </a>
            );
          })}
        </div>

        {/* Availability */}
        <div
          className={`mt-16 rounded-3xl p-8 text-center transition-colors duration-300 ${
            theme ? "bg-slate-800 text-white" : "bg-slate-100 text-slate-900"
          }`}
        >
          <span
            className={`
      inline-flex
      items-center
      rounded-full
      bg-green-500/20
      px-4
      py-2
      text-sm
      font-medium ${theme ? "text-green-500" : "text-green-600"}
    `}
          >
            🟢 Available for Opportunities
          </span>

          <h3
            className={`mt-6 text-3xl font-bold ${
              theme ? "text-white" : "text-slate-900"
            }`}
          >
            Open to Full-Time & Freelance Work
          </h3>

          <p
            className={`mx-auto mt-4 max-w-3xl ${
              theme ? "text-slate-300" : "text-slate-600"
            }`}
          >
            I am actively looking for Full-Time Software Developer roles,
            internships, freelance projects, and remote opportunities where I
            can build scalable and high-quality web applications.
          </p>
        </div>
      </div>
    </section>
  );
}
