import React from "react";

export default function EnhancedTitle({ name }) {
  return (
    <div className=" font-agud text-center text-lg mt-3.0 mb-3.0 relative flex flex-col items-center justify-center">
      <h4 className="min-w-[220px] absolute top-[-10px] drop-shadow text-slate-300 px-3 w-fit mx-auto bg-teal-950 rounded-md">
        <hr className="w-auto h-2 mx-4 bg-teal-800 opacity-80 border-x-2 border-slate-400 rounded-full shadow" /> {name}
      </h4></div>
  );
}
