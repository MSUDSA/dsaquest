import { Link } from 'react-router-dom';

type SidebarProps = {
  route: string
}

const Sidebar = ({route} : SidebarProps) => {
  return (
    <aside className="w-1/5 bg-gray-800 text-white p-4 flex flex-col">
      <h2 className="text-lg font-bold mb-4">{route}</h2>

      <ul className="flex-grow">
        <li className="mb-2">
          <Link to="/dashboard" className="block py-2 hover:bg-gray-700 rounded">
            Dashboard
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/concepts" className="block py-2 hover:bg-gray-700 rounded">
            Concepts
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/quiz" className="block py-2 hover:bg-gray-700 rounded">
            Quiz
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/settings" className="block py-2 hover:bg-gray-700 rounded">
            Settings
          </Link>
        </li>
      </ul>
      <button className="bg-red-600 rounded-lg py-2 px-4 mt-auto hover:bg-red-800">
        Logout
      </button>
    </aside>

  );
};

export default Sidebar;