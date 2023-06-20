import React from 'react'

const SideInfo = ({img,text}) => {
  return ( 
    <div className='w-full h-full bg-ed-blue flex flex-col items-center justify-center '>
     <img src={img} alt="vector" className='w-[50%]' />
     <div className='max-w-[500px] w-full mt-[20px]'>
     <p className='text-white text-[32px] text-center'>{text}</p>
     </div>
    </div>
  )
}

export default SideInfo