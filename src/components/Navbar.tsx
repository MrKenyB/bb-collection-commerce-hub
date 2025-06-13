
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingBag, User, Search, MapPin, Phone } from 'lucide-react';
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
      {/* Top bar avec info Congo */}
      <div className="bg-gradient-to-r from-orange-500 via-yellow-500 to-red-500 text-white py-2 px-4 text-center text-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-center space-x-6">
          <div className="flex items-center space-x-2">
            <MapPin className="h-4 w-4" />
            <span className="font-medium">Pointe-Noire, République du Congo</span>
          </div>
          <div className="hidden md:flex items-center space-x-2">
            <Phone className="h-4 w-4" />
            <span>+242 06 123 45 67</span>
          </div>
          <div className="hidden md:block">
            <span className="animate-pulse">🇨🇬 Livraison dans tout le Congo 🇨🇬</span>
          </div>
        </div>
      </div>

      <nav className="fixed top-[44px] left-0 right-0 z-50 glass-effect border-b border-orange-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold tracking-wide bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent hover:from-orange-700 hover:to-red-700 transition-all">
              BB_COLLECTION
              <div className="text-xs text-orange-600 font-normal">Pointe-Noire • Congo</div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-700 hover:text-orange-600 transition-colors font-medium tracking-wide relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 transition-all group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="hidden sm:flex hover:bg-orange-50">
                <Search className="h-5 w-5 text-orange-600" />
              </Button>
              <Link to="/mon-compte">
                <Button variant="ghost" size="icon" className="hover:bg-orange-50">
                  <User className="h-5 w-5 text-orange-600" />
                </Button>
              </Link>
              <Link to="/panier">
                <Button variant="ghost" size="icon" className="relative hover:bg-orange-50">
                  <ShoppingBag className="h-5 w-5 text-orange-600" />
                  <span className="absolute -top-1 -right-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse-warm">
                    0
                  </span>
                </Button>
              </Link>
              
              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden hover:bg-orange-50"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-5 w-5 text-orange-600" /> : <Menu className="h-5 w-5 text-orange-600" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden glass-effect border-t border-orange-200">
            <div className="px-4 py-4 space-y-3">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block text-gray-700 hover:text-orange-600 transition-colors font-medium py-2 border-b border-orange-100 last:border-b-0"
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
