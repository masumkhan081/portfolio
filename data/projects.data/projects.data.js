
export const mapProjectTabs = {
  all: "All",
  be: "Backend only",
  fe: "Frontend only",
  fs: "Full-stack"
};

mapProjectTabs[Object.keys(mapProjectTabs)[0]]


export const mapProjectStatuses = {
  ongoing: "Ongoing", inProgress: "In-progress", percent: (percentage) => `${percentage} Complete`
}

export const projectList = [
  {
    name: "Portfolio",
    summary: "Personal detail, acquired skills, live & on-going projects with",
    versions: [
      {
        version: "1",
        deploy_link: "https://masumk081.web.app",
        github_link: "https://github.com/masumkhan081/masumkhan081.github.io",
        yt_link: "#",
        type: mapProjectTabs.fe,
        tools: ["Bootstrap-5"],
      },
      {
        version: "2",
        deploy_link: "https://v-2-mk.vercel.app",
        github_link: "https://github.com/masumkhan081/v-2-portfolio",
        yt_link: "",
        type: mapProjectTabs.fe,
        tools: ["Next", "Tailwind CSS", "daisyUI", "React-spring"],
      },
    ],
  },
  {
    name: "Task-Distribution",
    summary:
      "To assign, mark, and manage tasks in-between project manager -> team lead -> team member including the with option to invite a new employee over email with a defined role (jwt token) as a user of this system. An admin add/assign task for managers, a project manager may assign task to any team-lead, a team lead can assign task to his team- members ",

    versions: [
      {
        version: "1",
        deploy_link: "https://task-collaborator.onrender.com",
        github_link: "https://github.com/masumkhan081/task-collaborator",
        yt_link: "",
        type: mapProjectTabs.fs,
        tools: [
          "MongoDB atlas",
          "mongoose",
          "Express",
          "J-W-T",
          "Passport",
          "Nodmailer",
          "EJS, Bootstrap",
        ],
      },

    ],
  },
  {
    name: "Resume Builder",
    summary:
      "Online resume builder for soft. developers. Takes technical skills, academic records, experiences etc to finally make a resume out of it. Started with the purpose of implementing firebase auth, context-api, react hoc and firestore in a meaningful way.",

    versions: [
      {
        version: "1",
        deploy_link: "https://resume-builder-081.netlify.app",
        github_link: "https://github.com/masumkhan081/resume-builder",
        yt_link: "",
        type: mapProjectTabs.fs,
        tools: [
          "React-bootstrap",
          "React-spring",
          "Firestore",
          "Firebase-auth",
          "React-router",
          "React-pdf",
          "React-icons",
        ],
      },

    ],
  },
  {
    name: "Pharmacy Mgmt Syst",
    summary:
      "An Info system of drugs, generics, groups, manufacturers with tabular view of data and actions on it to be transformed to prescription system in future.",

    versions: [
      {
        version: "1",
        deploy_link: "https://drugs-info.onrender.com",
        github_link: "https://github.com/masumkhan081/drugs.info",
        yt_link: "",
        type: mapProjectTabs.fs,
        tools: [
          "Express",
          "MongoDB atlas",
          "Mongoose",
          "BS-5",
          "ejs",
          "Fetch api",
        ],
      },
    ],
  },
  {
    name: "E-commerce",
    summary:
      "An Info system of drugs, generics, groups, manufacturers with tabular view of data and actions on it to be transformed to prescription system in future.",

    versions: [
      {
        version: "1",
        deploy_link: "https://drugs-info.onrender.com",
        github_link: "https://github.com/masumkhan081/drugs.info",
        yt_link: "",
        type: mapProjectTabs.be,
        tools: [
          "Express",
          "MongoDB atlas",
          "Mongoose",
          "BS-5",
          "ejs",
          "Fetch api",
        ],
      },
    ],
  },

];

