import React from "react";
import { FaClipboardList } from "react-icons/fa";

export default function SKillTitle({ SKillTitle }) {
  return (
    <span className=" bg-slate-200 shadow-inner  flex justify-center items-center py-1 gap-2 text-1/1 font-averia font-semibold  rounded-sm">
        <FaClipboardList clsnames="me-1 inline w-6 h-6" /> <span>{SKillTitle}</span>
      </span>
  );
}
