import React from "react";

export default function EnhancedTitle({ name }) {
  return (
    <h4 className="absolute drop-shadow-sm top-[-10px] text-center font-rubik font-bold text-md text-teal-800 px-3 w-fit mx-auto bg-acquamarine shadow-inner shadow-slate-400 rounded-md">
      <hr className="w-auto h-2 mx-4  bg-teal-300 rounded-full   shadow-inner shadow-slate-400" /> {name}
    </h4>
  );
}
