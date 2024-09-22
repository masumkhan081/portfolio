import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaSlackHash } from "react-icons/fa";

export default function DevSkill({ title, list }) {
  const [hoverItem, setHoverItem] = useState();

  const getSty = (ind) => (ind === hoverItem ? "opacity-90 translate-x-[-2px]" : "opacity-50");

  return (
    <motion.div className="sm:col-span-1 col-span-3 p-3 ">
      <span className="font-rubik font-light shadow-inner shadow-teal-400 bg-teal-700 text-slate-300 rounded-full block text-center">
        {title}
      </span>

      <ul className="py-3">
        {list.map((itm, ind) => {
          return (
            <li
              onMouseOver={() => setHoverItem(ind)}
              onMouseOut={() => setHoverItem()}
              className="flex items-center justify-center gap-2 py-1 border-b border-yellow-700 hover:flex-row-reverse hover:items-start drop-shadow rounded-r"
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