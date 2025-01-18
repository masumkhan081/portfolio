import React from "react";
import { ADLaM_Display } from "next/font/google"
import ListItem from "../common/ListItem";
import Image from "next/image";
import MasumK from "../../public/images/masumkhan.png";
import persInfo from '../../data/home.data/personal.data'
import AboutTitle from "../common/AboutTitle";

export default function Personal() {

    return (
        <div className=" w-full  ">
            <AboutTitle title="Personal" />
            <ul className="p-2">
                {persInfo.map((info, ind) => {
                    return (
                        <ListItem
                            key={ind}
                            plainText={info.data}
                            icon={info.icon}
                        />
                    );
                })}
            </ul>
        </div>
    )
}


// }<ListItem key={ind} plainText={info.data} icon={info.icon} styPlainTxt={"font-medium text-2xl"} />
