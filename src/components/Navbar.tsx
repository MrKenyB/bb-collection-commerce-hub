
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, User, Search, MapPin, Phone, Sparkles, Heart, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/useCart';
import SearchModal from '@/components/SearchModal';
import WishlistModal from '@/components/WishlistModal';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const { getTotalItems } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Boutique', href: '/boutique', isActive: false },
    { name: 'Hommes', href: '/vetements-hommes', isActive: false },
    { name: 'Femmes', href: '/vetements-femmes', isActive: false },
    { name: 'Chaussures', href: '/chaussures-hommes', isActive: false },
    { name: 'Sacs', href: '/sacs-femmes', isActive: false },
    { name: 'À propos', href: '/a-propos', isActive: false }
  ];

  const handleMenuClick = (href: string) => {
    setIsMenuOpen(false);
    console.log(`Navigating to: ${href}`);
  };

  return (
    <>
      {/* Top Ultra Bar */}
      <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-4 px-4 text-center text-sm relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
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

      {/* Main Navbar Ultra */}
      <nav className={`fixed top-[60px] left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-xl shadow-2xl border-b border-white/10' 
          : 'bg-gradient-to-r from-black/80 via-gray-900/80 to-black/80 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo Ultra */}
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

            {/* Desktop Menu Ultra */}
            <div className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => handleMenuClick(item.href)}
                  className={`relative text-white hover:text-cyan-400 transition-all duration-300 font-semibold py-2 px-4 rounded-2xl hover:bg-white/5 group ${
                    location.pathname === item.href ? 'text-cyan-400 bg-white/10' : ''
                  }`}
                >
                  {item.name}
                  <span className="absolute -bottom-2 left-4 w-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-8 rounded-full"></span>
                </Link>
              ))}
            </div>

            {/* Actions Ultra */}
            <div className="flex items-center space-x-3">
              <Button 
                variant="ghost" 
                size="icon" 
                className="hidden sm:flex text-white hover:bg-white/10 rounded-2xl hover:scale-110 transition-all duration-300 relative group"
                onClick={() => setIsSearchOpen(true)}
              >
                <Search className="h-5 w-5" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Button>
              
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-white hover:bg-white/10 rounded-2xl hover:scale-110 transition-all duration-300 relative group"
                onClick={() => setIsWishlistOpen(true)}
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
              
              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden text-white hover:bg-white/10 rounded-2xl hover:scale-110 transition-all duration-300"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Ultra */}
        {isMenuOpen && (
          <div className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-white/10 animate-slide-up">
            <div className="px-6 py-8 space-y-6">
              {menuItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block text-white hover:text-cyan-400 transition-all duration-300 font-semibold py-4 px-6 hover:bg-white/5 rounded-2xl group transform hover:translate-x-2"
                  onClick={() => handleMenuClick(item.href)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center justify-between">
                    <span>{item.name}</span>
                    <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <WishlistModal isOpen={isWishlistOpen} onClose={() => setIsWishlistOpen(false)} />
    </>
  );
};

export default Navbar;
