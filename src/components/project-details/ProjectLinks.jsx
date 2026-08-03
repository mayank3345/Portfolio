"use client";

import { useSelector } from "react-redux";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function ProjectLinks({ project }) {
  const theme = useSelector((state) => state.theme.darkMode);
  const hasLiveLink = Boolean(project.live_link?.trim());
  const hasGithubLink = Boolean(project.github_link?.trim());

  return (
    <section className={`py-20 ${theme ? "bg-slate-900" : "bg-white"}`}>
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div
          className={`rounded-3xl border p-10 text-center ${
            theme
              ? "border-slate-700 bg-slate-800"
              : "border-slate-200 bg-slate-50"
          }`}
        >
          <span
            className={`inline-flex rounded-full px-4 py-2 text-sm font-medium ${
              theme
                ? "bg-blue-500/20 text-blue-400"
                : "bg-blue-100 text-blue-700"
            }`}
          >
            Project Links
          </span>

          <h2
            className={`mt-6 text-3xl font-bold ${
              theme ? "text-white" : "text-slate-900"
            }`}
          >
            Explore This Project
          </h2>

          <p
            className={`mx-auto mt-5 max-w-2xl text-lg leading-8 ${
              theme ? "text-slate-300" : "text-slate-600"
            }`}
          >
            View the live application or browse the complete source code on
            GitHub.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">
            {hasLiveLink && (
              <a
                href={project.live_link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                <FaExternalLinkAlt className="mr-2" />
                Live Demo
              </a>
            )}

            {hasGithubLink && (
              <a
                href={project.github_link}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center rounded-xl border px-7 py-3 font-semibold transition ${
                  theme
                    ? "border-slate-600 text-slate-200 hover:border-blue-500 hover:text-blue-400"
                    : "border-slate-300 text-slate-700 hover:border-blue-600 hover:text-blue-600"
                }`}
              >
                <FaGithub className="mr-2" />
                View Source Code
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
