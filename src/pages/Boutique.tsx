
import React, { useState } from 'react';
import { Filter, Grid, List, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';

const categories = ['Tous', 'Vêtements Hommes', 'Chaussures Hommes', 'Sacs Femmes', 'Vêtements Femmes', 'Chaussures Femmes'];
const priceRanges = ['Tous les prix', '0-50€', '50-100€', '100-200€', '200€+'];

const allProducts = [
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
  },
  {
    id: 5,
    name: "Baskets Premium",
    price: 129,
    image: "/placeholder.svg",
    category: "Chaussures Hommes",
    rating: 4.5,
    isNew: true
  },
  {
    id: 6,
    name: "Sac Bandoulière",
    price: 99,
    image: "/placeholder.svg",
    category: "Sacs Femmes",
    rating: 4.7,
    isNew: false
  }
];

const Boutique = () => {
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [selectedPriceRange, setSelectedPriceRange] = useState('Tous les prix');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = allProducts.filter(product => {
    const matchesCategory = selectedCategory === 'Tous' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    
    let matchesPrice = true;
    if (selectedPriceRange !== 'Tous les prix') {
      switch (selectedPriceRange) {
        case '0-50€':
          matchesPrice = product.price <= 50;
          break;
        case '50-100€':
          matchesPrice = product.price > 50 && product.price <= 100;
          break;
        case '100-200€':
          matchesPrice = product.price > 100 && product.price <= 200;
          break;
        case '200€+':
          matchesPrice = product.price > 200;
          break;
      }
    }
    
    return matchesCategory && matchesSearch && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-20 pb-16">
        {/* Header */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
              Notre Boutique
            </h1>
            <p className="text-xl text-gray-600 font-light">
              Découvrez notre collection complète d'articles de mode
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-8">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Rechercher un produit..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 items-center">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Catégorie" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedPriceRange} onValueChange={setSelectedPriceRange}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Prix" />
                </SelectTrigger>
                <SelectContent>
                  {priceRanges.map((range) => (
                    <SelectItem key={range} value={range}>
                      {range}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* View Mode */}
              <div className="flex border border-gray-200 rounded-lg">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className="rounded-r-none"
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className="rounded-l-none"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Results count */}
          <div className="mb-6">
            <p className="text-gray-600 font-light">
              {filteredProducts.length} produit{filteredProducts.length > 1 ? 's' : ''} trouvé{filteredProducts.length > 1 ? 's' : ''}
            </p>
          </div>

          {/* Products Grid */}
          <div className={`grid gap-8 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
              : 'grid-cols-1'
          }`}>
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* No results */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-gray-500 font-light">
                Aucun produit ne correspond à vos critères de recherche.
              </p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Boutique;
