# SIH Project

## 📁 Project Structure

```
SIH/
├── README.md                    # Project documentation
├── .git/                       # Git repository files
├── backend/                    # Backend Node.js application
│   ├── .gitignore             # Backend-specific gitignore
│   ├── package.json           # Backend dependencies and scripts
│   ├── package-lock.json      # Lock file for backend dependencies
│   ├── server.js              # Main server entry point
│   ├── controllers/           # Business logic controllers
│   │   └── bus.controller.js  # Bus-related API logic
│   ├── routes/                # API route definitions
│   │   └── bus.routes.js      # Bus-related routes
│   ├── data/                  # Static data files
│   │   └── buses.js           # Bus data
│   ├── simulators/            # Real-time simulation modules
│   │   └── busSimulator.js    # Bus location simulator
│   └── node_modules/          # Backend dependencies
└── frontend/                  # Frontend React application
    ├── .gitignore            # Frontend-specific gitignore
    ├── package.json          # Frontend dependencies and scripts
    ├── package-lock.json     # Lock file for frontend dependencies
    ├── README.md             # Frontend-specific documentation
    ├── index.html            # Main HTML template
    ├── vite.config.js        # Vite configuration
    ├── eslint.config.js      # ESLint configuration
    ├── public/               # Static assets
    │   └── vite.svg          # Vite logo
    ├── src/                  # Source code
    │   ├── main.jsx          # Application entry point
    │   ├── App.jsx           # Main App component
    │   ├── App.css           # App-specific styles
    │   ├── index.css         # Global styles
    │   ├── Home.jsx          # Home page component
    │   ├── Home.css          # Home page styles
    │   ├── BusList.jsx       # Bus list component
    │   ├── BusDetail.jsx     # Bus detail component
    │   └── assets/           # Static assets
    │       └── react.svg     # React logo
    └── node_modules/         # Frontend dependencies
```

## 🚀 Tech Stack

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Architecture**: MVC Pattern

### Frontend
- **Framework**: React.js
- **Build Tool**: Vite
- **Styling**: CSS

## 📝 Project Overview

This is a Smart India Hackathon (SIH) project that appears to be a bus tracking/management system with:

- **Real-time bus tracking**: Bus location simulation and tracking
- **Bus management**: List and detail views for buses
- **API-driven architecture**: Separate backend and frontend applications
- **Modern development stack**: React + Node.js with Vite for fast development

## 🛠️ Development Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Backend Setup
```bash
cd backend
npm install
npm start
```

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

## 📂 Key Components

- **Bus Controller**: Handles bus-related API operations
- **Bus Simulator**: Simulates real-time bus location updates
- **Bus List/Detail Views**: Frontend components for displaying bus information
- **Route Management**: API routes for bus operations