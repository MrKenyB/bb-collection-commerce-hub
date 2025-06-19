import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Filter, Grid3X3, List } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import FilterSidebar from '@/components/FilterSidebar';

const allProducts = [
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
  },
  {
    id: 11,
    name: "Robe de Soirée Glamour",
    price: 250000,
    image: "https://images.unsplash.com/photo-1566479179817-96e2b3e3ef7a?auto=format&fit=crop&q=80&w=800",
    category: "Vêtements Femmes",
    rating: 4.9,
    isNew: true
  },
  {
    id: 12,
    name: "Jupe Plissée Moderne",
    price: 85000,
    image: "https://images.unsplash.com/photo-1583496661160-fb5886a13d8e?auto=format&fit=crop&q=80&w=800",
    category: "Vêtements Femmes",
    rating: 4.6,
    isNew: false
  }
];

const VetementsFemmes = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filteredProducts, setFilteredProducts] = useState(allProducts);

  const handleFilterChange = (filters: any) => {
    let filtered = [...allProducts];

    // Filter by price range
    if (filters.priceRange) {
      filtered = filtered.filter(product => 
        product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]
      );
    }

    // Sort products
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
          // Keep original order for 'featured'
          break;
      }
    }

    setFilteredProducts(filtered);
    console.log('Filters applied:', filters);
  };

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

          <div className="lg:grid lg:grid-cols-4 lg:gap-8">
            {/* Sidebar Filters - Desktop */}
            <div className="hidden lg:block">
              <FilterSidebar
                isOpen={true}
                onClose={() => {}}
                onFilterChange={handleFilterChange}
              />
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h1 className="text-4xl md:text-6xl font-space font-bold mb-4">
                    Vêtements <span className="gradient-text">Femmes</span>
                  </h1>
                  <p className="text-xl text-gray-400">Élégance et style africain moderne</p>
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

              {/* Products Grid/List */}
              <div className={viewMode === 'grid' 
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8" 
                : "space-y-6"
              }>
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} viewMode={viewMode} />
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="text-center py-16">
                  <p className="text-gray-400 text-lg mb-4">Aucun produit trouvé</p>
                  <Button 
                    variant="outline" 
                    className="glass-ultra border-white/20 text-white"
                    onClick={() => handleFilterChange({ sizes: [], colors: [], priceRange: [0, 500000], sortBy: 'featured' })}
                  >
                    Réinitialiser les filtres
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Filter Sidebar */}
      <FilterSidebar
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        onFilterChange={handleFilterChange}
      />

      <Footer />
    </div>
  );
};

export default VetementsFemmes;
