import React from "react";
import { Resources_List } from "../common/Helper";
import { DownloadIcon, KeyIcon } from "../common/icons";
import PrimamryButton from "../ui/PrimamryButton";

const Resources = () => {
  return (
    <div className="container mt-12 bg-white rounded-2xl mb-12 max-w-[1260px] p-5">
      <p className="text-dark font-semibold leading-full mb-3 font-inter text-[24px]">
        Trust Documentation/Resources{" "}
      </p>
      <p className="text-dark2 max-w-[550px] font-normal leading-150 mb-3 font-inter text-[16px]">
        Need a deeper look? Access our technical documentation, policy archive,
        and legal summaries to better understand how we manage data and risk.
      </p>
      <div className="flex justify-between items-center flex-col mb-10 gap-2">
        {Resources_List.map((obj, index) => {
          return (
            <div
              key={index}
              className="rounded-xl bg-light-grey border-1 flex items-center justify-between border-grey w-full p-[11px]"
            >
              <div className="flex ml-0.5 gap-2 items-center">
                {obj.svg}
                <p className="font-inter font-bold text-[18px]">{obj.title}</p>
              </div>
              <KeyIcon />
            </div>
          );
        })}
      </div>
      <div className="text-start gap-3 flex items-center ">
        <PrimamryButton
          className="!py-3 text-white hover:bg-linear-[15deg,#007bd9,#009bf9] duration-300 bg-linear-[15deg,#009bf9,#007bd9]"
          children="Request Access to Documentation"
        />
        <PrimamryButton
          className="!py-3 flex items-center gap-1.5 text-white hover:inset-shadow-main duration-300
          hover:text-black bg-black"> Bulk Download  <DownloadIcon/>
        </PrimamryButton>
      </div>
    </div>
  );
};

export default Resources;
