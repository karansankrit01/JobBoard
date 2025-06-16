import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from './components/Auth/AuthContext'

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <h1 className="logo-text">Jobify</h1>
        </div>
        <ul className="nav-links">
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/jobs">JOBS</Link></li>
          <li><Link to="/jobs/create">CREATE JOB</Link></li>
          {/* <li><Link to="/jobs/1">VIEW JOB</Link></li> */}
          <li><Link to="/jobs/1/profile">PROFILE</Link></li>
          {user && <li><Link to="/dashboard">DASHBOARD</Link></li>}
        </ul>
        {!user ? (
          <div>
            <button className="login-btn">
              <Link to="/login">LOGIN</Link>
            </button>
            <button className="login-btn">
              <Link to="/register">REGISTER</Link>
            </button>
          </div>
        ) : (
          <button className="login-btn" onClick={handleLogout}>
            LOGOUT
          </button>
        )}
      </nav>
    </div>
  )
}

export default Navbar
