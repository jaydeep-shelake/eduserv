
const Header = () => {
  return (
    <div className='flex h-[80px] items-center justify-between fixed top-0 left-0 p-[20px] w-full bg-ed-sec-blue'>
     <div className='text-black'>Edu<span className='text-ed-blue'>Cate</span></div>
     <div className='flex items-center justify-between text-black  font-semibold'>
      <div  className='mx-[20px]'>Home</div>
      <div  className='mx-[20px]'>Courses</div>
      <div  className='mx-[20px]'>Tets</div>
      <div  className='mx-[20px]'>About us</div>
     </div>
     <div className='flex items-center justify-center'>
      <button className='px-[10px] py-[8px] w-[126px] bg-ed-sec-blue text-ed-blue rounded-[8px] flex items-center justify-center'>Login</button>
      <button className='px-[10px] py-[8px] w-[126px] text-ed-sec-blue bg-ed-blue rounded-[8px] ml-[20px] flex items-center justify-center'>Regsiter</button>
     </div>
    </div>
  )
}

export default Header