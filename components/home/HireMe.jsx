import React from "react";
import ListItem from "../common/ListItem";
import AboutTitle from "../common/AboutTitle";
import Image from "next/image";
import Hireme from "../../public/images/hireme.png";
import positions from "../../data/home.data/positions.data";

export default function HireMe() {
  return (
    <div className="w-full ">
      <AboutTitle title="Seeking Role:">
        <span className="text-xs font-normal">(MERN/PERN/Next)</span>
        <Image
          src={Hireme}
          className="w-8 h-6 ml-auto inline bg-slate-100 rounded-e-lg"
          alt="job"
        />
      </AboutTitle>
      <ul className="py-2">
        {positions.map((position, ind) => {
          return <ListItem key={ind} plainText={position}></ListItem>;
        })}
      </ul>
    </div>
  );
}
