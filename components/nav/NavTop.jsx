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
      ? "sm:flex sm:flex-row flex-col hidden gap-4 justify-center items-center text-orange-800 "
      : "flex sm:flex-row flex-col rounded-md gap-2 px-4 ";

  return (
    <div

      style={{ position: "-webkit-sticky", position: "sticky", top: 0, zIndex: "50" }}
      className=" bg-slate-100 rounded-md text-pr/600 font-averia font-semibold w-full flex flex-row sm:justify-center justify-between items-center sm:px-3.0 px-2.0 py-3 text-1/1  ">
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
      <div className="sm:hidden flex justify-end rounded-full border-2 p-1 bg-orange-950 border-slate-400 ">
        <Button
          style={"btn_nav"}
          icon={menuFolded ? <AiOutlineMenu /> : <AiOutlineClose />}
          onClick={() => setMenuFolded(!menuFolded)}
        />
      </div>
    </div>
  );
}
