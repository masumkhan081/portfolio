import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaSlackHash } from "react-icons/fa";

export default function DevSkill({ title, list }) {
  const [hoverItem, setHoverItem] = useState();

  const getSty = (ind) =>
    ind === hoverItem ? "opacity-90 translate-x-[-2px] h-2 w-2 text-teal-700" : "text-black h-2 w-2 opacity-50";

  return (
    <motion.div className="sm:col-span-1 col-span-3 ">
      <span className=" bg-slate-200 text-xs shadow-inner shadow-teal-800 px-2 py-1 rounded-md  font-mono font-light text-slate-900 block text-center">
        {title}
      </span>

      <ul className="py-3 font-mono text-sm space-y-2">
        {list.map((itm, ind) => {
          return (
            <li
              onMouseOver={() => setHoverItem(ind)}
              onMouseOut={() => setHoverItem(ind)}
              className="flex items-center justify-center gap-2 my-1 px-2 hover:flex-row-reverse hover:items-start drop-shadow rounded"
              key={itm}
            >
              <FaSlackHash className={getSty(ind)} />

              <span className="flex-grow text-start"> {itm}</span>
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
}
