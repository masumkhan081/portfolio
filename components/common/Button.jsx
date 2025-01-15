import Image from "next/image";
import React from "react";

export default function Button({ onClick, txt, icon, style }) {
  return (
    <button
      onClick={onClick}
      className={style ? style : ` border rounded p-1 `}>
      {icon}
      {txt}
    </button>

  );
}
