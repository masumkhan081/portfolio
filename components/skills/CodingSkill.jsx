import React, { useEffect, useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import algoList from "../../data/skills.data/algorithms.data";
import { MdOutlineStar } from "react-icons/md";

// 
export default function CodingSkill() {

    const [currentView, setCurrentView] = useState(Object.keys(algoList)[0]);
    const [currentSubView, setCurrentSubView] = useState(
        Object.keys(algoList[currentView])[0]
    );

    useEffect(() => {
        setCurrentSubView(Object.keys(algoList[currentView])[0]);
    }, [currentView]);

    const tabSty = (btnText) =>
        currentView === btnText
            ? "bg-teal-800 text-xs text-slate-300 px-2 py-1 rounded-md border-x-4 border-teal-950 "
            : "bg-teal-800 text-xs text-slate-300 px-2 py-1 rounded-md ";

    const subViewSty = (item) => (item === currentSubView ? "block  " : "hidden");

    const activeSty = (item) =>
        item === currentSubView ? "rotate-180 text-teal-800 " : "rotate-0 text-teal-800";

    const handleSubView = (item) =>
        item === currentSubView ? setCurrentSubView("") : setCurrentSubView(item);


    return (
        <div>
            <div className=" flex gap-3 flex-row justify-start text-sm font-light text-teal-700 rounded-sm  ">
                {Object.keys(algoList).map((tab, ind) => {
                    return (
                        <button
                            key={ind}
                            className={tabSty(tab)}
                            onClick={() => setCurrentView(tab)}
                        >
                            {tab}
                        </button>
                    );
                })}
            </div>

            <div className="py-2 flex flex-col gap-2 ">
                {Object.keys(algoList[currentView]).map((item, ind) => {
                    return (
                        <div
                            className="bg-slate-100 border border-slate-300 shadow-sm rounded-lg overflow-hidden flex flex-col gap-2 pb-2"
                            key={ind}
                        >
                            <button
                                onClick={() => handleSubView(item)}
                                className="w-full flex justify-between items-center gap-2 px-3 py-2 bg-slate-200 text-sm font-bold text-slate-800 hover:bg-slate-300 transition-colors duration-200"
                            >
                                {item}
                                <span className="text-xs font-normal bg-teal-800 text-slate-100 px-2 py-0.5 rounded-full">
                                    {algoList?.[currentView]?.[item]?.length}
                                </span>
                                <IoIosArrowDown className={`ml-auto transition-transform duration-200 text-slate-500 ${activeSty(item)}`} />
                            </button>
                            <ul className={`${subViewSty(item)} flex flex-col gap-1 px-3 pb-3`}>
                                {algoList?.[currentView]?.[currentSubView]?.map((itm, i) => {
                                    return (
                                        <li className="text-sm text-slate-700 flex items-center gap-2 hover:text-teal-700 hover:translate-x-1 transition-all duration-200" key={i}>
                                            <span className="w-1 h-1 rounded-full bg-teal-600 inline-block flex-shrink-0"></span>
                                            {itm}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}
