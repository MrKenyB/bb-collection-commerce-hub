
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
  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden bg-gray-50 rounded-lg mb-4 aspect-square">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Badge "Nouveau" */}
        {product.isNew && (
          <div className="absolute top-3 left-3 bg-black text-white px-2 py-1 text-xs font-light tracking-wide">
            NOUVEAU
          </div>
        )}
        
        {/* Bouton Favoris */}
        <button className="absolute top-3 right-3 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <Heart className="h-4 w-4 text-gray-600" />
        </button>

        {/* Overlay avec bouton "Ajouter au panier" */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100">
          <Button className="bg-white text-black hover:bg-gray-100 px-6 py-2 font-light tracking-wide transform translate-y-4 group-hover:translate-y-0 transition-transform">
            Ajouter au panier
          </Button>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500 font-light">{product.category}</span>
          <div className="flex items-center space-x-1">
            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
            <span className="text-xs text-gray-600">{product.rating}</span>
          </div>
        </div>
        
        <Link to={`/produit/${product.id}`}>
          <h3 className="text-lg font-medium text-gray-900 group-hover:text-gray-600 transition-colors">
            {product.name}
          </h3>
        </Link>
        
        <p className="text-xl font-light text-gray-900">
          {product.price}€
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
