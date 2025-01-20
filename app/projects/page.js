"use client";
import React, { useEffect, useState } from "react";
import Project from "../../components/projects/project";
// import { animated, useSpring } from "@react-spring/web";
import {
  projectList,
  mapProjectTabs,
} from "../../data/projects.data/projects.data";
import Button from "../../components/common/Button";
//
export default function Page() {
  // useEffect(() => {
  //   const isServer = typeof window === "undefined";
  //   if (isServer) {
  //     console.log("server side");
  //   } else {
  //     console.log("client side");
  //   }
  // });

  // const springs = useSpring({
  //   from: { opacity: 0.5 },
  //   to: { opacity: 1 },
  // });
  //

  const [currentView, setCurrentView] = useState(
    mapProjectTabs[Object.keys(mapProjectTabs)[0]],
  );

  // Handle button click
  const handleTabClick = (tab) => {
    setCurrentView(tab);
  };

  const sty_btn_tab = (tab) =>
    "shadow border rounded-md px-2 py-1 text-sm font-mono " +
    (currentView === tab ? "bg-slate-300 " : "");

  //
  return (
    <div
      className=" flex flex-col items-center  gap-1.0 bg-slate-100 
    sm:py-[60px] md:py-[90px] py-[55px] md:p-[60px] p-[20px]"
    >
      <div className=" flex gap-2 flex-wrap wn justify-center w-fit rounded-md">
        {mapProjectTabs &&
          Object.values(mapProjectTabs).map((tab, ind) => {
            return (
              <Button
                key={ind}
                txt={tab}
                style={sty_btn_tab(tab)}
                onClick={() => handleTabClick(tab)}
              />
            );
          })}
      </div>

      <div
        // style={{ ...springs }}
        className="  w-full h-auto flex md:flex-row flex-col flex-wrap justify-around gap-y-[45px]"
      >
        {projectList
          .filter(
            (project) =>
              currentView === mapProjectTabs.all ||
              project.versions.some((version) => version.type === currentView),
          )
          .map((project, i) => (
            <Project
              key={i}
              name={project.name}
              summary={project.summary}
              versions={project.versions}
            />
          ))}
      </div>
    </div>
  );
}
