"use client";
import { useState } from "react";
import { Tabs } from "./common/Helper";
import { TikIcon } from "./common/icons";

const TrustTabs = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="bg-grey2 pt-16">
      <div className="container pt-1.5 max-w-[1260px] mx-auto px-6 ">
        <div className="flex gap-8 items-center">
          {Tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`py-2 w-full gap-4 items-center justify-center max-w-[214px] rounded-full font-urbanist text-[14px] font-medium flex transition-all duration-300
              ${
                index === activeIndex
                  ? "bg-blue-500 text-white shadow"
                  : "bg-white text-gray-300 border-1 hover:bg-gray-100"
              }`}
            >
              <TikIcon/>
              {tab.id}
            </button>
          ))}
        </div>
        <div>{Tabs[activeIndex].component}</div>
      </div>
    </div>
  );
};

export default TrustTabs;
