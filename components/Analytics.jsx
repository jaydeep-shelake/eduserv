
const Analytics = () => {
  const items  =[
    {
        label:"TOTAL COURSES",
        count:'10K+',
    },
    {
        label:"TOTAL COURSES",
        count:'10K+',
    },
    {
        label:"TOTAL COURSES",
        count:'10K+',
    },
  ]

  return (
    <div className='w-[70%] mx-auto mt-[150px]'>
          <div  className='bg-[#f1f1fc] p-[20px] rounded-[20px] flex items-center justify-between'>
            {
                items.map((item)=>(
            <div key={item.count} className='flex items-center justify-center p-[10px] h-[100px] w-[300px]'>
               <div className="bg-[#fff] p-[10px] h-full w-[100px]">

               </div>
               <div className='flex flex-col items-start justify-start ml-[20px]'>
                <p className='text-[32px] font-semibold text-ed-blue'>{item.count}</p>
                <p className='text-[#605D62]'>{item.label}</p>
               </div>
             </div>
                ))
            }
             
          </div>
    </div>
  )
}

export default Analytics