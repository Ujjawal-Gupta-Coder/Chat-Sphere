import { useRef, useState } from 'react'
import { Image, Loader, Send, X } from 'lucide-react'
import messagesStore from '../store/messagesStore'
import toast, { Toaster } from 'react-hot-toast';
import api from '../api/axios';
import socketStore from '../store/socketStore';
import authStore from '../store/authStore';

const ChatInput = () => {
  const {authUser} = authStore();
  const {addSingleChatToMessages} = messagesStore();
  const [textMessage, setTextMessage] = useState("");
  const [imageMessage, setImageMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const {selectedContact} = messagesStore();
  const imageInputRef = useRef(null);
  const { socket } = socketStore();

  const handleInputText = (e) => {
    setTextMessage(e.target.value);
    if(!e.target.value.trim()) socket.emit("typingOver", selectedContact._id, authUser._id);
    else socket.emit("typing", selectedContact._id, authUser._id);
  }

  const triggerInputImageClick = () => {
    imageInputRef.current.click();
  }

  const handleClearInputImage = () => {
    setImageMessage("");
  }
  
  const handleInputImage = async (e) => {
    const file = e.target.files[0];
    e.target.value = null;

    if(!file || !file.type.startsWith('image/')) {
      toast.error('Please select a valid image file');
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = async () => {
      setImageMessage(reader.result);
    }
  }
  
  const handleSendMessage = async () => {
    if(!textMessage.trim() && !imageMessage) return;
    try {
      setIsLoading(true);
      const response = await api.post(`/messages/send/${selectedContact._id}`, {
        text : textMessage.trim(),
        image : imageMessage
      })

      socket.emit("typingOver", selectedContact._id, authUser._id);

      const chat =  response.data.chat;
      addSingleChatToMessages(chat);
      
      setImageMessage("");
      setTextMessage("");

    } catch(error) {
      if(!error.response) toast.error("Server is temporarily unavailable. Please try again later.");
      else toast.error("Something went wrong. Message not sent.");
    } finally {
      setIsLoading(false); 
    }
  }
  return (
    <div className='h-[60px] relative flex items-center justify-center gap-2 lg:gap-6 px-4 py-6 lg:px-32 md:px-16 sm:px-8 '>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      
      <div className={`${imageMessage?"absolute":"hidden"} h-[75px] px-4 py-2 bg-base-300/80 w-[98%] rounded-2xl bottom-[60px]`}>
        <div className='relative w-fit'>
          <img src={imageMessage?imageMessage:null} alt="Selected Image" className='h-[60px] w-auto rounded-lg' />
          <div className='w-fit'>
            <button className='absolute cursor-pointer -right-[4px] -top-[4px] bg-red-500/70 rounded-full' onClick={handleClearInputImage}><X className='h-[15px] w-[15px]' /></button>
          </div>
        </div>
      </div>

      <input type="text" className='border-1 outline-none flex-1 rounded-lg h-[40px] px-2 lg:px-8' placeholder='Type a message ...' value={textMessage} onChange={handleInputText} />
      <input type="file" accept='image/*' ref={imageInputRef} className='hidden' onChange={handleInputImage} />
      <button className={`${imageMessage?"text-neutral-700":"text-base"} cursor-pointer`} title='Select Image' onClick={triggerInputImageClick} disabled={imageMessage} > <Image /> </button>
      <button className="cursor-pointer" title='Send' onClick={handleSendMessage} disabled={isLoading || (!textMessage.trim() && !imageMessage)}> 
        {!isLoading && <Send className={` ${!textMessage.trim() && !imageMessage ? "text-neutral-500" : "text-base" }`} /> }
        {isLoading && <Loader className='animate-spin text-base' /> }
      </button>
    </div>
  )
}

export default ChatInput
