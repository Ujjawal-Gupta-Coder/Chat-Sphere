import React, { useState } from 'react'
import { Circle, CircleCheckBig } from 'lucide-react';
import Search from './Search';
import ContactSlipMobile from './ContactSlipMobile'
import ContactStiker from './ContactStike'
import ContactSlipDesktop from './ContactSlipDesktop';
import ContactSlipSkeleton from './ContactSlipSkeleton';
import messagesStore from '../store/messagesStore';
import socketStore from '../store/socketStore';

const Sidebar = () => {
  const {allContacts, contactLoading, selectedContact, searchInput} = messagesStore();
  const [onlinefilter, setOnlinefilter] = useState(false);
   const { onlineUsers } = socketStore();

  const getContactToProcess = () => {
      if(!onlinefilter) return allContacts;
      return allContacts.filter((contact) => {
          return onlineUsers.includes(contact._id);
      })
  }
  const contactToProcess = getContactToProcess(); 
 
  let contactsToDisplay = [];

  return (
    <div className='lg:w-[23%] bg-base-300 flex flex-col h-sidebar-desktop lg:border-1 lg:gap-2 lg:rounded-2xl lg:p-4'>
      <div className='flex lg:flex-col items-center lg:items-start justify-between gap-2 p-2'>
        <div className='flex-1 lg:w-full'> <Search /> </div>

        <button className={`flex items-center gap-1 border-1 rounded-lg px-1 h-[40px] cursor-pointer text-start ${onlinefilter?"bg-green-400/60":""}`} onClick={() => setOnlinefilter(!onlinefilter)}> 
          {onlinefilter ? <CircleCheckBig /> : <Circle />}  
          <div className='lg:flex gap-1'> 
            <div className='font-bold text-[11px]'>Show Online only</div> 
            <div className='text-[11px]'>({onlineUsers.length > 0 ? onlineUsers.length-1 : 0} Online)</div>
          </div>
        </button>
      </div>


      {/* Mobile View  */}
      <div className='flex lg:hidden overflow-auto gap-3 px-2 pb-2'>
        <ContactStiker />
        { contactLoading && [1,2,3,4,5].map((e) => <ContactSlipSkeleton key={e} />)  }
        {
          contactsToDisplay = contactToProcess.filter(contact => {
            if(!searchInput) return true
            else return contact.fullName.toLowerCase().startsWith(searchInput.trim().toLowerCase()) 
          }).map((contact) => {
            return <ContactSlipMobile key={contact._id} id={contact._id} name={contact.fullName} profilePicture={contact.profilePicture} isSelected={selectedContact && selectedContact._id === contact._id} isOnline={onlineUsers.includes(contact._id)} />
          })
        }
        {contactsToDisplay.length === 0 && <div className='mt-5'>No results found.</div>}
      </div>


      {/* Desktop View  */}
      <div className='hidden lg:flex flex-col overflow-auto h-full lg:gap-4'>
        <ContactStiker />
        { contactLoading && [1,2,3,4,5,6,7,8].map((e) => <ContactSlipSkeleton key={e} />)  }
        {
          contactsToDisplay = contactToProcess.filter(contact => {
            if(!searchInput) return true
            else return contact.fullName.toLowerCase().startsWith(searchInput.trim().toLowerCase()) 
          }).map((contact) => {
            return <ContactSlipDesktop key={contact._id} id={contact._id} name={contact.fullName} profilePicture={contact.profilePicture} isSelected={selectedContact && selectedContact._id === contact._id} isOnline={onlineUsers.includes(contact._id)} />
          })
        }
        {contactsToDisplay.length === 0 && <div className='text-center'>No results found.</div>}
      </div>

    </div>
  )
}

export default Sidebar


