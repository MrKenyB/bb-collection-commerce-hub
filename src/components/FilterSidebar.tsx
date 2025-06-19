
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
      <div className="lg:hidden fixed inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>
      
      {/* Filter panel */}
      <div className="fixed right-0 top-0 h-full w-80 glass-ultra border-l border-white/20 lg:relative lg:w-full lg:h-auto lg:border-0 lg:rounded-3xl overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-space font-bold text-white flex items-center">
              <Filter className="mr-3 h-5 w-5" />
              Filtres
            </h2>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" onClick={clearAllFilters} className="text-gray-400 hover:text-white">
                Effacer
              </Button>
              <Button variant="ghost" size="icon" onClick={onClose} className="lg:hidden text-white hover:bg-white/10 rounded-2xl">
                <X className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Sort */}
          <div className="mb-6">
            <h3 className="text-white font-semibold mb-3">Trier par</h3>
            <select
              value={sortBy}
              onChange={(e) => handleSortChange(e.target.value)}
              className="w-full bg-white/10 border border-white/20 rounded-2xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              {sortOptions.map(option => (
                <option key={option.value} value={option.value} className="bg-gray-900">
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Price Range */}
          <div className="mb-6">
            <button
              onClick={() => setShowPriceFilter(!showPriceFilter)}
              className="flex items-center justify-between w-full text-white font-semibold mb-3 hover:text-blue-400 transition-colors"
            >
              Prix
              {showPriceFilter ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>
            {showPriceFilter && (
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <input
                    type="number"
                    placeholder="Min"
                    value={priceRange[0]}
                    onChange={(e) => handlePriceChange(Number(e.target.value), priceRange[1])}
                    className="flex-1 bg-white/10 border border-white/20 rounded-xl px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  <span className="text-gray-400">-</span>
                  <input
                    type="number"
                    placeholder="Max"
                    value={priceRange[1]}
                    onChange={(e) => handlePriceChange(priceRange[0], Number(e.target.value))}
                    className="flex-1 bg-white/10 border border-white/20 rounded-xl px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div className="text-xs text-gray-400">
                  {priceRange[0].toLocaleString()} - {priceRange[1].toLocaleString()} FCFA
                </div>
              </div>
            )}
          </div>

          {/* Sizes */}
          <div className="mb-6">
            <button
              onClick={() => setShowSizeFilter(!showSizeFilter)}
              className="flex items-center justify-between w-full text-white font-semibold mb-3 hover:text-blue-400 transition-colors"
            >
              Tailles
              {showSizeFilter ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>
            {showSizeFilter && (
              <div className="grid grid-cols-4 gap-2">
                {sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => handleSizeToggle(size)}
                    className={`py-2 px-3 rounded-xl text-sm font-medium transition-all ${
                      selectedSizes.includes(size)
                        ? 'bg-blue-500 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Colors */}
          <div className="mb-6">
            <button
              onClick={() => setShowColorFilter(!showColorFilter)}
              className="flex items-center justify-between w-full text-white font-semibold mb-3 hover:text-blue-400 transition-colors"
            >
              Couleurs
              {showColorFilter ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>
            {showColorFilter && (
              <div className="grid grid-cols-2 gap-2">
                {colors.map(color => (
                  <button
                    key={color}
                    onClick={() => handleColorToggle(color)}
                    className={`py-2 px-3 rounded-xl text-sm font-medium transition-all ${
                      selectedColors.includes(color)
                        ? 'bg-blue-500 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
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
