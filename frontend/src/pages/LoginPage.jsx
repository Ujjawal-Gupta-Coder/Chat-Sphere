import { useEffect, useState } from 'react'
import chat from '../assets/chat.gif'
import {Link, useNavigate} from "react-router-dom"
import { Mail, Lock, Eye, EyeOff, TriangleAlert } from 'lucide-react';
import {Loader as Spinner} from "lucide-react"
import { useForm } from 'react-hook-form';
import api from '../api/axios';
import toast, { Toaster } from 'react-hot-toast';
import authStore from '../store/authStore';
import themeStore from '../store/themeStore';
import AuthDecoration from '../components/AuthDecoration';
import GuestLoginModal from '../components/GuestLoginModal';

const LoginPage = () => {
  const {authUser, checkAuth} = authStore();
  const { theme } = themeStore();
  const navigate = useNavigate();
  const {register, handleSubmit, formState:{errors, isSubmitting}, } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [showDemoModal, setshowDemoModal] = useState(false);

  const handleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  }
    
  const onSubmit = async (formData) => {
    try {
      const response = await api.post('/auth/login', formData);
      toast.success(response.data.message)
      checkAuth();
      return navigate('/');
      
    } catch(error) {
      if(!error.response) toast.error("Server is temporarily unavailable. We're working to fix this—please try again shortly.");
      else toast.error(error.response.data ? error.response.data.message : "An error occurred, please try again.");
    } 

  }

  useEffect(() => {
    if(authUser) return navigate('/'); 
  }, [authUser]);

  return (
    <div data-theme={theme} className='w-full flex flex-col lg:flex-row h-custom'>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      

      <div className='relative lg:absolute z-10 flex items-center w-full justify-center my-4'>
          <button
          onClick={() => setshowDemoModal(true)}
          className="bg-gradient-to-r cursor-pointer from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          🎯 Explore as a Guest
        </button>
      </div>
      
      {
        showDemoModal && <GuestLoginModal setshowDemoModal={setshowDemoModal}/>
      }
      
      {/* left */}
      <div className='w-full lg:w-1/2 h-custom bg-base-100 flex justify-center items-center flex-col gap-4 relative pb-4'>
        
        <div className='flex justify-center items-center flex-col'>
          <img src={chat} alt="Chat Logo" className=' rounded-full h-[120px] w-[120px] sm:h-[150px] sm:w-[150px]'/>
          <h1 className='font-bold text-3xl serif text-primary'>Welcome Back</h1>
          <p className='text-sm text-primary'>Sign in to your account</p>
        </div>

        <form className='flex flex-col items-center gap-2 w-full px-5' onSubmit={handleSubmit(onSubmit)} > 
          
          <div className='w-[90%] sm:w-[80%] md:w-[60%]'>
            <label htmlFor='email' className='text-base-content serif'>Email</label>
            <div className={`border-1 ${errors.email ? "border-red-500": "border-base-content"} rounded-md flex p-2 gap-2 items-center`}>
              <Mail />
              <input {...register('email', {
                required: {
                value: true,
                message: "Email is required"
              },
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email address"
              }
              })} type="text" id='email' placeholder='example@email.com' className='outline-none border-0 py-1 flex-1 text-base-content rounded-md' />
            </div>
            <div className='h-[20px]'>
              {
                errors.email && <p className='text-red-500 font-bold roboto flex gap-2'> <TriangleAlert /> {errors.email.message} </p>
              }
            </div> 
          </div>


          <div className='w-[90%] sm:w-[80%] md:w-[60%]'>
            <lable htmlFor='password' className='text-base-content serif'>Password</lable>
            <div className={`border-1 ${errors.password ? "border-red-500":"border-base-content"} rounded-md flex p-2 gap-2 items-center`}>
            <Lock />
            <input {...register('password', {required: {
              value: true,
              message: "Password is required"
            }, minLength: {
              value: 6,
              message: "Password must be at least 6 characters long"
            }})} type={showPassword ? "text" : "password"} id='password' placeholder='Password' className='outline-none border-0 py-1 flex-1 text-base-content rounded-md' />
            <button onClick={handleShowPassword} className='cursor-pointer' type='button'>
              {
                showPassword ? <EyeOff /> : <Eye />
              }  
            </button>
            </div>
            <div className='h-[20px]'>
              {
                errors.password && <p className='text-red-500 font-bold roboto flex gap-2'> <TriangleAlert /> {errors.password.message} </p>
              }
            </div> 
          </div>

          <button type='submit' disabled={isSubmitting} className='border-1 mt-5 cursor-pointer border-secondary-content hover:border-secondary rounded-md py-3 serif w-[90%] sm:w-[80%] md:w-[60%] bg-secondary hover:bg-secondary-content flex justify-center items-center text-secondary-content hover:text-secondary' >{isSubmitting ? <Spinner className='animate-spin h-[30px] w-[30px]' /> :  "Login Account" }</button>
        </form>

        <p className='serif text-base-content'>don't have an account? <Link to="/signup" className='underline text-primary hover:text-base-content'>Create Account</Link></p>
       
       
      </div>

      <AuthDecoration />
    </div>
  )
}

export default LoginPage
