
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Filter, Grid3X3, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';

const categories = ['Tous', 'Vêtements Hommes', 'Chaussures Hommes', 'Sacs Femmes', 'Vêtements Femmes'];
const priceRanges = ['Tous les prix', '0-75 000 FCFA', '75 000-150 000 FCFA', '150 000+ FCFA'];
const sortOptions = ['Nouveautés', 'Prix croissant', 'Prix décroissant', 'Meilleures notes'];

const allProducts = [
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
  },
  {
    id: 5,
    name: "Chemise Business Class",
    price: 65000,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&q=80&w=800",
    category: "Vêtements Hommes",
    rating: 4.7,
    isNew: false
  },
  {
    id: 6,
    name: "Sac à Main Designer",
    price: 155000,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=800",
    category: "Sacs Femmes",
    rating: 4.9,
    isNew: true
  }
];

const Boutique = () => {
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [selectedPriceRange, setSelectedPriceRange] = useState('Tous les prix');
  const [selectedSort, setSelectedSort] = useState('Nouveautés');

  const filteredProducts = allProducts.filter(product => {
    const matchesCategory = selectedCategory === 'Tous' || product.category === selectedCategory;
    
    let matchesPrice = true;
    if (selectedPriceRange !== 'Tous les prix') {
      switch (selectedPriceRange) {
        case '0-75 000 FCFA':
          matchesPrice = product.price <= 75000;
          break;
        case '75 000-150 000 FCFA':
          matchesPrice = product.price > 75000 && product.price <= 150000;
          break;
        case '150 000+ FCFA':
          matchesPrice = product.price > 150000;
          break;
      }
    }
    
    return matchesCategory && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <div className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 mb-8 text-gray-400">
            <Link to="/" className="hover:text-white transition-colors">Accueil</Link>
            <span>/</span>
            <span className="text-white">Boutique</span>
          </div>

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-space font-bold mb-6">
              Notre <span className="gradient-text">Boutique</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Découvrez notre collection complète d'articles de mode premium fait main au Congo
            </p>
            <div className="flex items-center justify-center space-x-2 mt-4">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <span className="text-gray-400 ml-2">4.8/5 • {allProducts.length} produits</span>
            </div>
          </div>

          {/* Filters */}
          <div className="glass-ultra rounded-3xl p-6 mb-12">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              <div className="flex flex-wrap gap-4 items-center">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-48 glass-ultra border-white/20 text-white">
                    <SelectValue placeholder="Catégorie" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-900 border-white/20">
                    {categories.map((category) => (
                      <SelectItem key={category} value={category} className="text-white hover:bg-white/10">
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={selectedPriceRange} onValueChange={setSelectedPriceRange}>
                  <SelectTrigger className="w-52 glass-ultra border-white/20 text-white">
                    <SelectValue placeholder="Prix" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-900 border-white/20">
                    {priceRanges.map((range) => (
                      <SelectItem key={range} value={range} className="text-white hover:bg-white/10">
                        {range}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={selectedSort} onValueChange={setSelectedSort}>
                  <SelectTrigger className="w-48 glass-ultra border-white/20 text-white">
                    <SelectValue placeholder="Trier par" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-900 border-white/20">
                    {sortOptions.map((option) => (
                      <SelectItem key={option} value={option} className="text-white hover:bg-white/10">
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center space-x-4">
                <Button variant="outline" className="glass-ultra border-white/20 text-white">
                  <Filter className="w-4 h-4 mr-2" />
                  Filtres avancés
                </Button>
                <Button variant="outline" className="glass-ultra border-white/20 text-white">
                  <Grid3X3 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Results count */}
          <div className="mb-8">
            <p className="text-gray-400 text-lg">
              {filteredProducts.length} produit{filteredProducts.length > 1 ? 's' : ''} trouvé{filteredProducts.length > 1 ? 's' : ''}
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* No results */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <div className="glass-ultra rounded-3xl p-12 max-w-md mx-auto">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-white mb-2">Aucun produit trouvé</h3>
                <p className="text-gray-400">
                  Essayez de modifier vos critères de recherche.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Boutique;
