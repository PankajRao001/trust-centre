import React from "react";
import { Globally_Logo } from "../common/Helper";
import Image from "next/image";

const Globally = () => {
  return (
    <div className="container mt-8 bg-white rounded-2xl max-w-[1260px] p-5">
      <p className="text-dark font-semibold leading-full mb-4 font-inter text-[24px]">
        Globally Compliant Independently Verified.
      </p>
      <p className="text-dark2 max-w-[550px] font-normal leading-150 mb-4 font-inter text-[16px]">
        We meet or exceed security, data privacy, and AI usage standards set by
        international frameworks.
      </p>
      <div className="flex justify-between items-center">
        <div className="flex gap-4 flex-wrap items-center">
          {Globally_Logo.map((obj, index) => {
            return (
              <Image
                key={index}
                alt="logos"
                src={obj.img}
                width={110}
                height={110}
              />
            );
          })}
        </div>
        <button
          className="btn-compliance-docs bg-linear-[15deg,#009bf9,#007bd9] relative after:absolute after:content-['']
           after:top-[-1px] after:bottom-[-1px] after:rounded-lg after:right-[-1px] after:left-[-1px] after:bg-linear-[15deg,#009bf9,#007bd9] after:z-[-1]
             before:rounded-lg before:content-[''] before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0 before:z-[-1] font-semibold font-inter
             text-[18px] leading-full py-3 duration-300 rounded-lg bg-clip-text"
        >
          Download Compliance Docs
        </button>
      </div>
    </div>
  );
};

export default Globally;
