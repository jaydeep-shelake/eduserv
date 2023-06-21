import { SIGN_OUT } from "@/redux/sagas/types"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useDispatch, useSelector } from "react-redux"

const Header = () => {
  const user = useSelector(state=>state.auth.user)
  const router = useRouter()
  const dispatch = useDispatch()
  const handleSignOut=()=>{
    dispatch({type:SIGN_OUT})
    router.push('/login')
  }
  return (
    <div className='flex h-[80px] z-10 items-center justify-between fixed top-0 left-0 p-[20px] w-full bg-ed-sec-blue'>
     <div className='text-black'>Edu<span className='text-ed-blue'>Serv</span></div>
     <div className='flex items-center justify-between text-black  font-semibold'>
      <div  className='mx-[20px]'>Home</div>
      <div  className='mx-[20px]'>Courses</div>
      <div  className='mx-[20px]'>Tets</div>
      <Link href="/about"><div  className='mx-[20px]'>About us</div></Link>
     </div>
     {
     user?(
       <div onClick={handleSignOut} className="w-[45px] cursor-pointer h-[45px] flex items-center justify-center bg-ed-blue rounded-full ">
           <p className="text-[20px] text-white font-bold">{user.email.charAt(0)}</p>
       </div>
     ):(
    <div className='flex items-center justify-center'>
     <Link href="/login"><button className='px-[10px] py-[8px] w-[126px] bg-ed-sec-blue text-ed-blue rounded-[8px] flex items-center justify-center'>Login</button></Link>
      <Link href="/signup"> <button className='px-[10px] py-[8px] w-[126px] text-ed-sec-blue bg-ed-blue rounded-[8px] ml-[20px] flex items-center justify-center'>Regsiter</button></Link>
     </div>
     )
     }
     
    </div>
  )
}

export default Header