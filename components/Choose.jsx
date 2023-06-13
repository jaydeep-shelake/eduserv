import ChooseCard from "./Home/ChooseCard"

const Choose = () => {
  return (
    <div className="w-[70%] mx-auto mt-[150px] p-[25px] rounded-[20px] bg-ed-sec-blue">
      <p className="text-[28px] font-semibold">Why To Choose us</p>
      <p className="text-[#605D62]">Browse top classes courses by browing our category</p>
       <div className="w-full  bg-ed-sec-blue flex items-center justify-between">
         <div className="mt-[30px] p-[25px]">
            <div className="w-[306px] h-[204px] rounded-[10px] relative">
             <img className="w-full h-full rounded-[10px]" src="https://res.cloudinary.com/qtalk/image/upload/v1686312989/SuperLeaves/prof1_s85oyk.jpg" alt="" />
             <img src="https://res.cloudinary.com/qtalk/image/upload/v1686312989/SuperLeaves/proof2_iwsmjq.jpg" alt="" className="w-[203px] h-[142px] absolute bottom-[-20px] right-[-50px] rounded-[10px]" />
             
            </div>
         </div>

         <div className="flex items-center justify-end flex-wrap mt-[40px]">
           <ChooseCard/>
           <ChooseCard/>
           <ChooseCard/>
           <ChooseCard/>
         </div>
       </div>
    </div>
  )
}

export default Choose