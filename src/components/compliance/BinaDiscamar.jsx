import Image from "next/image";
import { GreenTik } from "../common/icons";
import { Destribution_List } from "../common/Helper";

const BinaDiscamar = () => {
  return (
    <div className="container max-w-[1180px] mx-auto py-12 sm:py-14 md:py-20 lg:py-[130px]">
      <p className="text-center font-montserrat letter-spacing-3 font-medium text-[39.39px] text-black mb-11 leading-full">
        Succé!
      </p>
      <div className="bg-light-red w-full rounded-[35.44px] p-[59px_38px_51px_38px]">
        <div className="flex gap-6">
          <p className="text-center font-montserrat letter-spacing-3 font-medium text-[31.39px] text-black mb-2 leading-full">
            Jobb 5 har behandlats klart
          </p>
          <GreenTik />
        </div>
        <p className="font-quicksand letter-spacing-3 font-medium mb-10 text-xl text-dark-grey2">
          Dina filer har skickats in för distribution.
        </p>
        <div className="bg-white rounded-[35px] border-5 border-dark-grey p-4 sm:p-5 lg:p-[58px_40px_57px_26px]">
          <p className="text-[30px] font-medium leading-full font-montserrat letter-spacing-3 mb-6">
            Dina besparingar
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-8">
            <div className="bg-light-green min-h-[146px] rounded-[20px] py-4 px-5 md:py-5 md:px-6 lg:py-6 lg:pl-8 lg:pr-11 flex items-center lg:items-end justify-between">
              <p className="font-medium text-light-dark leading-full font-quicksand letter-spacing-3 text-[28px]">
                Est. kostnad
              </p>
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-[50px] font-medium text-black leading-full font-montserrat letter-spacing-3">
                3689 <span className="text-[30px]">SEK</span>
              </p>
            </div>
            <div className="bg-light-green min-h-[146px] rounded-[20px] py-4 px-5 md:py-5 md:px-6 lg:py-6 lg:pl-8 lg:pr-11 flex items-center lg:items-end justify-between">
              <p className="font-medium text-light-dark leading-full font-quicksand letter-spacing-3 text-[28px]">
                Total besparing
              </p>
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-[50px] font-medium text-black leading-full font-montserrat letter-spacing-3">
                1200 <span className="text-[30px]">SEK</span>
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white mt-9 rounded-[35px] border-[5px] border-dark-grey p-4 sm:p-5 lg:p-[58px_40px_57px_26px]">
          <p className="text-[30px] font-medium leading-full font-montserrat letter-spacing-3 mb-6">
            Sammanfattning
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 mt-9 gap-5 md:gap-8">
            <div className="bg-light-purple min-h-[146px] rounded-[20px] py-4 px-5 md:py-5 md:px-6 lg:py-6 lg:pl-8 lg:pr-11 flex items-center lg:items-end justify-between">
              <p className="font-medium text-light-dark leading-full font-quicksand letter-spacing-3 text-[28px]">
                Antal filer
              </p>
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-[50px] font-medium text-black leading-full font-montserrat letter-spacing-3">
                12
              </p>
            </div>
            <div className="bg-light-orange min-h-[146px] rounded-[20px] py-4 px-5 md:py-5 md:px-6 lg:py-6 lg:pl-8 lg:pr-11 flex items-center lg:items-end justify-between">
              <p className="font-medium text-light-dark leading-full font-quicksand letter-spacing-3 text-[28px]">
                Avvisade filer
              </p>
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-[50px] font-medium text-black leading-full font-montserrat letter-spacing-3">
                1
              </p>
            </div>
          </div>
          <p className="text-lg font-medium leading-full font-montserrat mt-12 mb-5">
            Distribution
          </p>
          <div className="flex flex-col gap-5">
            {Destribution_List.map((obj, index) => {
              return (
                <div
                  key={index}
                  className="flex items-center p-4 border-2 rounded-xl border-dark-grey justify-between"
                >
                  <div className="flex items-center gap-3">
                    <Image src={obj.img} alt="image" width={42} height={42} />
                    <p className="text-sm text-black font-quicksand font-normal letter-spacing-3">
                      {obj.title}
                    </p>
                  </div>
                  <p className="text-sm text-black font-quicksand font-normal letter-spacing-3">
                    {obj.filer}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="flex items-end justify-end gap-8">
            <button className="cursor-pointer border-1 border-orange py-3 px-6 rounded-xl text-orange hover:text-white duration-300 font-quicksand leading-full font-medium hover:shadow-orange-in">
              Se status
            </button>
            <button className="cursor-pointer border-1 border-orange py-3 px-6 rounded-xl text-orange hover:text-white duration-300 font-quicksand leading-full font-medium hover:shadow-orange-in">
              Skicka fler filer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BinaDiscamar;
