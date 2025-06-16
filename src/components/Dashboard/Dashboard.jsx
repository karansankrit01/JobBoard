import React from 'react';
import { useAuth } from '../Auth/AuthContext';
import { MdAddchart } from "react-icons/md";
import { MdQueryStats } from "react-icons/md";
import { IoStatsChart } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div style={{ padding: '2rem' }}>
      <h2>WelCome To <span>JOBIFY</span></h2>
      <p className='welcome-message'>Welcome, <b>{user?.email}</b>!</p>
    <div className="left">
      <h3 className='dashboard-title'>Dashboard</h3>

      <ul className='dashboard-menu'>
        <li><a href="/jobs" > <IoStatsChart />All Jobs</a></li>
        <li><a href="/applications"><MdAddchart /> Add jobs</a></li>
        <li><a href="/settings"><MdQueryStats />Stats</a></li>
        <li><a href="/profile"><CgProfile />Profile</a></li>
      </ul>
    </div>
    <div className="right">
      <p>This is the right side content.</p>
      <p>Here you can manage your jobs, view applications, and more.</p>
      <button className='logout-button' onClick={() => window.location.href = '/login'}>Logout</button>
    </div>
      
    </div>
  );
};

export default Dashboard; 