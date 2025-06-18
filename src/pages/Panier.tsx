
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Plus, Minus, Trash2, ShoppingBag, CreditCard, Truck, Shield, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  size: string;
  color: string;
  quantity: number;
}

const Panier = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Costume Élégant Premium Congo",
      price: 180000,
      image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=400",
      size: "L",
      color: "Noir",
      quantity: 1
    },
    {
      id: 2,
      name: "Sac Cuir Artisanal Brazzaville",
      price: 85000,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=400",
      size: "Unique",
      color: "Marron",
      quantity: 2
    }
  ]);

  const [promoCode, setPromoCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-CG', {
      style: 'currency',
      currency: 'XAF',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
    console.log(`Updated item ${id} quantity to ${newQuantity}`);
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
    console.log(`Removed item ${id} from cart`);
  };

  const applyPromoCode = () => {
    console.log(`Applying promo code: ${promoCode}`);
    // Add promo code logic here
  };

  const proceedToCheckout = async () => {
    setIsLoading(true);
    console.log('Proceeding to checkout...');
    
    // Simulate checkout process
    setTimeout(() => {
      setIsLoading(false);
      console.log('Checkout completed!');
    }, 2000);
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 75000 ? 0 : 5000;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          
          {/* Header Ultra */}
          <div className="mb-12">
            <Link to="/boutique" className="inline-flex items-center text-blue-400 hover:text-white transition-colors mb-6 group">
              <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
              Continuer mes achats
            </Link>
            
            <div className="text-center space-y-4">
              <h1 className="text-5xl md:text-6xl font-space font-bold gradient-text">
                Mon Panier
              </h1>
              <p className="text-xl text-gray-400">
                {cartItems.length} article{cartItems.length > 1 ? 's' : ''} dans votre panier
              </p>
            </div>
          </div>

          {cartItems.length === 0 ? (
            
            // Empty Cart Ultra
            <div className="text-center py-20">
              <div className="w-32 h-32 gradient-primary rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
                <ShoppingBag className="h-16 w-16 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Votre panier est vide</h2>
              <p className="text-gray-400 mb-8">Découvrez notre collection et ajoutez vos coups de cœur</p>
              <Link to="/boutique">
                <Button className="btn-ultra px-12 py-4 text-lg font-bold rounded-full">
                  Explorer la boutique
                </Button>
              </Link>
            </div>
            
          ) : (
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              
              {/* Cart Items Ultra */}
              <div className="lg:col-span-2 space-y-6">
                {cartItems.map((item, index) => (
                  <div key={item.id} className="card-ultra rounded-3xl p-6 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
                      
                      {/* Product Image */}
                      <div className="relative">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-2xl"
                        />
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      </div>
                      
                      {/* Product Info */}
                      <div className="flex-1 space-y-3">
                        <h3 className="text-xl font-bold text-white">{item.name}</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <span>Taille: <span className="text-white font-medium">{item.size}</span></span>
                          <span>Couleur: <span className="text-white font-medium">{item.color}</span></span>
                        </div>
                        <div className="text-2xl font-bold gradient-text">
                          {formatPrice(item.price)}
                        </div>
                      </div>
                      
                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-3 glass-ultra rounded-2xl p-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="h-8 w-8 text-white hover:bg-white/10 rounded-xl"
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="w-8 text-center font-bold text-white">{item.quantity}</span>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="h-8 w-8 text-white hover:bg-white/10 rounded-xl"
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                        
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeItem(item.id)}
                          className="h-10 w-10 text-red-400 hover:bg-red-400/10 rounded-2xl"
                        >
                          <Trash2 className="h-5 w-5" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Order Summary Ultra */}
              <div className="space-y-6">
                
                {/* Promo Code */}
                <div className="card-ultra rounded-3xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Code Promo</h3>
                  <div className="flex space-x-3">
                    <Input
                      type="text"
                      placeholder="Entrez votre code..."
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="glass-ultra border-white/20 text-white placeholder:text-gray-400 rounded-2xl"
                    />
                    <Button onClick={applyPromoCode} className="btn-ultra px-6 rounded-2xl">
                      Appliquer
                    </Button>
                  </div>
                </div>
                
                {/* Summary */}
                <div className="card-ultra rounded-3xl p-6 space-y-6">
                  <h3 className="text-xl font-bold text-white">Résumé de commande</h3>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between text-gray-400">
                      <span>Sous-total</span>
                      <span className="text-white font-medium">{formatPrice(subtotal)}</span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                      <span>Livraison</span>
                      <span className={`font-medium ${shipping === 0 ? 'text-green-400' : 'text-white'}`}>
                        {shipping === 0 ? 'Gratuite' : formatPrice(shipping)}
                      </span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                      <span>Taxes</span>
                      <span className="text-white font-medium">{formatPrice(tax)}</span>
                    </div>
                    <div className="border-t border-white/10 pt-4">
                      <div className="flex justify-between">
                        <span className="text-xl font-bold text-white">Total</span>
                        <span className="text-2xl font-bold gradient-text">{formatPrice(total)}</span>
                      </div>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={proceedToCheckout}
                    disabled={isLoading}
                    className="w-full btn-ultra py-4 text-lg font-bold rounded-2xl disabled:opacity-50"
                  >
                    {isLoading ? (
                      <div className="flex items-center">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                        Traitement<span className="loading-dots"></span>
                      </div>
                    ) : (
                      <>
                        <CreditCard className="mr-3 h-5 w-5" />
                        Procéder au paiement
                      </>
                    )}
                  </Button>
                </div>
                
                {/* Trust Badges */}
                <div className="card-ultra rounded-3xl p-6">
                  <h4 className="text-lg font-bold text-white mb-4">Achats sécurisés</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center space-x-3">
                      <Shield className="h-5 w-5 text-green-400" />
                      <span className="text-gray-400">Paiement 100% sécurisé</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Truck className="h-5 w-5 text-blue-400" />
                      <span className="text-gray-400">Livraison gratuite dès 75 000 FCFA</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Heart className="h-5 w-5 text-red-400" />
                      <span className="text-gray-400">Retours gratuits sous 30 jours</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Panier;
