import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="w-1/4 bg-gray-800 text-white p-4">
        <h2 className="text-lg font-bold">Dashboard</h2>
        <ul className="mt-4">
          <li>
            <Link to="/" className="block py-2 hover:bg-gray-700">Home</Link>
          </li>
          <li>
            <Link to="/login" className="block py-2 hover:bg-gray-700">Login</Link>
          </li>
          <li>
            <Link to="/signup" className="block py-2 hover:bg-gray-700">Signup</Link>
          </li>
          {/* Add more links as needed */}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 bg-gray-100">
        <h1 className="text-2xl font-bold">Main Content Area</h1>
        {/* Add your main content here */}
      </main>
    </div>
  );
};

export default Dashboard;