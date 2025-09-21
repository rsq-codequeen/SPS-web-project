import React from 'react'

const CustomersImages = ({BGimg,altText}) => {
  return (
   <div className='relative rounded-full w-30 h-30 bg-white border-4 border-blue-800 overflow-hidden'>
      <img
        src={BGimg}
        alt={altText}
        className="absolute inset-0 w-full h-auto object-cover self-center"
      />
    </div>

  )
}

export default CustomersImages