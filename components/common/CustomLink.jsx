import Image from "next/image";
import React from "react";
import isValidUrl from "../../utils/isValidURL";

export default function CustomLink({ txt, icon, href }) {
  const styLogic = (href) =>
    isValidUrl(href)
      ? "text-content-brand hover:border-border-brand "
      : "opacity-50 cursor-not-allowed";

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={isValidUrl(href)? href : undefined} // Remove href if not valid
      className={`flex justify-center items-center border-b border-transparent ps-1 pe-2 py-1 drop-shadow ${styLogic(href)}`}
    >
      {icon}
      {txt}
    </a>
  );
}
