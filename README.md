🍔 HungryHub — Food Delivery Web Application

A full-stack food ordering platform with a customer-facing frontend, a Node.js/Express backend, and a dedicated admin dashboard.


📋 Table of Contents

Overview
Features
Tech Stack
Project Structure
Getting Started

Prerequisites
Installation
Running the App


Environment Variables
Admin Panel
Contributing
License


Overview
HungryHub is a feature-rich online food delivery web application that allows users to browse restaurants, explore menus, add items to their cart, and place orders seamlessly. The platform is split into three independent modules:

Frontend — The customer-facing React application.
Backend — A RESTful API server built with Node.js and Express.
Admin — A dedicated dashboard for managing restaurants, menus, and orders.


✨ Features
Customer App

Browse and search restaurants by name or cuisine
View restaurant menus with categories and item details
Add / remove items from the cart with quantity management
User authentication (sign up, log in, log out)
Secure checkout and order placement
Order history and tracking
Responsive design for mobile and desktop

Admin Dashboard

Manage restaurants (add, edit, delete)
Manage menu items and categories
View and update order statuses
Monitor platform activity


🛠️ Tech Stack
LayerTechnologyFrontendReact.js, React Router, CSSBackendNode.js, Express.jsDatabaseMongoDBAuthenticationJWT (JSON Web Tokens)Admin PanelReact.jsStylingCSS3

📁 Project Structure
HungryHub/
├── frontend/          # React customer-facing application
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       └── ...
├── backend/           # Node.js + Express REST API
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
└── admin/             # React admin dashboard
    ├── public/
    └── src/
        ├── components/
        ├── pages/
        └── ...

🚀 Getting Started
Prerequisites
Make sure you have the following installed:

Node.js (v16 or higher)
npm or yarn
MongoDB (local instance or MongoDB Atlas)

Installation

Clone the repository

bashgit clone https://github.com/tanmaysawaji-1/HungryHub.git
cd HungryHub

Install Backend dependencies

bashcd backend
npm install

Install Frontend dependencies

bashcd ../frontend
npm install

Install Admin dependencies

bashcd ../admin
npm install
Running the App
Open three separate terminal windows and run each service:
Backend (API Server)
bashcd backend
npm run dev
# Runs on http://localhost:4000 (or your configured port)
Frontend (Customer App)
bashcd frontend
npm run dev
# Runs on http://localhost:5173
Admin Dashboard
bashcd admin
npm run dev
# Runs on http://localhost:5174

🔑 Environment Variables
Create a .env file inside the backend/ directory with the following variables:
env# MongoDB
MONGODB_URI=your_mongodb_connection_string

# JWT
JWT_SECRET=your_jwt_secret_key

# Server
PORT=4000

# (Optional) Add any third-party API keys here

⚠️ Never commit your .env file. It is already listed in .gitignore.


🖥️ Admin Panel
The admin panel is a separate React application that connects to the same backend API. It allows platform administrators to:

Add/Edit/Delete restaurants and food items
Manage orders — view details and update delivery status
Monitor platform-wide activity

Access the admin panel by navigating to http://localhost:5174 after starting the admin server.
