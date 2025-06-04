import axios from 'axios'

const api = axios.create({
    baseURL: "http://localhost:3300/api",
    withCredentials: true,
    headers: {
        'x-port': window.location.port 
    }
})

export default api;
