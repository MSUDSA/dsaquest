import { Link } from 'react-router-dom';
import NavbarAvatar from './ui/Avatar';
import ScrollingText from './ui/ScrollingText';
export interface userInfoType {
  name: string;
  email: string;
  src?: string;
}
type NavbarProps = {
  isLoggedIn: boolean,
  userInfo: userInfoType | null
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  setUserInfo : React.Dispatch<React.SetStateAction<userInfoType | null>>
}

const Navbar = ({isLoggedIn, userInfo, setUserInfo, setIsLoggedIn}: NavbarProps) => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-end">
        <Link to="/" className="text-white px-4"><h1>DSAQUEST</h1></Link>
        <ScrollingText text='This is a random fact, keep working hard' />

        {isLoggedIn && userInfo ?
          <div className='mr-5'>
            <NavbarAvatar name={userInfo.name} email={userInfo.email} src={userInfo.src} setIsLoggedIn={setIsLoggedIn} setUserInfo={setUserInfo}/>
          </div>
          :
          (
            <div>
              <Link to="/login" className="text-white px-4">Login</Link>
              <Link to="/signup" className="text-white px-4">Signup</Link>
            </div>
          )
        }
      </div>
    </nav>
  );
};

export default Navbar;
