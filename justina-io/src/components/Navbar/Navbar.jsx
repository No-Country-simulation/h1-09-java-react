import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="absolute top-0 p-4 bg-white border border-gray-300 navbar md:flex md:items-center md:justify-between">
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
          <Link to='/'>
            <div className="flex items-center justify-start rtl:justify-end">
              <img src="../../public/img/logo-justina.svg" alt="Logo"></img>
            </div>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
