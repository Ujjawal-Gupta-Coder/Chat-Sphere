import themeStore from "../store/themeStore"

const Footer = () => {
    const { theme } = themeStore();
  return (
    <div data-theme={theme} className="min-h-[20px] h-fit px-2 bg-neutral text-neutral-content text-[8px] md:text-[10px] flex  justify-center items-center flex-wrap serif">
      <p>©️ 2025 ChatSphere. ⚙️ All rights reserved. ✨ Crafted with ❤️ by</p>

       <a href="https://ujjawal-gupta-coder.github.io/My-Portfolio/" className="ml-[4px] font-bold text-primary hover:text-neutral-content"> Ujjawal Gupta</a>

       <p>.</p> 
    </div>
  )
}

export default Footer
