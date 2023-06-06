import {FaLinkedinIn} from "react-icons/fa"
const Footer = () => {
  return (
    <div className="w-full py-[40px] px-[60px]  bg-ed-sec-blue mt-[120px]">
    <div className="w-full flex items-center justify-between">
     <div className="w-[30%]">
      <p className="text-[22px] text-ed-blue">Educate</p>
      <p className="text-[#605D62]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias natus quaerat, maiores molestiae consequuntur </p>
      <div className="flex items-center justify-start w-full mt-[15px]">
           <div className="w-[35px] h-[35px] bg-[white] rounded-full flex items-center justify-center  mr-[8px] hover:bg-ed-blue">
              <FaLinkedinIn className="w-[15px] h-[15px]  text-ed-blue"/>
           </div>
           <div className="w-[35px] h-[35px] bg-[white] rounded-full flex items-center justify-center mr-[8px] hover:bg-ed-blue">
              <FaLinkedinIn className="w-[15px] h-[15px]  text-ed-blue"/>
           </div>
           <div className="w-[35px] h-[35px] bg-[white] rounded-full flex items-center justify-center  mr-[8px]  hover:bg-ed-blue">
              <FaLinkedinIn className="w-[15px] h-[15px]  text-ed-blue"/>
           </div>
           <div className="w-[35px] h-[35px] bg-[white] rounded-full flex items-center justify-center mr-[8px]  hover:bg-ed-blue">
              <FaLinkedinIn className="w-[15px] h-[15px]  text-ed-blue"/>
           </div>
     </div>
     </div>
    
     <div className="w-[70%] flex items-start justify-end">
     <div className="text-black flex flex-col">
        <p className="text-[18px] font-semibold">Links</p>
        <a>Home</a>
        <a>About us</a>
        <a>Courses</a>
        <a>Careers</a>
      </div>
     <div className="text-black ml-[60px] flex flex-col">
        <p className="text-[18px] font-semibold">Support</p>
        <a>Contact</a>
        <a>Privacy Policy</a>
        <a>Terms & Conditions</a>
      </div>
     <div className="text-black ml-[60px] flex flex-col">
        <p className="text-[18px] font-semibold">Support</p>
        <a>Contact</a>
        <a>Privacy Policy</a>
        <a>Terms & Conditions</a>
      </div>
     </div>

    </div>

     <div className="w-full mt-[40px] border-t border-t-[#605D62] text-center p-[10px]">
         <p>&copy; All right reserved @educate 2020</p>
      </div>
    </div>
  )
}

export default Footer