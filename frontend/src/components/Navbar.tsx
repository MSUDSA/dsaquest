import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-white px-4">DSA QUEST</Link>
        <div>
        <Link to="/dashboard" className="text-white px-4">Dashboard</Link>
          <Link to="/login" className="text-white px-4">Login</Link>
          <Link to="/signup" className="text-white px-4">Signup</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
