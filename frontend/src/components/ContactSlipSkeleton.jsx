import React from 'react'

const ContactSlipSkeleton = () => {
  return (
    <div className='min-w-[65px] flex flex-col lg:flex-row items-center gap-2 lg:gap-4'>
        <div className='relative'>
            <div className='h-[60px] w-[60px] rounded-full overflow-hidden bg-neutral/30' />
        </div>
        <div className='text-center text-[11px] h-[15px] lg:h-[20px] w-[60px] lg:w-[50%] rounded-[5px] bg-neutral/30 overflow-hidden'></div>
    </div>
  )
}

export default ContactSlipSkeleton
