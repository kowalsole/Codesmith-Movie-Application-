# 🎬 Movie Tracker — Sagittarius Version

Movie Tracker is a full-stack application built by **Team Ghost Orchid** that allows users to search for movies, view results, and (in later versions) save and manage movies under a user profile. This version focuses on a modular React frontend, a connected backend API, and a scalable foundation for authentication and persistence.

---

## 🧭 Original Project Planning from Ghost Orchid

**Planning Diagram**  
👉 https://excalidraw.com/#json=-Nvi-ATqr5F4GeJHpV0l4,2hhlOAv0OqSsmJdCIWk2aQ

---

## 🛠 Tech Stack

### Frontend
- **React** — Component-based UI
- **Vite** — Fast development server and build tool
- **JavaScript (ES6+)**
- **CSS** — Custom styling
- **React Router** — Client-side routing

### Backend
- **Node.js** — JavaScript runtime
- **Express** — Backend framework and API routing

### Database / Persistence
- **MongoDB** *(optional / configurable)*  
  Used for storing user and watchlist data
- **Supabase** *(alternative option)*  
  Can be used in place of MongoDB depending on environment configuration

### Testing
- **Vitest** — Test runner
- **React Testing Library** — Component and integration testing
- **@testing-library/jest-dom** — Custom DOM matchers
- **jsdom** — Simulated browser environment for tests

### Tooling
- **npm** — Package manager
- **Git** — Version control
- **ESLint** — Code quality and linting

---

## 🚀 Getting Started

### Prerequisites

To run this project locally, ensure you have the following installed:

- **Node.js** (v18+ recommended, includes npm)
- **Git**

---

### Installation

1. Clone the repository
2. Install dependencies:
    ```bash
   npm install

### Running the Project

Start the development server:
    ```bash
    npm run dev

Follow the terminal output to open the locally hosted app in your browser.

---

## Version 1 (Ghost Orchids) vs Version 2 (Sagittarius)

### ✅ V1 Ghost Orchids Features
**Frontend**
- Movie search and tracker UI
- Fetching data from the backend API

**Backend**
- Local API endpoint for movie data
- Basic schema setup for users and watchlists

### 🌟 V2 Sagittarius Features
- Modularized frontend architecture
- New internal Movie Details page (replacing external IMDb redirects)
- User authentication, Sign-up and Login
- Cleaner, more consistent UI
- Fully connected frontend and backend with correct routing
- Component-level tests validate rendering logic
- Integration tests verify user flows and navigation

## 📌 Notes
This project is under active development and designed to be extended with additional features such as persistent user data, enhanced filtering, and improved UX.

