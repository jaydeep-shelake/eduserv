import Image from "next/image"
import girlmodel from "../assets/images/girlmodel.png"
const Mission = ({img}) => {
  return (
    <div className="w-[70%] mx-auto mt-[200px] relative">
      <div className="w-full bg-ed-blue rounded-[20px] p-[30px] flex items-center justify-between h-[230px]">
         <div className="w-[70%]">
            <p className="text-[#ffff] text-[22px]">Our Mission</p>
            <p className="text-[14px] text-[#a4a4a4]">To serve 10 million students of Grade 7th to 12th (CBSE, ICSE, ISC, IGCSE and IB Boards) and students who appear in all competitive examinations through our teachings to achieve their ultimate career success.</p>
         </div>
         <div className=" absolute top-[-120px] right-0">
            <Image src={girlmodel} width={500} />
         </div>
      </div>
    </div>
  )
}

export default Mission