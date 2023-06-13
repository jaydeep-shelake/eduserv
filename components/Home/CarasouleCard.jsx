const CarasouleCard = () => {
  return (
    <div className="w-[300px] h-[150px] bg-white primary-box-shadow p-[10px] rounde-[10px] mx-[15px] rounded-[10px] carousel-item">
      <p className="text-[18px] text-semibold">Best Platform</p>
      <p className="text-[#605D62] text-[13px] py-[5px]">Lorem ipsum dolor met nam magnam. Dicta, optio veritatis.</p>
      <div className="flex items-center justify-start w-full mt-[10px]">
      <img src="https://res.cloudinary.com/qtalk/image/upload/v1657746577/useravatar_aoi63u.png" className="w-[40px] h-[40px] mr-[5px]" alt="" />
      <div>
        <p className="text-[14px]">Jaydeep Shelake</p>
        <p className="text-[12px]">Stduent</p>
      </div>
      </div>
      
    </div>
  )
}

export default CarasouleCard