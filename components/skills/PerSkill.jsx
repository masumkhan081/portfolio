import React from "react";
import { animate } from "motion"
import { MdOutlineDoneAll } from "react-icons/md";
//
export default function PersonalSkill({ skills }) {
  //
  const getSty = (ind) =>
    ind === hoverItem ? "opacity-90 translate-x-[-2px]" : "opacity-50";

  function onHover(id, act) {
    const box = document.getElementById(id)
    animate(box, { opacity: act === "ENTER" ? 1 : 0.85 }, { duration: 0.5 })
  }

  return (
    <ul className="py-3.0 space-y-2  first-letter: mx-auto font-mono text-teal-950 text-xl font-semibold opacity-85">
      {skills.map((skill, index) => (
        <li
          className="flex gap-2 items-center"
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
