<div align="center">
    <a href="https://chat-sphere-eosin.vercel.app/" target="_blank">
          <img src="./frontend/public/screenshots/Screenshot 1.png" width="1200" alt="Project Cover Image">
    </a>
    
# [Chat Sphere](https://chat-sphere-eosin.vercel.app/)
</div>

🌟 Experience the full functionality of this Chat Sphere Application by exploring the [Live Demo](https://chat-sphere-eosin.vercel.app/). Click the link to see it in action and enjoy!

ChatSphere is a modern, full-featured real-time chat application built with the MERN stack and powered by Socket.io for seamless two-way communication. It offers secure JWT-based login with encrypted passwords and cookie-based sessions. Users can send and receive both text and image messages, with all media stored securely in the cloud for reliable access anytime. The app includes smart features like real-time typing indicators, image previews, sound notifications, and smooth auto-scroll for new messages. With over 30+ beautiful themes to personalize your experience, full mobile responsiveness, and contact filters to show only online users, ChatSphere delivers a fast, elegant, and intuitive messaging platform that works effortlessly across all devices.

## 🔐 Guest Mode:
Explore the full application using pre-configured guest accounts — no signup required!

## 📋 <a name="table">Table of Contents</a>

1. 🛠️ [What Problem Does This Solve?](#ProblemSolved)
2. 🌈 [How the Chat Sphere Solves These Problems](#HowProblemSolved)
2. 📚 [About Project](#AboutProject)
3. 💻 [Tech Stack](#TechStack)
4. 🌟 [Features](#Features)
5. 🖼️ [Screenshots](#Screenshots)
6. 🤝 [Contributing](#Contributing)
7. 📬 [Contact](#Contact)

## <a name="ProblemSolved">🛠️ What Problem Does This Solve?</a>

❌**Outdated Design** - Many chat apps feel clunky or outdated, lacking modern responsive layouts.

❌**Weak Real-Time Communication** - Message delivery is often delayed or unreliable, especially with no typing indicators or read status.

❌**Session Loss on Refresh** - Users lose their selected contact or preferences when they refresh or reopen the app.

❌**Limited Customization** - Most platforms offer no themes or personalization, resulting in a one-size-fits-all interface.

❌**Insecure Authentication** - Basic login systems without encryption or token-based sessions risk user data and access.

❌**No Contact Filtering or Search** - Large contact lists are hard to navigate without search or online/offline filters.

❌**Poor Media Support** - Media files (images, avatars) may be lost, slow to load, or poorly optimized.

## <a name="HowProblemSolved">🌈How the Chat Sphere Solves These Problems </a>

✅**Modern, Responsive Design** - Built with Tailwind CSS and mobile-first principles, ChatSphere adapts beautifully to all screen sizes.

✅**Reliable Real-Time Messaging** - Uses Socket.io for instant message delivery, typing indicators, and live updates without lag.

✅**Persistent State Management** - Selected contact and theme settings are stored in localStorage to survive refreshes or tab closures.

✅**30+ Theme Options** - Users can choose from a wide range of built-in themes to personalize their experience.

✅**Secure Authentication System** - Implements JWT tokens, bcrypt password hashing, and cookie-based sessions for maximum security.

✅**Smart Search and Online Filter** - Search contacts in real time and filter to show only online users for focused conversations.

✅**Cloud-Based Media Handling** - Stores avatars and images on Cloudinary for fast loading, previews, and consistent delivery across devices.

## <a name="AboutProject">📚 About Project</a>

**ChatSphere** is a modern, real-time chat application designed for a smooth and personalized user experience. Built with the MERN stack and powered by Socket.io, it combines speed, security, and simplicity.

Whether you're connecting with a friend or collaborating with a teammate, ChatSphere offers a sleek and intuitive interface to make conversations effortless. Users can sign up, update their profile picture, browse contacts, search or filter by online status, and instantly start chatting—on any device. With 30+ theme options, cloud-based image sharing, and persistent session memory, it feels personal and polished from the first click.

- 💬 **Real-Time Messaging** – Instant delivery with typing animation and sound notifications.

- 🌐 **Cloud Media Storage** – Send and preview images stored on Cloudinary.

- 🔐 **Secure Auth** – JWT tokens, bcrypt encryption, and cookie-based session handling.

- 🎨 **Personalized Themes** – Choose from over 30+ themes to suit your style.

- 📱 **Mobile Ready** – Optimized for every screen size, from desktop to mobile.

- 🔍 **Smart Contact System** – Search users and filter to show only online contacts.

- ⚙️ **Persistent Experience** – Sessions, themes, and selected contact remain after refresh.

- 🚀 **Clean UI/UX** – Skeleton loaders, smooth transitions, and intuitive layout.


## <a name="TechStack">💻 Tech Stack</a>

**Frontend**: 

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![Local Storage](https://img.shields.io/badge/Local%20Storage-4D4D4D?style=for-the-badge&logo=databricks&logoColor=white)
![Zustand](https://img.shields.io/badge/Zustand-000000?style=for-the-badge&logo=zustand&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![React Hook Form](https://img.shields.io/badge/React_Hook_Form-EC5990?style=for-the-badge&logo=react&logoColor=white)
![React Hot Toast](https://img.shields.io/badge/React_Hot_Toast-FF4433?style=for-the-badge&logo=react&logoColor=white)
![DaisyUI](https://img.shields.io/badge/DaisyUI-FF69B4?style=for-the-badge&logo=tailwind-css&logoColor=white)

**Backend**:

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![Socket.io](https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socket.io&logoColor=white)

**Authentication**:

![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=jwt&logoColor=yellow)
![Bcrypt](https://img.shields.io/badge/Bcrypt-3C3C3D?style=for-the-badge&logo=bcrypt&logoColor=white)
![Cookie Parser](https://img.shields.io/badge/Cookie_Parser-DB7093?style=for-the-badge)

**Database**:

![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongodb&logoColor=white)

**Cloud Storage**:

![Cloudinary](https://img.shields.io/badge/Cloudinary-FF5500?style=for-the-badge&logo=cloudinary&logoColor=white)

## <a name="Features">🌟 Features</a> 

- 🔐 **Secure Authentication** – JWT-based login system with bcrypt encryption and cookie sessions

- 🧾 **Validated Forms** – Robust login and signup forms with full input validation  

- 🖼️ **Cloud-Based Profile Media** – Upload and update profile pictures stored on Cloudinary  

- 📅 **Account Info at a Glance** – Contact cards show date of account creation  

- 🎨 **Custom Themes** – Choose from 30+ beautiful themes saved in localStorage  

- 🚪 **One-Click Logout** – Cleanly log out and destroy sessions in one click  

- 🔍 **Smart Search & Filters** – Instantly search contacts or filter by online status  

- 🟢 **Live Online Status** – Green dot + status text for online/offline contacts  

- 💬 **Real-Time Messaging** – Chat powered by Socket.io with instant message delivery  

- 🖼️ **Image Messaging** – Send images with a live preview before sending  

- 🎯 **Persistent Chat Selection** – Contact stays selected even after refresh  

- 🎞️ **Skeleton Loaders** – Smooth loading animations for better UX  

- 📱 **Mobile Responsive** – Fully adaptable layout for all screen sizes  

- ✍️ **Typing Indicators** – See when a user is typing in real-time  

- 🔔 **Message Alerts** – Sound notifications when new messages arrive  

- 📜 **Auto Scroll** – Automatically scrolls to the latest message in chat 

- 🕒 **Date-Based Grouping** – Messages are automatically separated by day for a clear, organized chat experience.


With all these thoughtful features working seamlessly together, **ChatSphere isn't just another basic chat app—it’s a complete, modern communication platform**. It prioritizes not only real-time speed and reliability, but also personalization, security, and user delight. From instant messaging and typing indicators to persistent themes and cloud image sharing, ChatSphere brings a premium chat experience to everyday users and developers alike. It’s crafted to feel fast, flexible, and future-ready—making every conversation feel just right.

## <a name="Screenshots">🖼️ Screenshots</a>

<img src="./frontend/public/screenshots/Screenshot 1.png" width="500" style="margin-bottom: 10px; margin-right: 10px; border-radius: 10px;" alt="Screenshot - 1"> 
<img src="./frontend/public/screenshots/Screenshot 2.png" width="500" style="margin-bottom: 10px; margin-right: 10px; border-radius: 10px;" alt="Screenshot - 2"> 
<img src="./frontend/public/screenshots/Screenshot 3.png" width="500" style="margin-bottom: 10px; margin-right: 10px; border-radius: 10px;" alt="Screenshot - 3"> 
<img src="./frontend/public/screenshots/Screenshot 4.png" width="500" style="margin-bottom: 10px; margin-right: 10px; border-radius: 10px;" alt="Screenshot - 4"> 
<img src="./frontend/public/screenshots/Screenshot 5.png" width="500" style="margin-bottom: 10px; margin-right: 10px; border-radius: 10px;" alt="Screenshot - 5"> 
<img src="./frontend/public/screenshots/Screenshot 6.png" width="500" style="margin-bottom: 10px; margin-right: 10px; border-radius: 10px;" alt="Screenshot - 6"> 
<img src="./frontend/public/screenshots/Screenshot 7.png" width="500" style="margin-bottom: 10px; margin-right: 10px; border-radius: 10px;" alt="Screenshot - 7"> 


## <a name="Contributing"> 🤝 Contributing</a>

We welcome contributions! If you'd like to improve this project, please follow these steps:

1. **Fork the repository**  
   Click the "Fork" button at the top right of the repository to create your own copy of the project.

2. **Clone your fork**  
   Once you've forked the repository, clone it to your local machine so you can make changes.

3. **Create a new branch**  
   Create a new branch to work on your feature or bug fix. It's a good practice to use descriptive branch names.

4. **Make changes**  
   Work on your changes or additions. Ensure your code follows the project's style and conventions.

5. **Commit your changes**  
   Once your changes are complete, commit them with a concise message explaining what you've done.

6. **Push to your branch**  
   Push the changes to your forked repository on GitHub.

7. **Create a Pull Request (PR)**  
   Open a Pull Request from your forked repository to the original repository, detailing the changes you've made.

## <a name="Contact"> 📬 Contact</a>

- **🔗 LinkedIn :** [Ujjawal Gupta](https://www.linkedin.com/in/ujjawal-gupta-dev)

- **😃 My Portfolio:** [Portfolio Link](https://ujjawal-gupta-coder.github.io/My-Portfolio/)

- **🚀 Live Demo :** [Project Link](https://chat-sphere-eosin.vercel.app/)

- **🧑‍💻 GitHub Profile :** [https://github.com/Ujjawal-Gupta-Coder](https://github.com/Ujjawal-Gupta-Coder)

- **📁 Project Repository :** [https://github.com/Ujjawal-Gupta-Coder/Chat-Sphere](https://github.com/Ujjawal-Gupta-Coder/Chat-Sphere)
