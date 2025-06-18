
import React from 'react';
import { Link } from 'react-router-dom';
import { Filter, Grid3X3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';

const products = [
  {
    id: 4,
    name: "Robe Africaine Moderne",
    price: 120000,
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&q=80&w=800",
    category: "Vêtements Femmes",
    rating: 4.9,
    isNew: false
  },
  {
    id: 5,
    name: "Ensemble Tailleur Chic",
    price: 195000,
    image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?auto=format&fit=crop&q=80&w=800",
    category: "Vêtements Femmes",
    rating: 4.8,
    isNew: true
  },
  {
    id: 6,
    name: "Blouse Élégante",
    price: 75000,
    image: "https://images.unsplash.com/photo-1564257577096-22534b5a3d5e?auto=format&fit=crop&q=80&w=800",
    category: "Vêtements Femmes",
    rating: 4.7,
    isNew: false
  }
];

const VetementsFemmes = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <div className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center space-x-2 mb-8 text-gray-400">
            <Link to="/" className="hover:text-white transition-colors">Accueil</Link>
            <span>/</span>
            <span className="text-white">Vêtements Femmes</span>
          </div>

          <div className="flex items-center justify-between mb-12">
            <div>
              <h1 className="text-4xl md:text-6xl font-space font-bold mb-4">
                Vêtements <span className="gradient-text">Femmes</span>
              </h1>
              <p className="text-xl text-gray-400">Élégance et style africain moderne</p>
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

export default VetementsFemmes;
