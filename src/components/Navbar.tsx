
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, User, Search, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TopBar from './TopBar';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Boutique', href: '/boutique' },
    { name: 'Hommes', href: '/vetements-hommes' },
    { name: 'Femmes', href: '/vetements-femmes' },
    { name: 'Chaussures', href: '/chaussures-hommes' },
    { name: 'Sacs', href: '/sacs-femmes' },
    { name: 'À propos', href: '/a-propos' }
  ];

  const handleCartClick = () => {
    console.log('Opening cart...');
  };

  const handleSearchClick = () => {
    console.log('Opening search...');
  };

  const handleAccountClick = () => {
    console.log('Opening account...');
  };

  return (
    <>
      <TopBar />

      {/* Main Navbar */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-dark shadow-2xl' : 'glass-ultra'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-4 group">
              <div className="relative">
                <div className="w-14 h-14 gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl">
                  <Sparkles className="h-8 w-8 text-white animate-pulse" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
              </div>
              <div>
                <div className="text-2xl font-space font-bold gradient-text">
                  BB_COLLECTION
                </div>
                <div className="text-xs text-gray-400 font-medium">
                  Congo-Brazzaville • Premium
                </div>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`relative text-white hover:text-blue-400 transition-all font-medium py-2 px-4 rounded-full hover:bg-white/5 group ${
                    location.pathname === item.href ? 'text-blue-400' : ''
                  }`}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-4 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all group-hover:w-8 rounded-full"></span>
                </Link>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-3">
              <Button 
                variant="ghost" 
                size="icon" 
                className="hidden sm:flex text-white hover:bg-white/10 rounded-2xl hover:scale-110 transition-all"
                onClick={handleSearchClick}
              >
                <Search className="h-5 w-5" />
              </Button>
              
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-white hover:bg-white/10 rounded-2xl hover:scale-110 transition-all"
                onClick={handleAccountClick}
              >
                <User className="h-5 w-5" />
              </Button>
              
              <Button 
                variant="ghost" 
                size="icon" 
                className="relative text-white hover:bg-white/10 rounded-2xl hover:scale-110 transition-all"
                onClick={handleCartClick}
              >
                <ShoppingBag className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-gradient-to-r from-pink-500 to-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold animate-pulse">
                    {cartCount}
                  </span>
                )}
              </Button>
              
              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden text-white hover:bg-white/10 rounded-2xl"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden glass-dark border-t border-white/10 animate-slide-up">
            <div className="px-4 py-6 space-y-4">
              {menuItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block text-white hover:text-blue-400 transition-colors font-medium py-4 px-6 hover:bg-white/5 rounded-2xl group"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center justify-between">
                    <span>{item.name}</span>
                    <div className="w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                </Link>
              ))}
              
              {/* Mobile Search */}
              <div className="pt-4 border-t border-white/10">
                <Button 
                  variant="ghost" 
                  className="w-full text-white hover:bg-white/5 rounded-2xl py-4"
                  onClick={handleSearchClick}
                >
                  <Search className="mr-3 h-5 w-5" />
                  Rechercher
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
