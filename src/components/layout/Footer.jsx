"use client";

import Link from "next/link";
import Image from "next/image";

import { useSelector } from "react-redux";
import { ArrowUp } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

const services = [
  "Frontend Development",
  "Full Stack Development",
  "Responsive Web Design",
  "Portfolio Website",
];

export default function Footer() {
  const theme = useSelector((state) => state.theme.darkMode);

  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className={`border-t transition-colors duration-300 ${
        theme
          ? "border-slate-800 bg-slate-900 text-slate-300"
          : "border-slate-200 bg-gray-100 text-slate-600"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}

          <div>
            <Link
              href="/"
              className={`flex items-center gap-2 text-2xl font-bold ${
                theme ? "text-white" : "text-slate-900"
              }`}
            >
              <Image
                src="/logo/logo.png"
                alt="Aditya Singh Portfolio Logo"
                width={65}
                height={65}
                priority
              />
              Aditya Singh
            </Link>

            <p
              className={`mt-5 leading-7 ${
                theme ? "text-slate-400" : "text-slate-600"
              }`}
            >
              Full Stack MERN Developer passionate about building modern, fast,
              responsive and SEO-friendly web applications using React, Next.js,
              Node.js and MongoDB.
            </p>

            <div className="mt-6 flex gap-4">
              {[
                {
                  name: "Github",
                  url: "https://github.com/mayank3345",
                },
                {
                  name: "Linkedin",
                  url: "https://www.linkedin.com/in/aditya-singh0100/",
                },
                {
                  name: "Mail",
                  url: "mailto:adimayank55@gmail.com",
                },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target={item.name !== "Mail" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className={`rounded-lg border p-3 transition ${
                    theme
                      ? "border-slate-700 hover:border-blue-500 hover:text-blue-400"
                      : "border-slate-300 hover:border-blue-500 hover:text-blue-600"
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}

          <div>
            <h3
              className={`text-lg font-semibold ${
                theme ? "text-white" : "text-slate-900"
              }`}
            >
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`transition ${
                      theme ? "hover:text-blue-400" : "hover:text-blue-600"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}

          <div>
            <h3
              className={`text-lg font-semibold ${
                theme ? "text-white" : "text-slate-900"
              }`}
            >
              Services
            </h3>

            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li
                  key={service}
                  className={theme ? "text-slate-400" : "text-slate-600"}
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}

          <div>
            <h3
              className={`text-lg font-semibold ${
                theme ? "text-white" : "text-slate-900"
              }`}
            >
              Contact
            </h3>

            <div className="mt-5 space-y-4">
              <p>📍 Bengaluru, India</p>

              {[
                {
                  text: "adimayank55@gmail.com",
                  href: "mailto:adimayank55@gmail.com",
                },
                {
                  text: "github.com/mayank3345",
                  href: "https://github.com/mayank3345",
                },
                {
                  text: "linkedin.com/in/aditya-singh0100/",
                  href: "https://www.linkedin.com/in/aditya-singh0100/",
                },
              ].map((item) => (
                <a
                  key={item.text}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block transition ${
                    theme ? "hover:text-blue-400" : "hover:text-blue-600"
                  }`}
                >
                  {item.text}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}

        <div
          className={`mt-14 flex flex-col items-center justify-between gap-6 border-t pt-8 md:flex-row ${
            theme ? "border-slate-700" : "border-slate-300"
          }`}
        >
          <p
            className={`text-center text-sm ${
              theme ? "text-slate-500" : "text-slate-600"
            }`}
          >
            © {year} Aditya Singh. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Back to Top"
            className={`rounded-full border p-3 transition ${
              theme
                ? "border-slate-700 hover:border-blue-500 hover:bg-blue-600 hover:text-white"
                : "border-slate-300 hover:border-blue-500 hover:bg-blue-600 hover:text-white"
            }`}
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}
