const projects = [
  {
    id: 1,
    slug: "evently",
    featured: true,
    category: "Full Stack",

    title: "Evently",

    image: "/images/projects/evently/evently1.png",

    project_image: [
      "/images/projects/evently/evently1.png",
      "/images/projects/evently/evently2.png",
      "/images/projects/evently/evently3.png",
      "/images/projects/evently/evently4.png",
      "/images/projects/evently/evently5.png",
      "/images/projects/evently/evently6.png",
      "/images/projects/evently/evently7.png",
      "/images/projects/evently/evently8.png",
      "/images/projects/evently/evently9.png",
      "/images/projects/evently/evently10.png",
    ],

    shortDescription:
      "A modern event management platform with secure authentication and online ticket booking.",

    description:
      "Evently is a full-stack event management application where users can create, manage, discover, and book events. It provides secure authentication, Stripe payment integration, event search, category filtering, and a responsive user experience.",

    project_info:
      "Built using Next.js, Clerk Authentication, Stripe, and MongoDB, Evently simplifies event organization by allowing organizers to publish events while attendees can easily discover and book them.",

    live_link: "https://evently-pearl-kappa.vercel.app/",

    github_link: "https://github.com/mayank3345/Evently",

    video_link: "",

    features: [
      "Clerk Authentication",
      "Create, Edit & Delete Events",
      "Stripe Payment Integration",
      "Search & Category Filtering",
      "Responsive Design",
      "User Dashboard",
      "Secure Event Booking",
    ],

    tech_stack: {
      frontend: [
        "Next.js",
        "React.js",
        "TypeScript",
        "Tailwind CSS",
        "Shadcn UI",
        "Clerk",
      ],
      backend: ["Next.js Server Actions", "Node.js"],
      database: ["MongoDB", "Mongoose", "Stripe"],
    },
  },

  {
    id: 2,
    slug: "donedesk",
    featured: true,
    category: "Full Stack",

    title: "DoneDesk",

    image: "/images/projects/donedesk/donedesk3.png",

    project_image: [
      "/images/projects/donedesk/donedesk1.png",
      "/images/projects/donedesk/donedesk2.png",
      "/images/projects/donedesk/donedesk3.png",
      "/images/projects/donedesk/donedesk4.png",
      "/images/projects/donedesk/donedesk6.png",
      "/images/projects/donedesk/donedesk7.png",
      "/images/projects/donedesk/donedesk8.png",
      "/images/projects/donedesk/donedesk9.png",
      "/images/projects/donedesk/donedesk10.png",
    ],

    shortDescription:
      "A collaborative project and task management platform for teams and individuals.",

    description:
      "DoneDesk is a productivity platform that helps teams organize projects, assign tasks, monitor progress, and collaborate efficiently through an intuitive dashboard.",

    project_info:
      "The application provides secure authentication, project workspaces, task assignment, progress tracking, and responsive dashboards for efficient project management.",

    live_link: "https://done-desk.vercel.app/login",

    github_link: "https://github.com/mayank3345/DoneDesk",

    video_link: "",

    features: [
      "JWT Authentication",
      "Workspace Management",
      "Project Management",
      "Task Assignment",
      "Task Status Tracking",
      "Responsive Dashboard",
      "Team Collaboration",
    ],

    tech_stack: {
      frontend: ["React.js", "Tailwind CSS", "React Router", "Axios"],
      backend: ["Node.js", "Express.js", "JWT"],
      database: ["MongoDB", "Mongoose"],
    },
  },

  {
    id: 3,
    slug: "ai-cold-mail-generator",
    featured: true,
    category: "AI",

    title: "AI Cold Mail Generator",

    image: "/images/projects/ai-cold-mail/ai-cold-mail1.png",

    project_image: [
      "/images/projects/ai-cold-mail/ai-cold-mail1.png",
      "/images/projects/ai-cold-mail/ai-cold-mail2.png",
      "/images/projects/ai-cold-mail/ai-cold-mail3.png",
      "/images/projects/ai-cold-mail/ai-cold-mail4.png",
      "/images/projects/ai-cold-mail/ai-cold-mail5.png",
    ],

    shortDescription:
      "An AI-powered application that generates personalized cold emails from job descriptions.",

    description:
      "AI Cold Mail Generator leverages Large Language Models to analyze job descriptions and automatically generate personalized, professional cold emails for job applications and business outreach.",

    project_info:
      "Built with React, Node.js, Express, and OpenAI APIs, the application automates email generation, allowing users to create customized outreach emails within seconds.",

    live_link: "https://ai-mail-gen.vercel.app/",

    github_link: "https://github.com/mayank3345/AI-Cold-Mail-Generator",

    video_link: "",

    features: [
      "AI Email Generation",
      "Job Description Analysis",
      "Prompt Customization",
      "Responsive UI",
      "REST API Integration",
      "Copy to Clipboard",
      "Instant Email Generation",
    ],

    tech_stack: {
      frontend: ["React.js", "Vite", "Tailwind CSS", "Axios"],
      backend: ["Node.js", "Express.js", "OpenAI API"],
      database: [],
    },
  },
];

export default projects;
