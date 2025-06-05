import React from 'react'

const DateSeprator = ({date}) => {
  return (
    <div className='flex justify-center items-center' >
        <div className='mt-2 bg-base-100 border-1 rounded-md font-bold px-4 py-1 text-[12px] text-center w-fit'>
            {date}
        </div>
    </div>
  )
}

export default DateSeprator
