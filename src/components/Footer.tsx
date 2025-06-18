
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, Phone, MapPin, Sparkles, Heart, Twitter, Youtube, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription submitted');
  };

  const handleSocialClick = (platform: string) => {
    console.log(`Opening ${platform}...`);
  };

  return (
    <footer className="relative overflow-hidden bg-black text-white">
      <div className="absolute inset-0 gradient-dark opacity-50"></div>
      <div className="absolute inset-0 pattern-grid-ultra opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 py-24 relative z-10">
        
        {/* Newsletter Section Ultra */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 glass-ultra rounded-full text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4 mr-2 text-yellow-400 animate-pulse" />
            Restez connecté
          </div>
          <h3 className="text-4xl md:text-5xl font-space font-bold mb-6">
            <span className="gradient-text">Abonnez-vous</span> à notre newsletter
          </h3>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Recevez en exclusivité nos nouveautés, offres spéciales et tendances mode
          </p>
          
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Votre adresse email..."
              className="glass-ultra border-white/20 text-white placeholder:text-gray-400 rounded-2xl px-6 py-4 text-lg"
              required
            />
            <Button type="submit" className="btn-ultra px-8 py-4 rounded-2xl text-lg font-bold">
              <Send className="w-5 h-5 mr-2" />
              S'abonner
            </Button>
          </form>
        </div>

        <div className="grid md:grid-cols-4 gap-12 mb-16">
          
          {/* Logo & Description Ultra */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 gradient-primary rounded-3xl flex items-center justify-center animate-pulse-glow">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-space font-bold gradient-text">BB_COLLECTION</h3>
                <p className="text-blue-400 text-sm font-medium">Congo-Brazzaville</p>
              </div>
            </div>
            <p className="text-gray-400 font-light leading-relaxed">
              L'excellence de la mode africaine moderne. Chaque pièce raconte une histoire, 
              celle de notre patrimoine et de notre vision d'avenir.
            </p>
            
            {/* Social Media Ultra */}
            <div className="flex space-x-4">
              {[
                { icon: Facebook, name: 'Facebook', color: 'hover:text-blue-500' },
                { icon: Instagram, name: 'Instagram', color: 'hover:text-pink-500' },
                { icon: Twitter, name: 'Twitter', color: 'hover:text-blue-400' },
                { icon: Youtube, name: 'Youtube', color: 'hover:text-red-500' }
              ].map((social) => (
                <button 
                  key={social.name}
                  onClick={() => handleSocialClick(social.name)}
                  className={`w-12 h-12 glass-ultra rounded-2xl flex items-center justify-center text-gray-400 ${social.color} transition-all hover:scale-110 hover:shadow-xl`}
                >
                  <social.icon className="h-5 w-5" />
                </button>
              ))}
            </div>
          </div>

          {/* Navigation Ultra */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold gradient-text font-space">Navigation</h4>
            <div className="space-y-3">
              {[
                { name: 'Boutique', href: '/boutique' },
                { name: 'Vêtements Hommes', href: '/vetements-hommes' },
                { name: 'Vêtements Femmes', href: '/vetements-femmes' },
                { name: 'Nouveautés', href: '/nouveautes' },
                { name: 'Promotions', href: '/promotions' }
              ].map((link) => (
                <Link 
                  key={link.name}
                  to={link.href} 
                  className="block text-gray-400 hover:text-white transition-all font-medium hover:translate-x-2 transform duration-200 relative group"
                >
                  <span className="absolute -left-4 top-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all group-hover:w-3 transform -translate-y-1/2 rounded-full"></span>
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Service Client Ultra */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold gradient-text font-space">Support</h4>
            <div className="space-y-3">
              {[
                { name: 'Contact', href: '/contact' },
                { name: 'Livraison & Retours', href: '/livraison' },
                { name: 'Guide des Tailles', href: '/taille' },
                { name: 'FAQ', href: '/faq' },
                { name: 'Mon Compte', href: '/mon-compte' }
              ].map((link) => (
                <Link 
                  key={link.name}
                  to={link.href} 
                  className="block text-gray-400 hover:text-white transition-all font-medium hover:translate-x-2 transform duration-200 relative group"
                >
                  <span className="absolute -left-4 top-1/2 w-0 h-0.5 bg-gradient-to-r from-green-400 to-teal-500 transition-all group-hover:w-3 transform -translate-y-1/2 rounded-full"></span>
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Ultra */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold gradient-text font-space">Contact</h4>
            <div className="space-y-4">
              {[
                { icon: Mail, text: 'contact@bb-collection.com', color: 'group-hover:text-blue-400' },
                { icon: Phone, text: '+242 06 123 45 67', color: 'group-hover:text-green-400' },
                { icon: MapPin, text: 'Congo-Brazzaville', color: 'group-hover:text-purple-400' }
              ].map((contact, index) => (
                <div key={index} className="flex items-center space-x-4 group cursor-pointer">
                  <div className="w-12 h-12 glass-ultra rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all">
                    <contact.icon className={`h-5 w-5 text-gray-400 ${contact.color} transition-colors`} />
                  </div>
                  <span className="text-gray-400 group-hover:text-white transition-colors font-medium">{contact.text}</span>
                </div>
              ))}
            </div>
            
            {/* Hours */}
            <div className="glass-ultra rounded-2xl p-4 mt-6">
              <h5 className="text-sm font-bold text-white mb-2">Horaires</h5>
              <div className="text-xs text-gray-400 space-y-1">
                <div className="flex justify-between">
                  <span>Lun - Ven</span>
                  <span>8h - 18h</span>
                </div>
                <div className="flex justify-between">
                  <span>Samedi</span>
                  <span>9h - 17h</span>
                </div>
                <div className="flex justify-between">
                  <span>Dimanche</span>
                  <span className="text-red-400">Fermé</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section Ultra */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-3">
              <Heart className="h-5 w-5 text-red-400 fill-red-400 animate-pulse" />
              <p className="text-gray-400 font-medium">
                © 2024 BB_COLLECTION. Conçu avec amour au <span className="gradient-text font-bold">Congo-Brazzaville</span>
              </p>
            </div>
            
            <div className="flex space-x-8">
              {[
                { name: 'Mentions Légales', href: '/mentions-legales' },
                { name: 'Confidentialité', href: '/confidentialite' },
                { name: 'CGV', href: '/cgv' }
              ].map((link) => (
                <Link 
                  key={link.name}
                  to={link.href} 
                  className="text-gray-500 hover:text-white transition-colors text-sm font-medium hover:underline"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Trust Badges */}
          <div className="flex justify-center items-center space-x-8 mt-8 pt-8 border-t border-white/5">
            <div className="text-center">
              <div className="text-2xl font-bold gradient-text">100%</div>
              <div className="text-xs text-gray-500">Sécurisé</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold gradient-text">24/7</div>
              <div className="text-xs text-gray-500">Support</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold gradient-text">🇨🇬</div>
              <div className="text-xs text-gray-500">Made in Congo</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
