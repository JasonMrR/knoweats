import React from 'react'

interface Button {
  title: string,
  className: string,
}

const FillButton = ({title, className}:Button) => {
  return (
    <button 
      className={`py-3 px-11 bg-secondary-color rounded-md text-xl font-bold text-white uppercase ${className} w-fit`}
    >
      {title}
    </button>
  )
}

export default FillButton