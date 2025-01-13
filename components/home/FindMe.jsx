import React, { useState } from "react";
//  icon & images
import { profileLinks } from "../../data/home.data/social.data";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import AboutTitle from "../common/AboutTitle";
import ListItem from "../common/ListItem";

export default function FindMe() {
  //
  const [toolTip, setToolTip] = useState("");

  return (
    <div className="w-full ">
      <div className="flex gap-2 ">
        <AboutTitle title={"Find Me"} />
        <span className="font-inter text-sm font-light text-yellow-700">
          {" "}
          {toolTip}
        </span>
      </div>

      <ul className="flex flex-col flex-wrap gap-2 py-2 ps-2">
        <ListItem
          plainText="+880 1833347848"
          icon={<BsFillTelephoneOutboundFill />}
        />
        <ListItem plainText="masumkhan081@gmail.com" icon={<MdEmail />} />
      </ul>
      <div className="flex sm:gap-5 gap-3 flex-wrap ps-2 py-1 relative">
        {profileLinks.map((profile, ind) => {
          return (
            <a
              href={profile.link}
              target="_blank"
              key={ind}
              onMouseOver={() => {
                setToolTip(profile.platform);
              }}
              onMouseLeave={() => {
                setToolTip("");
              }}
            >
              {profile.icon}
            </a>
          );
        })}
      </div>
    </div>
  );
}
