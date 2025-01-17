import React from "react";
import { FaGraduationCap, FaUniversity } from "react-icons/fa";

import ListItem from "../common/ListItem";
import AboutTitle from "../common/AboutTitle";

export default function Academy() {
  const educations = [
    {
      title: "SSC (2011)",
      desc: "(Sci), Sylhet Govt. Pilot High School",
      icon: <FaUniversity />,
    },
    {
      title: "HSC (2014)",
      desc: "(Sci), Beanibazar Govt College",
      icon: <FaUniversity />,
    },
    {
      title: "B.Sc (Apr-2019)",
      desc: "(CSE), North East University BD",
      icon: <FaUniversity />,
    },
  ];
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
