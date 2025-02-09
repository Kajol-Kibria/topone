import React from 'react'
import img from '../../public/pro.png'
import { FiSearch } from "react-icons/fi";
import { BsMic } from "react-icons/bs";
import { IoNotificationsOutline } from "react-icons/io5";
import { NavLink } from 'react-router';

export default function AgentTopbar() {
  return (
    <div>
        <div className='mr-[350px] xl:ml-10 2xl:ml-24 flex items-center justify-between my-[25px] '>
        <NavLink to='/'>

        <div className='flex items-center '>

                <img className=' w-16' src='/logo1.png'/>
                <p className=' font-bold text-white  text-3xl'>Solve</p>
            </div>
        </NavLink>
                      <div className='bg-gray-100/15 rounded-md w-[320px] h-[45px] text-center text-white  flex items-center justify-around'>
                        <div className='flex items-center'>
                          
                        <div className='pr-4'><FiSearch /></div>
                           <input placeholder='Search any keywords' className=' outline-none bg-transparent placeholder:text-white placeholder:text-sm focus:placeholder:text-transparent'/>
                        </div>
                        <BsMic className=''/>
                      </div>
                      
                  </div>
    </div>
  )
}
