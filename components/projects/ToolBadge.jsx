import React from "react";

export default function ToolBadge({ txt }) {
  return (
    <span className="font-sans drop-shadow-md shadow-inner shadow-border text-content-primary h-5 text-sm rounded-lg px-2 py-0">
      {txt}
    </span>
  );
}
