
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Plus, Minus, Trash2, ArrowLeft, CreditCard, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Panier = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Costume Élégant Premium",
      price: 180000,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
      quantity: 1,
      size: "L"
    },
    {
      id: 2,
      name: "Sac à Main Cuir Artisanal",
      price: 85000,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80",
      quantity: 2,
      size: "Unique"
    }
  ]);

  const updateQuantity = (id: number, change: number) => {
    setCartItems(items => 
      items.map(item => 
        item.id === id 
          ? { ...item, quantity: Math.max(0, item.quantity + change) }
          : item
      ).filter(item => item.quantity > 0)
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-24 pb-16">
        {/* Header */}
        <div className="bg-white py-12 border-b">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Link to="/boutique">
                  <Button variant="ghost" size="sm" className="text-gray-600">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Continuer mes achats
                  </Button>
                </Link>
              </div>
              <div className="flex items-center space-x-3">
                <ShoppingBag className="h-8 w-8 text-emerald-600" />
                <h1 className="text-3xl font-display font-bold text-gray-900">
                  Mon Panier
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-8">
          {cartItems.length === 0 ? (
            /* Panier Vide */
            <div className="text-center py-24">
              <div className="w-32 h-32 congo-forest/10 rounded-full flex items-center justify-center mx-auto mb-8">
                <ShoppingBag className="h-16 w-16 text-emerald-600" />
              </div>
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                Votre panier est vide
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
                Découvrez notre collection et ajoutez vos articles préférés
              </p>
              <Link to="/boutique">
                <Button className="btn-congo px-8 py-4 text-lg font-bold rounded-2xl">
                  Découvrir nos produits
                </Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Articles du panier */}
              <div className="lg:col-span-2 space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Articles ({cartItems.length})
                </h2>
                
                {cartItems.map((item) => (
                  <div key={item.id} className="card-modern rounded-2xl p-6 hover-lift">
                    <div className="flex flex-col sm:flex-row gap-6">
                      <div className="w-full sm:w-32 h-32 rounded-xl overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                          <div className="mb-4 sm:mb-0">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                              {item.name}
                            </h3>
                            <p className="text-gray-600">Taille: {item.size}</p>
                            <p className="text-2xl font-bold text-emerald-600 mt-2">
                              {item.price.toLocaleString()} FCFA
                            </p>
                          </div>
                          
                          <div className="flex items-center justify-between sm:flex-col sm:items-end space-y-4">
                            <div className="flex items-center space-x-3">
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => updateQuantity(item.id, -1)}
                                className="w-8 h-8 p-0 rounded-full"
                              >
                                <Minus className="h-4 w-4" />
                              </Button>
                              <span className="text-lg font-semibold w-8 text-center">
                                {item.quantity}
                              </span>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => updateQuantity(item.id, 1)}
                                className="w-8 h-8 p-0 rounded-full"
                              >
                                <Plus className="h-4 w-4" />
                              </Button>
                            </div>
                            
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => removeItem(item.id)}
                              className="text-red-500 hover:text-red-700 hover:bg-red-50"
                            >
                              <Trash2 className="h-4 w-4 mr-2" />
                              Supprimer
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Résumé de commande */}
              <div className="space-y-6">
                <div className="card-modern rounded-2xl p-6 sticky top-24">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Résumé de commande
                  </h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-gray-600">
                      <span>Sous-total</span>
                      <span>{total.toLocaleString()} FCFA</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Livraison</span>
                      <span className="text-emerald-600 font-semibold">Gratuite</span>
                    </div>
                    <div className="border-t pt-4">
                      <div className="flex justify-between text-xl font-bold text-gray-900">
                        <span>Total</span>
                        <span className="text-emerald-600">{total.toLocaleString()} FCFA</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Button className="w-full btn-congo py-4 text-lg font-bold rounded-xl">
                      <CreditCard className="mr-3 h-5 w-5" />
                      Procéder au paiement
                    </Button>
                    
                    <div className="text-center">
                      <p className="text-sm text-gray-500 mb-3">Modes de paiement acceptés:</p>
                      <div className="flex justify-center space-x-4">
                        <div className="flex items-center space-x-2 text-xs text-gray-600">
                          <Smartphone className="h-4 w-4" />
                          <span>Mobile Money</span>
                        </div>
                        <div className="flex items-center space-x-2 text-xs text-gray-600">
                          <Smartphone className="h-4 w-4" />
                          <span>Airtel Money</span>
                        </div>
                        <div className="flex items-center space-x-2 text-xs text-gray-600">
                          <CreditCard className="h-4 w-4" />
                          <span>Carte bancaire</span>
                        </div>
                      </div>
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
