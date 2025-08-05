import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
      };
  return (
    <div className="text-center mt-20">
    <h1 className="text-3xl font-bold mb-4">Welcome to the Dashboard 🎉</h1>
    <button
      onClick={handleLogout}
      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
    >
      Logout
    </button>
  </div>
  );
};

export default Dashboard;
