import Image from "next/image";
import React from "react";

export default function CustomLink({ txt, icon, href }) {
  return (
    <a
      target="_blank"
      href={href}
      className="flex justify-center items-center text-blue-800 font-rubik rounded-sm px-2 py-0 drop-shadow hover:shadow-inner hover:shadow-blue-300"
    >
      {icon}

      {txt}
    </a>
  );
}
