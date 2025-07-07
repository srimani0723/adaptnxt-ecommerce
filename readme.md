# 📦 E-Commerce API Project
### A full-stack implementation of a simple e-commerce system for AdaptNXT assignment. 

#### This project includes:
- ✅ Express + MongoDB backend for RESTful API
- ✅ Static HTML frontend for testing API routes
- ✅ JWT-based authentication and role-based access
- ✅ CRUD operations on products, cart, orders, and users

## 🧑‍💻 Technologies Used
- Backend | Node.js, Express, MongoDB, JWT | 
- Frontend | Plain HTML + JS with fetch() | 
- Styling | Custom CSS + Tailwind (React version) | 
- Auth | JSON Web Tokens (JWT) | 
- Deployment | Netlify (HTML forms), GitHub | 

## 🚀 Setup Instructions
### 1️⃣ Clone and Install Backend

```bash
git clone https://github.com/srimani0723/adaptnxt-ecommerce.git
cd ecommerce-api
npm install
npm run dev
```

## 🧪 Testing Routes with HTML Forms

| File                 | Route Tested      | Description                      |
|----------------------|-------------------|----------------------------------|
| `login.html`         | `/auth/login`     | User authentication              |
| `register.html`      | `/auth/register`  | Admin or customer sign-up        |
| `products.html`      | `/products`       | Product listing + add-to-cart    |
| `cart.html`          | `/cart`           | View and manage cart             |
| `order.html`         | `/orders`         | Place new order + view history   |
| `orders.html`        | `/orders` (GET)   | Full order history display       |
| `admin-products.html`| `/products/:id`   | Admin edit/delete/create         |

## 📁 Folder Structure


```
project/  
├── backend/                 
├── frontend-html/           
└── README.md  
```
 > All forms use fetch() and localStorage for token management.






