# softNexis Task 1

A full-stack product management application with a React + Vite frontend and an Express + MongoDB backend. The app supports product listing, authentication, adding products, editing, and deletion.

## Features

- View all products
- Add new products (authenticated)
- Edit existing products (authenticated)
- Delete products (authenticated)
- User registration and login
- Backend API with Express, Mongoose, JWT auth, and validation
- Frontend built with React, React Router, Tailwind CSS, and Axios

## Tech stack

- Frontend
  - React
  - Vite
  - React Router DOM
  - Axios
  - Tailwind CSS
- Backend
  - Node.js
  - Express
  - Mongoose
  - express-validator
  - dotenv
  - CORS
  - JSON Web Tokens

## Repository structure

- `backend/` - Express API server
  - `controllers/` - request handlers
  - `routes/` - API routes
  - `models/` - Mongoose schemas
  - `middleware/` - authentication and validation
- `frontend/` - React application
  - `src/` - React components, services, and styling

## Prerequisites

- Node.js 18+ / npm
- MongoDB instance or Atlas cluster

## Setup

### Backend

1. Change into the backend folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file with your MongoDB connection string and JWT secret:
   ```env
   MONGODB_URI=mongodb://localhost:27017/your_database_name
   JWT_SECRET=your_jwt_secret
   ```
4. Start the server:
   ```bash
   npm run server
   ```

The backend listens on `http://localhost:3000` and exposes routes under `/api/products` and `/api/user`.

### Frontend

1. Change into the frontend folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file with the backend URL:
   ```env
   VITE_BACKEND_URL=http://localhost:3000/api
   ```
4. Start the frontend dev server:
   ```bash
   npm run dev
   ```

The frontend runs on `http://localhost:5173` by default and communicates with the backend at `http://localhost:3000/api`.

## API Endpoints

### Products
- `GET /api/products/list` - fetch all products
- `POST /api/products/create` - create a new product (requires auth)
- `PUT /api/products/modify/:_id` - update an existing product (requires auth)
- `DELETE /api/products/remove/:_id` - delete a product (requires auth)

### User auth
- `POST /api/user/register` - register a new user
- `POST /api/user/login` - login and receive JWT token

## Product schema

- `name` (string, required)
- `price` (number, required, > 0)
- `inStock` (boolean, default: true)

## Notes

- The backend allows requests from `http://localhost:5173` via CORS.
- Authentication is required for product creation, update, and deletion.
- Product validation is applied on create and update.
- If using MongoDB Atlas, ensure your cluster is reachable and your connection string is correct.

## Troubleshooting

- If the frontend cannot reach the backend, confirm the backend server is running and `VITE_BACKEND_URL` matches the backend base URL.
- If authentication fails, confirm the backend `.env` includes `JWT_SECRET` and that the token is stored in `localStorage`.
- Inspect browser console and terminal logs for request failures and validation messages.

## License

This repository does not specify a license.
