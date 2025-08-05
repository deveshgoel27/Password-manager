# 🔐 Password Manager

A full-stack Password Manager built with the MERN stack (MongoDB, Express, React, Node.js). This project allows users to securely store and manage their passwords.

---

## 📁 Project Structure

```
password-manager/
├── client/ # Frontend (React + TailwindCSS)
├── server/ # Backend (Express + MongoDB)
└── README.md # Project overview
```

---

## ✅ Completed Phases
- [x] Phase 1: Project Setup
- [x] Phase 2: Auth system, JWT, route protection

---

## 📦 Tech Stack

**Frontend**  
- React  
- Vite  
- TailwindCSS  
- React Router DOM  
- Axios  
- React Hook Form  
- React Toastify  

**Backend**  
- Express  
- MongoDB + Mongoose  
- Bcrypt  
- JWT (jsonwebtoken)  
- Crypto  

**Dev Tools**  
- Nodemon  
- Dotenv  
- Git + GitHub  

---

## 📂 Folder / File Purpose

- `controllers/` – Logic for handling routes (like register, login)  
- `models/` – Mongoose schemas for MongoDB (User, Credential)  
- `routes/` – Define Express routes (`/auth`, `/credentials`)  
- `middleware/` – JWT auth checks, error handling, etc.  
- `.env` – Store your secrets like DB URI, JWT key  
- `index.js` – Starts your server and connects everything  

---

## 🛠️ How to Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/your-username/password-manager.git
cd password-manager
```

### 2. Setup the backend

```bash
cd server
npm install
# Create a .env file with MONGO_URI and JWT_SECRET
npm start
```

### 3. Setup the frontend

```bash
cd ../client
npm install
npm run dev
```

---

## 🔒 Features (Planned)

- User authentication (register/login)
- Secure password encryption
- Add / Edit / Delete passwords
- Copy to clipboard
- Search functionality
- Dark mode
- Responsive UI

---

## 🚀 Live Demo

Coming soon...

---

## 📅 Development Log

✅ Phase 1: Initial project setup  
✅ Phase 2: User authentication (JWT, route protection)  
⏳ Phase 3: Password management (CRUD)  
⏳ Phase 4: UI Enhancements and final deployment  

---

## 📌 Git Commands to Use After Each Phase

```bash
git add .
git commit -m "✅ Complete Phase X: Your message"
git push
```

Now you're clean and ready for the next push! 🚀
