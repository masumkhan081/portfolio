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
        deploy_link: "https://masumkhan.vercel.app",
        yt_link: "",
        type: mapProjectTabs.fe,
        fe_github_link: "https://github.com/masumkhan081/portfolio",
        tools: ["Next", "Tailwind"],
      },
    ],
  },
  {
    name: "Bid-Sphere",
    summary:
      "This online auction platform involves three roles: Seller, Bidder, and Admin. Sellers list products for auction, which are approved by Admin with a predefined time limit, starting price, and threshold amount. Bidders can place bids higher than the current maximum bid. The auction ends based on the seller's specified time and timezone, with the highest bid winning. If the highest bid is below the threshold, the product is marked as unsold and can be re-auctioned. Both Sellers and Bidders can provide feedback to each other.",
    versions: [
      {
        version: "1",
        deploy_link: "",
        yt_link: "",
        type: mapProjectTabs.be,
        fe_github_link: "",
        be_github_link:
          "https://github.com/masumkhan081/auction-platform-backend",
        tools: [
          "Express",
          "JWT",
          "MongoDB",
          "mongoose",
          "Node-Cron",
          "Moment-Timezone",
          "Nodmailer",
          "Next",
          "React",
        ],
      },
    ],
  },
  {
    name: "Pharmacy Mgmt Syst",
    summary:
      "Take care of storefronts and managerial aspects of a pharmacy(multi - role)",
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
          "Typescript",
          "React",
          "Redux",
          "Express",
          "Mongodb",
          "Mongoose",
        ],
      },
    ],
  },
  {
    name: "E-commerce",
    summary: "Vendor - centric online marketplace.",
    versions: [
      {
        version: "1",
        deploy_link: "",
        yt_link: "",
        type: mapProjectTabs.be,
        be_github_link: "https://github.com/masumkhan081/e-com-backend",
        fe_github_link: "",
        tools: ["Express", "MongoDB", "Mongoose", "Typescript", "Zod"],
      },
    ],
  },
  {
    name: "TaskMate",
    summary:
      "Task assignment, progress, and distribution system among developers & teams.",
    versions: [
      {
        version: "1",
        deploy_link: "",
        yt_link: "",
        type: mapProjectTabs.be,
        fe_github_link: "",
        be_github_link: "https://github.com/masumkhan081/taskmate-backend",
        tools: ["Nest", "PostgreSQL", "Prisma", "Next", "Tailwind"],
      },
    ],
  },
  /* 
DocRx[React, Nest, Postgres, Prisma, TypeScript]
Ongoing personal SaaS project; end - user: Doctors
"To assign, mark, and manage tasks in-between project manager -> team lead -> team member including the with option to invite a new employee over email with a defined role (jwt token) as a user of this system. An admin add/assign task for managers, a project manager may assign task to any team-lead, a team lead can assign task to his team- members ",
*/
  {
    name: "Resume Builder",
    summary:
      "Online resume builder for soft. developers. Takes technical skills, academic records, experiences etc to finally make a resume out of it. Started with the purpose of implementing firebase auth, context-api, react hoc and firestore in a meaningful way.",
    versions: [
      {
        version: "1",
        deploy_link: "",
        yt_link: "",
        type: mapProjectTabs.be,
        // https://github.com/masumkhan081/resume-frontend
        fe_github_link: "",
        be_github_link: "https://github.com/masumkhan081/resume-backend",
        tools: ["Express", "TS", "Next", "Passport", "MongoDB", "React-PDF"],
      },
    ],
  },
];
