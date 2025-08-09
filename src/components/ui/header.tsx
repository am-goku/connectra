import React from "react";
import Link from "next/link";
import { FaSearch, FaBell, FaUserCircle } from "react-icons/fa";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          SocialSphere
        </Link>

        {/* Search Bar */}
        <div className="hidden md:flex items-center bg-gray-100 rounded-full px-3 py-1 w-1/3">
          <FaSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none w-full"
          />
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <FaBell className="text-gray-600 cursor-pointer hover:text-blue-600 transition" />
          <FaUserCircle className="text-gray-600 cursor-pointer hover:text-blue-600 transition" />
        </div>
      </div>
    </header>
  );
};

export default Header;