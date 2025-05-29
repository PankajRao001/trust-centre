"use client"
import Image from "next/image";
import {useState} from "react";
import PrimamryButton from "../ui/PrimamryButton";
import { DownloadIcon } from "../common/icons";
import { What_Faqs_List, Whatnew_List } from "../common/Helper";
const WhatNew = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };
  
  return (
    <div className="container mt-12 bg-white rounded-2xl mb-12 max-w-[1260px] p-5">
      <p className="text-dark font-semibold mx-auto leading-full mb-3 text-center max-w-[292px] font-inter text-[24px]">
        What’s New — And What You’re Asking
      </p>
      <p className="text-dark2 max-w-[500px] mx-auto text-center font-normal leading-150 mb-5 font-inter text-[16px]">
        We carefully vet and monitor each service provider we work with. Below
        is our up-to-date list of authorized subprocessors.
      </p>
      <div className="grid grid-cols-2 gap-7">
        <div className="border-1 rounded-xl py-[18px] px-[13px] bg-light-grey border-grey3">
          <div className="flex flex-col gap-[20px]">
            {Whatnew_List.slice(0, 2).map((obj, index) => {
              return (
                <div key={index} className="flex gap-5 items-center">
                  <Image src={obj.img} />
                  <div className="flex flex-col gap-[8px]">
                    <p className="font-bold text-[18px] leading-full font-inter text-dark">
                      {obj.title}
                    </p>
                    <p className="font-normal leading-150 text-[16px] font-inter text-dark3">
                      {obj.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <p className="font-normal leading-150 text-[16px] font-inter text-dark3">
                        {obj.date}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
            <PrimamryButton
              className="!py-3 max-w-[197px] mt-[18px] text-nowrap text-white hover:inset-shadow-main duration-300
          hover:text-black bg-black"
            >
              View All Updates
            </PrimamryButton>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-3 pb-6">
            {What_Faqs_List.map((obj, index) => {
              return (
                <div
                  key={index}
                  className="border-1 rounded-xl border-grey3 bg-light-grey p-[0px_22px_0px_9px]"
                >
                  <div
                    onClick={() => toggleAccordion(index)}
                    className="flex justify-between items-center py-[12px] cursor-pointer"
                  >
                    <div className="flex gap-[26px]">
                      <p className="text-dark text-[18px] font-bold leading-full font-inter">
                        {obj.que}
                      </p>
                      <p className="text-dark4 text-[18px] font-bold leading-full font-inter">
                        {obj.title}
                      </p>
                    </div>
                    <span
                      className={`transition-transform duration-300 ${
                        activeIndex === index ? "rotate-180" : ""
                      }`}
                    >
                      {obj.downarrow}
                    </span>
                  </div>
                  <div
                    className={`overflow-hidden transition-all ${
                      activeIndex === index
                        ? "max-h-[500px] mt-1 duration-300 opacity-100 pb-2"
                        : "max-h-0 opacity-0 "
                    }`}
                  >
                    <p className="text-dark3 font-normal ml-10 max-w-[491px] text-[16px] leading-150 font-inter">
                      {obj.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="text-center gap-[12px] grid grid-cols-2 items-center justify-center">
            <PrimamryButton className="!py-3 text-white hover:bg-linear-[15deg,#007bd9,#009bf9] duration-300 bg-linear-[15deg,#009bf9,#007bd9]">
              Submit Your Question
            </PrimamryButton>
            <PrimamryButton
              className="!py-3 flex items-center justify-center gap-1.5 text-white hover:inset-shadow-main duration-300
          hover:text-black bg-black"
            >
              View All FAQ
            </PrimamryButton>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WhatNew;
