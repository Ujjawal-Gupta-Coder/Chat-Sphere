import { useEffect } from 'react'
import {Routes, Route} from 'react-router-dom'
import authStore from './store/authStore.js'
import HomePage from './pages/HomePage.jsx'
import SignUpPage from './pages/SignUpPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import SettingsPage from './pages/SettingsPage.jsx'
import ProfilePage from './pages/ProfilePage.jsx'
import Navbar from './components/Navbar'
import Loader from './components/Loader.jsx'
import Footer from './components/Footer.jsx'

const App = () => {
  const { checkAuth, isCheckingAuth } = authStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);  


  if(isCheckingAuth) {
    return <Loader />
  }

  return (
    <>    
      <Navbar />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/signup' element={<SignUpPage /> } />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/settings' element={<SettingsPage />} />
        <Route path='/profile' element={<ProfilePage />} />
      </Routes>

      <Footer />
        
    </> 
  )
}

export default App
