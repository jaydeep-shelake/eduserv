import Form from '@/components/Auth/Form'
import SideInfo from '@/components/Auth/SideInfo'
import React,{useEffect} from 'react'
import Head from 'next/head'
import { useDispatch, useSelector } from 'react-redux'
import { SIGNIN_SUCESS } from '@/redux/sagas/types'
import { useRouter } from 'next/navigation'
import { getErrorMessage } from '@/helpers'
const login = () => {
  const router = useRouter()
    const inputs =[
        {
            name:"email",
            label:"Email",
            type:"text"
        },
        {
            name:"password",
            label:"Password",
            type:"password"
        }
    ]  
  const error = useSelector(state=>state.auth.error)
  const dispatch = useDispatch()
  const user= useSelector(state=>state.auth.user)
  const handleOnSumit =(formData)=>{
    dispatch({type:SIGNIN_SUCESS,email:formData.email,password:formData.password})
    
  }  

  useEffect(()=>{
    if(user&&!error.isError){
     router.push('/')
    }
   },[user])
    
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <Head>
        <title>Login</title>
      </Head>
     <div className='h-full flex-[50%]'>
     <SideInfo img="https://res.cloudinary.com/qtalk/image/upload/v1687095649/SuperLeaves/Studying-cuate_eiq6wi.png" text="Welcome,Back resume your journey" />
     </div>
     <div className='flex-[50%] flex-col  h-full flex items-center justify-center'>
      <Form inputs={inputs} title="Welcome , Again" subTitle="Please enter your details" authText="New User?," link="/signup" linkText="Register" handleOnSumit={handleOnSumit} btnText="Login"/>
      { error.isError&&<div className='bg-red-400 p-[8px] rounded-[4px] text-red-700 max-w-[400px] w-full flex items-center justify-center'>{getErrorMessage(error?.code)}</div>}
     </div>
    </div>
  )
}

export default login