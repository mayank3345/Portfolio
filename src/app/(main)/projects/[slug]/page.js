import { notFound } from "next/navigation";

import projects from "@/data/projects/projectsData";

import ProjectHero from "@/components/project-details/ProjectHero";
import ProjectGallery from "@/components/project-details/ProjectGallery";
import ProjectOverview from "@/components/project-details/ProjectOverview";
import ProjectFeatures from "@/components/project-details/ProjectFeatures";
import ProjectTechStack from "@/components/project-details/ProjectTechStack";
import ProjectLinks from "@/components/project-details/ProjectLinks";
import ProjectNavigation from "@/components/project-details/ProjectNavigation";
import ProjectCTA from "@/components/project-details/ProjectCTA";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  const technologies = [
    ...(project.tech_stack?.frontend || []),
    ...(project.tech_stack?.backend || []),
    ...(project.tech_stack?.database || []),
  ];

  return {
    title: `${project.title} | Aditya Singh`,
    description: project.shortDescription,

    keywords: [
      project.title,
      ...technologies,
      "MERN Stack",
      "Next.js",
      "React.js",
      "Portfolio",
      "Aditya Singh",
    ],

    openGraph: {
      title: project.title,
      description: project.shortDescription,
      images: [
        {
          url: project.image,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.shortDescription,
      images: [project.image],
    },
  };
}

export default async function ProjectDetailsPage({ params }) {
  const { slug } = await params;

  const projectIndex = projects.findIndex((item) => item.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = projects[projectIndex];

  const previousProject = projectIndex > 0 ? projects[projectIndex - 1] : null;

  const nextProject =
    projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  return (
    <>
      <ProjectHero project={project} />

      <ProjectGallery project={project} />

      <ProjectOverview project={project} />

      <ProjectFeatures project={project} />

      <ProjectTechStack project={project} />

      <ProjectLinks project={project} />

      <ProjectNavigation
        previousProject={previousProject}
        nextProject={nextProject}
      />

      <ProjectCTA />
    </>
  );
}
