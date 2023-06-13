import React from 'react'

const OneOnOne = () => {
  return (
    <div className='w-[70%] mx-auto mt-[150px]'>
        <div className='w-full flex items-center justify-between'>
         <div className='mr-[30px]'>
            <p className="text-[28px] font-semibold">One-on-one dicussion</p>
            <p className="text-[#605D62]">Teacher and Assistant can to talk with student one on one and clear thier doughts</p>
         </div>
         <div>
             <div className='w-[400px] h-[400px] flex flex-col items-center justify-between primary-box-shadow rounded-[20px] '>
                <div className='w-full flex items-center justify-start px-[10px] h-[40px] bg-[#e3e2e2] rounded-t-[20px]'>
                  <span className=' inline-block h-[10px] w-[10px] rounded-full bg-red-600'></span>
                  <span className=' inline-block h-[10px] w-[10px] rounded-full bg-yellow-200 mx-[7px]'></span>
                  <span className=' inline-block h-[10px] w-[10px] rounded-full bg-green-400'></span>
                </div>
                  <div>
                     <img src="https://res.cloudinary.com/qtalk/image/upload/v1686678189/SuperLeaves/close-up-young-businessman-having-work-video-call-while-staying-home-new-normal-lifestyle-business-concept_1_agxxxx.jpg" alt="" className='w-[220px] h-[150px] rounded-[10px]' />
                  </div>
                  <div className='w-full flex items-center justify-between p-[20px]'>
                    <div>
                     <p className='text-[17px] font-semibold'>Private Disscusion</p>
                     <p className='text-[14px] text-[#605D62]'>Talk privatley with teachers </p>
                    </div>
                    <button className=' bg-red-500 text-white p-[10px_15px] rounded-[20px] flex items-center justify-center'>End Disscusion</button>
                    
                  </div>
             </div>
         </div>
        </div>
    

    </div>
  )
}

export default OneOnOne