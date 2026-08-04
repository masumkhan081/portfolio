import React from "react";
import ListItem from "../common/ListItem";
import AboutTitle from "../common/AboutTitle";
import { educations } from "../../data/home.data/academy.data";

export default function Academy() {
  return (
    <div className="w-full">
      <AboutTitle title="Academy" />
      <ul className="p-2">
        {educations.map((eduItem, ind) => {
          return (
            <ListItem
              key={ind}
              boldText={eduItem.title}
              plainText={eduItem.desc}
              icon={eduItem.icon}
            />
          );
        })}
      </ul>
    </div>
  );
}
