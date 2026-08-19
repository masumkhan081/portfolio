"use client";
import React, { useState } from "react";
import AboutTitle from "../common/AboutTitle";
import { experiences } from "../../data/home.data/experience.data";

export default function Experiences() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (ind) => {
    setExpandedIndex((prev) => (prev === ind ? null : ind));
  };

  return (
    <div className="w-full">
      <AboutTitle title="Experiences" />
      <ul className="p-2 flex flex-col justify-center sm:items-start items-center">
        {experiences.map((workExperience, ind) => {
          const hasContributions = !!workExperience.contributions;
          const isExpanded = expandedIndex === ind;

          return (
            <ul className="py-1" key={ind}>
              {/* Row 1: title · duration · org */}
              <li className="flex flex-wrap gap-2 text-0.75/1.25">
                <span className="font-semibold">{workExperience.title}</span>
                <span>{workExperience.duration}</span>
                <a
                  href={workExperience.organizatio_website}
                  target="_blank"
                  className="text-content-brand hover:underline"
                >
                  {workExperience.organization}
                </a>
              </li>

              {/* Row 2: contributions clamped to 1 line + see more/less toggle */}
              {hasContributions && (
                <li className="text-xs font-extralight">
                  <span className={isExpanded ? "" : "line-clamp-1"}>
                    {workExperience.contributions}
                  </span>
                  <button
                    onClick={() => handleToggle(ind)}
                    className="ml-1 text-content-brand hover:underline text-xs font-normal"
                  >
                    {isExpanded ? "see less" : "see more"}
                  </button>
                </li>
              )}
            </ul>
          );
        })}
      </ul>
    </div>
  );
}
