import React, { useEffect } from 'react'
import Head from 'next/head'
import SideInfo from '@/components/Auth/SideInfo'
import Form from '@/components/Auth/Form'
import { useDispatch,useSelector } from 'react-redux'
import {  SIGNUP_SUCESS } from '@/redux/sagas/types'
import {useRouter} from "next/navigation"
import { getErrorMessage } from '@/helpers'
const signup = () => {
  const dispatch= useDispatch()
    const inputs =[
        {
         name:"name",
         label:"Full Name",
         type:"text",
        },
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
 
  const router = useRouter()
  const error = useSelector(state=>state.auth.error)
  const user= useSelector(state=>state.auth.user)
  const handleOnSumit=(formData)=>{
    dispatch({type:SIGNUP_SUCESS,email:formData.email,password:formData.password,name:formData.name})
  }

  useEffect(()=>{
   if(user&&!error.isError){
    router.push('/')
   }
  },[user])
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <Head>
        <title>Register</title>
      </Head>
     <div className='h-full flex-[50%]'>
     <SideInfo img="https://res.cloudinary.com/qtalk/image/upload/v1687094489/SuperLeaves/Grades-cuate_ifmgtc.png" text="Start your Education journey with us." />
     </div>
     <div className='flex-[50%] flex-col h-full flex items-center justify-center'>
      <Form inputs={inputs} title="Get Started." subTitle="Please enter your details" authText="Already have an account?" link="/login" linkText="Login" handleOnSumit={handleOnSumit} btnText="Register" />
      { error.isError&&<div className='bg-red-400 p-[8px] rounded-[4px] text-red-700 w-full max-w-[400px]'>{getErrorMessage(error.code)}</div>}
     </div>
    </div>
  )
}

export default signup