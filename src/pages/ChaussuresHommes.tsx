
import React from 'react';
import { Link } from 'react-router-dom';
import { Filter, Grid3X3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';

const products = [
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
    id: 7,
    name: "Chaussures de Ville Cuir",
    price: 145000,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=800",
    category: "Chaussures Hommes",
    rating: 4.9,
    isNew: false
  },
  {
    id: 8,
    name: "Boots Urbaines Premium",
    price: 125000,
    image: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?auto=format&fit=crop&q=80&w=800",
    category: "Chaussures Hommes",
    rating: 4.8,
    isNew: true
  }
];

const ChaussuresHommes = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <div className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center space-x-2 mb-8 text-gray-400">
            <Link to="/" className="hover:text-white transition-colors">Accueil</Link>
            <span>/</span>
            <span className="text-white">Chaussures Hommes</span>
          </div>

          <div className="flex items-center justify-between mb-12">
            <div>
              <h1 className="text-4xl md:text-6xl font-space font-bold mb-4">
                Chaussures <span className="gradient-text">Hommes</span>
              </h1>
              <p className="text-xl text-gray-400">Style et confort pour tous les moments</p>
            </div>
            
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="outline" className="glass-ultra border-white/20 text-white">
                <Filter className="w-4 h-4 mr-2" />
                Filtrer
              </Button>
              <Button variant="outline" className="glass-ultra border-white/20 text-white">
                <Grid3X3 className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ChaussuresHommes;
