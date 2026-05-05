import Github from "@/public/icons/Github";
import React from "react";
import SKillTitle from "../common/SkillTitle";
import isValidUrl from "@/utils/isValidURL";
//
const levelBorder = {
  expert: "border-teal-600 text-teal-900",
  intermediate: "border-teal-400 text-slate-700",
  begineer: "border-slate-300 text-slate-500",
};

export default function TechnoSkill({ title, list }) {
  return (
    <div className="styleTechnoSkill hover:border-teal-400 hover:shadow-md transition-all duration-300">
      <SKillTitle SKillTitle={title} />
      <div className="flex flex-col gap-0.5 my-3 text-sm px-3 pb-3">
        {list.map(({ name, src, level }, ind) => {
          return (
            <span
              key={ind}
              className="w-full flex justify-between items-center gap-1"
            >
              <span className={`bg-white border ${levelBorder[level] ?? "border-slate-300 text-slate-600"} px-2 py-px rounded-md hover:border-teal-500 hover:text-teal-700 transition-colors duration-200 text-xs`}>
                {name}
              </span>
              {isValidUrl(src) && (
                <a
                  target="_blank"
                  href={src}
                  className="text-slate-400 font-mono flex gap-1 items-center rounded-lg py-0 px-1 hover:text-teal-600 transition-colors duration-200"
                >
                  <Github clsnames="w-4 h-4" />
                  <span className="text-xs">notes</span>
                </a>
              )}
            </span>
          );
        })}
      </div>
    </div>
  );
}
