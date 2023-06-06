import modelImg from "../assets/images/model.png"
import calendarIcon from "../assets/images/calendar.svg"
import bookIcon from "../assets/images/icons8-book-48.png"
 import {BsFillBarChartFill,BsFillArrowRightCircleFill,BsFillPlayFill} from  "react-icons/bs"
import Image from 'next/image';
import { gsap } from "gsap";
import { useEffect } from "react";
const Hero = () => {
  let tl
  useEffect(()=>{
    tl = gsap.timeline({repeat:-1,yoyo:true})
   
    gsap.to('.book',{repeat:-1,yoyo:true,top:'80px',duration:1})
    gsap.to('.graph',{repeat:-1,yoyo:true,top:'50px',duration:1})
    gsap.to('.play',{repeat:-1,yoyo:true, duration:0.5, width:'50px'})
  })
  return (
    <div className='relative w-full bg-ed-sec-blue py-[20px] px-[40px] h-[550px] rounded-b-[40px] mt-[80px] flex items-center justify-center'>
        <div className="w-[70%] flex items-center justify-between">
       <div className="h-full flex flex-col justify-start items-start ">
        <div className="py-[5px] px-[8px] bg-[#FFFFFF] rounded-[6px]">
          Never stop learining
        </div>
        <p className="text-[42px] font-bold text-[#605D62] ">Crack your <span className="text-ed-blue">goals</span> with</p>
        <p className="text-[42px] font-bold text-[#605D62]">India's top <span className="text-ed-blue">educators</span></p>
        {/* <input type="text" className=" mt-[20px] bg-[#ffffffc9] p-[10px] rounded-[6px] w-[400px]" placeholder="Enter your phone number/Email" /> */}
        <div className="flex items-center justify-center mt-[12px]">
        <button className='px-[10px] py-[8px] w-[140px] text-ed-sec-blue bg-ed-blue rounded-[8px] flex items-center justify-center'>Get Started <BsFillArrowRightCircleFill className="text-[#ffff] ml-[4px]"/></button>
        <button className='px-[10px] py-[8px] w-[126px] text-ed-blue bg-[#e1e1f9] rounded-[8px] flex items-center justify-center ml-[20px] '>Get Started</button>
       
        </div>
      
       </div>
       <div>
        <div className="relative">
        <Image src={modelImg} alt="model"  width={500}
      height={500} />
        <div className="box z-[2] bottom-[70px] left-[0px] absolute w-[230px] h-[80px] rounded-[20px] p-[15px] flex items-center justify-center bg-[#ffffffc9] ">
            <div className="w-full flex items-center justify-between">
              <div className="bg-[#23BDEE] p-[10px] rounded-[8px]">
                <Image src={calendarIcon} width={20} height={20}/>
              </div>
              <div className="flex items-start justify-start flex-col">
                <p className="text-[18px]">250K</p>
                <p className="text-[14px] text-[#605D62]">Assisted Student</p>
              </div>
            </div>
        </div>

        <div className=" graph absolute w-[40px] h-[40px] flex items-center justify-center top-[20px] right-[20px] bg-ed-ornage p-[5px] rounded-[4px]">
          <div className="bg-[#FFFFFF] rounded-[4px] w-[30px] h-[30px] flex items-center justify-center">
          <BsFillBarChartFill className="text-ed-ornage"/>
          </div>
           
        </div>
        <div className="absolute top-[100px] left-[50px] book">
              <Image src={bookIcon} height={40} width={40}/>
          </div>
        </div>
       </div>
       </div>
       <div className=" flex items-center justify-center absolute w-[170px] h-[170px] bg-ed-sec-blue rounded-full  z-[1] bottom-[-80px] left-[50%] translate-x-[-50%]">
         <div className="w-[80%] h-[80%] rounded-full bg-ed-blue flex items-center justify-center">
              <BsFillPlayFill className="text-[#ffff] text-[62px] play"/>
         </div>
       </div>
    </div>
  )
}

export default Hero