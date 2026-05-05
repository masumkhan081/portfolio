import React from "react";
import { FaClipboardList } from "react-icons/fa";

export default function SKillTitle({ SKillTitle }) {
  return (
    <span className="flex justify-start items-center gap-2 text-sm font-bold text-slate-800 bg-slate-200 px-3 py-2 w-full">
        <FaClipboardList clsnames="me-1 inline w-6 h-6" /> <span>{SKillTitle}</span>
      </span>
  );
}
