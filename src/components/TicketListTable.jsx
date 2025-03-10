
import React from 'react'
import { FaArrowDown } from "react-icons/fa6";
import { FaRegTrashAlt } from "react-icons/fa";
import { LuPen } from "react-icons/lu";


export default function TicketListTable(props) {

   
  return (
    <div>
        <div className='text-sm bg-gray-100/10 min-h-[50vh] border border-gray-200/40 rounded-t-xl  overflow-auto example'>
        <table className="w-full">
            <thead>
                <tr className='text-gray-200   border-gray-200/40'>
                <th className="form-control">
                <label className="label cursor-pointer">
                    <input type="checkbox"  className=" checkbox-sm m-3 checkbox checkbox-primary border border-gray-200/70" />
                </label>
                </th>       
                    <th className="font-normal"><h1 className='flex items-center gap-3'>Ticked ID<FaArrowDown className='text-gray-400'/></h1></th>
                    <th className=" font-normal"><h1 className='flex items-center gap-3'>Date<FaArrowDown className='text-gray-400'/></h1></th>
                    <th className=" font-normal"><h1 className='flex items-center gap-3'>Responder<FaArrowDown className='text-gray-400'/></h1></th>
                    <th className=" font-normal"><h1 className='flex items-center gap-3'>Response Time<FaArrowDown className='text-gray-400'/></h1></th>
                    <th className=" font-normal"><h1 className='flex items-center gap-3'>Customer Rating<FaArrowDown className='text-gray-400'/></h1></th>
                    
                </tr>
            </thead>
            <tbody>
                {props.ticketdata.map(data=>(

                <tr className='border-t border-gray-200/40' key={data.TicketID}>
                    <td className="form-control py-2 2xl:py-1">
                    <label  className="label cursor-pointer">
                        <input type="checkbox"   className=" checkbox-sm m-3 checkbox checkbox-primary border border-gray-200/70" />
                    </label>
                    </td>
                    <td>
                        <div className=' flex w-[232px]  mr-2  items-center py-2 2xl:py-1 gap-4'>
                            
                            <div>
                                <h1 className='font-semibold'>{}</h1><h1 className=''>{data.TicketID}</h1>
                                <p className='text-[10px] text-gray-300 pr-10'>Money Worngly debited from account</p>
                                </div>
                        </div>
                    </td>
                    <td>{data.Date}</td>
                    <td>{data.Responder}</td>
                    <td>{data.Responsetime}</td>
                    <td>{data.CustomerRating}</td>
                    
                </tr>
                ))}
            </tbody>
           </table>
                

            
        </div>
    </div>
  )
}