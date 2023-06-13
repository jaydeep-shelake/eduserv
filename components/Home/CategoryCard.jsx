
import Image from "next/image"
const CategoryCard = ({color,title,des,img}) => {
  return (
    <div className="w-[320px] h-[100px] m-[10px] p-[10px] flex items-center justify-between">
      <div className="bg-[#e9f8ff] p-[5px] w-[100px] rounded-[12px] flex items-center justify-center h-full">
       <Image src={img} width={40} height={40}/>
      </div>
      <div className="ml-[20px]">
        <p className="font-semibold">{title}</p>
        <p className="text-[14px] text-[#605D62]">{des}</p>
      </div>
    </div>
  )
}

export default CategoryCard