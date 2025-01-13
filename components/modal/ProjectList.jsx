import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import Button from "../common/Button";
import Title from "../common/Title";

export default function ProjectList({ onClose }) {
  return (
    <div className="w-full flex  flex-col sm:px-4 px-1 ">
      <Title txt="Live Projects">
        <Button icon={AiOutlineClose} onClick={() => onClose()}></Button>
      </Title>

      <div className="flex sm:flex-row flex-col">
        <ul className="flex-grow space-y-4 px-3 py-4">
          <li className="">E commerce site </li>
          <li className="">hi</li>
          <li className="">hi</li>
        </ul>
        <ul className="flex-grow space-y-4 px-3 py-4">
          <li className="">E commerce site </li>
          <li className="">hi</li>
          <li className="">hi</li>
        </ul>
      </div>
    </div>
  );
}
