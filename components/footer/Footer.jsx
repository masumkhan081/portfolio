import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="flex justify-center w-full h-fit mt-auto py-3.0 bg-gradient-to-b from-slate-300 to-slate-200 rounded-md ">
      <ul>
        <li className=" ">
          isTemplateApplied: <span className="text-emerald-700"> False</span>
        </li>
        <li className=" ">
          developedBy:
          <Link
            href="https://github.com/masumkhan081"
            className="text-emerald-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/masumkhan081
          </Link>
        </li>
        <li className=" ">
          isCustomCoded: <span className="text-emerald-700"> true</span>
        </li>
      </ul>
    </div>
  );
}
