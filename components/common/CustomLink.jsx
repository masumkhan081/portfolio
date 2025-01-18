import Image from "next/image";
import React from "react";
import isValidUrl from "../../utils/isValidURL"

export default function CustomLink({ txt, icon, href }) {

  const styLogic = (href) =>
    isValidUrl(href)
      ? "text-blue-800 hover:border-blue-700 "
      : "opacity-70 cursor-not-allowed";

  return (
    <a
      target="_blank"
      href={href} // Remove href if not valid
      className={`flex justify-center items-center border-b border-transparent ps-1 pe-2 py-1  font-agud drop-shadow ${styLogic(href)}`}
    >
      {icon}
      {txt}
    </a>
  );
}
