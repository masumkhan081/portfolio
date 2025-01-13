import React from "react";
import { motion } from "framer-motion";

export default function AboutTitle({ title, children }) {
  return (
    <span
      animate={{
        x: 0,
        backgroundColor: "#000",
        boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)",
        transitionEnd: {
          display: "none",
        },
      }}
      className=" font-mono w-full flex items-center gap-2 font-bold bg-gradient-to-r from-teal-200 bg-transparent text-teal-900 text-center rounded-s-md rounded-e-lg "
    >
      {title}
      {children}
    </span>
  );
}
