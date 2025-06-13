
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star, ArrowRight, Sparkles, Shield, Truck, CreditCard, MapPin, Users, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';

const featuredProducts = [
  {
    id: 1,
    name: "Costume Élégant Premium",
    price: 180000,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
    category: "Vêtements Hommes",
    rating: 4.9,
    isNew: true
  },
  {
    id: 2,
    name: "Sac à Main Cuir Artisanal",
    price: 85000,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80",
    category: "Sacs Femmes",
    rating: 4.8,
    isNew: false
  },
  {
    id: 3,
    name: "Baskets Premium Collection",
    price: 95000,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80",
    category: "Chaussures Hommes",
    rating: 4.7,
    isNew: true
  },
  {
    id: 4,
    name: "Robe Cocktail Élégante",
    price: 120000,
    image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&q=80",
    category: "Vêtements Femmes",
    rating: 4.9,
    isNew: false
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section Ultra Moderne */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0 congo-sunset animate-gradient"></div>
        <div className="absolute inset-0 pattern-dots opacity-30"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-display font-black text-white leading-tight tracking-tight">
                BB_COLLECTION
              </h1>
              <p className="text-xl md:text-3xl text-white/90 font-light max-w-3xl mx-auto leading-relaxed">
                L'élégance africaine rencontre le style moderne
              </p>
              <div className="flex items-center justify-center space-x-3 text-white/80">
                <MapPin className="h-5 w-5" />
                <span className="font-medium">Congo-Brazzaville</span>
                <Sparkles className="h-5 w-5 animate-pulse" />
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/boutique">
                <Button className="btn-congo text-white px-12 py-6 text-xl font-bold tracking-wide rounded-3xl shadow-2xl group">
                  <ShoppingBag className="mr-3 h-6 w-6 group-hover:animate-bounce" />
                  Découvrir la Collection
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
                </Button>
              </Link>
              <Button variant="outline" className="bg-white/10 border-white/30 text-white px-8 py-6 text-lg font-semibold rounded-3xl backdrop-blur hover:bg-white/20 transition-all">
                <Star className="mr-2 h-5 w-5" />
                Nos Nouveautés
              </Button>
            </div>
            
            <div className="flex items-center justify-center space-x-12 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-white/70 font-medium">Produits</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">1000+</div>
                <div className="text-white/70 font-medium">Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">4.9</div>
                <div className="text-white/70 font-medium">★ Note</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
            <ArrowRight className="h-4 w-4 text-white rotate-90" />
          </div>
        </div>
      </section>

      {/* Avantages Section Moderne */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Pourquoi choisir <span className="text-gradient">BB_COLLECTION</span> ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une expérience d'achat exceptionnelle avec des produits de qualité premium
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Qualité Premium",
                description: "Matériaux sélectionnés avec soin pour une qualité exceptionnelle"
              },
              {
                icon: Truck,
                title: "Livraison Rapide",
                description: "Livraison gratuite dès 75 000 FCFA partout au Congo"
              },
              {
                icon: CreditCard,
                title: "Paiement Sécurisé",
                description: "Mobile Money, Airtel Money et carte bancaire acceptés"
              },
              {
                icon: Users,
                title: "Service Client",
                description: "Une équipe dédiée pour vous accompagner 7j/7"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 congo-forest rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <feature.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Produits Phares */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Sparkles className="h-8 w-8 text-emerald-500 animate-pulse" />
              <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900">
                Nos <span className="text-gradient">Coups de Cœur</span>
              </h2>
              <Sparkles className="h-8 w-8 text-emerald-500 animate-pulse" />
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez notre sélection de produits tendance, choisis avec passion
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/boutique">
              <Button className="btn-congo px-12 py-4 text-lg font-bold tracking-wide rounded-2xl shadow-xl group">
                Voir toute la collection
                <TrendingUp className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Final */}
      <section className="py-24 congo-forest relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-20"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight">
              Rejoignez la famille <br />
              <span className="text-yellow-300">BB_COLLECTION</span>
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Inscrivez-vous dès maintenant et bénéficiez de 10% de réduction sur votre première commande
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/mon-compte">
                <Button className="bg-white text-emerald-600 hover:bg-gray-100 px-10 py-4 text-lg font-bold rounded-2xl shadow-xl">
                  Créer mon compte
                </Button>
              </Link>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-10 py-4 text-lg font-semibold rounded-2xl">
                En savoir plus
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
