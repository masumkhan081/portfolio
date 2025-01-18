import React from "react";
import { ADLaM_Display } from "next/font/google"
import ListItem from "../common/ListItem";
import Image from "next/image";
import MasumK from "../../public/images/masumkhan.png";
import persInfo from '../../data/home.data/personal.data'

export default function Personal() {

  return (
    <div className="font-anton bg-gradient-to-b from-transparent to-slate-400  flex sm:flex-row flex-col md:gap-5.0 sm:gap-3.0 gap-2.0 justify-start rounded-md  items-end md:px-3.0 sm:px-2.0 px-1.0 py-2.5">
      <Image className="md:w-19.8 w-15.0 rounded-full shadow-md" src={MasumK} alt="Masum Khan" />
      <ul className="mb-2 space-y-2 md:text-xl text-1.1/1.5 text-teal-950 opacity-80">

        {persInfo.map((info, ind) => {
          return <li key={ind} className="flex items-center   gap-2 ">
            {/* <span className="text-xl opacity-90 font-bold">{info.icon}</span> */}
            <span className={"font-inter opacity-90 drop-shadow-md"}>{info.data}</span>
          </li>
        })}
      </ul></div>
  )

}


// }<ListItem key={ind} plainText={info.data} icon={info.icon} styPlainTxt={"font-medium text-2xl"} />
