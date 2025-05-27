import React from "react";
import Cards from "../ui/Cards";

const Control = () => {
  return (
    <div className="container mt-12 bg-white rounded-2xl p-3 pb-12 max-w-[1260px]">
        <p className="text-dark text-center font-semibold leading-full mb-4 font-inter text-[24px]">
          You’re in Control
        </p>
        <p className="text-dark2 max-w-[670px] text-center mx-auto font-normal leading-150 mb-4 font-inter text-[16px]">
          Our systems empower users and customers to manage their data with
          clarity and precision. Browse and act on your rights by category below
        </p>
        <div className="flex flex-wrap gap-3 items-center">
          <Cards />
        </div>
    </div>
  );
};

export default Control;
