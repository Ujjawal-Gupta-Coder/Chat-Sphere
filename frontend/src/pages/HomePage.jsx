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
   const Navigate = useNavigate();
  const { selectedContact, getAllContacts } = messagesStore();

  useEffect(() => {
    if(!authUser) {
      Navigate('/signup');
    } 
    else getAllContacts();
  }, []);

  return (
    <div data-theme={theme} className='h-custom flex flex-col lg:flex-row lg:p-8 lg:gap-2'>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />

      
      {/* at last entire home page mein *Coloring* karna hai + for mobile screen chatBox ko full screen per display */}

      <Sidebar />
      {selectedContact ? <Chatbox /> : <NoChatbox />}
      
    </div>
  )
}

export default HomePage
