import React, { useRef, useEffect, useState } from "react";

import Logo from "../icons/read.svg";
import Image from "next/image";

export default function Modal({ visible, click }) {
  //
  const dropdownRef = useRef(null);
  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      click(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleDropdown = () => {
    click(false);
  };

  return (
    <div className="nav_drop_down  " ref={dropdownRef}>
      <button
        className="px-4 py-1 rounded-lg bg-slate-300 border-2 border-orange-900"
        onClick={() => toggleDropdown()}
      >
        X
      </button>
      <div className=" ">i am modal body ..</div>
      <div className=" ">i am modal body ..</div>

      <div className="App">
        <Image src={ReactLogo} alt="alt txt" />
      </div>
      <div className=" ">i am modal body ..</div>
      <div className=" ">i am modal body ..</div>
    </div>
  );
}
