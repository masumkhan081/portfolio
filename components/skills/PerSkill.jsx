import React, { useState } from "react";
import { FaClipboardList } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";
//
export default function PersonalSkill({ list }) {
  //
  const [hoverItem, setHoverItem] = useState();
  const getSty = (ind) =>
    ind === hoverItem ? "opacity-90 translate-x-[-2px]" : "opacity-50";

  return (
    <ul className="flex flex-col gap-y-2 items-center justify-center p-[40px]">
      {list.map((itm, ind) => {
        return (
          <li
            onMouseOver={() => setHoverItem(ind)}
            onMouseOut={() => setHoverItem()}
            className=" text-start font-inter flex flex-col "
            key={ind}
          >
            <span>{itm.title}</span>
            <span>{itm.detail}</span>
          </li>
        );
      })}
    </ul>
  );
}
