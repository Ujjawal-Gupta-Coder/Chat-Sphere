import { Users } from 'lucide-react'
import React from 'react'

const ContactStiker = () => {
  return (
    <div className='min-w-[70px] flex flex-col lg:flex-row items-center gap-0.5 lg:gap-2 lg:text-xl lg:px-0.5'>
        <div className='h-[60px] w-[60px] rounded-full overflow-hidden border-1 flex justify-center items-center text-xl'> <Users /> </div>
        <div className='text-center h-[30px] overflow-hidden font-bold'>Contacts</div>
    </div>
  )
}

export default ContactStiker
