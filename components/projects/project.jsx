import React from "react";
import LinkIcon from "../../public/icons/LinkIcon";
import Youtube from "../../public/icons/Youtube";
import Github from "../../public/icons/Github";
import YT2 from "../../public/icons/YT2";
import CustomLink from "../common/CustomLink";
import EnhancedTitle from "../common/EnhancedTitle";
import { motion } from "framer-motion";
import ProjectSectionTitle from "./ProjectSectionTitle";
import isValidUrl from "@/utils/isValidURL";
import ToolBadge from "./ToolBadge";

export default function Project({ name, versions, summary }) {

  return (
    // bg-gradient-to-t from-cyan-800 shadow-teal-500
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}

      className="pb-1.0 h-fit md:w-2/5 w-auto font-mono md:mx-auto  rounded-md bg-gradient-to-b from-transparent to-slate-300"
    >

      <EnhancedTitle name={name} />

      <div>
        <ProjectSectionTitle txt={"Summary"} />
        <div className="ps-1.0 pe-2 py-2 text-slate-800 font-mono"> {summary}</div>
      </div>

      <div className="flex flex-col justify-center w-full  gap-4 ">
        {versions.map((ver, ind) => (
          <div key={ind} className="">
            {/* className="border-l-2 border-teal-900 rounded-s-md pb-1 px-2" */}

            {versions.length > 1 && (
              <ProjectSectionTitle txt={ver.version} />
            )}

            <div className="ps-1.0 mt-1 flex flex-row flex-wrap justify-start gap-5 text-sm text-blue-950">
              <CustomLink
                txt={ver?.fe_github_link ? "frontend" : "No frontend"}
                href={ver?.fe_github_link}
                icon={<Github clsnames="me-1 w-5 h-5 inline" />}
              />

              <CustomLink
                txt={ver?.be_github_link ? "backend" : "No backend"}
                href={ver?.be_github_link}
                icon={<Github clsnames="me-1 w-5 h-5 inline" />}
              />
             
              <CustomLink
                txt={isValidUrl(ver.deploy_link) ? "live" : "Not live"}
                href={ver.deploy_link}
                icon={<LinkIcon clsnames="me-1 w-5 h-5 inline" />}
              />
              <CustomLink
                txt={isValidUrl(ver.yt_link) ? "Brief" : "No brief"}
                href={ver.yt_link}
                icon={<YT2 clsnames="me-1 w-5 inline text-red-600 " />}
              />
            </div>
            <div className="ps-1.0 flex flex-row justify-start gap-3 w-full flex-wrap mt-3">
              {ver.tools.map((tool, j) => (
                <ToolBadge key={j} txt={tool} />
              ))}
            </div>
            {/*  */}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
