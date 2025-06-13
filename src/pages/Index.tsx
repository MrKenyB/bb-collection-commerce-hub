
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Sparkles, ShoppingBag, CreditCard, Smartphone, Wallet, Heart, Eye, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';

const featuredProducts = [
  {
    id: 1,
    name: "Costume Executive Premium",
    price: 125000,
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&h=600&fit=crop",
    category: "Vêtements Hommes",
    rating: 4.9,
    isNew: true
  },
  {
    id: 2,
    name: "Sac Élégance Africaine",
    price: 65000,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=600&fit=crop", 
    category: "Sacs Femmes",
    rating: 4.8,
    isNew: false
  },
  {
    id: 3,
    name: "Chemise Moderne Sophistiquée",
    price: 35000,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&h=600&fit=crop",
    category: "Vêtements Hommes", 
    rating: 4.7,
    isNew: true
  },
  {
    id: 4,
    name: "Robe Cocktail Chic",
    price: 85000,
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500&h=600&fit=crop",
    category: "Vêtements Femmes",
    rating: 4.9,
    isNew: false
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50">
      <Navbar />
      
      {/* Hero Section - Modern & Stunning */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background with modern patterns */}
        <div className="absolute inset-0 congo-forest opacity-10 pattern-dots"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/20 via-transparent to-teal-900/20"></div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full opacity-30 animate-float" style={{animationDelay: '2s'}}></div>
        
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-7xl md:text-9xl font-display font-bold text-gradient mb-6 animate-fade-in text-shadow-lg">
              BB_COLLECTION
            </h1>
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="h-8 w-8 text-emerald-600 animate-pulse" />
              <span className="text-2xl md:text-3xl font-medium text-emerald-800 font-display">
                Mode Authentique Congolaise
              </span>
              <Sparkles className="h-8 w-8 text-emerald-600 animate-pulse" />
            </div>
            <div className="text-lg text-gray-600 font-light">
              🇨🇬 Congo-Brazzaville • Excellence & Style
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-12 font-light max-w-3xl mx-auto leading-relaxed">
            Découvrez l'élégance moderne africaine avec notre collection exclusive 
            de vêtements et accessoires haut de gamme
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Link to="/boutique">
              <Button className="btn-congo text-white px-10 py-4 text-lg font-semibold rounded-full hover-lift shadow-lg">
                Découvrir la Collection
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </Link>
            <Link to="/nouveautes">
              <Button variant="outline" className="border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50 px-10 py-4 text-lg font-semibold rounded-full hover-lift">
                Nouveautés 2024
                <Star className="ml-3 h-6 w-6" />
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-700">500+</div>
              <div className="text-gray-600 font-medium">Produits</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-700">2K+</div>
              <div className="text-gray-600 font-medium">Clients Satisfaits</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-700">4.9★</div>
              <div className="text-gray-600 font-medium">Note Moyenne</div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Methods - Modern Cards */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
              Modes de Paiement
            </h2>
            <p className="text-xl text-gray-600 font-light">
              Paiement sécurisé et flexible pour votre confort
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-modern rounded-3xl p-8 text-center hover-lift group">
              <div className="w-20 h-20 congo-forest rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform animate-pulse-glow">
                <Smartphone className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Mobile Money</h3>
              <p className="text-gray-600 font-medium leading-relaxed">
                Paiement instantané et sécurisé via Mobile Money Congo
              </p>
            </div>
            
            <div className="card-modern rounded-3xl p-8 text-center hover-lift group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform animate-pulse-glow">
                <Wallet className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Airtel Money</h3>
              <p className="text-gray-600 font-medium leading-relaxed">
                Transaction rapide et fiable avec Airtel Money
              </p>
            </div>
            
            <div className="card-modern rounded-3xl p-8 text-center hover-lift group">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform animate-pulse-glow">
                <CreditCard className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Carte Bancaire</h3>
              <p className="text-gray-600 font-medium leading-relaxed">
                Visa, Mastercard - Paiement international sécurisé
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products - Modern Grid */}
      <section className="py-20 px-4 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full font-medium mb-4">
              <TrendingUp className="h-5 w-5" />
              Tendances du moment
            </div>
            <h2 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-6">
              Nos Coups de Cœur
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
              Une sélection exclusive de pièces d'exception qui allient tradition congolaise et modernité internationale
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/boutique">
              <Button className="btn-congo text-white px-12 py-4 text-lg font-semibold rounded-full hover-lift shadow-xl">
                Voir Toute la Collection
                <Eye className="ml-3 h-6 w-6" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section - Modern Icons */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="w-20 h-20 congo-forest rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Star className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Qualité Premium</h3>
              <p className="text-gray-600 font-medium leading-relaxed">
                Sélection rigoureuse de matériaux africains authentiques et de première qualité
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 congo-forest rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Heart className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Service Personnalisé</h3>
              <p className="text-gray-600 font-medium leading-relaxed">
                Accompagnement sur-mesure par notre équipe passionnée basée au Congo
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 congo-forest rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <ShoppingBag className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Livraison Express</h3>
              <p className="text-gray-600 font-medium leading-relaxed">
                Livraison rapide dans tout le Congo et expédition internationale
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter - Modern CTA */}
      <section className="py-20 px-4 congo-forest relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-20"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Restez Connecté
          </h2>
          <p className="text-xl text-emerald-100 mb-10 font-light">
            Recevez en exclusivité nos nouveautés, promotions et actualités mode congolaise
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-8">
            <input 
              type="email" 
              placeholder="Votre adresse email"
              className="flex-1 px-6 py-4 bg-white/20 text-white rounded-2xl backdrop-blur border border-white/30 placeholder-white/80 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
            />
            <Button className="bg-white text-emerald-700 hover:bg-emerald-50 px-8 py-4 font-semibold rounded-2xl hover-lift">
              S'abonner
            </Button>
          </div>
          
          <p className="text-emerald-200 font-medium">
            🇨🇬 Fier d'être congolais • Livraison gratuite dès 75 000 FCFA
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
