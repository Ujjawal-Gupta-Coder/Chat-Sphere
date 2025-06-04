import { themesList } from "../utils/helper"
import { Send } from 'lucide-react';
import themeStore from "../store/themeStore";
const SettingsPage = () => {
    const {theme, setTheme} = themeStore();

  const handleThemeChange = (e) => {
    const newThemeRawText = e.currentTarget.innerText;
    const newTheme = newThemeRawText[0].toLowerCase() + newThemeRawText.slice(1);
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  }
  return (
    <div data-theme={theme} className="h-settings">
      
      <div className="pt-3 flex flex-col gap-2 px-8">
        
        <div className="font-bold text-2xl serif">Theme:</div>
        
        <div className="flex flex-wrap justify-center sm:justify-normal gap-1">
          {
            themesList.map((theme, idx) => {
              return <button key={idx} onClick={handleThemeChange}  className="cursor-pointer hover:bg-base-content rounded-md p-1 space-y-1 group">
            <div data-theme={theme} className="flex gap-[3px] p-[3px] bg-base-100 w-[135px] h-[30px] rounded-md relative">
              <div className="bg-primary h-full w-[25%] rounded-md" ></div>
              <div className="bg-secondary h-full w-[25%] rounded-md" ></div>
              <div className="bg-accent h-full w-[25%] rounded-md"></div>
              <div className="bg-neutral h-full w-[25%] rounded-md"></div>
            </div>

            <div className="text-base-content group-hover:text-base-100 serif">{theme[0].toUpperCase() + theme.slice(1)}</div>
            </button>
            })
          }
        </div>
        
      </div>

      {/* priview div */}
      <div  className="py-4 flex flex-col justify-center items-center  gap-3 px-4 md:px-8">
          <div className="font-bold text-2xl serif self-start ml-4 md:ml-0">Preview:</div>

          <div className="py-4 bg-base-300 w-[100%] sm:w-[90%] lg:w-[80%] rounded-2xl flex justify-center items-center">
            <div className="bg-base-100 w-[90%] lg:w-[60%] rounded-2xl flex flex-col gap-3 py-2">
              
              <div className="flex justify-start gap-2 items-center px-5 ">
                <div className="rounded-full bg-primary h-[40px] w-[40px] flex justify-center items-center font-bold text-2xl roboto text-primary-content">R</div>
                <div>
                  <div className="font-bold text-sm md:text-lg text-base-content">Rajesh Kumar</div>
                  <div className="relative bottom-1  md:bottom-1.5 text-[10px] md:text-sm text-base-content">Online</div>
                </div>

              </div>
                
              <div className="h-[0.2px] bg-neutral w-[90%] mx-auto"></div>

              <div className="flex flex-col px-4 gap-3">
                <div className="bg-secondary w-fit self-start rounded-xl p-2">
                  <div className="text-sm md:text-lg serif text-secondary-content">Hey! How's your day going?</div>
                  <div className="text-[13px] text-secondary-content">11:00 AM</div>
                </div>
                <div className="bg-primary w-fit self-end rounded-xl p-2">
                  <div className="text-sm md:text-lg serif text-primary-content">Hi It's going well, How about you?</div>
                  <div className="text-[13px] text-primary-content" >2:00 PM</div>
                </div>
              </div>
                
              <div className="h-[0.2px] bg-neutral w-[90%] mx-auto"></div>

              <div className="flex justify-center gap-2 items-center px-4 py-2">
                <div className="border-1 border-base-content w-[95%] rounded-lg p-2 serif text-sm text-base-content">This is preview ...</div>
                <div className="bg-primary rounded-md p-2 text-primary-content"><Send/></div>
              </div>

            </div>
          </div>
      </div> 
    </div>
  )
}

export default SettingsPage
