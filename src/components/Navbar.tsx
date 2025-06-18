
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SearchModal from '@/components/SearchModal';
import WishlistModal from '@/components/WishlistModal';
import TopBar from '@/components/TopBar';
import Logo from '@/components/Logo';
import MainNavigation from '@/components/MainNavigation';
import NavActions from '@/components/NavActions';
import MobileMenu from '@/components/MobileMenu';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuClick = (href: string) => {
    setIsMenuOpen(false);
    console.log(`Navigating to: ${href}`);
  };

  return (
    <>
      <TopBar />

      <nav className={`fixed top-[60px] left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-xl shadow-2xl border-b border-white/10' 
          : 'bg-gradient-to-r from-black/80 via-gray-900/80 to-black/80 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            <Logo />

            <MainNavigation />

            <div className="flex items-center space-x-3">
              <NavActions 
                onSearchOpen={() => setIsSearchOpen(true)}
                onWishlistOpen={() => setIsWishlistOpen(true)}
              />
              
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

        <MobileMenu isOpen={isMenuOpen} onMenuClick={handleMenuClick} />
      </nav>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <WishlistModal isOpen={isWishlistOpen} onClose={() => setIsWishlistOpen(false)} />
    </>
  );
};

export default Navbar;
