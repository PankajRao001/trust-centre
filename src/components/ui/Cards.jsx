import Image from "next/image";
import { cardData, Trusted_List } from "../common/Helper";
import { ArrowIcon } from "../common/icons";

export const ComplianceCard = () => {
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
              <div className="text-center cursor-pointer flex items-center justify-center gap-2">
                <p className="text-blueish text-[16px] font-bold leading-full">
                  Read More
                </p>
                <ArrowIcon />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export const TrustedCard = () => {
  return (
    <div className="grid grid-cols-2 gap-3">
      {Trusted_List.slice(0, 4).map((obj, index) => {
        return (
          <div
            key={index}
            className="rounded-xl border-1 w-full flex items-center justify-between border-grey3 bg-grey2 p-3"
          >
            <div className="flex gap-2 items-center">
              <Image src={obj.img} alt="logo" width={76} height={76} />
              <div className="flex gap-1 flex-col">
                <div className="flex gap-1 items-center">
                  <p className="font-bold font-inter text-dark text-[18px] leading-full">
                    {obj.title}
                  </p>
                  <p className="font-normal font-inter text-blueish text-[12px] leading-full">
                    {obj.infra}
                  </p>
                </div>
                <p className="font-inter text-[16px] max-w-[286px] text-dark2 font-normal leading-150">
                  {obj.description}
                </p>
              </div>
            </div>
            <span className="h-full bg-grey5 min-h-[95px] w-1"></span>
            <div className="flex flex-col justify-end">
              <p className=" text-right text-dark font-inter text-[16px] leading-150 font-bold ">
                {obj.market}
              </p>
              <p className="text-right text-dark3 text-[12px] font-inter leading-150 max-w-[72px] font-normal">
                {obj.provide}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
