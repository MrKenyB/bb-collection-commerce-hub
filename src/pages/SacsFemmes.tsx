
import React from 'react';
import { Link } from 'react-router-dom';
import { Filter, Grid3X3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';

const products = [
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
    id: 9,
    name: "Sac à Main Designer",
    price: 155000,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=800",
    category: "Sacs Femmes",
    rating: 4.9,
    isNew: true
  },
  {
    id: 10,
    name: "Pochette Soirée Élégante",
    price: 65000,
    image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&q=80&w=800",
    category: "Sacs Femmes",
    rating: 4.7,
    isNew: false
  }
];

const SacsFemmes = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <div className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center space-x-2 mb-8 text-gray-400">
            <Link to="/" className="hover:text-white transition-colors">Accueil</Link>
            <span>/</span>
            <span className="text-white">Sacs Femmes</span>
          </div>

          <div className="flex items-center justify-between mb-12">
            <div>
              <h1 className="text-4xl md:text-6xl font-space font-bold mb-4">
                Sacs <span className="gradient-text">Femmes</span>
              </h1>
              <p className="text-xl text-gray-400">Accessoires de luxe fait main au Congo</p>
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

export default SacsFemmes;
