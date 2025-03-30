import React from 'react';
import { Link } from 'react-router-dom';
import { QrCode } from 'lucide-react';

function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <QrCode size={24} className="text-purple-600" />
            <span className="text-xl font-bold text-gray-900">MakeMyQR</span>
          </Link>
          <div className="flex space-x-4">
            <Link to="/" className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Home
            </Link>
            <Link to="/privacy-policy" className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;