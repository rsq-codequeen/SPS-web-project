import React from 'react'

const techPartnersCard = ({title,desc,imgsrc}) => {
  return (
    <div className='flex bg-white w-1/2 m-12 h-24 '>
        <h2>{title}</h2><br />
        <p>{desc}</p>
        <img src={imgsrc} alt="" />
    </div>
  )
}

export default techPartnersCard