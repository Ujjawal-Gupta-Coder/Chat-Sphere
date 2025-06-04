import React from 'react'
import chatGif from '../assets/chat.gif'
const NoChatbox = () => {
  return (

    <div className='flex items-center justify-center flex-col gap-4 pb-4 px-4 relative flex-1 lg:border-1 lg:rounded-2xl'>
        <img src={chatGif} alt="ChatSphere Logo" className='rounded-full h-[150px]' />
        <div className='font-bold text-3xl serif text-center'>Welcome to ChatSphere!</div>
        <div className='roboto w-[60%] text-center text-lg'>To begin chatting, please choose a contact from the list.</div>
    </div>
  )
}

export default NoChatbox
