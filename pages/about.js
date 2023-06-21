import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Mission from '@/components/Mission'
import React from 'react'
import {BsFillArrowRightCircleFill} from  "react-icons/bs"

const About = () => {
  return (
    <>
    <Header/>
     <div className='mt-[90px] p-[20px]'>
      <div className=' relative h-[620px] flex items-center justify-center'>
         <img src="https://bubblebyte.in/static/media/Background.95515fd0.png" alt="bg" className='h-full w-full  absolute top-0 left-0' />
        <div className='max-w-[500px] flex flex-col items-center justify-center'>
          <p className='text-[20px] text-ed-ornage'>Star Learing from today</p>
          <p className='text-[52px] font-bold  text-center'>The India's Best Learning Platfrom</p>
        <button className='px-[10px] py-[8px] w-[160px] text-ed-sec-blue bg-ed-blue rounded-[20px] flex items-center justify-center mt-[20px]'>Get Started <BsFillArrowRightCircleFill className="text-[#ffff] ml-[4px]"/></button>
           
        </div>
      </div>
        <div className='mt-[130px] w-[70%] mx-auto flex flex-col items-center justify-center'>
          <p className='text-ed-ornage'>Our journey</p>
          <p className='text-[43px] font-bold'>About Us</p>
          <p className='text-[18px] text-center mt-[20px]'>On May 08, 1998 we begun our journey as Akhilesh's Private Tutorials  in Khar East , Mumbai. Having served students in Mumbai from 1998 to 2009, we branched out to Noida - Delhi NCR. Rechristened as Akhilesh Tutorials we have been serving the needs of students in the National Capital Region from  June 2009.</p>
        </div>
       <div className='mt-[130px]'>
            <Mission/>
       </div>
       <div className='mt-[40px]'>
       <div className="w-[70%] mx-auto mt-[200px] relative">
      <div className="w-full bg-ed-ornage rounded-[20px] p-[30px] flex items-center flex-row-reverse justify-between h-[230px]">
         <div className="w-[70%]">
            <p className="text-[#ffff] text-[22px]">Our Vision</p>
            <p className="text-[14px] text-[#ffff]">Empower and train every student to their ultimate career success. Our vision is to reach all India by taking  physical offline class in classrooms  and to reach the whole world by taking online classes through Video Conferencing Softwares (VCS) , Learning Management Software (LMS), Mobile Application, conducting online objective and subjective examination with proctoring</p>
         </div>
         <div className="absolute top-[-120px] left-[-60px]">
            <img src="https://res.cloudinary.com/qtalk/image/upload/v1687338477/SuperLeaves/thinking-girl-student-with-notebooks-stands-blue-background-thoughtful-making-decision__1_-removebg-preview_senfql.png" width={500} />
         </div>
      </div>
    </div>
    </div>
    <div className='mt-[150px] flex flex-col items-center justify-center w-[80%] mx-auto'>
    <p className='text-ed-ornage'>FROM THE HEADQUARTERS</p>
    <p className='text-[43px] font-bold text-center'>Message From our Founder</p>
    <div>
    <img src="https://img.icons8.com/material-sharp/2x/4a90e2/quote-left.png" alt="" />
    <p className='text-center text-[16px] mt-[30px]'>
     
     In 1992 , I had gone through a pain of rejection by a private coaching classes. The then "Agrawal Classes - Mumbai"  has rejected my admission in 2 years  foundation program of IITJEE because of my combined marks of Grade 10th for Mathematics and Science was 272/300 and their demand was 275+/300. That day I decided after completing my studies I start a Coaching Institute for all students.

On May 08, 1998 we begun our journey as Akhilesh's Private Tutorials  in Khar East , Mumbai. Having served students in Mumbai from 1998 to 2009, we branched out to Noida - Delhi NCR. Rechristened as Akhilesh Tutorials we have been serving the needs of students in the National Capital Region from  June 2009.

After completing 23 years of Service to the students  of Science , We have realised that we must serve the other subject  students. So, on the 75th Independence day - 15th August 2021 we categorised our services in 3 major schools namely School of Science (SOS), School of Commerce (SOC) and School of Humanities (SOH). 
Each School has 2 sections - Academic Section and Competitive Section.
In academic section we serve students in 3 divisions  namely  Junior Division (Grade 7th and 8th), Scondary Division (Grade 9th and 10th) and Senior Secondary Division (Grade 11th and 12th).

We at Akhilesh Tutorials serve students of CBSE, ICSE, ISC, IGCSE and IB Boards in academic section and all other state boards along with our academic section boards in competitive section.

Wishing every viewer of this page a good luck for your success of life
</p>
<img src="https://img.icons8.com/material-sharp/2x/4a90e2/quote-right.png" alt="" className=' float-right' />
    </div>
 
    </div>
     </div>
     <Footer/>
    </>
   
  )
}

export default About