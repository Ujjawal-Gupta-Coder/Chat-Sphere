import React from 'react'
import avatar from '../assets/avatar.png'
import messagesStore from '../store/messagesStore'
const ContactSlipDesktop = ({id, name, profilePicture, isSelected, isOnline}) => {
  const {setSelectedContact, setSearchInput} = messagesStore();

  const handleSelectedContact = (e) => {
    setSelectedContact(e.currentTarget.dataset.name);
    setSearchInput("");
  }
  return (
    <button onClick={handleSelectedContact} data-name={id} className={`flex items-center gap-2 relative cursor-pointer rounded-lg py-0.5 pl-0.5 mr-2 ${isSelected ? "bg-base-100 text-base-content" : ""} `}>
      <div className='relative'>
          <img src={profilePicture || avatar} alt="Profile Picture" className='h-[65px] w-[65px] rounded-full border-1' />
          {isOnline && <div className='absolute h-[12px] w-[12px] rounded-full bg-green-500 right-1 bottom-1'></div>}
      </div>
        
      <div className='flex flex-col items-start'>
          <div className='text-md font-bold text-start'>{name}</div>
          <div className='text-md'>{isOnline ? "Online" : "Offline"}</div>
      </div> 
    </button>
  )
}

export default ContactSlipDesktop
