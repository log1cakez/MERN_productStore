# ProductStore - MERN Stack Application

A full-stack web application built with the MERN (MongoDB, Express.js, React, Node.js) stack for managing and displaying products. This application provides a modern, responsive interface for creating, viewing, and managing product information.

## 🚀 Features

- **Product Management**: Create, read, update, and delete products
- **Modern UI**: Built with React and Chakra UI for a beautiful, responsive design
- **Real-time Updates**: Fast and efficient data handling with MongoDB
- **RESTful API**: Clean and organized backend API structure
- **Responsive Design**: Mobile-friendly interface that works on all devices

## 🛠️ Tech Stack

### Backend

- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling tool
- **Nodemon** - Development server with auto-reload

### Frontend

- **React 19** - Modern React with latest features
- **Vite** - Fast build tool and development server
- **Chakra UI** - Accessible and customizable component library
- **React Router DOM** - Client-side routing
- **React Icons** - Popular icon library
- **Framer Motion** - Animation library

## 📁 Project Structure

```
ProductStore/
├── backend/                 # Backend server code
│   ├── config/             # Database configuration
│   ├── controllers/        # Request handlers
│   ├── models/            # Database models
│   ├── routes/            # API routes
│   └── server.js          # Main server file
├── frontend/               # React frontend application
│   ├── src/
│   │   ├── Components/    # Reusable UI components
│   │   ├── Pages/         # Page components
│   │   ├── App.jsx        # Main app component
│   │   └── main.jsx       # App entry point
│   ├── public/            # Static assets
│   └── package.json       # Frontend dependencies
└── package.json            # Backend dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB installed and running
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <your-repository-url>
   cd ProductStore
   ```

2. **Install backend dependencies**

   ```bash
   npm install
   ```

3. **Install frontend dependencies**

   ```bash
   cd frontend
   npm install
   cd ..
   ```

4. **Set up environment variables**
   Create a `.env` file in the backend directory:

   ```env
   MONGODB_URI=mongodb://localhost:27017/productstore
   PORT=5000
   ```

5. **Start the development servers**

   **Backend (Terminal 1):**

   ```bash
   npm run dev
   ```

   **Frontend (Terminal 2):**

   ```bash
   cd frontend
   npm run dev
   ```

The application will be available at:

- Frontend: http://localhost:5173
- Backend API: http://localhost:5000

## 📖 Usage

### Backend API Endpoints

- `GET /api/products` - Get all products
- `POST /api/products` - Create a new product
- `GET /api/products/:id` - Get a specific product
- `PUT /api/products/:id` - Update a product
- `DELETE /api/products/:id` - Delete a product

### Frontend Pages

- **Home Page** - Display all products
- **Create Page** - Add new products to the store

## 🔧 Development

### Available Scripts

**Backend:**

- `npm run dev` - Start development server with nodemon

**Frontend:**

- `npm run dev` - Start Vite development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Style

- ESLint configuration for consistent code quality
- React Hooks linting rules enabled
- Modern ES6+ syntax with module imports

## 🌟 Features in Development

- User authentication and authorization
- Product categories and filtering
- Search functionality
- Image upload for products
- Admin dashboard
- Order management system

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 👨‍💻 Author

Your Name - [Your GitHub Profile]

## 🙏 Acknowledgments

- React team for the amazing framework
- Vite for the fast build tool
- Chakra UI for the beautiful component library
- MongoDB team for the database solution
