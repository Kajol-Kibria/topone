import React, { useState } from 'react'
import List from './List'
import { getLength, getUsers } from './data'

import { IoClose } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdFace } from "react-icons/md";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { MdAccessTimeFilled } from "react-icons/md";
import { GiSwapBag } from "react-icons/gi";
import Pagination from './Pagination';
import AgentTopbar from './AgentTopbar';
import AgentSidebar from './AgentSidebar';




export default function SuperAgent() {

    
        
        const [limit, setLimit] = useState(6);
        const [page, setPage] = useState(1);
         let totalPage = Math.ceil(getLength()/limit);
        function handlePageChange(value){
            if (value === 'Previous') {
              if (page !== 1) {
                setPage(page - 1);
              }
            } else if (value === 'Next') {
              if (page !== totalPage) {
                setPage(page + 1);
              }
            }
            
          }

          const [show, setShow]= useState(false);
          const [multipleShow, setMultipleShow]= useState(false);
          const [invitationSent, setInvitationSent]= useState(false);

  return (
    <div className='text-white bg-[#002062] '>

      {/* add new popup */}
      <div className={`${show?'':'hidden'} bg-[#002062] rounded-2xl shadow-xl  w-[70vw] h-[50vh] 2xl:w-[48vw] 2xl:h-[58vh] m-auto px-20 py-16 z-50 fixed top-0 bottom-0 left-0 right-0`}>
        <div>
          <div className='mb-10 flex items-center justify-between'>
            <p className='text-2xl font-semibold'>Invite Responders</p>
            <IoClose onClick={()=>setShow(false)} className=' cursor-pointer' size={25}/>
          </div>
          <div className='flex  justify-between text-gray-300 '>
            <div className='space-y-5'>
              <h1>Email</h1>
              <input className='placeholder:text-gray-300 w-[330px] h-[35px] bg-gray-200/15 outline-none rounded-md py-2 px-5' />
              <input className=' placeholder:text-gray-300 w-[330px] h-[35px] bg-gray-200/15 outline-none rounded-md py-2 px-5'/>
              <input className=' placeholder:text-gray-300 w-[330px] h-[35px] bg-gray-200/15 outline-none rounded-md py-2 px-5'/>
              <div className='text-sm py-4'>
                
                <button className='font-medium underline'><AiOutlinePlus size={16} className='rounded-[4px] inline mr-2 bg-white text-[#002062]'/>Add new</button>
                <span className='text-gray-300'> OR </span>
                <button  onClick={()=>{setMultipleShow(true); setShow(false)}} className='font-medium underline'>Add multiple at once</button>
              </div>
            </div>
            <div className='space-y-5'>
            <h1>Name (Optional)</h1>
              <div className='flex items-center gap-8'>
              <input className='placeholder:text-gray-300 w-[330px] h-[35px] bg-gray-200/15 outline-none rounded-md py-2 px-5'/>
              <IoClose  className=' cursor-pointer' size={18}/>
              </div>
              <div className='flex items-center gap-8'>
              <input className='placeholder:text-gray-300 w-[330px] h-[35px] bg-gray-200/15 outline-none rounded-md py-2 px-5'/>
              <IoClose  className=' cursor-pointer' size={18}/>
              </div>
              <div className='flex items-center gap-8'>
              <input className='placeholder:text-gray-300 w-[330px] h-[35px] bg-gray-200/15 outline-none rounded-md py-2 px-5'/>
              <IoClose className=' cursor-pointer' size={18}/>
              </div>
              
          <div className='  w-[330px] flex justify-end absolute bottom-16 right-20'>
          <button onClick={()=>setInvitationSent(true)} className='w-[212px] h-[38px] text-xs bg-[#0E45B7] px-14  py-2 rounded-lg'>Send Invitation</button>
          </div>
              </div> 
          </div>
        </div>
    </div>
      {/* add multiple popup */}
      <div className={`${multipleShow?'':'hidden'} bg-[#002062] rounded-2xl shadow-xl  w-[70vw] h-[50vh] 2xl:w-[48vw] 2xl:h-[58vh] m-auto px-20 py-16 z-50 fixed top-0 bottom-0 left-0 right-0`}>
        <div className=''>
          <div className='mb-10 flex items-center justify-between'>
            <p className='text-2xl font-semibold'>Invite Responders</p>
            <IoClose onClick={()=>setMultipleShow(false)} className=' cursor-pointer' size={25}/>
          </div>
          <div className='flex  justify-between text-gray-300 '>
            <div className='space-y-5  w-full'>
              <h1>Email</h1>
              <textarea className='resize-none placeholder:text-gray-300 w-full h-[116px] bg-gray-200/15 outline-none rounded-md py-2 px-5' />
              <div className='text-sm py-4'>
                
                <button onClick={()=>{setMultipleShow(false); setShow(true)}} className='font-medium underline'><AiOutlinePlus size={16} className='rounded-[4px] inline mr-2 bg-white text-[#002062]'/>Add new</button>
                <span className='text-gray-300'> OR </span>
                <button className='font-medium underline'>Add multiple at once</button>
              </div>
            </div>
            
          </div>
          <div className=' flex justify-end absolute bottom-16 right-20'>

          <button onClick={()=>setInvitationSent(true)} className='text-gray-300 w-[212px] h-[38px] text-xs bg-[#0E45B7] px-14  py-2 rounded-lg'>Send Invitation</button>
          </div>
        </div>
    </div>

      {/* iNVITATION SENT */}
      <div className={`${invitationSent?'':'hidden'} bg-[#002062] rounded-2xl shadow-xl  w-[70vw] h-[50vh] 2xl:w-[48vw] 2xl:h-[58vh] m-auto px-20 py-16 z-50 fixed top-0 bottom-0 left-0 right-0`}>
        <div className='w-[240px] h-full content-center mx-auto text-center'>
          <p className='text-lg font-medium mb-2'>Invited 106 Responders</p>
          <p className='text-sm mx-6 text-gray-300'>Your inivitation have been sent successfully</p>
          <button onClick={()=>{setInvitationSent(false); setShow(false); setMultipleShow(false)}} className='mt-10 text-gray-300 w-[212px] h-[38px] text-xs bg-[#0E45B7] px-14  py-2 rounded-lg'>Done</button>       
        </div>
      </div>



        <AgentTopbar/>
        <div className='mr-[350px] xl:ml-10 2xl:ml-24'>
        <div>
        <div className='bg-gray-100/10 rounded-xl w-full mb-3 '>
        <p className='px-6 py-3'>MTN Nigeria</p>
        
        
          <div className='pb-5 flex mx-1  items-center justify-around'>
            <div className=' flex items-center justify-between gap-4 2xl:gap-8 h-[100px] bg-gray-100/15 rounded-xl'>
                    <div className='2xl:ml-6 ml-3 w-[5vw] h-[47px] flex items-center justify-center rounded-full  bg-[#3FBDF1]'><MdFace size={25}/></div>
                    <div className='w-[9vw] space-y-1'>
                    <p className='text-gray-200'>Responders</p>
                    <p className='font-bold 2xl:text-3xl text-2xl'>3478</p>
                    </div>
            </div>
            <div className='flex items-center justify-between gap-4 2xl:gap-8 h-[100px] bg-gray-100/15 rounded-xl'>
                    <div className='2xl:ml-6 ml-3 w-[5vw] h-[47px] flex items-center justify-center rounded-full  bg-[#1A4FBA]'><BsFillQuestionCircleFill size={25}/></div>
                    <div className='w-[9vw] space-y-1'>
                    <p className='text-gray-200'>Queries</p>
                    <p className='font-bold 2xl:text-3xl text-2xl'>18M</p>
                    </div>
            </div>
            <div className='flex items-center justify-between gap-4 2xl:gap-8 h-[100px] bg-gray-100/15 rounded-xl'>
                    <div className='2xl:ml-6 ml-3 w-[5vw] h-[47px] flex items-center justify-center rounded-full  bg-[#71DDB1]'><MdAccessTimeFilled size={25}/></div>
                    <div className='w-[9vw] space-y-1'>
                    <p className='text-gray-200'>ART</p>
                    <p className='font-bold 2xl:text-3xl text-2xl'>$560K</p>
                    </div>
            </div>
            <div className='flex items-center justify-between gap-4 2xl:gap-8 h-[100px] bg-gray-100/15 rounded-xl'>
                    <div className='2xl:ml-6 ml-3 w-[5vw] h-[47px] flex items-center justify-center rounded-full  bg-[#3FBDF1]'><GiSwapBag size={25}/></div>
                    <div className='w-[9vw] space-y-1'>
                    <p className='text-gray-200'>Total Earning</p>
                    <p className='font-bold 2xl:text-3xl text-2xl'>56.8M <span className='text-xs font-thin'>NGN</span></p>
                    </div>
            </div>
            
          </div>
        </div>
        </div>
        <div className='flex mb-[12px] justify-between'>
                    
                    <div className='flex items-center gap-4 box'>
                        
                        filter
                        
                        
                        <button onClick={()=>setShow(!show)} className={` flex items-center justify-center gap-2 w-[180px] h-[45px] pr-2 rounded-lg  bg-gray-100/5  border-transparent `}><AiOutlinePlus size={20}/>Responder</button>
                  
                    </div>
                    <div className='bg-gray-100/15 border border-gray-400/60 rounded-lg w-[320px] h-[45px] text-center text-white  flex items-center'>
                        <div className='px-4'><FiSearch /></div>
                        <input placeholder='Search' className=' outline-none bg-transparent placeholder:text-white focus:placeholder:text-transparent'/>                     
                     </div>
                </div>
                <List  users={getUsers(page, limit)}/>
                <Pagination currentPage={page} totalPage = {totalPage} onPageChange={handlePageChange}/>
            </div>
            <AgentSidebar/>
    </div>
  )
}

