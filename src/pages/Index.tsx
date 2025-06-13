
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';

const featuredProducts = [
  {
    id: 1,
    name: "Costume Élégant",
    price: 299,
    image: "/placeholder.svg",
    category: "Vêtements Hommes",
    rating: 4.8,
    isNew: true
  },
  {
    id: 2,
    name: "Sac à Main Cuir",
    price: 189,
    image: "/placeholder.svg", 
    category: "Sacs Femmes",
    rating: 4.9,
    isNew: false
  },
  {
    id: 3,
    name: "Chemise Oxford",
    price: 89,
    image: "/placeholder.svg",
    category: "Vêtements Hommes", 
    rating: 4.7,
    isNew: true
  },
  {
    id: 4,
    name: "Robe Cocktail",
    price: 159,
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
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-black/5"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-light tracking-wide text-gray-900 mb-6 animate-fade-in">
            BB_COLLECTION
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 font-light">
            L'élégance à l'état pur pour hommes et femmes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/boutique">
              <Button className="bg-black text-white hover:bg-gray-900 px-8 py-3 text-lg font-light tracking-wide transition-all hover:scale-105">
                Découvrir la Collection
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/nouveautes">
              <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white px-8 py-3 text-lg font-light tracking-wide transition-all hover:scale-105">
                Nouveautés
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-medium mb-2">Qualité Premium</h3>
              <p className="text-gray-600 font-light">Sélection rigoureuse de matériaux et finitions d'exception</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-medium mb-2">Service Personnalisé</h3>
              <p className="text-gray-600 font-light">Accompagnement expert pour un style qui vous ressemble</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <ShoppingBag className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-medium mb-2">Livraison Express</h3>
              <p className="text-gray-600 font-light">Réception rapide et soignée de vos commandes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
              Coups de Cœur
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
              Découvrez notre sélection de pièces d'exception, choisies avec soin pour leur élégance intemporelle
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/boutique">
              <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white px-8 py-3 text-lg font-light tracking-wide">
                Voir Toute la Collection
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-4">
            Restez Informé
          </h2>
          <p className="text-xl text-gray-300 mb-8 font-light">
            Recevez en avant-première nos nouveautés et offres exclusives
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Votre adresse email"
              className="flex-1 px-4 py-3 bg-white text-black rounded font-light focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button className="bg-white text-black hover:bg-gray-100 px-6 py-3 font-light">
              S'abonner
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
