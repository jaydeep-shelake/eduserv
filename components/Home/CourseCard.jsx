import {AiOutlineUser,AiOutlineStar,AiOutlineDollarCircle} from "react-icons/ai"

const CourseCard = () => {
  return (
    <div className="w-[250px] h-[300px] bg-white rounded-[12px] my-[20px] mx-[10px] p-[10px]">
        <div className="bg-[#7a88fe] flex items-center justify-center w-full h-[120px] rounded-[12px]">

        </div>
        <div className="mt-[20px]">
        <div className="bg-[#e9edf9] p-[4px] rounded-[4px] text-ed-blue max-w-[70px] mt-[10px]">
          Science
        </div>
        <div>
         <p className=" font-semibold mt-[10px]">JEE Prepration</p>
         
         <div className="mt-[20px] flex items-center justify-start">
            <div className="flex items-center justify-center">
            <div className="w-[30px] h-[30px] flex items-center justify-center rounded-full bg-[#ecf3f5]">
            <AiOutlineUser className="w-[15px] h-[15px] text-[#33717b]"/>
             </div>
             <p className="ml-[2px] text-[13px]">100k+</p>
            </div>
         
        <div className="flex items-center justify-center mx-[10px]">
          <div className="w-[30px] h-[30px] flex items-center justify-center rounded-full bg-[#f4f3e5]">
           <AiOutlineStar className="w-[15px] h-[15px] text-[#fdd45f]" />
          </div>
          <p className="ml-[2px] text-[13px]">5</p>
          </div>
          <div className="w-[30px] h-[30px] flex items-center justify-center rounded-full bg-[#fdefef]">
          <AiOutlineDollarCircle className="w-[15px] h-[15px] text-[##e45032]" />
          
          </div>
          <p className="ml-[2px] text-[13px]"> 15,000</p>
         </div>
        </div>
        </div>
    </div>
  )
}

export default CourseCard