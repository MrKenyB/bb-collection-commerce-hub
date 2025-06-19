
import React from 'react';
import { X, ShoppingBag, Plus, Minus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose }) => {
  const cartItems = [
    {
      id: 1,
      name: "Costume Élégant Premium",
      price: 180000,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-CG', {
      style: 'currency',
      currency: 'XAF',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      )}
      
      <div className={`fixed right-0 top-0 h-full w-96 glass-dark border-l border-white/10 transform transition-transform z-50 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-space font-bold text-white flex items-center">
              <ShoppingBag className="mr-3 h-6 w-6" />
              Panier ({cartItems.length})
            </h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-white hover:bg-white/10 rounded-2xl"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingBag className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-400">Votre panier est vide</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="glass-ultra rounded-2xl p-4">
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-xl"
                    />
                    <div className="flex-1">
                      <h3 className="text-white font-medium text-sm">{item.name}</h3>
                      <p className="text-blue-400 font-bold">{formatPrice(item.price)}</p>
                      
                      <div className="flex items-center space-x-2 mt-2">
                        <Button size="icon" variant="ghost" className="h-8 w-8 text-white hover:bg-white/10">
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="text-white font-medium px-2">{item.quantity}</span>
                        <Button size="icon" variant="ghost" className="h-8 w-8 text-white hover:bg-white/10">
                          <Plus className="h-4 w-4" />
                        </Button>
                        <Button size="icon" variant="ghost" className="h-8 w-8 text-red-400 hover:bg-red-400/10 ml-auto">
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

        {cartItems.length > 0 && (
          <div className="p-6 border-t border-white/10">
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg font-semibold text-white">Total:</span>
              <span className="text-xl font-bold gradient-text">{formatPrice(total)}</span>
            </div>
            <Button className="w-full btn-ultra text-white font-bold py-3 rounded-2xl">
              Commander
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartSidebar;
