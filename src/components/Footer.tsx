
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="space-y-4">
            <h3 className="text-2xl font-light tracking-wide">BB_COLLECTION</h3>
            <p className="text-gray-300 font-light leading-relaxed">
              L'élégance à l'état pur. Découvrez notre collection de vêtements et accessoires 
              pour hommes et femmes, sélectionnés avec soin.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium">Navigation</h4>
            <div className="space-y-2 text-gray-300">
              <Link to="/boutique" className="block hover:text-white transition-colors font-light">
                Boutique
              </Link>
              <Link to="/vetements-hommes" className="block hover:text-white transition-colors font-light">
                Vêtements Hommes
              </Link>
              <Link to="/vetements-femmes" className="block hover:text-white transition-colors font-light">
                Vêtements Femmes
              </Link>
              <Link to="/nouveautes" className="block hover:text-white transition-colors font-light">
                Nouveautés
              </Link>
            </div>
          </div>

          {/* Service Client */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium">Service Client</h4>
            <div className="space-y-2 text-gray-300">
              <Link to="/contact" className="block hover:text-white transition-colors font-light">
                Contact
              </Link>
              <Link to="/livraison" className="block hover:text-white transition-colors font-light">
                Livraison & Retours
              </Link>
              <Link to="/taille" className="block hover:text-white transition-colors font-light">
                Guide des Tailles
              </Link>
              <Link to="/faq" className="block hover:text-white transition-colors font-light">
                FAQ
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium">Contact</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4" />
                <span className="font-light">contact@bb-collection.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4" />
                <span className="font-light">+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4" />
                <span className="font-light">Paris, France</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 font-light">
              © 2024 BB_COLLECTION. Tous droits réservés.
            </p>
            <div className="flex space-x-6 text-gray-400">
              <Link to="/mentions-legales" className="hover:text-white transition-colors font-light">
                Mentions Légales
              </Link>
              <Link to="/confidentialite" className="hover:text-white transition-colors font-light">
                Confidentialité
              </Link>
              <Link to="/cgv" className="hover:text-white transition-colors font-light">
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
