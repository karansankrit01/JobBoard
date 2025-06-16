import React from 'react'
import './App.css'
import Navbar from './navbar.jsx'
import Home from './components/Home/Home.jsx'
import Login from './components/Auth/Login.jsx'
import Register from './components/Auth/Register.jsx'
import { useAuth } from './components/Auth/AuthContext.jsx'
import Dashboard from './components/Dashboard/Dashboard.jsx'
import Jobs from './components/Dashboard/Jobs.jsx'
import PostJob from './components/Dashboard/PostJob.jsx'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'


const App = () => {
  const { login, register, user } = useAuth();

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login onLogin={login} />} />
        <Route path="/register" element={<Register onRegister={register} />} />
        <Route
          path="/dashboard"
          element={user ? <Dashboard /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/jobs"
          element={user ? <Jobs /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/jobs/create"
          element={user ? <PostJob /> : <Navigate to="/login" replace />}
        />
      </Routes>

    </Router>
  )
}

export default App
