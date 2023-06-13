"use client"
import CarasouleCard from "./Home/CarasouleCard"

const Testomonials = () => {
  return (
    <div className="w-[70%] mx-auto  relative mt-[150px]">
     <p className="text-[28px]  font-semibold">What our students say about us</p>
      <div className=" absolute top-0 right-0 flex items-center justify-between w-[80px]">
        <img src="https://res.cloudinary.com/qtalk/image/upload/v1686472737/SuperLeaves/left-arrow_d1gvpl.svg" alt="left-arrow" className="w-[30px] h-[30px]"  />
        <img src="https://res.cloudinary.com/qtalk/image/upload/v1686472737/SuperLeaves/right-arrow_vhxxzg.svg" alt="right-arrow" className="w-[30px] h-[30px]"  />
      </div>
     <div className="relative flex  items-center justify-center mx-auto mt-[50px] w-full carousel-container" id="wrapper">
      <CarasouleCard/>
      <CarasouleCard/>
      <CarasouleCard/>
     </div>
      
    </div>
  )
}

export default Testomonials