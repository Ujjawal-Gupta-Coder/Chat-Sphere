import React from 'react'
import avatar from '../assets/avatar.png'
import messagesStore from '../store/messagesStore';
const ContactSlipMobile = ({id, name, profilePicture, isSelected, isOnline}) => {
  const {setSelectedContact, setSearchInput} = messagesStore();

  const handleSelectedContact = (e) => {
    setSelectedContact(e.currentTarget.dataset.name);
    setSearchInput("");
  }
  return (
    <button onClick={handleSelectedContact} data-name={id} className={`min-w-[65px] max-w-[65px] flex flex-col items-center cursor-pointer gap-0.5 py-0.5 rounded-lg ${isSelected ? "bg-base-300/80 text-base-content" : ""}`}>
      <div className='relative'>
          <img src={profilePicture || avatar} alt="Profile Picture" className='h-[60px] w-[60px] rounded-full overflow-hidden border-1 ' />
          {isOnline && <div className='absolute bg-green-500 h-[12px] w-[12px] rounded-full right-2 bottom-0'></div>}
      </div>
      <div className='text-center text-[11px] h-[32px] overflow-hidden line-clamp-2'>{ name }</div>
    </button>
  )
}

export default ContactSlipMobile
