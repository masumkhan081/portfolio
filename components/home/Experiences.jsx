import React from "react";
import { FaGraduationCap, FaUniversity } from "react-icons/fa";
import ListItem from "../common/ListItem";
import AboutTitle from "../common/AboutTitle";
import { experiences } from "../../data/home.data/experience.data";

export default function Experiences() {
  //
  return (
    <div className="w-full">
      <AboutTitle title="Experiences" />
      <ul className="p-2 flex flex-col justify-center sm:items-start items-center">
        {experiences.map((workExperience, ind) => {
          return (
            <ul className="py-1" key={ind}>
              <li key={ind} className="flex flex-wrap gap-2 text-0.75/1.25">
                <span className="font-semibold wn">
                  {workExperience.title}
                </span>
                <span className="wn">{workExperience.duration}</span>
                <a
                  href={workExperience.organizatio_website}
                  target="_blank"
                  className="text-blue-500 wn"
                >
                  {workExperience.organization}
                </a>
              </li>

              <li className="text-xs font-mono font-extralight">{workExperience.contributions}</li>
            </ul>
          );
        })}
      </ul>
    </div>
  );
}
