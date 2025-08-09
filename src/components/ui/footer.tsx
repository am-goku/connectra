import React from "react";
import Link from "next/link";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white shadow-inner mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center">
        {/* Left */}
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} SocialSphere. All rights reserved.
        </p>

        {/* Links */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link href="/about" className="text-gray-500 hover:text-blue-600 transition">
            About
          </Link>
          <Link href="/privacy" className="text-gray-500 hover:text-blue-600 transition">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-gray-500 hover:text-blue-600 transition">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;