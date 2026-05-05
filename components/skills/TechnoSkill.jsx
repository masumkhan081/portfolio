import Github from "@/public/icons/Github";
import React from "react";
import SKillTitle from "../common/SkillTitle";
import isValidUrl from "@/utils/isValidURL";
//
const levelBorder = {
  expert: "border-content-brand-dark text-content-brand-dark",
  intermediate: "border-brand-subtle text-content-secondary",
  begineer: "border-border text-content-muted",
};

export default function TechnoSkill({ title, list }) {
  return (
    <div className="styleTechnoSkill hover:border-brand-subtle hover:shadow-md transition-all duration-300">
      <SKillTitle SKillTitle={title} />
      <div className="flex flex-col gap-0.5 my-3 text-sm px-3 pb-3">
        {list.map(({ name, src, level }, ind) => {
          return (
            <span
              key={ind}
              className="w-full flex justify-between items-center gap-1"
            >
              <span
                className={`bg-surface-raised border ${levelBorder[level] ?? "border-border text-content-secondary"} px-2 py-px rounded-md hover:border-brand-subtle hover:text-content-brand transition-colors duration-200 text-xs`}
              >
                {name}
              </span>
              {isValidUrl(src) && (
                <a
                  target="_blank"
                  href={src}
                  className="text-content-faint font-mono flex gap-1 items-center rounded-lg py-0 px-1 hover:text-content-brand transition-colors duration-200"
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
