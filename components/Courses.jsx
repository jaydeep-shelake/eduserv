import CourseCard from "./Home/CourseCard"

const Courses = () => {
  return (
    <div className="w-[70%] mx-auto mt-[150px] bg-ed-sec-blue p-[25px] rounded-[20px]">
     <p className="text-[28px]  font-semibold">Explore Courses by Category</p>
     <div className="w-full flex items-center justify-between">
     <p className="text-[#605D62]">Browse top classes courses by browing our category</p>
      <button className="bg-white py-[4px] px-[17px] text-ed-blue rouded-md">View All</button>
     </div>

     <div className="flex items-center justify-evenly flex-wrap mt-[30px]">
      <CourseCard/>
      <CourseCard/>
      <CourseCard/>
      <CourseCard/>
      <CourseCard/>
      <CourseCard/>
     </div>

     </div>
  )
}

export default Courses