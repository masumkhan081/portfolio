
export const mapProjectTabs = {
  all: "All", be: "Backend only", fe: "Frontend  only", fs: "Full-stack"
}

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
        tools: ["Bootstrap-5"],
      },
      {
        version: "2",
        deploy_link: "https://v-2-mk.vercel.app",
        github_link: "https://github.com/masumkhan081/v-2-portfolio",
        yt_link: "",
        tools: ["Next", "Tailwind CSS", "daisyUI", "React-spring"],
      },
    ],
  },
  {
    name: "Deshcareer website",
    summary: "A regular business site with no back-end.",

    versions: [
      {
        version: "1",
        deploy_link: "https://deshcareer.vercel.app/",
        github_link: "https://github.com/masumkhan081/deshcareer",
        yt_link: "",
        tools: ["React-Next", "Tailwind CSS", "React-spring"],
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
      {
        version: "2",
        deploy_link: "https://v-2-task-distribution.onrender.com",
        github_link: "https://github.com/masumkhan081/v-2-task-distribution",
        yt_link: "",
        tools: [
          "PostgreSQL",
          "ElephantSQL",
          "PG",
          "Express, ejs",
          "J-W-T",
          "Passport",
          "Nodmailer",
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
      {
        version: "2",
        deploy_link: "https://v-2-resume-builder.vercel.app",
        github_link: "https://github.com/masumkhan081/v-2-resume-builder",
        yt_link: "",
        tools: [
          "Next js",
          "Material-UI",
          "Redux",
          "Formik + yup",
          "Tailwind CSS",
          "Fireb auth, frestore",
          "Framer-motion",
        ],
      },
    ],
  },
  {
    name: "Drugs-Info",
    summary:
      "An Info system of drugs, generics, groups, manufacturers with tabular view of data and actions on it to be transformed to prescription system in future.",

    versions: [
      {
        version: "1",
        deploy_link: "https://drugs-info.onrender.com",
        github_link: "https://github.com/masumkhan081/drugs.info",
        yt_link: "",
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
    name: "Complete Registration System",
    summary:
      "A full registration system with email verification, pass recovery, pass reset utilizing passport strategies",

    versions: [
      {
        version: "1",
        deploy_link: "https://reg-sys-passport.onrender.com/",
        github_link: "https://github.com/masumkhan081/reg-sys-passport",
        yt_link: "",
        tools: [
          "Express",
          "Passport",
          "Nodemailer",
          "Bcrypt",
          "Joi",
          "J-W-T",
          "MongoDB atlas",
          "BS-5",
          "ejs",
        ],
      },
    ],
  },
  {
    name: "Dashboard",
    summary:
      "A react based admin dashboard + data visualization using visx, mui, and tailwind. Imaginary data and goal been set initially for look good purpose.",

    versions: [
      {
        version: "1",
        deploy_link: "https://v-1-dashboard.vercel.app",
        github_link: "https://github.com/masumkhan081/dashboard",
        yt_link: "",
        tools: [
          "Visx",
          "Next",
          "Tailwind css",
          "Redux",
          "React-spring",
          "Faker js",
        ],
      },
    ],
  },
  {
    name: "Socket.io",
    summary: "A not yet deployed chat system using- well the name suggest it!",

    versions: [
      {
        version: "1",
        deploy_link: "https://github.com/masumkhan081/socket-io",
        github_link: "https://github.com/masumkhan081/socket-io",
        yt_link: "",
        tools: ["Socket.io"],
      },
    ],
  },
];

