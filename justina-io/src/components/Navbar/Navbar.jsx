import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar bg-white border border-gray-300 p-4 md:flex md:items-center md:justify-between">
      <Link to="/login" className="flex items-center space-x-2">
        <img src="/logo.webp" alt="Logo" className="h-10 w-auto" />
      </Link>
    </div>
  );
};

export default Navbar;