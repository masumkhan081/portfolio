import React from "react";

import ListItem from "../common/ListItem";
import Image from "next/image";
import MasumK from "../../public/images/masumkhan.png";
import persInfo from '../../data/home.data/personal.data'

export default function Personal() {
  
  return (
    <ul className="ps-2 w-full py-1">
      <Image className="w-52 h-58 rounded-full  " src={MasumK} alt="Masum Khan" />
      {persInfo.map((info, ind) => {
        return <ListItem key={ind} plainText={info.data} icon={info.icon} />;
      })}
    </ul>
  );
}
