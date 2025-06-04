import { useEffect, useRef, useState } from 'react'
import authStore from '../store/authStore';
import { useNavigate } from 'react-router-dom';
import { Camera, User, Mail } from 'lucide-react';
import avatar from '../assets/avatar.png';
import { getCustomDateFormate } from '../utils/helper';
import toast, { Toaster } from 'react-hot-toast';
import api from '../api/axios';
import themeStore from '../store/themeStore';

const ProfilePage = () => {
  const {authUser, checkAuth} = authStore();
  
  const { theme } = themeStore();
  const Navigate = useNavigate();
  const imagePickerRef = useRef(null);
  const [preview, setPreview] = useState(`${authUser && authUser.profilePicture ? authUser.profilePicture : avatar}`);

  const [belowImageText, setBelowImageText] = useState("Click the camera icon to update your photo");

  useEffect(() => {
    if(!authUser) return Navigate('/signup');
  }, []);

  const handleCameraIconClick = () => {
    imagePickerRef.current.click();
  }

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];

    if(file && file.type.startsWith('image/')) {
      const imageURL = URL.createObjectURL(file);
      setPreview(imageURL);
    } 
    else {
      toast.error('Please select a valid image file');
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);

    try {
      reader.onloadend = async () => {
        const base64image = reader.result;
        setBelowImageText("Uploading ...");
        const response = await api.put('/auth/update-profile', 
          {
          image: base64image
          }
        )

        setBelowImageText("Click the camera icon to update your photo");
        
        if(response.data.success) {
            toast.success('Image uploaded successfully');
            checkAuth()
        } else {
          toast.error('Image Upload failed. Plese try again later');
        }
      }
    } catch(error) {
        toast.error('Server Error. Plese try again later');
    }
    
  }
      
      
    
  
  return (
    <div data-theme={theme} className='py-4 px-2 flex flex-col justify-center gap-6 items-center bg-base-100 h-custom'>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />

      <div className='relative flex flex-col justify-center py-4 items-center gap-2 bg-base-300/90 border-1 border-base-content lg:p-4 rounded-2xl w-[95%] max-w-[550px]'>
         <div className='flex flex-col justify-center items-center'>
          <p className='text-4xl text-primary font-bold zen-dots'>Profile</p>
          <p className='text-primary serif'>Your profile information</p>
         </div>


         <div className='flex flex-col justify-center items-center'>
          <div className='relative'>
            <img src={preview} alt="Profile Photo" className='h-[200px] w-[200px] overflow-hidden border-2 rounded-full border-base-content' />
            <input ref={imagePickerRef} type="file" accept='image/*' className='hidden' onChange={handleImageUpload} />
            <button onClick={handleCameraIconClick} className='absolute -right-3 -bottom-1 cursor-pointer text-base-content'><Camera className='h-12 w-12' /></button>
          </div>
          <div className='text-sm relative roboto text-base-content'>{belowImageText}</div>
         </div>


         <div className='relative w-[95%] flex flex-col justify-center items-center gap-3 mt-4'> 

          <div className='w-full'>
              <p className='serif text-base-content'>Full Name :</p>
              <div className={"border-2 border-secondary bg-secondary-content rounded-md flex px-2 py-1 gap-2 items-center text-secondary"}>
                <User />
              <div className='outline-none border-0 py-1 flex-1 font-bold rounded-md text-xl text-secondary'> {authUser ? authUser.fullName:""} </div> 
              </div>
            </div>

            <div className='w-full'>
              <p className='text-base-content serif'>Email Address :</p>
              <div className={"border-2 border-secondary bg-secondary-content rounded-md flex px-2 py-1 gap-2 items-center text-secondary"}>
                <Mail />
                <div className='outline-none border-0 py-1 flex-1 font-bold rounded-md text-xl text-secondary'> {authUser?authUser.email:""} </div> 
              </div>
            </div>

         </div>

      </div> 

      <div className='flex flex-col justify-center gap-4 p-4 rounded-2xl w-[95%] max-w-[550px] border-1 border-base-content bg-base-300/90'>
        <div className='text-2xl font-bold text-primary serif'>Account Information: </div>

        <div className='flex flex-col gap-2'>
          <div className='flex justify-between items-center text-base-content serif'>
            Member Since :
            <div className='font-bold text-accent'>{getCustomDateFormate(authUser ? authUser.createdAt: "")}</div>
          </div>

          <div className='bg-base-content h-[1px] rounded-2xl w-[70%] mx-auto'></div>

          <div className='flex justify-between items-center text-base-content serif'>
            Account Status :
            <div className='font-bold text-green-500'>Active</div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ProfilePage
