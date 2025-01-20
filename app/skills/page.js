"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaPlus,
  FaRegStar,
  FaRegStarHalf,
  FaStar,
  FaStarHalfAlt,
  FaStarOfLife,
} from "react-icons/fa";
// import { animated, useSpring } from "@react-spring/web";

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
import CodingSkill from "@/components/skills/CodingSkill";

//
export default function Page() {
  return (
    <div
      className=" flex-grow flex flex-col sm:gap-[100px] gap-[90px] h-auto
    sm:py-[50px] md:py-[65px] py-[45px] md:p-[60px] p-[20px] bg-slate-100"
    >
      <motion.div
        // initial={{ opacity: 0, scale: 0.5 }}
        // animate={{ opacity: 1, scale: 1 }}
        // transition={{ duration: 0.5 }}
        // whileHover={{ scale: 1.05 }}
        className=" sm:py-1.0 py-1.0 flex flex-col  sm:gap-[55px] gap-[40px]  h-auto"
      >
        <EnhancedTitle name={`Programming & Algorithms`} />
        <CodingSkill />
      </motion.div>

      <motion.div className=" sm:py-1.0 py-1.0 flex flex-col sm:gap-[55px] gap-[40px] h-auto">
        <EnhancedTitle name="Development Skills" />
        <div className="grid grid-cols-3 gap-3 justify-center">
          <DevSkill title={"fornt-end skill"} list={fronendSKills} />
          <DevSkill title={"back-end skill"} list={backendSKills} />
          <DevSkill title={"others"} list={otherSkills} />
        </div>
      </motion.div>

      <motion.div className="  sm:py-1.0 py-1.0 flex flex-col sm:gap-[55px] gap-[40px] h-auto">
        <EnhancedTitle name="Technological Skills" />
        <div className=" overflow-x-scroll flex gap-1.0 md:justify-start justify-between ">
          <TechnoSkill title={"Languages"} list={languages} />
          <TechnoSkill title={"Fronend"} list={frontendTechs} />
          <TechnoSkill title={"Backend"} list={backendTechs} />
          <TechnoSkill title={"DB Skills"} list={dbTechs} />
          <TechnoSkill title={"Dev Process"} list={devProcessTechs} />
        </div>
      </motion.div>

      <motion.div className="  sm:py-1.0 py-1.0 flex flex-col sm:gap-[55px] gap-[40px] h-auto">
        <EnhancedTitle name="Personal Skills" />
        <PersonalSkill skills={personalSkills} />
      </motion.div>
    </div>
  );
}
