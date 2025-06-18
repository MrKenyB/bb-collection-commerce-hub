
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star, ArrowRight, Sparkles, Shield, Truck, CreditCard, MapPin, Users, TrendingUp, Zap, Award, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';

const featuredProducts = [
  {
    id: 1,
    name: "Costume Élégant Premium Congo",
    price: 180000,
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=800",
    category: "Vêtements Hommes",
    rating: 4.9,
    isNew: true
  },
  {
    id: 2,
    name: "Sac Cuir Artisanal Brazzaville",
    price: 85000,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800",
    category: "Sacs Femmes",
    rating: 4.8,
    isNew: false
  },
  {
    id: 3,
    name: "Sneakers Limited Edition",
    price: 95000,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800",
    category: "Chaussures Hommes",
    rating: 4.7,
    isNew: true
  },
  {
    id: 4,
    name: "Robe Africaine Moderne",
    price: 120000,
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&q=80&w=800",
    category: "Vêtements Femmes",
    rating: 4.9,
    isNew: false
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section Ultra Futuriste */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 gradient-dark"></div>
        <div className="absolute inset-0 pattern-grid-ultra opacity-30"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 gradient-primary rounded-full opacity-20 animate-float-ultra"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 gradient-secondary rounded-full opacity-30 animate-float-ultra" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 gradient-congo rounded-full opacity-25 animate-float-ultra" style={{ animationDelay: '4s' }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <div className="space-y-12 animate-slide-up">
            <div className="space-y-8">
              <div className="inline-flex items-center px-6 py-3 glass-ultra rounded-full text-sm font-medium">
                <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
                <span className="gradient-text">Mode Congolaise Premium</span>
                <MapPin className="w-4 h-4 ml-2" />
              </div>
              
              <h1 className="text-7xl md:text-9xl font-space font-black leading-none">
                <span className="gradient-text text-glow">BB</span>
                <br />
                <span className="text-white">COLLECTION</span>
              </h1>
              
              <p className="text-2xl md:text-4xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
                L'art de la <span className="gradient-text font-semibold">mode africaine</span> 
                <br />rencontre l'innovation moderne
              </p>
              
              <div className="flex items-center justify-center space-x-8 text-gray-400">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>Congo-Brazzaville</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-yellow-400" />
                  <span>Premium Quality</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <Link to="/boutique">
                <Button className="btn-ultra text-white px-16 py-6 text-xl font-bold rounded-full shadow-2xl group relative overflow-hidden">
                  <ShoppingBag className="mr-4 h-6 w-6 group-hover:animate-bounce" />
                  Explorer la Collection
                  <ArrowRight className="ml-4 h-6 w-6 group-hover:translate-x-2 transition-transform" />
                </Button>
              </Link>
              
              <Button variant="outline" className="glass-ultra border-white/20 text-white px-12 py-6 text-lg font-semibold rounded-full hover:bg-white/10 transition-all group">
                <Star className="mr-3 h-5 w-5 group-hover:rotate-12 transition-transform" />
                Nos Nouveautés
              </Button>
            </div>
            
            {/* Stats Ultra Modernes */}
            <div className="grid grid-cols-3 gap-12 pt-16 max-w-2xl mx-auto">
              {[
                { number: "500+", label: "Produits", icon: ShoppingBag },
                { number: "1000+", label: "Clients", icon: Users },
                { number: "4.9★", label: "Note", icon: Star }
              ].map((stat, index) => (
                <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="w-16 h-16 glass-ultra rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                    <stat.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <div className="text-4xl font-bold gradient-text mb-2">{stat.number}</div>
                  <div className="text-gray-400 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-12 h-12 glass-ultra rounded-full flex items-center justify-center">
            <ArrowRight className="h-6 w-6 text-blue-400 rotate-90" />
          </div>
        </div>
      </section>

      {/* Features Section Ultra */}
      <section className="py-32 relative">
        <div className="absolute inset-0 gradient-dark opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 glass-ultra rounded-full text-sm font-medium mb-8">
              <Zap className="w-4 h-4 mr-2 text-yellow-400" />
              Pourquoi nous choisir
            </div>
            <h2 className="text-5xl md:text-7xl font-space font-bold mb-8">
              <span className="gradient-text">Excellence</span> Garantie
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Une expérience d'achat exceptionnelle avec des produits de qualité premium
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Qualité Premium",
                description: "Matériaux sélectionnés avec soin pour une durabilité exceptionnelle",
                color: "from-blue-500 to-purple-600"
              },
              {
                icon: Truck,
                title: "Livraison Express",
                description: "Livraison gratuite et rapide partout au Congo-Brazzaville",
                color: "from-green-500 to-teal-600"
              },
              {
                icon: CreditCard,
                title: "Paiement Sécurisé",
                description: "Mobile Money, cartes bancaires et paiements en ligne sécurisés",
                color: "from-purple-500 to-pink-600"
              },
              {
                icon: Users,
                title: "Service VIP",
                description: "Support client personnalisé disponible 24h/7j",
                color: "from-yellow-500 to-orange-600"
              }
            ].map((feature, index) => (
              <div key={index} className="group">
                <div className="card-ultra rounded-3xl p-8 h-full text-center hover-scale-ultra">
                  <div className={`w-20 h-20 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-2xl`}>
                    <feature.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section Ultra */}
      <section className="py-32 relative">
        <div className="absolute inset-0 pattern-dots-ultra opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center space-x-4 mb-8">
              <Sparkles className="h-12 w-12 text-pink-400 animate-pulse" />
              <h2 className="text-5xl md:text-7xl font-space font-bold">
                Collection <span className="gradient-text">Signature</span>
              </h2>
              <Sparkles className="h-12 w-12 text-blue-400 animate-pulse" />
            </div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Découvrez notre sélection exclusive de pièces uniques, créées avec passion
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {featuredProducts.map((product, index) => (
              <div key={product.id} className="animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/boutique">
              <Button className="btn-ultra px-16 py-6 text-xl font-bold rounded-full shadow-2xl group">
                Voir toute la collection
                <TrendingUp className="ml-4 h-6 w-6 group-hover:translate-x-2 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section Ultra */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 gradient-primary"></div>
        <div className="absolute inset-0 pattern-grid-ultra opacity-30"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <div className="space-y-12">
            <div className="space-y-8">
              <div className="inline-flex items-center px-8 py-4 glass-ultra rounded-full text-lg font-medium">
                <Heart className="w-6 h-6 mr-3 text-red-400 animate-pulse" />
                Rejoignez la révolution mode
              </div>
              
              <h2 className="text-5xl md:text-8xl font-space font-bold leading-tight">
                Votre style, <br />
                <span className="text-yellow-300 text-glow">notre passion</span>
              </h2>
              
              <p className="text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Inscrivez-vous maintenant et bénéficiez de <span className="font-bold text-yellow-300">15% de réduction</span> 
                sur votre première commande
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <Link to="/mon-compte">
                <Button className="bg-white text-black hover:bg-gray-100 px-12 py-6 text-xl font-bold rounded-full shadow-2xl group">
                  <Users className="mr-3 h-6 w-6" />
                  Créer mon compte
                  <Sparkles className="ml-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
                </Button>
              </Link>
              
              <Link to="/a-propos">
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-12 py-6 text-xl font-semibold rounded-full glass-ultra">
                  <Award className="mr-3 h-6 w-6" />
                  Notre histoire
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
