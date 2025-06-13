
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, Phone, MapPin, Sparkles, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 pattern-grid opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Logo et description moderne */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 congo-forest rounded-2xl flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold">BB_COLLECTION</h3>
                <p className="text-emerald-300 text-sm">Congo-Brazzaville</p>
              </div>
            </div>
            <p className="text-gray-300 font-light leading-relaxed">
              L'excellence de la mode africaine moderne. Découvrez notre univers de vêtements 
              et accessoires premium, créés avec passion au cœur du Congo.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white hover:bg-emerald-600 transition-all hover:scale-110">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white hover:bg-emerald-600 transition-all hover:scale-110">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation moderne */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-emerald-300 font-display">Navigation</h4>
            <div className="space-y-3 text-gray-300">
              <Link to="/boutique" className="block hover:text-white transition-colors font-medium hover:translate-x-2 transform duration-200">
                Boutique
              </Link>
              <Link to="/vetements-hommes" className="block hover:text-white transition-colors font-medium hover:translate-x-2 transform duration-200">
                Vêtements Hommes
              </Link>
              <Link to="/vetements-femmes" className="block hover:text-white transition-colors font-medium hover:translate-x-2 transform duration-200">
                Vêtements Femmes
              </Link>
              <Link to="/nouveautes" className="block hover:text-white transition-colors font-medium hover:translate-x-2 transform duration-200">
                Nouveautés
              </Link>
            </div>
          </div>

          {/* Service Client moderne */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-emerald-300 font-display">Service Client</h4>
            <div className="space-y-3 text-gray-300">
              <Link to="/contact" className="block hover:text-white transition-colors font-medium hover:translate-x-2 transform duration-200">
                Contact
              </Link>
              <Link to="/livraison" className="block hover:text-white transition-colors font-medium hover:translate-x-2 transform duration-200">
                Livraison & Retours
              </Link>
              <Link to="/taille" className="block hover:text-white transition-colors font-medium hover:translate-x-2 transform duration-200">
                Guide des Tailles
              </Link>
              <Link to="/faq" className="block hover:text-white transition-colors font-medium hover:translate-x-2 transform duration-200">
                FAQ
              </Link>
            </div>
          </div>

          {/* Contact moderne */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-emerald-300 font-display">Contact</h4>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-emerald-600/20 rounded-xl flex items-center justify-center group-hover:bg-emerald-600 transition-colors">
                  <Mail className="h-4 w-4" />
                </div>
                <span className="font-medium">contact@bb-collection.com</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-emerald-600/20 rounded-xl flex items-center justify-center group-hover:bg-emerald-600 transition-colors">
                  <Phone className="h-4 w-4" />
                </div>
                <span className="font-medium">+242 06 123 45 67</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-emerald-600/20 rounded-xl flex items-center justify-center group-hover:bg-emerald-600 transition-colors">
                  <MapPin className="h-4 w-4" />
                </div>
                <span className="font-medium">Congo-Brazzaville</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <Heart className="h-5 w-5 text-red-400 fill-red-400" />
              <p className="text-gray-400 font-medium">
                © 2024 BB_COLLECTION. Créé avec passion au Congo.
              </p>
            </div>
            <div className="flex space-x-8 text-gray-400">
              <Link to="/mentions-legales" className="hover:text-white transition-colors font-medium">
                Mentions Légales
              </Link>
              <Link to="/confidentialite" className="hover:text-white transition-colors font-medium">
                Confidentialité
              </Link>
              <Link to="/cgv" className="hover:text-white transition-colors font-medium">
                CGV
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
