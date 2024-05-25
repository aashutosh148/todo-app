import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gray-800 text-white py-4 mb-8 px-5">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">To-Do List</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:text-gray-300 bg-blue-500 rounded-md p-3">
                Tasks
              </Link>
            </li>
            <li>
              <Link to="/create" className="hover:text-gray-300 bg-blue-500 rounded-md p-3">
                Create Task
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;