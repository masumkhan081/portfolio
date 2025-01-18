import Image from "next/image";
import React from "react";

export default function ListItem({ boldText, plainText, icon, styBoldTxt, styPlainTxt }) {
  return (
    <li className="flex items-center gap-2 ps-2 text-0.75/1.25 wn">
      {icon}
      {boldText && <span className={styBoldTxt || "font-semibold"}>{boldText}</span>}
      <span className={styPlainTxt || "font-normal"}>{plainText}</span>
    </li>
  );
}
