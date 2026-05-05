import React from "react";
import { FaClipboardList } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";

//
export default function PersonalSkill() {
  return (
    <>
      <span className="bg-surface shadow-inner flex justify-center items-center py-1 gap-2 text-1/1 font-semibold rounded-sm">
        <FaClipboardList clsnames="me-1 inline w-6 h-6" />{" "}
        <span>Development Process</span>
      </span>
      <ul className="space-y-1 my-3 text-sm">
        <li className="bg-brand-dark/10 text-content-secondary w-fit rounded px-1">
          Git
        </li>
        <li className="bg-brand-dark/70 text-content-on-brand w-fit rounded px-1"></li>
        <li className="bg-brand-dark/70 text-content-on-brand w-fit rounded px-1">
          Figma
        </li>
        <li className="bg-brand-dark/70 text-content-on-brand w-fit rounded px-1">
          Whimsical/ Edrawmax
        </li>
      </ul>
    </>
  );
}
