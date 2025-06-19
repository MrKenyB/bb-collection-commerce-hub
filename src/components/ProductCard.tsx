
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Heart, ShoppingCart, Eye, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  isNew: boolean;
}

interface ProductCardProps {
  product: Product;
  viewMode?: 'grid' | 'list';
}

const ProductCard: React.FC<ProductCardProps> = ({ product, viewMode = 'grid' }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-CG', {
      style: 'currency',
      currency: 'XAF',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLiked(!isLiked);
    console.log(`Product ${product.id} ${isLiked ? 'unliked' : 'liked'}`);
  };

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLoading(true);
    console.log(`Adding product ${product.id} to cart...`);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      console.log(`Product ${product.id} added to cart!`);
    }, 1000);
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(`Quick view for product ${product.id}`);
  };

  if (viewMode === 'list') {
    return (
      <div className="group cursor-pointer card-ultra rounded-3xl overflow-hidden hover-scale-ultra flex">
        <div className="relative overflow-hidden w-48 h-48 bg-gradient-to-br from-gray-900 to-gray-800 flex-shrink-0">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          
          {product.isNew && (
            <div className="absolute top-4 left-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-3 py-1 text-xs font-bold tracking-wider rounded-full shadow-xl animate-pulse">
              <Zap className="w-3 h-3 inline mr-1" />
              NOUVEAU
            </div>
          )}
        </div>

        <div className="flex-1 p-6 flex flex-col justify-between bg-gradient-to-b from-gray-900 to-black">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-blue-400 font-bold bg-blue-400/10 px-3 py-1.5 rounded-full border border-blue-400/20">
                {product.category}
              </span>
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm text-gray-300 font-semibold">{product.rating}</span>
              </div>
            </div>
            
            <Link to={`/produit/${product.id}`}>
              <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors mb-3">
                {product.name}
              </h3>
            </Link>
            
            <p className="text-2xl font-bold gradient-text mb-4">
              {formatPrice(product.price)}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <button 
                onClick={handleLike}
                className={`w-10 h-10 glass-ultra rounded-xl flex items-center justify-center backdrop-blur hover:scale-110 transition-all shadow-xl ${isLiked ? 'text-red-400' : 'text-white'}`}
              >
                <Heart className={`h-4 w-4 ${isLiked ? 'fill-red-400' : ''}`} />
              </button>
              <button 
                onClick={handleQuickView}
                className="w-10 h-10 glass-ultra rounded-xl flex items-center justify-center backdrop-blur hover:scale-110 transition-all shadow-xl text-white"
              >
                <Eye className="h-4 w-4" />
              </button>
            </div>
            
            <Button 
              onClick={handleAddToCart}
              disabled={isLoading}
              className="btn-ultra text-white font-bold tracking-wide rounded-xl shadow-2xl disabled:opacity-50"
            >
              {isLoading ? (
                <div className="flex items-center">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  Ajout...
                </div>
              ) : (
                <>
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Ajouter
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group cursor-pointer card-ultra rounded-3xl overflow-hidden hover-scale-ultra">
      <div className="relative overflow-hidden aspect-[4/5] bg-gradient-to-br from-gray-900 to-gray-800">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        
        {/* Badge Ultra */}
        {product.isNew && (
          <div className="absolute top-4 left-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 text-xs font-bold tracking-wider rounded-full shadow-xl animate-pulse">
            <Zap className="w-3 h-3 inline mr-1" />
            NOUVEAU
          </div>
        )}
        
        {/* Actions Ultra */}
        <div className="absolute top-4 right-4 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-all">
          <button 
            onClick={handleLike}
            className={`w-12 h-12 glass-ultra rounded-2xl flex items-center justify-center backdrop-blur hover:scale-110 transition-all shadow-xl ${isLiked ? 'text-red-400' : 'text-white'}`}
          >
            <Heart className={`h-5 w-5 ${isLiked ? 'fill-red-400' : ''}`} />
          </button>
          <button 
            onClick={handleQuickView}
            className="w-12 h-12 glass-ultra rounded-2xl flex items-center justify-center backdrop-blur hover:scale-110 transition-all shadow-xl text-white"
          >
            <Eye className="h-5 w-5" />
          </button>
        </div>

        {/* Add to Cart Button Ultra */}
        <div className="absolute inset-x-0 bottom-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform">
          <Button 
            onClick={handleAddToCart}
            disabled={isLoading}
            className="w-full btn-ultra text-white font-bold tracking-wide rounded-2xl shadow-2xl disabled:opacity-50"
          >
            {isLoading ? (
              <div className="flex items-center">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                Ajout<span className="loading-dots"></span>
              </div>
            ) : (
              <>
                <ShoppingCart className="mr-3 h-5 w-5" />
                Ajouter au panier
              </>
            )}
          </Button>
        </div>
      </div>

      <div className="p-6 space-y-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="flex items-center justify-between">
          <span className="text-sm text-blue-400 font-bold bg-blue-400/10 px-3 py-1.5 rounded-full border border-blue-400/20">
            {product.category}
          </span>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm text-gray-300 font-semibold">{product.rating}</span>
          </div>
        </div>
        
        <Link to={`/produit/${product.id}`}>
          <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-2 leading-tight">
            {product.name}
          </h3>
        </Link>
        
        <div className="flex items-center justify-between pt-2">
          <div className="space-y-1">
            <p className="text-2xl font-bold gradient-text">
              {formatPrice(product.price)}
            </p>
            <div className="text-xs text-gray-500 font-medium flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              En stock
            </div>
          </div>
          
          <div className="text-right">
            <div className="text-xs text-gray-400 mb-1">Disponible</div>
            <div className="w-8 h-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
