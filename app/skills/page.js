"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// import { animated, useSpring } from "@react-spring/web";
import { IoIosArrowDown } from "react-icons/io";
import {
  backendSKills,
  fronendSKills,
  otherSkills,
} from "../../data/skills.data/devSkills.data";
import personalSkills from "../../data/skills.data/personal.data";
import {
  languages,
  backendTechs,
  frameworks,
  toDos,
  frontendTechs,
  dbTechs,
  devProcessTechs,
} from "../../data/skills.data/technologies.data";
import TechnoSkill from "../../components/skills/TechnoSkill";
import DevSkill from "../../components/skills/DevSkill";
import PersonalSkill from "../../components/skills/PerSkill";
import EnhancedTitle from "../../components/common/EnhancedTitle";
//
import algoList from "../../data/skills.data/algorithms.data";

//
export default function Page() {
  const [currentView, setCurrentView] = useState(Object.keys(algoList)[0]);
  const [currentSubView, setCurrentSubView] = useState(
    Object.keys(algoList[currentView])[0]
  );

  useEffect(() => {
    setCurrentSubView(Object.keys(algoList[currentView])[0]);
  }, [currentView]);

  const tabSty = (btnText) =>
    currentView === btnText
      ? "bg-slate-200 text-xs border-b border-slate-600 shadow-inner shadow-teal-800 px-2 py-1 rounded-md "
      : "bg-slate-200 text-xs shadow-inner shadow-teal-800 px-2 py-1 rounded-md ";

  const subViewSty = (item) => (item === currentSubView ? "block  " : "hidden");

  const activeSty = (item) =>
    item === currentSubView ? "rotate-180 text-teal-800 " : "rotate-0 text-teal-800";

  const handleSubView = (item) =>
    item === currentSubView ? setCurrentSubView("") : setCurrentSubView(item);

  return (
    <div className="flex-grow flex flex-col sm:gap-[100px] gap-[90px] h-auto sm:p-[90px] p-[20px] bg-slate-100">
      {/*                      
            Programming & Algorithms              
                                         */}
      <motion.div
        // initial={{ opacity: 0, scale: 0.5 }}
        // animate={{ opacity: 1, scale: 1 }}
        // transition={{ duration: 0.5 }}
        // whileHover={{ scale: 1.05 }}
        className="  px-3.0  sm:py-1.0 py-1.0 flex flex-col gap-[40px] h-auto"
      >

        <EnhancedTitle name={`Programming & Algorithms`} />

        <div className="w-auto mx-auto text-sm font-mono font-light text-teal-700 rounded-sm flex gap-3 sm:flex-row flex-col sm:justify-center mt-4 ">
          {Object.keys(algoList).map((tab, ind) => {
            return (
              <button
                key={ind}
                className={tabSty(tab)}
                onClick={() => setCurrentView(tab)}
              >
                {tab}
              </button>
            );
          })}
        </div>

        <div className="my-4 flex flex-col gap-2 ">
          {Object.keys(algoList[currentView]).map((item, ind) => {
            return (
              <div
                className="font-mono rounded-3xl border bg-slate-200 border-slate-400 flex flex-col gap-2 px-1.0 py-1"
                key={ind}
              >
                <button
                  onClick={() => handleSubView(item)}
                  className="px-2 py-0.125 bg-slate-300 text-teal-800 rounded-3xl shadow-md font-bold w-fit flex gap-2 justify-center items-center"
                >
                  {item}
                  <span className="rounded-full px-2 bg-teal-800 text-yellow-100 font-normal">
                    {algoList?.[currentView]?.[item]?.length}
                  </span>

                  <IoIosArrowDown className={activeSty(item)} />
                </button>
                <ul className={`${subViewSty(item)} flex flex-col gap-1 ps-1.0`}>
                  {algoList?.[currentView]?.[currentSubView]?.map((itm, i) => {
                    return (
                      <li className="" key={i}>
                        {itm}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </motion.div>

      <motion.div className="px-3.0  sm:py-1.0 py-1.0 flex flex-col gap-[50px] h-auto">
        <EnhancedTitle name="Development Skills" />

        <div className="grid grid-cols-3 gap-3 justify-center">
          <DevSkill title={"fornt-end skill"} list={fronendSKills} />
          <DevSkill title={"back-end skill"} list={backendSKills} />
          <DevSkill title={"others"} list={otherSkills} />
        </div>
      </motion.div>

      <motion.div className="px-3.0  sm:py-1.0 py-1.0 flex flex-col gap-[60px] h-auto">
        <EnhancedTitle name="Technological Skills" />

        <div className=" flex flex-wrap gap-x-2 justify-around sm:gap-y-5 gap-y-2 ">
          <div className="styleTechnoSkill">
            <TechnoSkill title={"Languages"} list={languages} />
          </div>

          <div className="styleTechnoSkill">
            <TechnoSkill title={"Fronend"} list={frontendTechs} />
          </div>
          <div className="styleTechnoSkill">
            <TechnoSkill title={"Backend"} list={backendTechs} />
          </div>
          <div className="styleTechnoSkill">
            <TechnoSkill title={"DB Skills"} list={dbTechs} />
          </div>

          <div className="styleTechnoSkill">
            <TechnoSkill title={"Dev Process"} list={devProcessTechs} />
          </div>
        </div>
      </motion.div>

      <motion.div className="px-3.0  sm:py-1.0 py-1.0 flex flex-col gap-[60px] h-auto">

        <EnhancedTitle name="Personal Skills" />

        <PersonalSkill list={personalSkills} />{" "}
      </motion.div>
    </div>
  );
}
