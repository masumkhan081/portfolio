"use client";
import React from "react";
import Image from "next/image";
import MK from "../public/images/mk-2.png";
import Phone from "../public/icons/Phone";
import Email from "../public/icons/Email";
// import { animated, useSpring } from "@react-spring/web";
import {
  BsFacebook,
  BsInstagram,
  BsFillTelephoneOutboundFill,
} from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import FindMe from "../components/home/FindMe";
import Hobbies from "../components/home/Hobbies";
import Interests from "../components/home/Interests";
import HireMe from "../components/home/HireMe";
import Academy from "../components/home/Academy";
import PersonalInfo from "../components/home/Personal";
import Experiences from "../components/home/Experiences";
//
export default function Home() {
  console.log("server side page top: ", typeof window === "undefined");
  return (
    <div className="flex-grow flex flex-col gap-4 rounded-sm bg-slate-100  ">

      <PersonalInfo />

      <div
        // onScroll={() => setTest(JSON.stringify(isInViewport("footerid")))}
        className="  rounded sm:px-3.0 px-1.0 pt-1.0 grid md:grid-cols-2 grid-cols-1 gap-4   "
      >
        <div className="col-span-1 flex flex-col gap-2.0 justify-start md:items-center sm:items-center sm:py-1.0 md:py-2.0 md:px-3.0 sm:px-2.0 px-1.0">

          <Academy />
          <Experiences />
        </div>

        <div className="font-mono  col-span-1 flex flex-col gap-2.0  justify-end md:items-center sm:items-center sm:py-1.0 md:py-4.0 md:px-3.0 sm:px-2.0 px-1.0  ">
          {/* contact & social profiles */}
          <FindMe />
          <Interests />
          <Hobbies />
          <HireMe />
        </div>
      </div>
    </div>
  );
}
