
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search, ShoppingBag, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Image d'illustration */}
        <div className="relative mb-12">
          <img 
            src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&q=80&w=800" 
            alt="Page non trouvée"
            className="w-full max-w-lg mx-auto rounded-3xl shadow-2xl"
          />
          <div className="absolute -top-6 -right-6 w-24 h-24 congo-sunset rounded-full flex items-center justify-center shadow-xl animate-float">
            <Sparkles className="h-12 w-12 text-white animate-pulse" />
          </div>
        </div>

        {/* Contenu principal */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-8xl md:text-9xl font-display font-black text-transparent bg-clip-text congo-sunset animate-gradient">
              404
            </h1>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 leading-tight">
              Oops! Cette page s'est <br />
              <span className="text-gradient">égarée en chemin</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Il semblerait que cette page ait pris le mauvais chemin. 
              Mais ne vous inquiétez pas, nous allons vous ramener sur la bonne route !
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/">
              <Button className="btn-congo px-8 py-4 text-lg font-bold rounded-2xl shadow-xl group">
                <Home className="mr-3 h-5 w-5 group-hover:animate-bounce" />
                Retour à l'accueil
              </Button>
            </Link>
            
            <Link to="/boutique">
              <Button variant="outline" className="border-emerald-500 text-emerald-600 hover:bg-emerald-50 px-8 py-4 text-lg font-semibold rounded-2xl">
                <ShoppingBag className="mr-3 h-5 w-5" />
                Découvrir la boutique
              </Button>
            </Link>
          </div>

          {/* Suggestions rapides */}
          <div className="pt-12">
            <p className="text-gray-500 mb-6 font-medium">Ou explorez ces sections populaires :</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              {[
                { name: "Vêtements Hommes", path: "/vetements-hommes" },
                { name: "Sacs Femmes", path: "/sacs-femmes" },
                { name: "Chaussures", path: "/chaussures-hommes" },
                { name: "Mon Compte", path: "/mon-compte" }
              ].map((link, index) => (
                <Link key={index} to={link.path}>
                  <div className="card-modern rounded-xl p-4 hover-lift group">
                    <p className="text-sm font-medium text-gray-700 group-hover:text-emerald-600 transition-colors">
                      {link.name}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Décoration */}
        <div className="absolute top-1/4 left-10 w-16 h-16 congo-forest/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 right-10 w-12 h-12 congo-gold/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
    </div>
  );
};

export default NotFound;
