import { create } from 'zustand'
import api from '../api/axios';
import toast from 'react-hot-toast';
import socketStore from './socketStore';
const messagesStore = create((set, get) => (
    {
        allContacts : [],

        contactLoading: false,

        getAllContacts : async () => {
            try {
                set({contactLoading: true})
                const {setSelectedContact} = get();

                const response = await api.get('/messages/users')
                set({allContacts: response.data.allUsers})

                const currentSelectedContact = JSON.parse(localStorage.getItem("selectedContact")); 
                if(currentSelectedContact) {
                    setSelectedContact(currentSelectedContact._id);
                }

            } catch(error) {
                toast.error("Failed to load contacts. Please try again.");
            } finally {
                set({contactLoading: false})
            }
        },

        messages : [],
        
        messageLoading : false,

        getAllMessages : async () => {
            set({messageLoading: true})
            const { selectedContact } = get();
            try {
                const response = await api.get(`/messages/${selectedContact._id}`);
                set({messages : response.data.messages})
            } 
            catch(error) {
                set({messages: []});
                if(!error.response) toast.error("Server is temporarily unavailable. Please try again later.");
                else toast.error("Something went wrong. Chat not loaded.");
            }finally {
                set({messageLoading: false})
            }
        },

        addSingleChatToMessages : (chat) => {
            const { messages } = get()
            set({messages : [...messages, chat] })
        },
        
        selectedContact: JSON.parse(localStorage.getItem("selectedContact")) || null,

        setSelectedContact: (id) => {
            const contacts = get().allContacts;
            contacts.forEach(contact => {
                if(contact._id === id) {
                    const contactString = JSON.stringify(contact);
                    localStorage.setItem("selectedContact", contactString);
                    set({selectedContact: contact});
                    return;
                }
            });
        },

        setSelectedContactToNull : () => {
            localStorage.setItem("selectedContact", null)
            set({selectedContact: null})
        },

        searchInput : "",

        setSearchInput : (input) => {
            set({searchInput: input})
        }, 

    }
));

export default messagesStore;