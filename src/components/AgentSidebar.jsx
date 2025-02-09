import React, { useState } from 'react'

import { HiBell } from "react-icons/hi";
import img from '../../public/pro.png'
import img2 from '../../public/parcent.png'
import { IoNotificationsOutline } from "react-icons/io5";


import { RiUserSharedFill } from "react-icons/ri";
import { NavLink } from 'react-router';

import EmojiPicker  from "emoji-picker-react";

export default function AgentSidebar() {

  const [inputStr, setInputStr] = useState("");
  const [showPicker, setShowPicker] = useState(false);

  const onEmojiClick = (event, emojiObject) => {
    setInputStr((prevInput) => prevInput + emojiObject.emoji);
    setShowPicker(false);
  };

  
 

  return (
    <div className=' p-6 w-[330px] bg-gray-100/10  h-screen absolute top-0 right-0 text-sm'>
        <div className='flex items-center justify-between 2xl:pb-3 pb-4'>
          <div>
          <IoNotificationsOutline className='text-gray-300' size={28}/>               
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
          <div className='border-b border-gray-100/40 pb-4  flex items-start gap-5'>
                    <div className='p-2 inline-block rounded-md text-[#71DDB1] bg-[#71DDB1]/15'><HiBell size={23}/></div>
                    <div className='space-y-[3px] pr-0 '>
          
                    <p className='  text-[13px]'>Meeting with Airtel Telecoms</p>
                    <p className='  text-[11px]'>Mr Dok tomm</p>
                    <p className='text-[11px] font-thin'>09:20AM - 11:30</p>
                    </div>
                    
              </div>
          <div className='py-4 border-b border-gray-100/40 flex items-start gap-5'>
                    <div className='p-2 inline-block rounded-md text-[#1A4FBA] bg-black/10'><HiBell size={23}/></div>
                    <div className='space-y-[3px] pr-0 '>
          
                    <p className='  text-[13px]'>Watchout for Flour Mills Perform...</p>
                    <p className='  text-[11px]'>07:00AM <span className='mx-3 text-[#FFAD47]'>Due Soon</span></p>
                    
                    </div>
                    
              </div>
        </div>
        <div>
        <h1 className='py-7 2xl:py-3 text-xl font-normal'>Send Notification</h1>
        <div className="app">
      <div className="picker-container">
        <input
          className="input-style"
          value={inputStr}
          onChange={(e) => setInputStr(e.target.value)}
        />
        <img
          className="emoji-icon"
          src="https://icons.getbootstrap.com/assets/icons/emoji-smile.svg"
          onClick={() => setShowPicker((val) => !val)}
        />
        {showPicker && (
          <EmojiPicker  pickerStyle={{ width: "100%" }} onEmojiClick={onEmojiClick} />
        )}
      </div>
    </div>
        <input placeholder='Start typing.. ' className='mb-6 2xl:mb-3  placeholder:text-[14px] outline-none px-4 bg-gray-100/10 pt-[18px] pb-[105px]  rounded-md w-full' type='text'/>
        </div>
        <div className='bg-gray-100/5 rounded-md text-center py-4 px-2'>
        <div className='flex items-end justify-center py-3'>
          <img src={img2}/>
          <p className='absolute text-2xl font-semibold'>86%</p>
        </div>
          <p>You have achieved 86% customer&apos;s satisfaction so far</p>
        </div>
        <div className='bg-[#002062] rounded-md space-y-4 p-4 mt-6 2xl:mt-3'>
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
