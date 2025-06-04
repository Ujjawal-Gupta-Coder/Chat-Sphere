import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import noChatContainerGIF from '../assets/noChatContainer.lottie'
const EmptyChatContainer = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-4'>
      <DotLottieReact src={noChatContainerGIF} loop autoplay className='h-[150px] lg:h-[300px] ' />

      <div className='text-center font-bold text-xl lg:text-3xl'>Be the first to drop a message!</div>
    </div>
  )
}

export default EmptyChatContainer
