import React from 'react'
import avatar from '../assets/avatar.png'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import typingAnimation from '../assets/typingAnimation.lottie';

const ChatBubble = ({isSender, profilePicture, time, textMessage, imageMessage, isTyping}) => {
  return (
    <div className={`chat ${isSender ? "chat-end" : "chat-start"}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Profile Picture"
            src={profilePicture || avatar}
          />
        </div>
      </div>
      <div className="chat-header">
        <time className="text-xs opacity-50">{time}</time>
      </div>
      <div className={`chat-bubble rounded-2xl whitespace-pre-wrap ${isSender ? "bg-primary text-primary-content" : "bg-secondary text-secondary-content"}`}> 
       {imageMessage && <img src={imageMessage} alt="Image" className='h-[250px] lg:h-[300px] w-auto rounded-2xl' />}
        {textMessage} 
        {isTyping && <DotLottieReact src={typingAnimation} loop autoplay className='h-[35px] w-[85px]' />} 
      </div>
    </div>
  )
}

export default ChatBubble
