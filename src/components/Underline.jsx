import React from 'react'

const Underline = ({mobileWidth, width}) => {
  return (
    <div className={`h-2 w-[${mobileWidth}px] md:w-[${width}px] text-underline`}></div>
  )
}

export default Underline
