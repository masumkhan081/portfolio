"use client";
import React from "react";
import Image from "next/image";
import MK from "../public/images/mk-2.png";
import MasumK from "../public/images/masumkhan.png";
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
import PersonalInfo from "../components/home/PersonalInfo";
import Experiences from "../components/home/Experiences";
import Personal from "@/components/home/Personal";
//
export default function Home() {
  return (
    <div className="bg-surface rounded sm:px-3.0 px-1.0 py-16 grid md:grid-cols-2 grid-cols-1 gap-16 ">
      <div className=" col-span-1 flex flex-col gap-16 justify-start md:items-center sm:items-center md:px-3.0 sm:px-2.0 px-1.0">
        <Image
          className="w-28 sm:w-36 md:w-48 rounded-full shadow-md object-cover"
          src={MasumK}
          alt="Masum Khan"
        />
        <Personal />
        <Academy />
        <Experiences />
      </div>

      <div className="col-span-1 flex flex-col gap-16 justify-start md:items-center sm:items-center md:px-3.0 sm:px-2.0 px-1.0">
        {/* contact & social profiles */}
        <FindMe />
        <Interests />
        <Hobbies />
        <HireMe />
      </div>
    </div>
  );
}
