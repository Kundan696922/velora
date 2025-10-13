# 📝 Velora– Full-Stack E-Commerce Web App

**Velora** is a **Full-Stack E-Commerce Web App** built with the **MERN stack** + Tailwind CSS. It offers a premium, responsive shopping experience with Stripe payments, coupon support, and a sleek modern dark UI.

---

## 🚀 Demo

> 🌐 Live Demo: 👉 [View Velora](https://velora-qwjc.onrender.com/)

---

## 🛠️ Tools Used

| Tool | Description |
|------|-------------|
| ![MongoDB](https://img.icons8.com/color/24/mongodb.png) **MongoDB** | NoSQL Database for storing Products |
| ![Express](https://img.icons8.com/ios/24/express-js.png) **Express.js** | Backend API framework |
| ![React](https://img.icons8.com/color/24/react-native.png) **React** | Frontend UI library |
| ![Node.js](https://img.icons8.com/color/24/nodejs.png) **Node.js** | Server-side JavaScript runtime |
| ![Redis](https://img.icons8.com/color/24/redis.png) **Upstash Redis** | Cloud-based Redis for caching and session management |
| ![Cloudinary](https://img.icons8.com/color/24/cloud.png) **Cloudinary** | Image and media optimization & storage platform |
| ![Stripe](https://img.icons8.com/color/24/stripe.png) **Stripe** | Secure payment gateway integration |
| ![TailwindCSS](https://img.icons8.com/color/24/tailwindcss.png) **TailwindCSS + DaisyUI** | Modern, responsive UI styling |
| ![VSCode](https://img.icons8.com/color/24/visual-studio-code-2019.png) **VS Code** | Code editor |


---

## 🌟 Features

- 🛒 **Full E-Commerce System** – Product, category, cart, and checkout management
- 💳 **Stripe Payments** – Secure and smooth checkout with real-time processing
- 🔐 **Authentication & Security** – JWT-based login with refresh tokens and data protection
- 👑 **Admin Dashboard** – Manage products, users, coupons, and sales analytics
- ⚡ **Performance Boost** – Redis caching for faster API responses
- 🎨 **Modern UI** – Tailwind CSS-powered design with responsive, sleek dark theme

---

## 🖼️ Overview 

<img width="1280" height="720" alt="velora" src="https://github.com/user-attachments/assets/c1afbccb-c894-4573-a2a4-8aef921289c2" />

<img width="1280" height="720" alt="velora2" src="https://github.com/user-attachments/assets/1bdf8bb7-41d3-47b7-9c2f-13fa81d1443a" />

<img width="1280" height="720" alt="velora3" src="https://github.com/user-attachments/assets/0b5267af-d78b-4008-af7d-fcb357c2823e" />

<img width="1280" height="720" alt="velora4" src="https://github.com/user-attachments/assets/496b091d-d8d1-40ff-93a4-16bc46174d46" />

<img width="1280" height="720" alt="velora5" src="https://github.com/user-attachments/assets/1cefefa0-c5d1-4a1a-941e-ace172a95962" />


---

## 🚀 Getting Started

### 🔐 Environment Variables Setup

1. Create a `.env` file in the **backend** folder:
   ```env
   PORT=5000
   MONGO_URI=your_mongo_uri

   UPSTASH_REDIS_URL=your_redis_url

   ACCESS_TOKEN_SECRET=your_access_token_secret
   REFRESH_TOKEN_SECRET=your_refresh_token_secret

   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret

   STRIPE_SECRET_KEY=your_stripe_secret_key
   CLIENT_URL=http://localhost:5173
   NODE_ENV=development
   
2. Add .env to .gitignore to keep it private.
3. Restart your dev server after setting these variables.

### Prerequisites

Ensure you have the following installed:
- **Node.js** (v14+)
- **npm**
- **MongoDB** Atlas account

### Installation

 🧬 Clone the repository:
   ```bash
   git clone https://github.com/Kundan696922/velora.git
   cd fitrack
   ```

🚀 Start the App
   ```bash
   npm install
   npm run build
   npm run start
