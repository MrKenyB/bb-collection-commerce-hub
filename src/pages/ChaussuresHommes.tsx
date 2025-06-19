import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Filter, Grid3X3, List } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import FilterSidebar from '@/components/FilterSidebar';

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
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleFilterChange = (filters: any) => {
    let filtered = [...products];

    if (filters.priceRange) {
      filtered = filtered.filter(product => 
        product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]
      );
    }

    if (filters.sortBy) {
      switch (filters.sortBy) {
        case 'price-asc':
          filtered.sort((a, b) => a.price - b.price);
          break;
        case 'price-desc':
          filtered.sort((a, b) => b.price - a.price);
          break;
        case 'newest':
          filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
          break;
        case 'rating':
          filtered.sort((a, b) => b.rating - a.rating);
          break;
        default:
          break;
      }
    }

    setFilteredProducts(filtered);
  };

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

          <div className="lg:grid lg:grid-cols-4 lg:gap-8">
            <div className="hidden lg:block">
              <FilterSidebar
                isOpen={true}
                onClose={() => {}}
                onFilterChange={handleFilterChange}
              />
            </div>

            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h1 className="text-4xl md:text-6xl font-space font-bold mb-4">
                    Chaussures <span className="gradient-text">Hommes</span>
                  </h1>
                  <p className="text-xl text-gray-400">Style et confort pour tous les moments</p>
                  <p className="text-sm text-gray-500 mt-2">{filteredProducts.length} produits</p>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Button 
                    variant="outline" 
                    className="lg:hidden glass-ultra border-white/20 text-white"
                    onClick={() => setIsFilterOpen(true)}
                  >
                    <Filter className="w-4 h-4 mr-2" />
                    Filtrer
                  </Button>
                  <div className="hidden sm:flex items-center space-x-2">
                    <Button
                      variant={viewMode === 'grid' ? 'default' : 'outline'}
                      size="icon"
                      className="glass-ultra border-white/20"
                      onClick={() => setViewMode('grid')}
                    >
                      <Grid3X3 className="w-4 h-4" />
                    </Button>
                    <Button
                      variant={viewMode === 'list' ? 'default' : 'outline'}
                      size="icon"
                      className="glass-ultra border-white/20"
                      onClick={() => setViewMode('list')}
                    >
                      <List className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>

              <div className={viewMode === 'grid' 
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8" 
                : "space-y-6"
              }>
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} viewMode={viewMode} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <FilterSidebar
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        onFilterChange={handleFilterChange}
      />

      <Footer />
    </div>
  );
};

export default ChaussuresHommes;
