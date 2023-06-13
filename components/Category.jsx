import CategoryCard from "./Home/CategoryCard"

const Category = () => {
    const categoris  = [
      {
          title:'Design and Developement',
          img:'https://res.cloudinary.com/qtalk/image/upload/v1685795943/SuperLeaves/brush_hmhsfq.png',
          bgColor:'',
          des:"250+ course",
          color:''
      },
      {
          title:'Design and Developement',
          img:'https://res.cloudinary.com/qtalk/image/upload/v1686675348/SuperLeaves/Vector_kkblk5.svg',
          bgColor:'',
          des:"250+ course",
          color:''
      },
      {
          title:'Design and Developement',
          img:'https://res.cloudinary.com/qtalk/image/upload/v1686675514/SuperLeaves/monitor_zoq47d.svg',
          bgColor:'',
          des:"250+ course",
          color:''
      },
      {
          title:'Design and Developement',
          img:'https://res.cloudinary.com/qtalk/image/upload/v1686675677/SuperLeaves/graph_yjx4l3.svg',
          des:"250+ course",
          bgColor:'',
          color:''
      },
      {
          title:'Design and Developement',
          img:'https://res.cloudinary.com/qtalk/image/upload/v1686675904/SuperLeaves/dollar_bvl5bi.svg',
          des:"250+ course",
          bgColor:'',
          color:''
      },
    ]
  return (
    <div className="w-[70%] mx-auto mt-[150px]">
     <p className="text-[28px]  font-semibold">Explore Courses by Category</p>
     <p className="text-[#605D62]">Browse top classes courses by browing our category</p>
     <div className="mt-[50px] flex items-start justify-start flex-wrap">
       {
        categoris.map((category,i)=>(
          <CategoryCard title={category.title} des={category.des} img={category.img} key={i}/>
        ))
       }
     </div>
    </div>
  )
}

export default Category