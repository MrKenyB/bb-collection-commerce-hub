
import React from 'react';
import { MapPin, Phone, Sparkles, Heart } from 'lucide-react';

const TopBar: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-4 px-4 text-center text-sm relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22m36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
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
