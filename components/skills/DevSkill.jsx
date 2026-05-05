import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaSlackHash } from "react-icons/fa";

export default function DevSkill({ title, list }) {
  const [hoverItem, setHoverItem] = useState();

  const getSty = (ind) =>
    ind === hoverItem ? "opacity-90 translate-x-[-2px] h-2 w-2 text-teal-700" : "text-black h-2 w-2 opacity-50";

  return (
    <motion.div className="sm:col-span-1 col-span-3 bg-slate-100 border border-slate-300 shadow-sm rounded-lg overflow-hidden">
      <span className="text-sm font-bold text-slate-800 bg-slate-200 px-3 py-2 text-left block w-full">
        {title}
      </span>

      <ul className="py-3 text-sm space-y-2">
        {list.map((itm, ind) => {
          return (
            <li
              onMouseOver={() => setHoverItem(ind)}
              onMouseOut={() => setHoverItem(null)}
              className="flex items-center justify-start gap-2 my-1 px-3 hover:text-teal-700 hover:translate-x-1 transition-all duration-200 drop-shadow rounded"
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
