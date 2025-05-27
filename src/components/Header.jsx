import { Control_List } from "./common/Helper";
import { EmailIcon, PrivacyIcon } from "./common/icons";
import Navbar from "./Navbar";
import PrimamryButton from "./ui/PrimamryButton";
import Image from "next/image"
const Header = () => {
  return (
    <div className="pb-14">
      <Navbar />
      <div className="container pb-1 max-w-[1260px] px-6 mx-auto">
        <div className="flex gap-5 items-center">
          <div className="max-w-[960px] h-full rounded-[20px] px-5 py-9 w-full bg-control bg-center bg-no-repeat">
            <p className="font-semibold text-white uppercase leading-more font-inter text-[16px] text-center mb-2">
              Trust Centre
            </p>
            <p className="font-extrabold uppercase text-white font-inter leading-more text-primary text-center mb-4">
              Security scan
            </p>
            <p className="font-normal text-white opacity-80 mx-auto leading-150 font-inter text-[16px] text-center max-w-[676px]">
              We put transparency, responsibility, and security at the heart of
              our platform. This Trust Center gives you direct access to
              everything we do to protect your data, comply with global
              regulations, and earn your trust every day.
            </p>
            <div className="flex gap-3 mt-10 items-center justify-center">
              <div className="flex items-center">
                <EmailIcon />
                <p className="font-medium ms-1.5 text-white leading-more font-inter text-[16px] text-center">
                  trust@gmail.com
                </p>
              </div>
              <div className="flex items-center">
                <PrivacyIcon />
                <p className="font-medium ms-1.5 text-white leading-more font-inter text-[16px] text-center">
                  Privacy Policy
                </p>
              </div>
            </div>
            <div className="text-center">
              <PrimamryButton
                className="!py-3 mt-4 text-white bg-linear-[15deg,#009bf9,#007bd9]"
                children="Explore Trust Controls"
              />
            </div>
            <p className="font-medium mt-2 text-white leading-150 font-inter text-[16px] text-center">
              Last published :- May 16th, 2025
            </p>
          </div>
          <div className="bg-privacy flex flex-col gap-3 w-full max-w-[220px] bg-center h-full bg-no-repeat rounded-[20px] p-3">
            {Control_List.map((obj, index) => {
              return (
                <div key={index} className="border-1 flex-col backdrop-blur-xl z-20 w-full border-[#2666A0] py-[11.5px] flex items-center justify-center gap-1 relative rounded-2xl">
                  <div className="rounded-full bg-[#2565A0] text-white font-inter text-2xl font-bold items-center flex justify-center size-[48px]">{obj.id}</div>
                  <p className="text-white font-inter text-sm font-bold leading-full">{obj.description}</p>
                  <Image src={obj.img} alt="img ellispe" className={`${index === 0 ? "left-0 top-0": index === 1 ? "right-0 top-0": index === 2 ? "left-0": index === 3 ? "right-0":""} absolute -z-10 `} />
                </div>
              );
          })}
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
