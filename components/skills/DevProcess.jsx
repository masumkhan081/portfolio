import React from "react";

import { FaClipboardList } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";

//
export default function PersonalSkill() {
  return (

    <>
      <span className=" bg-slate-100 shadow-inner  flex justify-center items-center py-1 gap-2 text-1/1 font-averia font-semibold  rounded-sm">
        <FaClipboardList clsnames="me-1 inline w-6 h-6" /> <span>Development Process</span>
      </span>
      <ul className="  space-y-1  my-3 text-sm ">

        <li className="bg-dark-brown bg-opacity-10 text-slate-600 w-fit rounded px-1">
          Git
        </li>

        <li className="bg-dark-brown bg-opacity-70 text-slate-300 w-fit rounded px-1">

        </li> <li className="bg-dark-brown bg-opacity-70 text-slate-300 w-fit rounded px-1">
          Figma
        </li>
        <li className="bg-dark-brown bg-opacity-70 text-slate-300 w-fit rounded px-1">
          Whimsical/ Edrawmax
        </li>

      </ul>
    </>
  );
}

