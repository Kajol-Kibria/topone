import React, { useRef, useState } from 'react'

import { HiBell } from "react-icons/hi";
import img from '../../public/pro.png'
import img2 from '../../public/parcent.png'
import { IoNotificationsOutline } from "react-icons/io5";


import { RiUserSharedFill } from "react-icons/ri";
import { NavLink } from 'react-router';

import EmojiPicker  from "emoji-picker-react";
import { MdOutlineAttachment } from "react-icons/md";
import { MdDownloadDone } from "react-icons/md";
import { FaRegSmile } from "react-icons/fa";
import { PiPaperPlaneRight} from "react-icons/pi";

import { IoMdArrowDropdownCircle } from "react-icons/io";
import { IoArrowDown } from "react-icons/io5";


export default function AgentSidebar() {

  const [inputStr, setInputStr] = useState("");
  const [showPicker, setShowPicker] = useState(false);

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
    
    const notificationArray=[
      {title:'Meeting with Airtel Telecoms',
        subtitle:'Mr Dok tomm',
        time:'09:20AM - 11:30',
      },
      {title:'Meeting with Airtel Telecoms',
        subtitle:'Mr Dok tomm',
        time:'09:20AM - 11:30',
      },
      {title:'Meeting with Airtel Telecoms',
        subtitle:'Mr Dok tomm',
        time:'09:20AM - 11:30',
      },
      {title:'Meeting with Airtel Telecoms',
        subtitle:'Mr Dok tomm',
        time:'09:20AM - 11:30',
      },
    ];

    const [see, setSee] = useState(false);


  return (
    <div className=' p-6 w-[330px] bg-gray-100/10  h-screen absolute top-0 right-0 text-sm'>
        <div className='flex items-center justify-between 2xl:pb-3 pb-4'>
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
            
            <img className='border rounded-full w-14 h-14 p-2 object-cover'  src={img}/>
          </div>
        </div>
        
        <div className=''>
          <h1 className='border-t border-gray-200/60 text-xl py-7 2xl:py-3 font-normal'>Notifications</h1>
          <div className=''>
            {<div className={`${see?'hidden':''}`}>
                  <div className='  py-2  flex items-start gap-5'>
                    <div className='p-2 inline-block rounded-md text-[#71DDB1] bg-[#71DDB1]/15'><HiBell size={23}/></div>
                    <div className='space-y-[3px] pr-0 '>
          
                    <p className='  text-[13px]'>{notificationArray[0].title}</p>
                    <p className='  text-[11px]'>{notificationArray[0].subtitle}</p>
                    <p className='text-[11px] font-thin'>{notificationArray[0].time}</p>
                    </div>
                    
              </div>
                </div>
              
            }
            <div className=' flex justify-center '>
            <button onClick={()=>setSee(true)} className={`${see?'hidden':''} flex items-center  rounded-xl gap-2 bg-[#002062] py-2 my-1 px-6`}>See all<IoArrowDown/></button> 
            </div>
            <div className={`${see?'':'hidden'}`}>
            {notificationArray.map((noti)=>{
              return(
                <div key={noti.title}>
                  <div className=' border-b border-gray-100/40 py-2  flex items-start gap-5'>
                    <div className='p-2 inline-block rounded-md text-[#71DDB1] bg-[#71DDB1]/15'><HiBell size={23}/></div>
                    <div className='space-y-[3px] pr-0 '>
          
                    <p className='  text-[13px]'>{noti.title}</p>
                    <p className='  text-[11px]'>{noti.subtitle}</p>
                    <p className='text-[11px] font-thin'>{noti.time}</p>
                    </div>
                    
              </div>
                </div>
              )
            })}
          </div>
          <div className={`${see?'':'hidden'} flex justify-center`}>
          <button onClick={()=>setSee(false)} className='flex items-center  rounded-xl gap-2 bg-[#002062] py-2 my-5 px-6'>See less<IoArrowDown className='rotate-180'/></button>
          </div>
          </div>
          
          
        </div>
        <div className={`${see?'hidden':''}`}>
        <h1 className='py-7 2xl:py-3 text-xl font-normal'>Send Notification</h1>
        <div className='grid items-center bg-gray-100/10 rounded-md mb-6 2xl:mb-3'>
          <textarea
          className='placeholder:text-[14px] px-4 bg-transparent  w-full resize-none pt-[14px] pb-[50px] text-white outline-none'
          value={inputStr}
          onChange={(e) => setInputStr(e.target.value)}
          placeholder='Start typing.. '  type='text'/>

      <hr className='border-gray-200/40  mx-3'/>
      <div className='text-gray-200 flex items-center justify-around p-2 relative'>
        
        <div className='p-2 bg-gray-100/15 rounded-full'>
        <FaRegSmile
          className="  cursor-pointer "
          onClick={() => setShowPicker((val) => !val)}
          />
        </div>
        <div className='absolute z-50 -ml-20'>
        {showPicker && (
          <EmojiPicker className=' ' pickerStyle={{ width: "100%" }} onEmojiClick={onEmojiClick} />
        )}
        </div>
           <input className='hidden' type='file' onChange={handleFileChange} ref={inputRef} />
           <div onClick={handleFileClick}>
                {file?(
                  <div className='p-2 bg-gray-100/15 rounded-full cursor-pointer'>
                    <MdDownloadDone/>
                    {/* {file[0].name} */}
                  </div> 
                ):(
                <div className='p-2 bg-gray-100/15 rounded-full cursor-pointer'>
                    <MdOutlineAttachment />
                </div>
                )}
              </div> 
              <input type='text' className='w-36 outline-none text-xs px-3 bg-gray-100/15 p-[2px] rounded-md'/>  
              <div className='p-2 bg-gray-900/60 text-white rounded-full cursor-pointer'>
              <PiPaperPlaneRight/>
              </div>
      </div>
    </div>
        </div>
        <div className={`bg-gray-100/5 rounded-md text-center py-4 px-2' ${see?'hidden':''}`}>
        <div className='flex items-end justify-center py-3'>
          <img src={img2}/>
          <p className='absolute text-2xl font-semibold'>86%</p>
        </div>
          <p>You have achieved 86% customer&apos;s satisfaction so far</p>
        </div>
        <div className={`bg-[#002062] rounded-md space-y-4 p-4 mt-6 2xl:mt-3' ${see?'hidden':''}`}>
        <h1 className='text-lg font-normal'>Reports</h1>
        <div className='flex items-center gap-4'>
          <div>
          <div className='relative flex items-center justify-center '>
          <div style={{background: `conic-gradient(#71DDB1 ${3.6*80}deg, #6b6b6b65 10deg )`}} className=' flex items-center justify-center w-12 h-12 rounded-full'>
          </div>
          
          <div className='bg-[#002062] absolute w-10 h-10 rounded-full'></div>
          </div>
          </div>
          <div>
            <p className='text-sm'>Customers Rating</p>
            <p className='text-[#71DDB1]'>80% decrease</p>
          </div>
        </div>
        <div className='flex items-center gap-4'>
          
          <div className='relative flex items-center justify-center '>
          
          <div style={{background: `conic-gradient(#3FBDF1 ${3.6*78}deg, #6b6b6b65 10deg )`}} className=' bg-[#3FBDF1] flex items-center justify-center w-12 h-12 rounded-full'>
          </div>
          <div className='bg-[#002062] absolute w-10 h-10 rounded-full'></div>
          </div>
          <div>
            <p className='text-sm'>Response Rate</p>
            <p className='text-[#3FBDF1]'>78% Increase</p>
          </div>
        </div>
        </div>
    </div>
  )
}
