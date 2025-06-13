
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingBag, User, Search, MapPin, Phone, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Boutique', href: '/boutique' },
    { name: 'Vêtements Hommes', href: '/vetements-hommes' },
    { name: 'Chaussures Hommes', href: '/chaussures-hommes' },
    { name: 'Sacs Femmes', href: '/sacs-femmes' },
    { name: 'Vêtements Femmes', href: '/vetements-femmes' },
    { name: 'À propos', href: '/a-propos' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <>
      {/* Top bar modern */}
      <div className="congo-forest text-white py-3 px-4 text-center text-sm relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-20"></div>
        <div className="max-w-7xl mx-auto flex items-center justify-center space-x-8 relative z-10">
          <div className="flex items-center space-x-2">
            <MapPin className="h-4 w-4" />
            <span className="font-medium">Congo-Brazzaville</span>
          </div>
          <div className="hidden md:flex items-center space-x-2">
            <Phone className="h-4 w-4" />
            <span>+242 06 123 45 67</span>
          </div>
          <div className="hidden md:flex items-center space-x-2">
            <Sparkles className="h-4 w-4 animate-pulse" />
            <span>Livraison gratuite dès 75 000 FCFA</span>
            <Sparkles className="h-4 w-4 animate-pulse" />
          </div>
        </div>
      </div>

      <nav className="fixed top-[52px] left-0 right-0 z-50 card-modern border-b border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo modern */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 congo-forest rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-display font-bold text-gradient">
                  BB_COLLECTION
                </div>
                <div className="text-xs text-emerald-600 font-medium">
                  Congo-Brazzaville
                </div>
              </div>
            </Link>

            {/* Desktop Menu modern */}
            <div className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-700 hover:text-emerald-600 transition-all font-medium relative group py-2"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 transition-all group-hover:w-full rounded-full"></span>
                </Link>
              ))}
            </div>

            {/* Icons modern */}
            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="icon" className="hidden sm:flex hover:bg-emerald-50 rounded-2xl">
                <Search className="h-5 w-5 text-emerald-600" />
              </Button>
              <Link to="/mon-compte">
                <Button variant="ghost" size="icon" className="hover:bg-emerald-50 rounded-2xl">
                  <User className="h-5 w-5 text-emerald-600" />
                </Button>
              </Link>
              <Link to="/panier">
                <Button variant="ghost" size="icon" className="relative hover:bg-emerald-50 rounded-2xl">
                  <ShoppingBag className="h-5 w-5 text-emerald-600" />
                  <span className="absolute -top-2 -right-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold animate-pulse">
                    0
                  </span>
                </Button>
              </Link>
              
              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden hover:bg-emerald-50 rounded-2xl"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-5 w-5 text-emerald-600" /> : <Menu className="h-5 w-5 text-emerald-600" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu modern */}
        {isMenuOpen && (
          <div className="lg:hidden card-modern border-t border-emerald-100 mt-1">
            <div className="px-4 py-6 space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block text-gray-700 hover:text-emerald-600 transition-colors font-medium py-3 border-b border-emerald-50 last:border-b-0 hover:bg-emerald-50 px-4 rounded-xl"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
