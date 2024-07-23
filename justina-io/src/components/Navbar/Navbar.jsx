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
            <div className="flex items-center">
              <div className="flex items-center ms-3">
                <div>
                  <button
                    type="button"
                    className="flex text-sm avatar-nav rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                    aria-expanded="false"
                    data-dropdown-toggle="dropdown-user"
                  >
                    <img
                      className="w-8 h-8 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                      alt="user photo"
                    />
                  </button>
                </div>
           
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
