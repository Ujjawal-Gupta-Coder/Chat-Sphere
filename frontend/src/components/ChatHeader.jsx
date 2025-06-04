import React from 'react'
import messagesStore from "../store/messagesStore"
import avatar from "../assets/avatar.png"
import { X } from 'lucide-react';
import socketStore from '../store/socketStore';

const ChatHeader = () => {
    const {selectedContact, setSelectedContactToNull} = messagesStore();
    const {onlineUsers} = socketStore();
 const handleCloseChatBox = () => {
  setSelectedContactToNull();
 }

  return (
    <div className='flex justify-between h-[60px] items-center p-2 lg:px-6 '>
      <div className='flex items-center gap-2'>
        <div className='relative'>
          <img src={selectedContact.profilePicture || avatar} alt="Profile Picture" className='h-[50px] w-[50px] rounded-full overflow-hidden border-1 ' />
          {onlineUsers.includes(selectedContact._id) && <div className='absolute bg-green-500 h-[12px] w-[12px] rounded-full right-0.5 bottom-0'></div>}
        </div>
        <div>
          <div className='font-bold text-lg'>{selectedContact.fullName}</div>
          <div className='text-sm'>{onlineUsers.includes(selectedContact._id) ? "Online" : "Offline"}</div>
        </div>
      </div>

      <button onClick={handleCloseChatBox} title='close' className='cursor-pointer' > <X/> </button>
    </div>
  )
}

export default ChatHeader
