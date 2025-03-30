import React from 'react';
import { Link } from 'react-router-dom';
import { QrCode, Heart } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-2">
            <QrCode size={20} className="text-purple-600" />
            <span className="text-lg font-semibold text-gray-900">MakeMyQR</span>
          </div>
          <div className="flex items-center space-x-1 text-sm text-gray-500">
            <span>Made with</span>
            <Heart size={16} className="text-red-500 fill-current" />
            <span>by Hoomans Project</span>
          </div>
          <div className="flex space-x-4 text-sm">
            <Link to="/" className="text-gray-500 hover:text-purple-600 transition-colors">
              Home
            </Link>
            <Link to="/privacy-policy" className="text-gray-500 hover:text-purple-600 transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;