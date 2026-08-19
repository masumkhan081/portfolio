export const mapProjectTabs = {
  all: "All",
  be: "Backend only",
  fe: "Frontend only",
  fs: "Full-stack",
};

mapProjectTabs[Object.keys(mapProjectTabs)[0]];

export const mapProjectStatuses = {
  ongoing: "Ongoing",
  inProgress: "In-progress",
  percent: (percentage) => `${percentage} Complete`,
};

export const projectList = [
  {
    name: "Bid-Sphere",
    summary:
      "Real-time auction platform with live bidding, automated auction lifecycle, and role-based access for sellers, bidders and admins.",
    versions: [
      {
        version: "1",
        deploy_link: "",
        yt_link: "",
        type: mapProjectTabs.fs,
        fe_github_link: "",
        be_github_link:
          "https://github.com/masumkhan081/auction-platform-backend",
        tools: [
          "Next.js",
          "NestJS",
          "PostgreSQL",
          "Drizzle",
          "Socket.IO",
          "BullMQ",
          "TypeScript",
        ],
      },
    ],
  },
  {
    name: "PMS",
    summary:
      "Multi-role pharmacy management system covering inventory, POS, payroll, attendance, and operations.",
    versions: [
      {
        version: "1",
        deploy_link: "https://pharmacy-mgmt.vercel.app",
        yt_link: "",
        type: mapProjectTabs.fs,
        fe_github_link:
          "https://github.com/masumkhan081/pharmacy-mgmt-frontend",
        be_github_link: "https://github.com/masumkhan081/pharmacy-mgmt-backend",
        tools: [
          "React",
          "Redux",
          "Express.js",
          "PostgreSQL",
          "Prisma",
          "Zod",
          "TypeScript",
        ],
      },
    ],
  },
  {
    name: "Resume Builder",
    summary:
      "AI-powered resume builder with customizable templates, intelligent content assistance, PDF export, and secure authentication.",
    versions: [
      {
        version: "1",
        deploy_link: "",
        yt_link: "",
        type: mapProjectTabs.fs,
        fe_github_link: "",
        be_github_link: "",
        tools: [
          "Next.js",
          "MongoDB",
          "Mongoose",
          "Auth.js",
          "AI",
          "TypeScript",
          "Tailwind CSS",
        ],
      },
    ],
  },
  {
    name: "Suitable",
    summary:
      "Dating platform featuring profile matching, real-time messaging, and secure authentication.",
    versions: [
      {
        version: "1",
        deploy_link: "",
        yt_link: "",
        type: mapProjectTabs.fs,
        fe_github_link: "",
        be_github_link: "",
        tools: [
          "Next.js",
          "MongoDB",
          "Mongoose",
          "Better Auth",
          "Socket.IO",
          "TypeScript",
        ],
      },
    ],
  },
  {
    name: "Portfolio",
    summary:
      "Project objective was to implement Bootstrap-5 in practice with purpose of presenting personal details, acquired skills, live & on-going projects.",
    versions: [
      {
        version: "Bootstrap version",
        deploy_link: "https://masumk081.web.app",
        yt_link: "#",
        type: mapProjectTabs.fe,
        fe_github_link:
          "https://github.com/masumkhan081/masumkhan081.github.io",
        tools: ["Bootstrap-5"],
      },
      {
        version: "React-Next version",
        deploy_link: "https://masum-khan.com",
        yt_link: "",
        type: mapProjectTabs.fe,
        fe_github_link: "https://github.com/masumkhan081/portfolio",
        tools: ["Next", "Tailwind"],
      },
    ],
  },
];
