import { BsInfoCircleFill } from "react-icons/bs";
import { FaLink, FaCode, FaCloudDownloadAlt } from "react-icons/fa";

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
    href: "/masum.khan.resume.pdf",
    download: "masum.khan.resume.pdf",
  },
];
export default navLinks;
