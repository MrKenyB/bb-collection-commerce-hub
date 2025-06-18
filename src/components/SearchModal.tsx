
import React, { useState } from 'react';
import { Search, X, Filter, TrendingUp, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [recentSearches] = useState(['T-shirt homme', 'Robe élégante', 'Chaussures sport']);
  const [trendingSearches] = useState(['Costume mariage', 'Sac cuir', 'Bijoux or']);

  if (!isOpen) return null;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      console.log(`Searching for: ${searchTerm}`);
      // Add to recent searches logic here
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="min-h-screen flex items-start justify-center pt-20 px-4">
        <div className="w-full max-w-2xl glass-ultra rounded-3xl p-8 animate-scale-in">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold gradient-text">Rechercher</h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-white hover:bg-white/10 rounded-2xl"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          <form onSubmit={handleSearch} className="mb-8">
            <div className="relative">
              <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Que recherchez-vous ?"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="glass-ultra border-white/20 text-white placeholder:text-gray-400 rounded-2xl pl-14 pr-6 py-4 text-lg"
                autoFocus
              />
              <Button
                type="submit"
                className="absolute right-2 top-2 btn-ultra rounded-xl px-6"
              >
                Rechercher
              </Button>
            </div>
          </form>

          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Clock className="h-5 w-5 text-gray-400" />
                <h3 className="text-lg font-semibold text-white">Recherches récentes</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {recentSearches.map((search, index) => (
                  <button
                    key={index}
                    onClick={() => setSearchTerm(search)}
                    className="px-4 py-2 glass-ultra rounded-full text-sm text-gray-300 hover:text-white hover:scale-105 transition-all"
                  >
                    {search}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center space-x-2 mb-4">
                <TrendingUp className="h-5 w-5 text-yellow-400" />
                <h3 className="text-lg font-semibold text-white">Tendances</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {trendingSearches.map((search, index) => (
                  <button
                    key={index}
                    onClick={() => setSearchTerm(search)}
                    className="px-4 py-2 gradient-primary rounded-full text-sm text-white hover:scale-105 transition-all"
                  >
                    {search}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
