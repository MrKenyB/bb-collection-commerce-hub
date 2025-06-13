
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Heart, ShoppingCart, Eye } from 'lucide-react';
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
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-CG', {
      style: 'currency',
      currency: 'XAF',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="group cursor-pointer card-modern rounded-3xl overflow-hidden hover-lift">
      <div className="relative overflow-hidden aspect-[4/5] bg-gradient-to-br from-emerald-50 to-teal-50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Badge moderne "Nouveau" */}
        {product.isNew && (
          <div className="absolute top-4 left-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 text-xs font-bold tracking-wide rounded-full shadow-lg animate-pulse">
            ✨ NOUVEAU
          </div>
        )}
        
        {/* Actions overlay moderne */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all">
          <button className="w-12 h-12 bg-white/90 rounded-2xl flex items-center justify-center backdrop-blur hover:bg-white hover:scale-110 transition-all shadow-lg">
            <Heart className="h-5 w-5 text-emerald-600 hover:fill-emerald-600" />
          </button>
          <button className="w-12 h-12 bg-white/90 rounded-2xl flex items-center justify-center backdrop-blur hover:bg-white hover:scale-110 transition-all shadow-lg">
            <Eye className="h-5 w-5 text-emerald-600" />
          </button>
        </div>

        {/* Overlay avec bouton d'achat moderne */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all flex items-end justify-center pb-6">
          <Button className="btn-congo text-white px-6 py-3 font-bold tracking-wide transform translate-y-8 group-hover:translate-y-0 transition-transform rounded-2xl shadow-xl">
            <ShoppingCart className="mr-2 h-5 w-5" />
            Ajouter au panier
          </Button>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-emerald-700 font-bold bg-emerald-100 px-3 py-1 rounded-full">
            {product.category}
          </span>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm text-gray-700 font-semibold">{product.rating}</span>
          </div>
        </div>
        
        <Link to={`/produit/${product.id}`}>
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-emerald-600 transition-colors line-clamp-2 leading-tight">
            {product.name}
          </h3>
        </Link>
        
        <div className="flex items-center justify-between">
          <p className="text-2xl font-bold text-emerald-600">
            {formatPrice(product.price)}
          </p>
          <div className="text-xs text-gray-500 font-medium bg-gray-100 px-2 py-1 rounded-full">
            🇨🇬 Made in Congo
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
