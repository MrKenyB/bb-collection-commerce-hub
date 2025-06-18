
import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center space-x-4 group">
      <div className="relative">
        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-2xl">
          <Sparkles className="h-8 w-8 text-white animate-spin" style={{animationDuration: '3s'}} />
        </div>
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse shadow-lg"></div>
      </div>
      <div>
        <div className="text-2xl font-black bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
          BB_COLLECTION
        </div>
        <div className="text-xs text-cyan-400 font-semibold tracking-wider">
          Congo-Brazzaville • Luxury Fashion
        </div>
      </div>
    </Link>
  );
};

export default Logo;
