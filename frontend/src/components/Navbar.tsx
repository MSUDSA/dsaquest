import { useState } from 'react';
import { Link } from 'react-router-dom';
import NavbarAvatar from './ui/Avatar';
import ScrollingText from './ui/ScrollingText';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-end">
          <Link to="/" className="text-white px-4"><h1>DSAQUEST</h1></Link>
          {/* <marquee>This is a random fact, keep working hard</marquee> */}
          <ScrollingText text='This is a random fact, keep working hard' />

          {!isLoggedIn ?
           (
            <div>
           <Link to="/login" className="text-white px-4">Login</Link>
          <Link to="/signup" className="text-white px-4">Signup</Link>
            </div>
        ) :
      <div className='mr-5'>
        <NavbarAvatar />
        </div>
          }
      </div>
    </nav>
  );
};

export default Navbar;
