import { BsInfoCircleFill } from "react-icons/bs";
import { FaLink, FaCode, FaCloudDownloadAlt } from "react-icons/fa";

// const navLinks = [
//   {
//     link: "/",
//     text: "About Me",
//   },
//   {
//     link: "/projects",
//     text: "Live Projects",
//   },
//   {
//     link: "/skills",
//     text: "Skills",
//   },
//   {
//     link: "/resume",
//     text: "Resume",
//   },
// ];


const navLinks = [
  {
    text: "About",
    icon: <BsInfoCircleFill className="icn_nav" />,
    href: "/",
  },
  {
    text: "Skills",
    icon: <FaCode className="icn_nav" />,
    href: "/skills",
  },
  {
    text: "Personal Projects",
    icon: <FaLink className="icn_nav" />,
    href: "/projects",
  },
  {
    text: "Resume",
    icon: <FaCloudDownloadAlt className="icn_nav" />,
    href: "http://localhost:3000/Resume-mern-stack-masum-khan.pdf",
    download: "Resume-mern-stack-masum-khan.pdf",
  },
];
export default navLinks;
