import React from "react";

export default function EnhancedTitle({ name }) {
  return (
    <div className="text-center text-lg mt-3.0 mb-3.0 relative flex flex-col items-center justify-center">
      <h4 className="min-w-[220px] absolute top-[-10px] drop-shadow text-border px-3 w-fit mx-auto bg-brand-dark rounded-md">
        <hr className="w-auto h-2 mx-4 bg-brand-dark opacity-80 border-x-2 border-border rounded-full shadow" />{" "}
        {name}
      </h4>
    </div>
  );
}
