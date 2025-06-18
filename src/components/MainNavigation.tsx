
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const MainNavigation: React.FC = () => {
  const location = useLocation();

  const menuItems = [
    { name: 'Boutique', href: '/boutique', isActive: false },
    { name: 'Hommes', href: '/vetements-hommes', isActive: false },
    { name: 'Femmes', href: '/vetements-femmes', isActive: false },
    { name: 'Chaussures', href: '/chaussures-hommes', isActive: false },
    { name: 'Sacs', href: '/sacs-femmes', isActive: false },
    { name: 'À propos', href: '/a-propos', isActive: false }
  ];

  const handleMenuClick = (href: string) => {
    console.log(`Navigating to: ${href}`);
  };

  return (
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
  );
};

export default MainNavigation;
