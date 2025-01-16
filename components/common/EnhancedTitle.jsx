import React from "react";

export default function EnhancedTitle({ name }) {
  return (
    <div className="relative flex flex-col items-center justify-center">
      <h4 className="absolute drop-shadow top-[-10px] text-center font-medium font-mono text-lg text-slate-300 px-3 w-fit mx-auto bg-teal-950 rounded-md">
        <hr className="w-auto h-2 mx-4 bg-teal-900 rounded-full shadow-inner shadow-teal-600" /> {name}
      </h4></div>
  );
}
