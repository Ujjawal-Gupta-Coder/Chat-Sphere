import axios from 'axios'

const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL+"/api",
    withCredentials: true,
    headers: {
        'x-port': window.location.port 
    }
})

export default api;
