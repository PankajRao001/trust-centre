import React from 'react'
import { Globally_Logo } from '../common/Helper';
import Image from "next/image"

const Globally = () => {
  return (
    <div className="container mt-8 max-w-[1260px] px-6">
      <div className="bg-white rounded-2xl p-5">
        <p className="text-dark font-semibold leading-full mb-4 font-inter text-[24px]">
          Globally Compliant Independently Verified.
        </p>
        <p className="text-dark2 max-w-[550px] font-normal leading-150 mb-4 font-inter text-[16px]">
          We meet or exceed security, data privacy, and AI usage standards set
          by international frameworks.
              </p>
              <div className='flex justify-between items-center'>
                  <div className='flex gap-4 flex-wrap items-center'>
                      {
                          Globally_Logo.map((obj, index) => {
                              return (
                                  <Image key={index} alt='logos' src={obj.img} width={110} height={110} />
                              )
                          })
                      }
                  </div>
              </div>
      </div>
    </div>
  );
}

export default Globally