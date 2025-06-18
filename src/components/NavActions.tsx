
import React from 'react';
import { Search, ShoppingBag, User, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/useCart';

interface NavActionsProps {
  onSearchOpen: () => void;
  onWishlistOpen: () => void;
}

const NavActions: React.FC<NavActionsProps> = ({ onSearchOpen, onWishlistOpen }) => {
  const { getTotalItems } = useCart();

  return (
    <div className="flex items-center space-x-3">
      <Button 
        variant="ghost" 
        size="icon" 
        className="hidden sm:flex text-white hover:bg-white/10 rounded-2xl hover:scale-110 transition-all duration-300 relative group"
        onClick={onSearchOpen}
      >
        <Search className="h-5 w-5" />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </Button>
      
      <Button 
        variant="ghost" 
        size="icon" 
        className="text-white hover:bg-white/10 rounded-2xl hover:scale-110 transition-all duration-300 relative group"
        onClick={onWishlistOpen}
      >
        <Heart className="h-5 w-5" />
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </Button>
      
      <Button 
        variant="ghost" 
        size="icon" 
        className="text-white hover:bg-white/10 rounded-2xl hover:scale-110 transition-all duration-300 relative group"
        onClick={() => console.log('Opening account...')}
      >
        <User className="h-5 w-5" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </Button>
      
      <Button 
        variant="ghost" 
        size="icon" 
        className="relative text-white hover:bg-white/10 rounded-2xl hover:scale-110 transition-all duration-300 group"
        onClick={() => console.log('Opening cart...')}
      >
        <ShoppingBag className="h-5 w-5" />
        {getTotalItems() > 0 && (
          <span className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold animate-pulse shadow-lg">
            {getTotalItems()}
          </span>
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </Button>
    </div>
  );
};

export default NavActions;
