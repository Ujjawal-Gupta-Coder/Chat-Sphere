import React from 'react'
import ChatHeader from './ChatHeader'
import ChatContainer from './ChatContainer'
import ChatInput from './ChatInput'

const Chatbox = () => {
  return (
    <div className='flex-1 h-chatbox bg-base-300 flex flex-col lg:border-1 lg:rounded-2xl lg:pt-2'>
      <ChatHeader />
      <ChatContainer />
      <ChatInput />
    </div>
  )
}

export default Chatbox

