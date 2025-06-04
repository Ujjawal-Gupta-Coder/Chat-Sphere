import Auth_Decoration from '../assets/auth-decoration.png'
const AuthDecoration = () => {
  return (
    <div className='hidden lg:flex items-center justify-center flex-col gap-4 w-1/2 h-custom bg-base-300/50 relative'>
        <img src={Auth_Decoration} />
        <h2 className='text-4xl serif font-bold text-base-content'>Join our Community</h2>
        <p className='w-[50%] text-center text-base-content roboto'>Connect with friends, share moments, and stay in touch with your loved ones.</p>
    </div>
  )
}

export default AuthDecoration
