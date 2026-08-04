import React from "react";
import Image from "next/image";
import Uhunt from "../../public/images/Uhunt.png";
import SkillSetIcon from "../../public/icons/SkillSetIcon";
import Github from "../../public/icons/Github";
import {
  programmingLinks,
  mlAlgorithms,
  mlGithubLink,
} from "../../data/skills.data/programming.data";
import algoList from "../../data/skills.data/algorithms.data";

export default function ProgSkill() {
  return (
    <div className="bg-surface border border-border rounded-lg shadow-sm overflow-hidden md:w-1/3 sm:w-2/5 w-full">
      <span className="flex items-center gap-2 text-sm font-bold text-content-primary bg-surface-subtle px-3 py-2 w-full">
        <SkillSetIcon clsnames="me-1 inline w-5 h-5" /> Programming
      </span>
      <ul className="mt-3 mb-3 flex flex-col gap-2 w-full px-3">
        {programmingLinks.map((item, ind) => {
          if (item.type === "link") {
            return (
              <li key={ind} className="w-fit">
                <a
                  className="inline-flex items-center gap-1.5 px-3 py-1 text-sm rounded-md border border-border bg-surface-raised text-content-brand hover:border-border-brand hover:text-brand transition-all duration-200 shadow-sm"
                  href={item.href}
                  target="_blank"
                >
                  {item.label}
                </a>
              </li>
            );
          }
          return (
            <li key={ind} className="w-fit">
              <label
                htmlFor={item.modalId}
                className="inline-flex items-center gap-1.5 px-3 py-1 text-sm rounded-md border border-border bg-surface-raised text-content-brand hover:border-border-brand hover:text-brand transition-all duration-200 shadow-sm cursor-pointer"
              >
                {item.label}
              </label>
              {item.modalId === "modal-uhunt" && <Uhunt_Stats />}
              {item.modalId === "modal-classicalgo" && <Cl_Algo_Modal />}
              {item.modalId === "modal-ml" && <ML_Modal />}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function Uhunt_Stats() {
  return (
    <>
      <input type="checkbox" id="modal-uhunt" className="modal-toggle" />
      <div className="modal  ">
        <div className="modal-box w-11/12 max-w-5xl  h-8/12 ">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="modal-uhunt"
              className=" rounded-md text-center border-0 text-sm-lg btn-error absolute right-2 top-2 w-1/4 font-bold bg-content-primary text-content-on-brand"
            >
              C L O S E
            </label>
            <h3 className=" w-1/3 px-1 text-sm-lg rounded-md absolute left-2 top-2 text-center text-content-primary">
              Uhunt Stats
            </h3>
          </div>
          <div className="container bg-surface-subtle">
            <Image
              className="w-fit h-fit mt-3"
              src={Uhunt}
              alt="https://uhunt.onlinejudge.org/id/759640"
            />
          </div>
          <div className="modal-action ">
            <label
              htmlFor="modal-uhunt"
              className="btn btn-square bg-surface btn-outline btn-sm w-full"
            >
              Close
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

function Cl_Algo_Modal() {
  const classicalAlgo = algoList["Classical Algo"];
  return (
    <>
      <input type="checkbox" id="modal-classicalgo" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle ">
        <div className="modal-box py-0 ">
          <div className="flex flex-row justify-between gap-2 my-2 ">
            <h3 className="font-bold text-lg text-center text-content-muted">
              Classic Algorithms{" "}
              <span className="badge bg-success bg-opacity-5 border-0 text-green-500">
                Click On Category to Expand{" "}
              </span>
            </h3>
            <label
              htmlFor="modal-classicalgo"
              className="btn btn-sm btn-square btn-outline px-2 w-fit"
            >
              x
            </label>
          </div>

          {Object.entries(classicalAlgo).map(([category, items], ind) => (
            <div key={ind} className="collapse bg-surface py-0 ">
              <input type="checkbox" className="my-0 py-0" />
              <div className="collapse-title text-base font-bold text-content-brand bg-surface-subtle rounded-lg border-t-2 border-brand-subtle">
                {category}
                <span className="ms-3 rounded-lg bg-brand-dark text-brand-muted px-2">
                  {items.length}
                </span>
              </div>
              <div className="collapse-content ">
                <ul className="text-sm grid sm:grid-cols-2 grid-cols-1 list-decimal list-inside gap-y-2">
                  {items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          <div className="modal-action ">
            <label
              htmlFor="modal-classicalgo"
              className="btn btn-square bg-surface btn-outline btn-sm w-full"
            >
              Close
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

function ML_Modal() {
  return (
    <>
      <input type="checkbox" id="modal-ml" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Machine Learning Raw Coding</h3>
          <a
            href={mlGithubLink}
            target="_blank"
            className="text-content-on-brand"
          >
            <Github clsnames="me-1 w-5 h-5 inline" />
            Github src
          </a>
          <div className="py-3">
            <ul className="list-inside list-disc">
              {mlAlgorithms.map((algo, ind) => (
                <li key={ind}>{algo}</li>
              ))}
            </ul>
          </div>
          <div className="modal-action">
            <label htmlFor="modal-ml" className="btn">
              C L O S E
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
