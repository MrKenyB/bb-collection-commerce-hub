
import React from 'react';
import { MapPin, Phone, Sparkles, Heart } from 'lucide-react';

const TopBar: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-4 px-4 text-center text-sm relative overflow-hidden">
      <div className="absolute inset-0 opacity-20"></div>
      <div className="max-w-7xl mx-auto flex items-center justify-between relative z-10">
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <MapPin className="h-4 w-4 animate-pulse" />
            <span className="font-semibold">Congo-Brazzaville</span>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="h-4 w-4" />
            <span>+242 06 123 45 67</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-4 mx-auto md:mx-0">
          <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
            <Sparkles className="h-4 w-4 animate-pulse text-yellow-300" />
            <span className="font-bold">Livraison gratuite dès 75 000 FCFA</span>
            <Sparkles className="h-4 w-4 animate-pulse text-yellow-300" />
          </div>
        </div>
        
        <div className="hidden md:flex items-center space-x-4">
          <Heart className="h-4 w-4 text-red-300 animate-pulse" />
          <span className="text-xs font-medium">Made with love</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
