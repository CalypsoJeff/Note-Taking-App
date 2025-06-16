# 📝 Note Taking App

A clean and responsive MERN stack note-taking application. Users can create, view, and store notes in a MongoDB database with a modern UI built using React and TailwindCSS. Backend is powered by Node.js, Express, and Mongoose.

---

## ✨ Features

- 🖊️ **Create Notes**: Add notes with a title and content.
- 📋 **View Notes**: Instantly see your saved notes on the same page.
- 🗃️ **Persistent Storage**: Notes are stored in MongoDB via Mongoose.
- 🔄 **Auto Refresh**: Newly added notes show up without needing a page refresh.
- ⚠️ **Form Validation**: Prevent empty notes from being added.
- 📱 **Responsive Design**: Mobile-first UI using TailwindCSS.

---

## 🧱 Technology Stack

### 🔹 Frontend
- **React** (with Vite)
- **TailwindCSS** – for styling
- **Axios** – for HTTP requests

### 🔹 Backend
- **Node.js** + **Express**
- **MongoDB** + **Mongoose**
- **Dotenv** – for managing environment variables
- **CORS** – for enabling frontend-backend communication

---

## ⚙️ Prerequisites

- Node.js and npm installed
- MongoDB (local )
- Git

---

## 📥 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/CalypsoJeff/Note-Taking-App.git
cd note-taking-app
```

### 2. Backend Setup
cd server
npm install

Create a .env file inside backend/:

PORT=5000

MONGO_URI=mongodb://localhost:27017/Notes-App

### 3. Frontend Setup
cd ../client

npm install

npm run dev

### Running the App Locally
Backend:

cd server

npm run dev
