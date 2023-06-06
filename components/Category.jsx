import CategoryCard from "./Home/CategoryCard"

const Category = () => {
    const categoris  = [
      {
          title:'Design and Developement',
          img:'https://res.cloudinary.com/qtalk/image/upload/v1685795943/SuperLeaves/brush_hmhsfq.png',
          bgColor:'',
          color:''
      },
    ]
  return (
    <div className="w-[70%] mx-auto mt-[150px]">
     <p className="text-[28px]  font-semibold">Explore Courses by Category</p>
     <p className="text-[#605D62]">Browse top classes courses by browing our category</p>
     <div className="mt-[50px] flex items-start justify-start flex-wrap">
        <CategoryCard/>
        <CategoryCard/>
        <CategoryCard/>
        <CategoryCard/>
        <CategoryCard/>
     </div>
    </div>
  )
}

export default Category