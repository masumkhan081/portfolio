import Github from "@/public/icons/Github";
import React from "react";
import SKillTitle from "../common/SkillTitle";
import isValidUrl from "@/utils/isValidURL";
//
export default function TechnoSkill({ title, list }) {
  const style_level_wise = {
    expert: "bg-opacity-100",
    intermediate: "bg-opacity-90",
    begineer: "bg-opacity-70",
  };
  const style_common = "px-1 rounded";

  return (
    <div className="">
      <SKillTitle SKillTitle={title} />
      <div className=" flex gap-0.5 flex-wrap my-3 text-sm ">
        {list.map(({ name, src, level }, ind) => {
          return (
            <span
              key={ind}
              className=" w-full flex justify-between items-center  gap-1 rounded-md"
            >
              <span className={style_common + " " + style_level_wise[level]}>
                {name}
              </span>
              {isValidUrl(src) && <a
                target="_blank"
                href={src}
                className="text-blue-400 font-mono flex gap-1 items-center rounded-lg  py-0 px-1"
              >
                <Github clsnames=" w-5 h-5" />
                code-notes
              </a>
              }
            </span>
          );
        })}
      </div>
    </div>
  );
}
