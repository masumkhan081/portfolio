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
      ? "shadow-inner shadow-teal-400 px-2 py-1 rounded-md"
      : "shadow-inner shadow-teal-200 px-2 py-1 rounded-md";

  const subViewSty = (item) => (item === currentSubView ? "block  " : "hidden");

  const activeSty = (item) =>
    item === currentSubView ? "rotate-180  " : "rotate-0";

  const handleSubView = (item) =>
    item === currentSubView ? setCurrentSubView("") : setCurrentSubView(item);

  return (
    <div className="flex-grow flex flex-col sm:gap-[100px] gap-[90px] h-auto sm:p-[90px] p-[20px]  bg-slate-100">
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
        <div className="relative flex flex-col items-center justify-center">
          <span className="h-1 w-full block bg-teal-300 rounded-full shadow-inner shadow-slate-200"></span>
          <EnhancedTitle name={`Programming & Algorithms ${currentSubView}`} />
        </div>

        <div className="w-auto mx-auto text-sm font-inter font-light rounded-sm flex gap-3 sm:flex-row flex-col sm:justify-center mt-4 ">
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

        <div className="my-6 rounded-md  ">
          {Object.keys(algoList[currentView]).map((item, ind) => {
            return (
              <div
                className="rounded-md shadow-md flex flex-col gap-2 p-3"
                key={ind}
              >
                <button
                  onClick={() => handleSubView(item)}
                  className="my-2 py-1 font-bold w-fit flex gap-2 justify-center items-center"
                >
                  {item}
                  <span className="rounded-full px-2 bg-yellow-900 text-yellow-100 text-lg">
                    {algoList?.[currentView]?.[item]?.length}
                  </span>

                  <IoIosArrowDown className={activeSty(item)} />
                </button>
                <ul className={`${subViewSty(item)} flex flex-col gap-1`}>
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
      {/*                 
      
                  Personal Skills                   
                  
                                         */}

      {/* <AlgorithmCard /> */}

      <motion.div className="px-3.0  sm:py-1.0 py-1.0 flex flex-col gap-[50px] h-auto">
        <div className="relative flex flex-col items-center justify-center">
          <span className="h-1 w-full block bg-teal-300 rounded-full shadow-inner shadow-slate-200"></span>
          <EnhancedTitle name="Development Skills" />
        </div>
        <div className="grid grid-cols-3 gap-3 justify-center">
          <DevSkill title={"fornt-end skill"} list={fronendSKills} />
          <DevSkill title={"back-end skill"} list={backendSKills} />
          <DevSkill title={"others"} list={otherSkills} />
        </div>
      </motion.div>

      <motion.div className="px-3.0  sm:py-1.0 py-1.0 flex flex-col gap-[60px] h-auto">
        <div className="relative flex flex-col items-center justify-center">
          <span className="h-1 w-full block bg-teal-300 rounded-full shadow-inner shadow-slate-200"></span>
          <EnhancedTitle name="Technological Skills" />
        </div>
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
        <div className="relative flex flex-col items-center justify-center">
          <span className="h-1 w-full block bg-teal-300 rounded-full shadow-inner shadow-slate-200"></span>
          <EnhancedTitle name="Personal Skills" />
        </div>
        <PersonalSkill list={personalSkills} />{" "}
      </motion.div>
    </div>
  );
}
