
import React from 'react';
import { Heart, X, ShoppingBag, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface WishlistItem {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface WishlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WishlistModal: React.FC<WishlistModalProps> = ({ isOpen, onClose }) => {
  const [wishlistItems] = React.useState<WishlistItem[]>([
    {
      id: 1,
      name: "Costume Élégant Premium",
      price: 299,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"
    },
    {
      id: 2,
      name: "Robe Cocktail Luxe",
      price: 189,
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&q=80&w=400"
    }
  ]);

  if (!isOpen) return null;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-CG', {
      style: 'currency',
      currency: 'XAF',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-4xl glass-ultra rounded-3xl p-8 animate-scale-in max-h-[80vh] overflow-y-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 gradient-primary rounded-2xl flex items-center justify-center">
                <Heart className="h-6 w-6 text-white fill-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold gradient-text">Ma Liste de Souhaits</h2>
                <p className="text-gray-400">{wishlistItems.length} articles</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-white hover:bg-white/10 rounded-2xl"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          {wishlistItems.length === 0 ? (
            <div className="text-center py-16">
              <Heart className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Votre liste est vide</h3>
              <p className="text-gray-400">Ajoutez des articles que vous aimez à votre liste de souhaits</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {wishlistItems.map((item) => (
                <div key={item.id} className="card-ultra rounded-2xl overflow-hidden group">
                  <div className="flex">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover"
                    />
                    <div className="flex-1 p-4">
                      <h3 className="font-semibold text-white mb-2">{item.name}</h3>
                      <p className="text-xl font-bold gradient-text mb-3">
                        {formatPrice(item.price)}
                      </p>
                      <div className="flex space-x-2">
                        <Button
                          size="sm"
                          className="btn-ultra flex-1"
                          onClick={() => console.log(`Adding ${item.name} to cart`)}
                        >
                          <ShoppingBag className="h-4 w-4 mr-2" />
                          Panier
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-red-400 hover:bg-red-400/10 hover:text-red-300"
                          onClick={() => console.log(`Removing ${item.name} from wishlist`)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WishlistModal;
