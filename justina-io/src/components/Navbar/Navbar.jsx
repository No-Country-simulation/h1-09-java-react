import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="absolute top-0 p-4 bg-white border border-gray-300 navbar md:flex md:items-center md:justify-between">
      <Link to="/login" className="flex items-center space-x-2">
        <img src="/logo.webp" alt="Logo" className="w-auto h-10" />
      </Link>
    </div>
  );
};

export default Navbar;
