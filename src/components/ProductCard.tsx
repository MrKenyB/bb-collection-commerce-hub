
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Heart } from 'lucide-react';
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
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // Format price in FCFA
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-CG', {
      style: 'currency',
      currency: 'XAF',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="group cursor-pointer bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
      <div className="relative overflow-hidden bg-gradient-to-br from-orange-50 to-yellow-50 aspect-square">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Badge "Nouveau" avec style congolais */}
        {product.isNew && (
          <div className="absolute top-3 left-3 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 text-xs font-bold tracking-wide rounded-full shadow-lg animate-pulse-warm">
            ✨ NOUVEAU
          </div>
        )}
        
        {/* Bouton Favoris */}
        <button className="absolute top-3 right-3 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all shadow-lg hover:bg-white hover:scale-110">
          <Heart className="h-5 w-5 text-orange-600 hover:fill-orange-600" />
        </button>

        {/* Overlay avec bouton "Ajouter au panier" */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all flex items-end justify-center pb-6">
          <Button className="bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600 px-6 py-2 font-bold tracking-wide transform translate-y-4 group-hover:translate-y-0 transition-transform shadow-xl">
            Ajouter au panier
          </Button>
        </div>
      </div>

      <div className="p-4 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm text-orange-600 font-bold bg-orange-50 px-2 py-1 rounded-full">{product.category}</span>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm text-gray-700 font-medium">{product.rating}</span>
          </div>
        </div>
        
        <Link to={`/produit/${product.id}`}>
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>
        
        <p className="text-2xl font-bold text-orange-600">
          {formatPrice(product.price)}
        </p>
        
        <div className="text-xs text-gray-500 font-medium">
          🇨🇬 Made in Congo • Livraison gratuite
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
