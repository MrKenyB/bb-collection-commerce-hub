
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search, ShoppingBag, Sparkles, Zap, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  const handleRefresh = () => {
    window.location.reload();
  };

  const handleGoHome = () => {
    console.log('Navigating to home...');
  };

  const handleGoToShop = () => {
    console.log('Navigating to shop...');
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 gradient-dark"></div>
      <div className="absolute inset-0 pattern-dots-ultra opacity-20"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 gradient-primary rounded-full opacity-20 animate-float-ultra"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 gradient-secondary rounded-full opacity-30 animate-float-ultra" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 gradient-congo rounded-full opacity-25 animate-float-ultra" style={{ animationDelay: '4s' }}></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        
        {/* Main Content */}
        <div className="space-y-8 animate-slide-up">
          
          {/* Error Image */}
          <div className="relative mb-12">
            <img 
              src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&q=80&w=800" 
              alt="Page non trouvée"
              className="w-full max-w-lg mx-auto rounded-3xl shadow-2xl card-ultra"
            />
            <div className="absolute -top-6 -right-6 w-24 h-24 gradient-primary rounded-full flex items-center justify-center shadow-xl animate-float-ultra">
              <Sparkles className="h-12 w-12 text-white animate-pulse" />
            </div>
          </div>

          {/* 404 Text Ultra */}
          <div className="space-y-6">
            <h1 className="text-8xl md:text-9xl font-space font-black gradient-text text-glow leading-none">
              404
            </h1>
            <h2 className="text-3xl md:text-5xl font-space font-bold text-white leading-tight">
              Oops! Cette page a pris <br />
              <span className="gradient-text">un détour imprévu</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Il semblerait que cette page ait emprunté un chemin différent. 
              Mais ne vous inquiétez pas, nous allons vous remettre sur la bonne voie !
            </p>
          </div>

          {/* Action Buttons Ultra */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Link to="/" onClick={handleGoHome}>
              <Button className="btn-ultra px-12 py-6 text-xl font-bold rounded-full shadow-2xl group">
                <Home className="mr-3 h-6 w-6 group-hover:animate-bounce" />
                Retour à l'accueil
              </Button>
            </Link>
            
            <Link to="/boutique" onClick={handleGoToShop}>
              <Button variant="outline" className="glass-ultra border-white/20 text-white hover:bg-white/10 px-12 py-6 text-xl font-semibold rounded-full">
                <ShoppingBag className="mr-3 h-6 w-6" />
                Découvrir la boutique
              </Button>
            </Link>
            
            <Button 
              variant="outline" 
              onClick={handleRefresh}
              className="glass-ultra border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold rounded-full group"
            >
              <RefreshCw className="mr-3 h-5 w-5 group-hover:rotate-180 transition-transform duration-500" />
              Réessayer
            </Button>
          </div>

          {/* Quick Links Ultra */}
          <div className="pt-16">
            <div className="inline-flex items-center px-6 py-3 glass-ultra rounded-full text-sm font-medium mb-8">
              <Zap className="w-4 h-4 mr-2 text-yellow-400" />
              Raccourcis populaires
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {[
                { name: "Vêtements Hommes", path: "/vetements-hommes", emoji: "👔" },
                { name: "Sacs Femmes", path: "/sacs-femmes", emoji: "👜" },
                { name: "Chaussures", path: "/chaussures-hommes", emoji: "👟" },
                { name: "Mon Compte", path: "/mon-compte", emoji: "👤" }
              ].map((link, index) => (
                <Link key={index} to={link.path}>
                  <div className="card-ultra rounded-2xl p-6 hover-scale-ultra group animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">{link.emoji}</div>
                    <p className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                      {link.name}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Fun Fact */}
          <div className="pt-12">
            <div className="glass-ultra rounded-2xl p-6 max-w-md mx-auto">
              <div className="text-4xl mb-2">🎨</div>
              <h3 className="text-lg font-bold text-white mb-2">Le saviez-vous ?</h3>
              <p className="text-sm text-gray-400">
                Chaque pièce BB_COLLECTION est pensée et créée avec amour au Congo-Brazzaville !
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
