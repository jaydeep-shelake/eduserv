import React from 'react'

const Contact = () => {
  return (
    <div className='w-full h-screen flex items-center  justify-between'>
       <div className='w-[50%] h-full bg-ed-blue flex items-center justify-center'>
            <img src="https://res.cloudinary.com/qtalk/image/upload/v1687443605/SuperLeaves/Flying_around_the_world-rafiki_mldyvk.png" alt="" className='w-[500px]' />
       </div>
       <div className='w-[50%] p-[5rem] h-full'>
       <p className='text-[32px]'>GET IN TOUCH</p>
       <p className='my-[20px] text-[#646262]'>24/7 We will answers your quetions and problems </p>
       <div>
        <div className='w-full flex items-center justify-between'>
             <div className='w-[45%] flex flex-col'>
                <label className='text-ed-blue' htmlFor="name">First Name</label>
                <input className='contact-input' type="text" name="name" id="name" />
             </div>
             <div  className='w-[45%] flex flex-col'>
                <label className='text-ed-blue' htmlFor="lastname">Last Name</label>
                <input className='contact-input' type="text" name="lastname" id="lastname" />
             </div>
        </div>
        <div className='w-full flex flex-col my-[10px]'>
            <label className='text-ed-blue' htmlFor="email">Email</label>
            <input className='contact-input' type="text" name="email" id="email" />
        </div>
        <div className='w-full flex flex-col my-[10px]'>
            <label className='text-ed-blue' htmlFor="mob">Mobile No.</label>
            <input className='contact-input' type="text" name="mob" id="mob" />
        </div>
       <div className='w-full flex flex-col my-[10px]'>
        <label htmlFor="msg" lassName='text-ed-blue'>Message</label>
        <textarea className='contact-input h-[120px]' name="msg" id="msg" cols="30" rows="10"></textarea>
       </div>
       <button className=' bg-ed-blue p-[10px] w-full rounded-md text-[#fff] mt-[10px]'>SUBMIT</button>
       </div>
       </div>
    </div>
  )
}

export default Contact