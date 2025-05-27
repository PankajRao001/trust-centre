import React from "react";
import { cardData } from "../common/Helper";
import { ArrowIcon } from "../common/icons";

const Cards = () => {
  return (
    <div className="flex gap-3">
      {cardData.map((obj, index) => {
        return (
          <div
            key={index}
            className=" rounded-xl w-1/4 border-1 min-h-[248px] border-grey bg-grey2 p-3"
          >
            <div className="flex h-full flex-col w-full text-center items-center justify-between">
              <div className="flex items-center flex-col justify-center gap-1">
                <span>{obj.svg}</span>
                <p className="font-bold font-inter mt-2 mb-0.5 leading-full text-dark text-[18px]">
                  {obj.title}
                </p>
                <p className="font-inter font-normal leading-150 text-[16px] text-dark2">
                  {obj.description}
                </p>
              </div>
              <div className="text-center flex items-center justify-center gap-2">
                <p className="text-blueish text-[16px] font-bold leading-full">Read More</p>
                <ArrowIcon />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
