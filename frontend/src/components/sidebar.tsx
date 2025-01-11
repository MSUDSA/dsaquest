import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <nav style={{ backgroundColor: '#333' }} className="p-4 h-full w-1/6 fixed">
          <div className="container mx-auto flex flex-col">
            <h1 className="text-white text-lg mb-4">Dashboard</h1>
            <div>
              <Link to="/" className="text-white block px-4">Home</Link>
              <Link to="/login" className="text-white block px-4">Login</Link>
              <Link to="/signup" className="text-white block px-4">Signup</Link>
            </div>
          </div>
        </nav>
      );
    };
    
    export default Sidebar;