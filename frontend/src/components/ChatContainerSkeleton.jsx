import React from 'react'

const ChatContainerSkeleton = ({num}) => {
  return (
    <div className={`chat ${num%2===0?"chat-start":"chat-end"}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <div className='h-[40px] w-[40px] bg-neutral/30'> </div>
        </div>
      </div>
      <div className="chat-header h-[8px] w-[40px] mb-0.5 mx-1 rounded-2xl bg-neutral/30">
      </div>
      <div className="chat-bubble rounded-2xl h-[60px] w-[140px] sm:h-[80px] sm:w-[280px] md:h-[90px] lg:h-[80px]  lg:w-[300px] bg-neutral/30 ">
        
      </div>
    </div>
  )
}

export default ChatContainerSkeleton
