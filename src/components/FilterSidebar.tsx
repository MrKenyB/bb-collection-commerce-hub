
import React, { useState } from 'react';
import { X, Filter, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FilterSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onFilterChange: (filters: any) => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({ isOpen, onClose, onFilterChange }) => {
  const [priceRange, setPriceRange] = useState([0, 500000]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('featured');
  const [showPriceFilter, setShowPriceFilter] = useState(true);
  const [showSizeFilter, setShowSizeFilter] = useState(true);
  const [showColorFilter, setShowColorFilter] = useState(true);

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL', '38', '39', '40', '41', '42', '43', '44'];
  const colors = ['Noir', 'Blanc', 'Rouge', 'Bleu', 'Vert', 'Jaune', 'Rose', 'Violet'];
  const sortOptions = [
    { value: 'featured', label: 'Mis en avant' },
    { value: 'price-asc', label: 'Prix croissant' },
    { value: 'price-desc', label: 'Prix décroissant' },
    { value: 'newest', label: 'Plus récent' },
    { value: 'rating', label: 'Mieux notés' }
  ];

  const handleSizeToggle = (size: string) => {
    const newSizes = selectedSizes.includes(size)
      ? selectedSizes.filter(s => s !== size)
      : [...selectedSizes, size];
    setSelectedSizes(newSizes);
    onFilterChange({ sizes: newSizes, colors: selectedColors, priceRange, sortBy });
  };

  const handleColorToggle = (color: string) => {
    const newColors = selectedColors.includes(color)
      ? selectedColors.filter(c => c !== color)
      : [...selectedColors, color];
    setSelectedColors(newColors);
    onFilterChange({ sizes: selectedSizes, colors: newColors, priceRange, sortBy });
  };

  const handlePriceChange = (min: number, max: number) => {
    const newRange = [min, max];
    setPriceRange(newRange);
    onFilterChange({ sizes: selectedSizes, colors: selectedColors, priceRange: newRange, sortBy });
  };

  const handleSortChange = (newSort: string) => {
    setSortBy(newSort);
    onFilterChange({ sizes: selectedSizes, colors: selectedColors, priceRange, sortBy: newSort });
  };

  const clearAllFilters = () => {
    setPriceRange([0, 500000]);
    setSelectedSizes([]);
    setSelectedColors([]);
    setSortBy('featured');
    onFilterChange({ sizes: [], colors: [], priceRange: [0, 500000], sortBy: 'featured' });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:relative lg:inset-auto">
      {/* Mobile overlay */}
      <div className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
      
      {/* Filter panel */}
      <div className="fixed right-0 top-0 h-full w-80 bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-xl border-l border-white/10 lg:relative lg:w-full lg:h-auto lg:border-0 lg:rounded-3xl overflow-y-auto shadow-2xl">
        <div className="p-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-white flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-3">
                <Filter className="w-5 h-5 text-white" />
              </div>
              Filtres
            </h2>
            <div className="flex items-center space-x-3">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={clearAllFilters} 
                className="text-gray-400 hover:text-white hover:bg-white/10 rounded-xl px-4 py-2 transition-all"
              >
                Effacer tout
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={onClose} 
                className="lg:hidden text-white hover:bg-white/10 rounded-xl w-10 h-10"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Sort */}
          <div className="mb-8">
            <h3 className="text-white font-semibold mb-4 text-lg">Trier par</h3>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => handleSortChange(e.target.value)}
                className="w-full bg-gradient-to-r from-white/5 to-white/10 border border-white/20 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent appearance-none cursor-pointer backdrop-blur-sm"
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value} className="bg-gray-900 text-white">
                    {option.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
            </div>
          </div>

          {/* Price Range */}
          <div className="mb-8">
            <button
              onClick={() => setShowPriceFilter(!showPriceFilter)}
              className="flex items-center justify-between w-full text-white font-semibold mb-4 hover:text-blue-400 transition-colors text-lg group"
            >
              <span className="flex items-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></div>
                Prix
              </span>
              {showPriceFilter ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
            </button>
            {showPriceFilter && (
              <div className="space-y-4 pl-5">
                <div className="flex items-center space-x-4">
                  <div className="flex-1">
                    <label className="block text-sm text-gray-400 mb-2">Minimum</label>
                    <input
                      type="number"
                      placeholder="0"
                      value={priceRange[0]}
                      onChange={(e) => handlePriceChange(Number(e.target.value), priceRange[1])}
                      className="w-full bg-gradient-to-r from-white/5 to-white/10 border border-white/20 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm text-gray-400 mb-2">Maximum</label>
                    <input
                      type="number"
                      placeholder="500000"
                      value={priceRange[1]}
                      onChange={(e) => handlePriceChange(priceRange[0], Number(e.target.value))}
                      className="w-full bg-gradient-to-r from-white/5 to-white/10 border border-white/20 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm"
                    />
                  </div>
                </div>
                <div className="text-sm text-gray-400 bg-white/5 rounded-xl px-4 py-2 backdrop-blur-sm">
                  {priceRange[0].toLocaleString()} - {priceRange[1].toLocaleString()} FCFA
                </div>
              </div>
            )}
          </div>

          {/* Sizes */}
          <div className="mb-8">
            <button
              onClick={() => setShowSizeFilter(!showSizeFilter)}
              className="flex items-center justify-between w-full text-white font-semibold mb-4 hover:text-blue-400 transition-colors text-lg group"
            >
              <span className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></div>
                Tailles
              </span>
              {showSizeFilter ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
            </button>
            {showSizeFilter && (
              <div className="grid grid-cols-4 gap-3 pl-5">
                {sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => handleSizeToggle(size)}
                    className={`py-3 px-3 rounded-xl text-sm font-medium transition-all backdrop-blur-sm hover:scale-105 ${
                      selectedSizes.includes(size)
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                        : 'bg-gradient-to-r from-white/5 to-white/10 text-gray-300 hover:bg-white/20 hover:text-white border border-white/10'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Colors */}
          <div className="mb-8">
            <button
              onClick={() => setShowColorFilter(!showColorFilter)}
              className="flex items-center justify-between w-full text-white font-semibold mb-4 hover:text-blue-400 transition-colors text-lg group"
            >
              <span className="flex items-center">
                <div className="w-2 h-2 bg-pink-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></div>
                Couleurs
              </span>
              {showColorFilter ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
            </button>
            {showColorFilter && (
              <div className="grid grid-cols-2 gap-3 pl-5">
                {colors.map(color => (
                  <button
                    key={color}
                    onClick={() => handleColorToggle(color)}
                    className={`py-3 px-4 rounded-xl text-sm font-medium transition-all backdrop-blur-sm hover:scale-105 ${
                      selectedColors.includes(color)
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                        : 'bg-gradient-to-r from-white/5 to-white/10 text-gray-300 hover:bg-white/20 hover:text-white border border-white/10'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
