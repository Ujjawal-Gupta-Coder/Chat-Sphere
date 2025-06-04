import { create } from 'zustand'
import api from '../api/axios.js'
import socketStore from './socketStore.js'
const authStore = create((set) => ({
    authUser: null,

    isCheckingAuth: true,

    checkAuth: async () => {
        try {
            const res = await api.get('/auth/check');
            if(res.data.success) {
                set({authUser: res.data.user})
                const {connectSocket} = socketStore.getState();
                connectSocket();
            } 
        } catch(error) {
            set({authUser: null})
        } finally {
            set({isCheckingAuth : false})
        }
    }

    
}))


export default authStore;