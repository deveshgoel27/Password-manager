# 🔐 Password Manager

A full-stack Password Manager built with the MERN stack (MongoDB, Express, React, Node.js).  
This app allows users to securely register, log in, and (soon) store/manage passwords.

---

## 📁 Project Structure
```
password-manager/
├── client/ # Frontend (React + TailwindCSS)
├── server/ # Backend (Express + MongoDB)
└── README.md # Project overview
```

---


---

## ✅ Completed Phases

- [x] **Phase 1:** Project Setup (Frontend & Backend with basic structure)
- [x] **Phase 2:** Authentication System (Register/Login with JWT, Protected Routes)

---

## 📦 Tech Stack

### 🔹 Frontend
- React  
- Vite  
- TailwindCSS  
- React Router DOM  
- Axios  
- React Hook Form  
- React Toastify  

### 🔹 Backend
- Express  
- MongoDB + Mongoose  
- Bcrypt (password hashing)  
- JWT (jsonwebtoken)  
- Crypto (for password encryption – planned)  

### 🔹 Dev Tools
- Nodemon  
- Dotenv  
- Git + GitHub  

---

## 📂 Folder / File Structure

- `/controllers` – Logic for handling routes (like register, login)  
- `/models` – Mongoose schemas for MongoDB (User, Credential)  
- `/routes` – Define Express routes (`/auth`, `/credentials`)  
- `/middleware` – JWT auth checks, error handling, etc.  
- `.env` – Store your secrets like DB URI, JWT secret  
- `index.js` – Starts your server and connects everything  

---

## 🛠️ How to Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/your-username/password-manager.git
cd password-manager


### 2. Setup the backend

cd server
npm install
# Create a .env file with:
# MONGO_URI=your_mongodb_uri
# JWT_SECRET=your_secret_key
npm start

### 3. Setup the frontend

cd ../client
npm install
npm run dev

---

 Git Workflow

git add .
git commit -m "✅ Complete Phase 2: Auth system, JWT, route protection"
git push

  ---

## 🔒 Features (Planned)

✅ Completed (Phase 1)
- User authentication (register/login)
- Secure password encryption
- Add / Edit / Delete passwords
- Copy to clipboard
- Search functionality
- Dark mode
- Responsive UI

✅ Completed (Phase 2)
User Registration (/api/auth/register)
User Login (/api/auth/login)
JWT Token generation and storage
Protected backend routes using middleware
Auto-redirect to dashboard on login
Token saved in localStorage



---

## 🚀 Live Demo

Coming soon...

---





Now you're clean and ready for the next push! 🚀
