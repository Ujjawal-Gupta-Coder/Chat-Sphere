import authStore from '../store/authStore';
import api from '../api/axios';
import toast, { Toaster } from 'react-hot-toast';
import { Settings, User, LogOut } from 'lucide-react';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';
import navLogo from '../assets/navLogo.gif';
import themeStore from '../store/themeStore';
import messagesStore from '../store/messagesStore';
import socketStore from '../store/socketStore';

const Navbar = () => {
  const { theme } = themeStore()
  const {authUser, checkAuth } = authStore();
  const Navigate = useNavigate();
  const {setSelectedContactToNull} = messagesStore();
  const {disconnectSocket} = socketStore();
  
  const executeLogout = async () => {
    try {
      const response = await api.post("/auth/logout");
      toast.success(response.data.message)
      disconnectSocket();
      checkAuth();
      Navigate('/signup');
    } catch(error) {
      toast.error(error.response.data.message);
    }    
  }

  const handleLogout = async () => {
    const result = await Swal.fire({
      title: "Are you sure you want to logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Logout"
    })
    
    if (result.isConfirmed) {
      localStorage.removeItem('selectedContact');
      setSelectedContactToNull();
      await executeLogout();
    }
  }
  

  return (
    <div data-theme={theme} className='h-[60px] flex items-center justify-between px-3 md:px-8 lg:px-12 bg-base-300/60'>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />

      <div className='flex items-center justify-center gap-1 serif text-base-content'>
        <img src={navLogo} alt="Logo" className='h-[40px] w-[40px] rounded-full' />
        <Link to={'/'} className='font-bold text-2xl hover:text-secondary'>ChatSphere</Link>
      </div>

      <div className='flex items-center gap-1 md:gap-2 lg:gap-4 serif'>
        <Link className='flex items-center gap-1 cursor-pointer border-1 rounded-lg p-1 bg-secondary text-secondary-content hover:bg-primary hover:text-primary-content' title='Settings' to={'/settings'}> <Settings /> <p className='hidden sm:block text-sm' >Settings</p></Link>
        
        {
          authUser && <Link className='flex items-center gap-1 cursor-pointer border-1 rounded-lg p-1 bg-secondary text-secondary-content hover:bg-primary hover:text-primary-content' title='Profile' to={'/profile'} > <User /> <p className='hidden sm:block text-sm'>Profile</p></Link>
        }

        {
          authUser && <button className='flex items-center gap-1 cursor-pointer border-1 rounded-lg p-1 bg-secondary text-secondary-content hover:bg-primary hover:text-primary-content' title='Logout'  onClick={handleLogout} > <LogOut /> <p className='hidden sm:block text-sm'>Logout</p></button>
        }
      </div>
    </div>
  )
}

export default Navbar
