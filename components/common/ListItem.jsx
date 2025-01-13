import Image from "next/image";
import React from "react";

export default function ListItem({ boldText, plainText, icon }) {
  return (
    <li className="flex items-center gap-2 ps-2 text-0.75/1.25">
      {icon}
      {boldText && <span className="font-semibold">{boldText}</span>}
      <span className="font-normal ">{plainText}</span>
    </li>
  );
}
