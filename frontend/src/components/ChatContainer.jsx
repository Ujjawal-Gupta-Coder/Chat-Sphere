import { useEffect, useRef } from 'react'
import ChatBubble from './ChatBubble'
import EmptyChatContainer from './EmptyChatContainer'
import ChatContainerSkeleton from './ChatContainerSkeleton'
import messagesStore from '../store/messagesStore'
import { Toaster } from 'react-hot-toast'
import authStore from '../store/authStore'
import DateSeprator from './DateSeprator'
import {getCustomDateFormate} from '../utils/helper.js'
import socketStore from '../store/socketStore.js'

const ChatContainer = () => {
  const chatEndRef = useRef(null)
  const {authUser} = authStore();
  const {messages, getAllMessages, messageLoading, selectedContact} = messagesStore();
  const {senderIsTyping} = socketStore();
  let currentDate = null; 

  const getTime = (t) => {
    return new Date(t).toLocaleTimeString('en-US',{
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  }
  
  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }
  
  useEffect(() => {
    getAllMessages();
  }, [selectedContact]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, senderIsTyping]);
  
  const isDateChanged = (date1, date2) => {
    if(!date1) return true;

    let currentDate = new Date(date1);
    let msgDate = new Date(date2);

    return currentDate.getFullYear() !== msgDate.getFullYear() || currentDate.getMonth() !== msgDate.getMonth() || currentDate.getDate() !== msgDate.getDate();
  }
  
  return (
    <div className='flex-1 flex flex-col overflow-auto px-2 lg:px-6'>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      { messages.length === 0 && !messageLoading && <EmptyChatContainer />}

      { 
        messageLoading && [0,1,2,3,4,5,6,7,8].map(num => {
          return <ChatContainerSkeleton key={num} num={num} />
        })
      }
        
      {
        messages.map(message => {
          let dateChange = isDateChanged(currentDate, message.createdAt);
          if(dateChange) currentDate = message.createdAt;
           
          return <div key={message._id}>
              {dateChange && <DateSeprator date={getCustomDateFormate(currentDate)} />}
              <ChatBubble
                isSender = { message.senderId === authUser._id }
                profilePicture = {message.senderId === authUser._id ? authUser.profilePicture : selectedContact.profilePicture}
                time = {getTime(message.createdAt)}
                textMessage = {message.text}
                imageMessage = {message.image}
                isTyping = {false}
              />
          </div>  
        })
      }

      <div ref={chatEndRef}> 
        {
          senderIsTyping.includes(selectedContact._id) && <ChatBubble profilePicture = {selectedContact.profilePicture} isTyping = {true}/>
        }
      </div> 
      
      
    </div>
  )
}

export default ChatContainer
