import axios from 'axios'

const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL+"/api",
    withCredentials: true,
    
    // Only in case of Development when we have to test application for multiple users by using different port.
    // headers: {
    //     'x-port': window.location.port 
    // }
})

export default api;
