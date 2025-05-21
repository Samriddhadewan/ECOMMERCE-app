# 🛒 ECOMMERCE App

A full-featured eCommerce application built with the **MERN stack (MongoDB, Express, React, Node.js)**. This project includes user authentication, product management, shopping cart, order system, and a secure admin dashboard.

🔴 **Live Site:** [Visit Now](https://ecommerce-frontend-rust-three.vercel.app/)  
🔐 **Admin Access:** _Private. Request access for demo._

---

## 🚀 Features

### 🧑‍💻 User Side
- User registration and login (JWT authentication)
- Browse products with images, names, prices, and categories
- Add to cart and place orders
- Order history page for users
- Responsive UI for mobile and desktop

### 🛠️ Admin Dashboard
- Admin login with role-based access
- Add, edit, or delete products
- Manage all orders and users
- Real-time product updates

---

## 🛠️ Tech Stack

| Tech       | Description                       |
|------------|-----------------------------------|
| **MongoDB** | NoSQL database for storing users, products, and orders |
| **Express.js** | Backend framework for API and routing |
| **React.js** | Frontend library for dynamic UI |
| **Node.js** | JavaScript runtime for server-side |
| **JWT** | Authentication mechanism |
| **Tailwind CSS** | Utility-first CSS framework |
| **Axios** | HTTP client for API calls |

---

## 📸 Screenshots

> You can add your own screenshots here.

- **Home Page**
  ![Home](https://via.placeholder.com/800x400?text=Home+Page)

- **Product Page**
  ![Products](https://via.placeholder.com/800x400?text=Product+List)

- **Admin Dashboard**
  ![Admin](https://via.placeholder.com/800x400?text=Admin+Dashboard)

---

## 🧪 Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/Samriddhadewan/ECOMMERCE-app.git
cd ECOMMERCE-app

##2. Setup Backend
```bash
cd backend
npm install
# Create a .env file and configure the following:
# MONGO_URI=your_mongodb_uri
# JWT_SECRET=your_jwt_secret
# PORT=5000
npm run server
