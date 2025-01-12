import React from "react";
import LinkIcon from "../../../public/icons/LinkIcon";
import Youtube from "../../../public/icons/Youtube";
import Github from "../../../public/icons/Github";
import YT2 from "../../../public/icons/YT2";
import CustomLink from "../common/CustomLink";
import EnhancedTitle from "../common/EnhancedTitle";
import { motion   } from "framer-motion";

export default function Project({ name, versions, summary }) {
   

  return (
    // bg-gradient-to-t from-cyan-800 shadow-teal-500
    <motion.div
      // initial={{ opacity: 0, scale: 0.5 }}
      // animate={{ opacity: 1, scale: 1 }}
      // transition={{ duration: 0.5 }}
      // whileHover={{ scale: 1.05 }}
      // whileTap={{ scale: 0.9 }}
     
      className=" h-fit md:w-2/5 w-auto md:mx-auto mx-4 rounded-md brdr pb-2  bg-acquamarine bg-gradient-to-t from-teal-200"
    >
   
      <div className="relative flex flex-col items-center justify-center">
        <span className="h-1 w-full block bg-teal-300 rounded-full shadow-inner shadow-slate-200"></span>
        <EnhancedTitle name={name} />
      </div>

      <div className="mt-[40px] mb-4">
        <span className=" me-2 block font-semibold text-teal-700 font-averia text-md  w-fit  rounded-r-md px-2 ">
          Summary
        </span>
        <div className="text-slate-800 px-3 font-titan"> {summary}</div>
      </div>

      <div className="flex  flex-col justify-center w-full  gap-5 mb-3 ">
        {versions.map((ver, ind) => (
          <div key={ind} className="">
            {/* className="border-l-2 border-teal-900 rounded-s-md pb-1 px-2" */}

            {versions.length > 1 && (
              <span className=" me-2 block font-semibold text-teal-700 font-averia text-md  w-fit  rounded-r-md px-2 ">
                Version-{ver.version}
              </span>
            )}

            <div className="flex flex-row flex-wrap justify-center gap-5 text-sm text-blue-950">
              <CustomLink
                txt="live"
                href={ver.deploy_link}
                icon={<LinkIcon clsnames="me-1 w-5 h-5 inline" />}
              />
              <CustomLink
                txt="Github src"
                href={ver.github_link}
                icon={<Github clsnames="me-1 w-5 h-5 inline" />}
              />
              <CustomLink
                txt="Brief"
                href={"#"}
                icon={<YT2 clsnames="   me-1 w-5 inline text-red-600 " />}
              />
            </div>
            <div className="flex flex-row justify-center gap-3 w-full flex-wrap mt-3 px-2">
              {ver.tools.map((tool, j) => (
                <span
                  key={j}
                  className="bg-acquamarine drop-shadow-md shadow-inner shadow-teal-400 text-slate-900 h-5 text-sm font-sans rounded-lg px-2 py-0"
                >
                  {tool}
                </span>
              ))}
            </div>
            {/*  */}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
