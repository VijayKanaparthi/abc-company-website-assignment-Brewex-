# 🚀 ABC Company Website - Brynk Labs Hiring Assignment

This project is built as part of the Brynk Labs hiring assignment. It includes:

- A pixel-perfect responsive landing page for **Company ABC**
- A CMS page to **update the main heading dynamically**
- Backend API to handle **GET/POST** operations
- MongoDB database integration
- Fully functional MERN stack setup with clean design using **Tailwind CSS**

---

## 📁 Project Structure

abc-company-website/
├── frontend/ # React frontend (Landing + CMS)
├── backend/ # Node.js backend (Express + MongoDB)
└── README.md

---

## 🛠️ Technologies Used

- **Frontend:** React (Class Components), Tailwind CSS, fetch API
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas (via Mongoose)

---

## ✅ Features

### 🚀 Landing Page (User-Facing)

- Built from Figma design
- Only the main heading is **dynamic**
- Fully responsive (mobile/tablet/desktop)
- All other content is static

### 🛠️ CMS Page

- Allows admin to **update the main heading**
- Text field + save button
- Automatically updates landing page heading

---

## ⚙️ How to Run Locally

### 📦 Backend Setup

1. Go to server directory:

   ```bash
   cd server

   npm install
   node index.js
   ```

### Frontend Setup

    npm install
    npm start

### Database Schema

{

text: String,
updatedAt: Date (default: Date.now)
}
