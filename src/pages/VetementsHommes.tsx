
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Filter, Grid3X3, List } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';

const products = [
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
    name: "Chemise Business Class",
    price: 65000,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&q=80&w=800",
    category: "Vêtements Hommes",
    rating: 4.7,
    isNew: false
  },
  {
    id: 3,
    name: "Pantalon Chino Premium",
    price: 85000,
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&q=80&w=800",
    category: "Vêtements Hommes",
    rating: 4.8,
    isNew: true
  }
];

const VetementsHommes = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <div className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 mb-8 text-gray-400">
            <Link to="/" className="hover:text-white transition-colors">Accueil</Link>
            <span>/</span>
            <span className="text-white">Vêtements Hommes</span>
          </div>

          {/* Header */}
          <div className="flex items-center justify-between mb-12">
            <div>
              <h1 className="text-4xl md:text-6xl font-space font-bold mb-4">
                Vêtements <span className="gradient-text">Hommes</span>
              </h1>
              <p className="text-xl text-gray-400">Collection premium pour homme moderne</p>
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

          {/* Products Grid */}
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

export default VetementsHommes;
