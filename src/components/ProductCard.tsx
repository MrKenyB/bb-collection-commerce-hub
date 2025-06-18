
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Heart, ShoppingCart, Eye, Zap, Share2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/useCart';

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
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showQuickView, setShowQuickView] = useState(false);
  const { addItem } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-CG', {
      style: 'currency',
      currency: 'XAF',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    console.log(`Product ${product.id} ${isLiked ? 'unliked' : 'liked'}`);
  };

  const handleAddToCart = async () => {
    setIsLoading(true);
    console.log(`Adding product ${product.id} to cart...`);
    
    // Simulate API call
    setTimeout(() => {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image
      });
      setIsLoading(false);
      console.log(`Product ${product.id} added to cart!`);
    }, 1000);
  };

  const handleQuickView = () => {
    setShowQuickView(true);
    console.log(`Quick view for product ${product.id}`);
  };

  const handleShare = () => {
    console.log(`Sharing product ${product.id}`);
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: `Découvrez ce produit: ${product.name}`,
        url: window.location.href
      });
    }
  };

  return (
    <div className="group cursor-pointer relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 via-black to-gray-800 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:scale-[1.02] border border-white/10">
      <div className="relative overflow-hidden aspect-[4/5]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter group-hover:brightness-110"
        />
        
        {/* Premium Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
        
        {/* Ultra Badge */}
        {product.isNew && (
          <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-black px-4 py-2 text-xs font-black tracking-wider rounded-2xl shadow-2xl animate-pulse backdrop-blur-sm">
            <Zap className="w-3 h-3 inline mr-1" />
            NOUVEAU
          </div>
        )}
        
        {/* Premium Actions */}
        <div className="absolute top-4 right-4 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
          <button 
            onClick={handleLike}
            className={`w-12 h-12 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-2xl border border-white/20 ${isLiked ? 'text-red-400 bg-red-400/20' : 'text-white hover:bg-white/20'}`}
          >
            <Heart className={`h-5 w-5 ${isLiked ? 'fill-red-400' : ''}`} />
          </button>
          <button 
            onClick={handleQuickView}
            className="w-12 h-12 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-2xl border border-white/20 text-white hover:bg-blue-400/20 hover:text-blue-400"
          >
            <Eye className="h-5 w-5" />
          </button>
          <button 
            onClick={handleShare}
            className="w-12 h-12 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-2xl border border-white/20 text-white hover:bg-green-400/20 hover:text-green-400"
          >
            <Share2 className="h-5 w-5" />
          </button>
        </div>

        {/* Premium Add to Cart Button */}
        <div className="absolute inset-x-0 bottom-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-all duration-500">
          <Button 
            onClick={handleAddToCart}
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 hover:from-purple-600 hover:via-blue-600 hover:to-cyan-600 text-white font-bold tracking-wide rounded-2xl shadow-2xl disabled:opacity-50 py-4 text-lg transition-all duration-300 hover:shadow-purple-500/25 hover:scale-[1.02] border-2 border-white/20"
          >
            {isLoading ? (
              <div className="flex items-center">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                Ajout<span className="loading-dots"></span>
              </div>
            ) : (
              <>
                <ShoppingCart className="mr-3 h-5 w-5" />
                Ajouter au panier
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </Button>
        </div>
      </div>

      <div className="p-6 space-y-4 bg-gradient-to-b from-gray-900/80 to-black/90 backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <span className="text-sm text-cyan-400 font-bold bg-cyan-400/10 px-4 py-2 rounded-full border border-cyan-400/30 backdrop-blur-sm">
            {product.category}
          </span>
          <div className="flex items-center space-x-1 bg-yellow-400/10 px-3 py-1.5 rounded-full border border-yellow-400/30">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm text-yellow-400 font-bold">{product.rating}</span>
          </div>
        </div>
        
        <Link to={`/produit/${product.id}`}>
          <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors line-clamp-2 leading-tight hover:underline">
            {product.name}
          </h3>
        </Link>
        
        <div className="flex items-center justify-between pt-2">
          <div className="space-y-2">
            <p className="text-2xl font-black bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {formatPrice(product.price)}
            </p>
            <div className="text-xs text-emerald-400 font-semibold flex items-center bg-emerald-400/10 px-3 py-1 rounded-full border border-emerald-400/30">
              <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></div>
              🇨🇬 Made in Congo
            </div>
          </div>
          
          <div className="text-right space-y-2">
            <div className="text-xs text-emerald-400 font-semibold">En Stock</div>
            <div className="w-16 h-2 bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-500 rounded-full shadow-lg"></div>
            <div className="text-xs text-gray-400">Livraison 24h</div>
          </div>
        </div>
      </div>

      {/* Premium Hover Glow Effect */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </div>
  );
};

export default ProductCard;
