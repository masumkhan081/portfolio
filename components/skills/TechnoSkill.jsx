import Github from "@/public/icons/Github";
import React from "react";

import SKillTitle from "../common/SkillTitle";
//
export default function TechnoSkill({ title, list }) {
  const style_level_wise = {
    expert: "bg-opacity-100",
    intermediate: "bg-opacity-90",
    begineer: "bg-opacity-70",
  };
  const style_common = "px-1 rounded bg-dark-brown text-slate-300";

  return (
    <div className="">
      <SKillTitle SKillTitle={title} />
      <ul className=" space-y-2  my-3 text-sm ">
        {list.map(({ name, src, level }, ind) => {
          return (
            <li
              key={ind}
              className=" w-full flex justify-between items-center shadow-b shadow-inner gap-1 rounded-md"
            >
              <span className={style_common + " " + style_level_wise[level]}>
                {name}
              </span>
              <a
                target="_blank"
                href={src}
                className="text-blue-400 font-mono  rounded-lg  py-0"
              >
                <Github clsnames="me-1 w-5 h-5 inline" />
                code-notes
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
