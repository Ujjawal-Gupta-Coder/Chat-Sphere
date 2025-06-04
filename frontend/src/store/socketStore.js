import { create } from 'zustand';
import io from "socket.io-client";
import authStore from './authStore';
import messagesStore from './messagesStore';
import messageReceiveSound from '../assets/messageReceiveSound.mp3'
const socketStore = create((set, get) => (
    {
        socket : null,

        onlineUsers: [],
        senderIsTyping : [],
        connectSocket : () => {
            if(get().socket) return;

            const socket = io(import.meta.env.VITE_BACKEND_URL);
            const {authUser} = authStore.getState();

            socket.on("connect", () => {
                socket.emit("addUserToOnlineList", authUser._id);
            })

            socket.on("updatedOnlineUsersList", (newOnlineUsers) => {
                set({onlineUsers:newOnlineUsers})
            })

            socket.on("messageSend", (chat) => {
                const {addSingleChatToMessages, selectedContact} = messagesStore.getState();
                if(selectedContact._id === chat.senderId) {
                    const messageSound = new Audio(messageReceiveSound);
                    messageSound.play();
                    addSingleChatToMessages(chat);
                }   
            })

            socket.on("senderTyping", (senderId) => {
                const {senderIsTyping} = get();
                if(senderIsTyping.includes(senderId) ) return;
                else {
                    set({senderIsTyping : [...senderIsTyping,senderId ]});
                }
            })

            socket.on("senderTypingOver", (senderId) => {
                const {senderIsTyping} = get();
                const processedSenderIsTyping = senderIsTyping.filter((sender) => {
                    return sender !== senderId;
                })

                set({senderIsTyping : processedSenderIsTyping})
            })

            set({socket})
        },

        disconnectSocket : () => {
            const { socket } = get();
            if(socket) {
                socket.disconnect();
                set({socket : null})
            }
        }
    }
));

export default socketStore;