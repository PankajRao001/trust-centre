import React from 'react'

const PrimamryButton = ({ className = '', children, ...props }) => {
  return (
    <button
    className={`font-semibold font-inter text-[18px] leading-[100%] px-6 py-4 rounded-lg ${className}`}
    {...props}
  >
    {children}
  </button>
  )
}

export default PrimamryButton
