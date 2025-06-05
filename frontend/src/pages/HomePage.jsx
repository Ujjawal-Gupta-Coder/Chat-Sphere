import { useEffect } from 'react';
import authStore from '../store/authStore';
import { useNavigate } from 'react-router-dom';
import themeStore from '../store/themeStore';
import Sidebar from '../components/Sidebar';
import NoChatbox from '../components/NoChatbox';
import Chatbox from '../components/Chatbox'
import { Toaster } from 'react-hot-toast';
import messagesStore from '../store/messagesStore';

const HomePage = () => {
  const {authUser} = authStore();
  const { theme } = themeStore();
   const navigate = useNavigate();
  const { selectedContact, getAllContacts } = messagesStore();

  useEffect(() => {
    if(!authUser) {
      return navigate('/signup');
    } 
    else getAllContacts();
  }, [authUser]);

  return (
    <div data-theme={theme} className='h-custom flex flex-col lg:flex-row lg:p-8 lg:gap-2'>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />

      <Sidebar />
      {selectedContact ? <Chatbox /> : <NoChatbox />}
      
    </div>
  )
}

export default HomePage
