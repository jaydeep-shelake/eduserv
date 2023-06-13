
import { useEffect } from "react"
import { gsap } from "gsap/dist/gsap"
// import {ScrollTrigger} from "gsap/dist/ScrollTrigger"
// gsap.registerPlugin(ScrollTrigger)
const Analytics = () => {
  const items  =[
    {
        label:"TOTAL COURSES",
        count:'10',
        icon:"https://res.cloudinary.com/qtalk/image/upload/v1686670983/SuperLeaves/icons8-book-96_1_fmeate.png"
    },
    {
        label:"TOTAL COURSES",
        count:'10',
        icon:"https://res.cloudinary.com/qtalk/image/upload/v1686671354/SuperLeaves/icons8-teaching-64_ss1ygj.png"
    },
    {
        label:"TOTAL COURSES",
        count:'10',
        icon:"https://res.cloudinary.com/qtalk/image/upload/v1686670491/SuperLeaves/users_dxmx4h.svg"
    },
  ]
  const animate  =()=>{
    gsap.from('.counter', {
      textContent: 0,
      duration: 2,
      ease: "power1.in",
      snap: { textContent: 1 },
    });
  }

  useEffect(()=>{
    animate()
  })


  return (
    <div className='w-[70%] mx-auto mt-[150px] analyits'>
          <div  className='bg-[#f1f1fc] p-[20px] rounded-[20px] flex items-center justify-between'>
            {
                items.map((item)=>(
            <div key={item.count} className='flex items-center justify-center p-[10px] h-[100px] w-[300px]'>
               <div className="bg-[#fff] p-[10px] h-full w-[100px] flex items-center justify-center">
                    <img src={item.icon} alt="icon" className="w-[50px] h-[50px]" />
               </div>
               <div className='flex flex-col items-start justify-start ml-[20px]'>
                <div className="flex items-center justify-center">
                <p className='text-[32px] font-semibold text-ed-blue counter'>{item.count}</p>
                <p className='text-[32px] font-semibold text-ed-blue '>K+</p>
                </div>
                <p className='text-[#605D62]'>{item.label}</p>
               </div>
             </div>
                ))
            }
             
          </div>
    </div>
  )
}

export default Analytics