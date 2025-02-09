import React, { useState } from 'react'
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { NavLink } from 'react-router';
export default function AgentSignIn() {

    const [show, setShow]= useState(false);
  return (
    <div className='fixed right-0 left-0 top-0 bottom-0 z-[1000] text-white bg-[#002062] '>
        <div className='flex items-center justify-center h-screen'>
        <div className=' bg-gray-100/10 px-40 pb-20  rounded-2xl'>
        <div className=' flex items-center justify-center'>

        <img src="/logo1.png" width={100} className=' -translate-y-10' alt="" />
        </div>

        <p className='text-center text-lg font-medium pb-4 '>Solve Super Agent</p>
        <p className='text-center text-xs pb-8 italic'>Please fill in your unique admin login details below</p>
        <form className='grid'>
        <lebel>Username</lebel>
        
        <input className='bg-white px-5 outline-none text-black rounded-lg h-[58px] mb-10'/>
        <lebel>Password</lebel>



        <div onClick={()=>setShow(!show)} className={` ${show?"block":"hidden"} relative cursor-pointer`}>
        <div className=' absolute p-5 right-0'>
        <IoEyeOutline className=' text-black' size={20}/>
        </div>
        </div>
        <div onClick={()=>setShow(!show)} className={ `  ${show?"hidden":"block"} relative cursor-pointer`}>
        <div className=' absolute p-5 right-0'>
        <IoEyeOffOutline  className=' text-black' size={20}/>
        </div>
        </div>



        <input type={show?'text':'password'} className='bg-white pl-5 pr-20 outline-none text-black rounded-lg h-[58px] '/>
        
        <a className='text-right'>Forgot Password?</a>
        <NavLink to='/agents'>

           <button className='mt-10 bg-[#0E45B6] rounded-xl w-[550px] h-[60px]'>Sign In</button>
        </NavLink>
        
        </form>
        
        </div>
        </div>
        </div>
  )
}

