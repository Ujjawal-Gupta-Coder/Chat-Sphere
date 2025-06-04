import { create } from 'zustand';

const themeStore = create((set) => ({
        theme : localStorage.getItem("theme") || "light",
        
        setTheme : (newTheme) => {
            set({theme : newTheme})
        }
}));

export default themeStore;