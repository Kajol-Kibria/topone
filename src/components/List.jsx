import React from 'react'
import { FaArrowDown } from "react-icons/fa6";
import { FaRegTrashAlt } from "react-icons/fa";
import { LuPen } from "react-icons/lu";


export default function List(props) {

   
  return (
    <div>
        <div className='text-sm bg-gray-100/10 h-[55vh] border border-gray-200/40 rounded-t-xl  overflow-auto example'>
        <table className="w-full">
            <thead>
                <tr className='text-gray-200   border-gray-200/40'>
                <th className="form-control">
                <label className="label cursor-pointer">
                    <input type="checkbox"  className=" checkbox-sm m-3 checkbox checkbox-primary border border-gray-200/70" />
                </label>
                </th>       
                    <th className="font-normal"><h1 className='flex items-center gap-3'>Name<FaArrowDown className='text-gray-400'/></h1></th>
                    <th className=" font-normal"><h1 className='flex items-center gap-3'>Queries Completed<FaArrowDown className='text-gray-400'/></h1></th>
                    <th className=" font-normal"><h1 className='flex items-center gap-3'>Avg Response Time<FaArrowDown className='text-gray-400'/></h1></th>
                    <th className=" font-normal"><h1 className='flex items-center gap-3'>Last Seen<FaArrowDown className='text-gray-400'/></h1></th>
                    <th className=" font-normal"><h1 className='flex items-center gap-3'>Amount Earned<FaArrowDown className='text-gray-400'/></h1></th>
                    <th className=" font-normal"><h1 className='flex items-center gap-3'></h1></th>
                    
                </tr>
            </thead>
            <tbody>
                {props.users.map(user=>(

                <tr className='border-t border-gray-200/40' key={user.queries}>
                    <td className="form-control py-2 2xl:py-1">
                    <label  className="label cursor-pointer">
                        <input value={user} type="checkbox"   className=" checkbox-sm m-3 checkbox checkbox-primary border border-gray-200/70" />
                    </label>
                    </td>
                    <td>
                        <div className=' flex w-[232px]  mr-2  items-center py-2 2xl:py-1 gap-4'>
                            <img className='w-10 rounded-full' src={user.img}/>
                            <div><h1 className='font-semibold'>{user.name}</h1><h1 className='text-gray-300'>{user.email}</h1></div>
                        </div>
                    </td>
                    <td>{user.queries}</td>
                    <td>{user.avgresponsetime}</td>
                    <td>{user.lastseen}</td>
                    <td>{user.amount}</td>
                    <td>
                        <div className='flex items-center gap-4 2xl:gap-10 -ml-10 2xl:-ml-0 text-gray-400 '>
                            <FaRegTrashAlt size={16} className='cursor-pointer'/>
                            <LuPen size={18} className='cursor-pointer'/>
                        </div>
                    </td>
                </tr>
                ))}
            </tbody>
           </table>
                

            
        </div>
    </div>
  )
}
