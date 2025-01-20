"use client";

import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
// image and icons
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Button from "../common/Button";
import NavLink from "../common/NavLink";
import navLinks from "../../data/nav.data/top-nav.data";
//
export default function Nav() {
  const [menuFolded, setMenuFolded] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  const styLogic = () =>
    menuFolded
      ? " sm:flex sm:flex-row flex-col hidden gap-4 justify-center items-center text-orange-800 "
      : " flex sm:flex-row flex-col gap-2 px-4 ";

  return (
    <div

      style={{ position: "-webkit-sticky", position: "sticky", top: 0, zIndex: "50" }}
      className="sm:bg-slate-100 bg-gradient-to-t from-slate-300 to-slate-100 
      sm:from-slate-100 sm:to-slate-100 rounded-b-xl rounded-t-md text-pr/600 w-full flex flex-row sm:justify-center justify-between items-center sm:px-3.0 px-1.0 sm:py-3 py-2 text-1/1  ">
      <div className={styLogic()}>
        {navLinks.map((link, key) => {
          return (
            <NavLink
              key={key}
              href={link.href}
              txt={link.text}
              icon={link.icon}
              active={pathname === link.href}
              download={link.download}
            />
          );
        })}
      </div>
      <div className="sm:hidden flex justify-end rounded-full py-1 shadow-inner shadow-slate-400">
        <Button
          style={"text-slate-800 text-center px-3 py-1 rounded-md text-sm font-extrabold"}
          icon={menuFolded ? <AiOutlineMenu className="h-5 w-5" /> : <AiOutlineClose className="h-5 w-5" />}
          onClick={() => setMenuFolded(!menuFolded)}
        />
      </div>
    </div>
  );
}
