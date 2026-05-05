import React from "react";

import { FaClipboardList } from "react-icons/fa";
import AboutTitle from "../common/AboutTitle";
//
export default function FrontEnd() {
  return (
    <>
      <span className=" bg-slate-100 shadow-inner text-teal-800 flex justify-center items-center py-1 gap-2 text-1/1 font-semibold rounded-sm">
        <FaClipboardList clsnames="me-1 inline w-6 h-6" /> <span>Front End</span>
      </span>

      <ul className="  space-y-1  my-3 text-sm ">

        {/*  */}
        <li className="flex items-center gap-2 w-fit rounded  bg-teal-800 bg-opacity-10">
          <span className="px-1 rounded bg-teal-800 bg-opacity-70 text-slate-100">Assembly</span>
          <a href="www.google.com" target="_blank" className="flex items-center gap-1"> ... </a>
        </li>
        {/*  */}

        <li className="bg-teal-800 bg-opacity-10 text-slate-600 w-fit rounded px-1">
          Express
        </li>
        <li className="bg-teal-800 bg-opacity-20 text-slate-800 w-fit rounded px-1">
          Nextjs
        </li>
        <li className="bg-teal-800 bg-opacity-70 text-slate-100 w-fit rounded px-1">
          Tailwind CSS
        </li> <li className="bg-teal-800 bg-opacity-70 text-slate-100 w-fit rounded px-1">
          Bootstrap
        </li>
      </ul>

    </>
  );
}
