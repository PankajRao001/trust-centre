import React from "react";
import { TrustedCard } from "../ui/Cards";
import PrimamryButton from "../ui/PrimamryButton";
import { DownloadIcon } from "../common/icons";

const Trusted = () => {
  return (
    <div className="container mt-12 bg-white rounded-2xl mb-12 max-w-[1260px] p-5">
      <p className="text-dark font-semibold leading-full mb-3 font-inter text-[24px]">
        Our Trusted Subprocessors
      </p>
      <p className="text-dark2 max-w-[550px] font-normal leading-150 mb-5 font-inter text-[16px]">
        We carefully vet and monitor each service provider we work with. Below
        is our up-to-date list of authorized subprocessors.
      </p>
      <TrustedCard />
      <div className="text-center gap-3 flex items-center justify-center mt-10">
        <PrimamryButton className="!py-3 text-white hover:bg-linear-[15deg,#007bd9,#009bf9] duration-300 bg-linear-[15deg,#009bf9,#007bd9]">
          Request Access to Documentation
        </PrimamryButton>
        <PrimamryButton
          className="!py-3 flex items-center gap-1.5 text-white hover:inset-shadow-main duration-300
            hover:text-black bg-black"
        >
          Bulk Download <DownloadIcon />
        </PrimamryButton>
      </div>
    </div>
  );
};

export default Trusted;
