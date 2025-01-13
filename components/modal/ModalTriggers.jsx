"use client";

import React, { useEffect, useState } from "react";
import Button from "../common/Button";
import Modal from "./Modal";
import CustomSelect from "../common/CustomSelect";

export default function ModalTriggers() {
  const [modal, setModal] = useState(false);
  const [selected, setSelected] = useState("");

  return (
    <div className="border-2 bg-slate-400 p-4 flex justify-center">
      <Button
        onClick={() => setModal(!modal)}
        txt="test-me !"
        style="bbg-teal-500 text-orange-400g"
      />
      <span>{JSON.stringify(modal)}</span>
      {modal && <Modal visible={modal} click={(bool) => setModal(bool)} />}

      <CustomSelect
        options={["option-1", "option-2"]}
        value={selected}
        onChange={(val) => setSelected(val)}
        bg={"light"}
      />
    </div>
  );
}
