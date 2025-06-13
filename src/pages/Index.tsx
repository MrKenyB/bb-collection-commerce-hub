
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, ShoppingBag, CreditCard, Smartphone, Wallet } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';

const featuredProducts = [
  {
    id: 1,
    name: "Costume Élégant Africain",
    price: 85000,
    image: "/placeholder.svg",
    category: "Vêtements Hommes",
    rating: 4.8,
    isNew: true
  },
  {
    id: 2,
    name: "Sac à Main Wax Premium",
    price: 45000,
    image: "/placeholder.svg", 
    category: "Sacs Femmes",
    rating: 4.9,
    isNew: false
  },
  {
    id: 3,
    name: "Chemise Moderne Congo",
    price: 25000,
    image: "/placeholder.svg",
    category: "Vêtements Hommes", 
    rating: 4.7,
    isNew: true
  },
  {
    id: 4,
    name: "Robe Cocktail Africaine",
    price: 65000,
    image: "/placeholder.svg",
    category: "Vêtements Femmes",
    rating: 4.6,
    isNew: false
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section avec style congolais */}
      <section className="relative h-screen flex items-center justify-center congo-gradient overflow-hidden pt-[88px]">
        <div className="absolute inset-0 pattern-dots opacity-30"></div>
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto text-white">
          <div className="mb-6 animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold tracking-wide text-shadow mb-4">
              BB_COLLECTION
            </h1>
            <div className="text-xl md:text-2xl font-light mb-2">
              🇨🇬 Mode Congolaise Authentique 🇨🇬
            </div>
            <div className="text-lg opacity-90">
              Pointe-Noire • République du Congo
            </div>
          </div>
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
            L'élégance africaine rencontre la modernité
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/boutique">
              <Button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 text-lg font-medium tracking-wide transition-all hover:scale-105 shadow-lg">
                Découvrir la Collection
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/nouveautes">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 text-lg font-medium tracking-wide transition-all hover:scale-105">
                Nouveautés 2024
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Payment Methods Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Modes de Paiement Disponibles
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <Smartphone className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-orange-800">Mobile Money</h3>
              <p className="text-gray-600 font-medium">Paiement sécurisé via Mobile Money Congo</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <Wallet className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-blue-800">Airtel Money</h3>
              <p className="text-gray-600 font-medium">Paiement rapide avec Airtel Money</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <CreditCard className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-green-800">Carte Bancaire</h3>
              <p className="text-gray-600 font-medium">Visa, Mastercard - Paiement international</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-orange-800">Qualité Africaine</h3>
              <p className="text-gray-600 font-medium">Sélection authentique de textiles et matériaux africains de première qualité</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-orange-800">Service Congolais</h3>
              <p className="text-gray-600 font-medium">Accompagnement personnalisé par notre équipe basée à Pointe-Noire</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <ShoppingBag className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-orange-800">Livraison Congo</h3>
              <p className="text-gray-600 font-medium">Livraison rapide dans tout le Congo et pays limitrophes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4 congo-gradient-soft">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nos Coups de Cœur
            </h2>
            <p className="text-xl text-gray-700 font-medium max-w-2xl mx-auto">
              Découvrez notre sélection de pièces d'exception, alliant tradition congolaise et modernité
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/boutique">
              <Button className="bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600 px-8 py-3 text-lg font-medium tracking-wide shadow-lg hover:shadow-xl transition-all">
                Voir Toute la Collection
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900 via-orange-900 to-red-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Restez Connecté avec BB_COLLECTION
          </h2>
          <p className="text-xl text-orange-100 mb-8 font-medium">
            Recevez nos nouveautés, promotions exclusives et actualités mode congolaise
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Votre adresse email"
              className="flex-1 px-4 py-3 bg-white/10 text-white rounded-lg backdrop-blur border border-white/20 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
            />
            <Button className="bg-white text-orange-600 hover:bg-orange-50 px-6 py-3 font-medium">
              S'abonner
            </Button>
          </div>
          <p className="text-sm text-orange-200 mt-4">
            🇨🇬 Fier d'être congolais • Livraison gratuite dès 50 000 FCFA
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
