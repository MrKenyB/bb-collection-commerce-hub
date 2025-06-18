
import React from 'react';
import { Link } from 'react-router-dom';

interface MobileMenuProps {
  isOpen: boolean;
  onMenuClick: (href: string) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onMenuClick }) => {
  const menuItems = [
    { name: 'Boutique', href: '/boutique', isActive: false },
    { name: 'Hommes', href: '/vetements-hommes', isActive: false },
    { name: 'Femmes', href: '/vetements-femmes', isActive: false },
    { name: 'Chaussures', href: '/chaussures-hommes', isActive: false },
    { name: 'Sacs', href: '/sacs-femmes', isActive: false },
    { name: 'À propos', href: '/a-propos', isActive: false }
  ];

  if (!isOpen) return null;

  return (
    <div className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-white/10 animate-slide-up">
      <div className="px-6 py-8 space-y-6">
        {menuItems.map((item, index) => (
          <Link
            key={item.name}
            to={item.href}
            className="block text-white hover:text-cyan-400 transition-all duration-300 font-semibold py-4 px-6 hover:bg-white/5 rounded-2xl group transform hover:translate-x-2"
            onClick={() => onMenuClick(item.href)}
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
  );
};

export default MobileMenu;
