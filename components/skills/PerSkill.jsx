import React from "react";
import { animate } from "motion";
import { MdOutlineDoneAll } from "react-icons/md";
//
export default function PersonalSkill({ skills }) {
  function onHover(id, act) {
    const box = document.getElementById(id);
    animate(box, { opacity: act === "ENTER" ? 1 : 0.85 }, { duration: 0.5 });
  }

  return (
    <ul className="px-2 space-y-2 mx-auto text-content-primary text-base font-semibold opacity-90">
      {skills.map((skill, index) => (
        <li
          key={index}
          className="flex gap-2 items-center hover:text-content-brand hover:translate-x-1 transition-all duration-200"
          id={`li${index}`}
          onMouseEnter={() => onHover(`li${index}`, "ENTER")}
          onMouseOut={() => onHover(`li${index}`, "OUT")}
        >
          <MdOutlineDoneAll height={5} width={5} />
          {skill.title}
        </li>
      ))}
    </ul>
  );
}
