import Link from 'next/link'
import React from 'react'
import {yupResolver} from '@hookform/resolvers/yup'
import {useForm} from 'react-hook-form'
import { Spinner } from '../libs/Spinner'
import { useSelector } from 'react-redux'
import { getAuthSchema } from '@/helpers/schema'
const Form = ({title,subTitle,inputs=[],authText,link,linkText,handleOnSumit,btnText}) => {
  const loading = useSelector(state=>state.auth.loading)
  const onSubmit=(data)=>{
    handleOnSumit(data)
  }

  const schema= getAuthSchema(btnText)

  const {register,handleSubmit,formState:{errors}}=useForm({
    resolver:yupResolver(schema)
  })


  return (
    <div  className='w-full max-w-[400px]  p-[10px]'>
      <div className='mb-[40px]'>
        <p className='text-[42px] text-semibold'>{title}</p>
        <p className='text-[18px] text-semibold text-ed-gray'>{subTitle}</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className='w-full'>
        {inputs.map((input,i)=>(
            <div className='w-full my-[15px] flex flex-col' key={`input_${i}`}>
            <label  className=' text-ed-blue mb-[10px]'>{input.label}</label>
            <input className={`${errors[`${input.name}`]?' bg-[#f7b3b3] outline-red-500':'bg-ed-sec-blue'} p-[10px] rounded-[6px] outline-none border-none`} type={input.type} name={input.name} {...register(input.name,{required:true})} />
            {errors[`${input.name}`]&&<p className='text-[13px] mt-[5px] text-red-600 '>{errors[input.name].message}</p>}
            </div>
        ))}

         <button type='submit' className='flex items-center justify-center w-full rounded-[6px] bg-ed-blue p-[10px] text-white mt-[15px]' >
            {
            loading?<Spinner/>:btnText
            }
         </button>
      </form>
      
      <div className='mt-[10px]'>
         <p>{authText} <Link className='text-ed-blue' href={link}>{linkText}</Link></p> 
      </div>
    </div>
  )
}

export default Form