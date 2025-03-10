import React, { useRef, useState } from 'react'
import { IoNotificationsOutline } from "react-icons/io5";


import { RiUserSharedFill } from "react-icons/ri";
import AgentTopbar from './AgentTopbar';
import img from '../../public/mtnlogo.png'
import { NavLink } from 'react-router';
import { FiSearch } from "react-icons/fi";
import { BsMic } from "react-icons/bs";

import { IoIosArrowBack } from "react-icons/io";
import { LuPhone } from "react-icons/lu";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { HiArrowTrendingUp } from "react-icons/hi2";

import EmojiPicker  from "emoji-picker-react";
import { FaRegSmile } from "react-icons/fa";
import { PiPaperPlaneRight} from "react-icons/pi";

import { MdOutlineAttachment } from "react-icons/md";
import { MdDownloadDone } from "react-icons/md";

import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker'; 
import { LuListFilter } from "react-icons/lu";
import TicketListTable from './TicketListTable';
import { getTicketdata, getticketLength } from './ticketdata';
import Pagination from './Pagination';
export default function Tickets() {
  const [inputStr, setInputStr] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  const [show, setShow] = useState(false);
  
    const onEmojiClick = (event) => {
      setInputStr((prevInput) => prevInput + event.emoji);
      console.log(event.emoji);
      setShowPicker(false);
    };
    
  
    const inputRef = useRef(null);
      const [file, setFile] = useState('');
  
      const handleFileClick= () =>{
        inputRef.current.click();
      }
  
      const handleFileChange= (event) =>{
        const files = event.target.files;
        console.log(files);
        
        setFile(files)
      }


      const [ticketpage, setticketpage] = useState(1);
    const [ticketlimit, setticketlimit] = useState(6);

    let totalticketpage = Math.ceil(getticketLength()/ticketlimit);
    
    
     
        function handleticketpageChange(value){
          if (value === 'Previous') {
            if (ticketpage !== 1) {
              setticketpage(ticketpage - 1);
            }
          } else if (value === 'Next') {
            if (ticketpage !== totalticketpage) {
              setticketpage(ticketpage + 1);
            }
          }
          
        }


  return (
    <div className='text-white bg-[#000E28] '>
      

      
      {/* body */}
      <div className='  justify-between'>

      <div className='w-[74vw] text-sm px-8'>
      <div className='2xl:ml-24 flex items-center justify-between my-[25px] '>
              <NavLink to='/'>
      
              <div className='flex items-center '>
      
                      <img className=' w-16' src='/logo1.png'/>
                      <p className=' font-bold text-white  text-3xl'>Solve</p>
                  </div>
              </NavLink>
                            <div className='bg-gray-100/15 rounded-md w-[320px]  h-[45px] text-center text-white  flex items-center justify-around'>
                              <div className='flex items-center'>
                                
                              <div className='pr-4'><FiSearch /></div>
                                 <input placeholder='Search any keywords' className=' outline-none bg-transparent placeholder:text-white placeholder:text-sm focus:placeholder:text-transparent '/>
                              </div>
                              <BsMic className=''/>
                            </div>
                            
                        </div>
        <div className='bg-gray-100/10 rounded-md py-3 px-6 2xl:px-14 2xl:pt-10 2xl:ml-24 '>
          <p className='mb-3'>CX Report for MTN Nigeria</p>
          <div className='flex justify-between items-center mb-4'>
            <div className='flex items-center gap-5'>
              <div className='bg-[#D05147] px-6 py-2 rounded-full'><HiArrowTrendingUp size={20}/></div>
              <div>
                <p className='text-gray-300'>CSAT</p>
                <p className='font-semibold'>92%</p>
              </div>
            </div>
            <div >
              <p className='mb-1'>From</p>
              <div  className='h-9 w-40 2xl:w-60 overflow-hidden flex items-center justify-center  bg-white rounded-lg'>
              <LocalizationProvider  dateAdapter={AdapterDayjs}>
      
        <DatePicker />
      
    </LocalizationProvider>
              </div>
              
            </div>
            <div>
              <p className='mb-1'>To</p>
              <div  className='h-9 w-40 2xl:w-60 overflow-hidden flex items-center justify-center  bg-white rounded-lg'>
              <LocalizationProvider  dateAdapter={AdapterDayjs}>
      
        <DatePicker />
      
    </LocalizationProvider>
              </div>
            </div>
            <div>
            
              <button className='mr-5 mt-5 content-center h-9 px-6 2xl:px-12 bg-blue-400/30 rounded-lg'>Download Report</button>
            </div>
          </div>
        </div>
        <div>
           <div className='text-sm flex my-[12px]  justify-between 2xl:ml-24 '>
                      
                      <div className='flex items-center gap-4 box'>
                          
                          <div className='text-sm flex items-center justify-center gap-2 bg-gray-100/15 w-[98px] h-[40px] rounded-md border-gray-200/70 border'>
                            <LuListFilter size={18}/>
                            <p>Filters</p>
                          </div>
                          <p>1 row selected</p>
                          
                          
                    
                      </div>
                      <div className='bg-gray-100/15 rounded-md w-[320px] h-[45px] text-center text-white  flex items-center'>
                          <div className='px-4'><FiSearch /></div>
                          <input placeholder='Search any keywords' className=' outline-none bg-transparent placeholder:text-white focus:placeholder:text-transparent'/>                     
                       </div>
                  </div>
        </div>
        <div className='2xl:ml-24 '>
          <TicketListTable ticketdata={getTicketdata(ticketpage, ticketlimit)}/>
           <Pagination currentPage={ticketpage} totalPage = {totalticketpage} onPageChange={handleticketpageChange}/>
        </div>
      </div>
      
      {/* sidechat */}
      
      <div className={`text-[11px]   fixed right-0 bottom-0 top-0 w-3/12  overflow-auto `}>
      <div className='flex h-[103px] px-5 items-center justify-between 2xl:pb-3 pb-1'>
                <div>
                <IoNotificationsOutline onClick={()=>setSee(!see)} className='text-gray-300 cursor-pointer' size={28}/>               
                </div>
                <div className='flex items-center gap-4'>
                  <NavLink to='/'>
      
                    <div className='text-gray-300 flex items-center gap-3'>
                      <RiUserSharedFill  size={26} className=''/>
                      <p className={``}>Log out</p>
                    </div>
                  </NavLink>
                  
                  <img className=' rounded-full w-14 h-14 object-cover'  src={img}/>
                </div>
              </div>
        <div className='bg-gray-100/10 rounded-t-lg pl-3 pr-5 py-5 '>
        <p className='text-[#F6D360] font-medium ml-7'>T-3845</p> 
        <div className='flex items-center justify-between py-2'>
          <div>

          <div className='flex items-center gap-2'>
            <IoIosArrowBack size={17}/> 
            <img className=' rounded-full w-8 h-8 object-cover'  src={img}/>
            <div>
              <p>MTN Nigeria</p>
              <p className='text-gray-300 text-[9px]'>2345 online</p>
            </div>
          </div>
          </div>
          <div ><LuPhone size={14}/></div>
        </div>
        </div>
        <div className=' bgimg h-[calc(100vh-209px)]   bg-gray-100/10 px-4'>
        <div className='absolute bottom-20 h-[calc(100vh-309px)] overflow-auto w-[calc(100%-18px)]'>
              
        {/* put your chats  hare      
        put your chat  hare      
        put your chat  hare      
        put your chat  hare      
        put your chat  hare       */}
              <div className='max-w-[calc(100%-18px)]  overflow-x-hidden space-y-5 overflow-y-auto w-full bottom-0'>
                

              <div className=' w-2/3  float-right '>
              <div className='flex gap-4 my-4'>
                  <div className='bg-white text-black font-medium py-3 px-5 rounded-b-lg rounded-tr-lg rounded-tl-sm '>
                  <p>Good evening, Richard.</p>
                  <p>Sorry to learn of your expirence. Can you please provide your phone number??</p>
                  </div>
                <img className=' rounded-full w-8 h-8 object-cover'  src={img}/>
                </div>
              </div>
              <div className='text-green-600 w-full  flex items-center justify-center'>
              <p className='w-[80%] rounded-full  bg-green-300/20 text-center'>
              Robbie has started conversation
              </p></div>
              <div className=' w-2/3  float-right '>
              <div className='flex gap-4 my-4'>
                  <div className='bg-white text-black font-medium py-3 px-5 rounded-b-lg rounded-tr-lg rounded-tl-sm '>
                  <p>Good evening, Richard.</p>
                  <p>Sorry to learn of your expirence. Can you please provide your phone number??</p>
                  </div>
                <img className=' rounded-full w-8 h-8 object-cover'  src={img}/>
                </div>
              </div>
              <div className=' w-2/3  float-right '>
              <div className='flex gap-4 my-4'>
                  <div className='bg-white text-black font-medium py-3 px-5 rounded-b-lg rounded-tr-lg rounded-tl-sm '>
                  <p>Good evening, Richard.</p>
                  <p>Sorry to learn of your expirence. Can you please provide your phone number??</p>
                  </div>
                <img className=' rounded-full w-8 h-8 object-cover'  src={img}/>
                </div>
              </div>
                
              <div className=' w-2/3 float-left'>
              <div className='flex gap-4 my-4'>
                <img className=' rounded-full w-8 h-8 object-cover'  src={img}/>
                  <div className='bg-white text-black font-medium py-3 px-5 rounded-b-lg rounded-tr-lg rounded-tl-sm '>
                  <p>Good evening, Richard.</p>
                  <p>Sorry to learn of your expirence. Can you please provide your phone number??</p>
                  </div>
                </div>
              </div>
              <div className=' w-2/3 float-right'>
              <div className='flex gap-4 my-4'>
                  <div className='bg-white text-black font-medium py-3 px-5 rounded-b-lg rounded-tr-lg rounded-tl-sm '>
                  <p>Good evening, Richard.</p>
                  <p>Sorry to learn of your expirence. Can you please provide your phone number??</p>
                  </div>
                <img className=' rounded-full w-8 h-8 object-cover'  src={img}/>
                </div>
              </div>
              
             
            
                
                

              </div>
              </div> 
          {/* writing area */}
          <div className='grid items-center absolute bottom-0 right-3 left-3 rounded-md mb-3'>
        <div className=' z-50 '>
                  {showPicker && (
                    <EmojiPicker className=' ' pickerStyle={{ width: "100%" }} onEmojiClick={onEmojiClick} />
                  )}
                  </div>
                    
          <div className='flex items-center gap-3 '>
                
                <div className='text-gray-200 w-full py-3 bg-[#000E28] rounded-full flex items-center justify-around p-2 relative'>
                  
                  <div className=' px-2 rounded-full'>
                  <FaRegSmile
                  size={18}
                    className="text-slate-500  cursor-pointer "
                    onClick={() => setShowPicker((val) => !val)}
                    />
                  </div>
                  
                  <input
                    className='w-full px-2 bg-transparent text-white outline-none'
                    value={inputStr}
                    onChange={(e) => setInputStr(e.target.value)}
                    placeholder='Start typing.. '  type='text'/> 
                     <input className='hidden' type='file' onChange={handleFileChange} ref={inputRef} />
                     <div className='flex items-center gap-4 px-2'>

                     <div onClick={handleFileClick}>
                          {file?(
                            <div className=' text-slate-500 rounded-full cursor-pointer'>
                              <MdDownloadDone size={20}/>
                            </div> 
                          ):(
                          <div className=' text-slate-500 rounded-full cursor-pointer'>
                              <MdOutlineAttachment  size={20}/>
                          </div>
                          )}
                        </div> 
                        
                        
                        <BsMic className='text-slate-400 cursor-pointer' size={14}/>
                     </div>
                </div>
                        <div className='p-3 bg-[#000E28] cursor-pointer rounded-full'>
                        <PiPaperPlaneRight size={16}/>
                        </div>
                        </div>
              </div>


                           
        </div>
        
       
      </div>
      </div>
    </div>
  )
}
