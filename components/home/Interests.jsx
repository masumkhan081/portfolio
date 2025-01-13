import React from "react";
import ListItem from "../common/ListItem";
import { interests } from "../../data/home.data/interests.data";
import AboutTitle from "../common/AboutTitle";
// 
export default function Interests() {
  return (
    <div className="w-full ">
      <AboutTitle title="Interest" />
      <ul className="py-2">
        {interests.map((interest, ind) => {
          return (
            <ListItem
              key={ind}
              plainText={interest.title}
              icon={interest.icon}
            />
          );
        })}
      </ul>
    </div>
  );
}
