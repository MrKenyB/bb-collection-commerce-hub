
import React, { useState } from 'react';
import { User, Package, Heart, Settings, MapPin, Phone, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const MonCompte = () => {
  const [activeTab, setActiveTab] = useState('profil');

  const menuItems = [
    { id: 'profil', name: 'Mon Profil', icon: User },
    { id: 'commandes', name: 'Mes Commandes', icon: Package },
    { id: 'favoris', name: 'Mes Favoris', icon: Heart },
    { id: 'paiement', name: 'Paiements', icon: CreditCard },
    { id: 'parametres', name: 'Paramètres', icon: Settings },
  ];

  const commandes = [
    {
      id: 'CMD001',
      date: '15 Déc 2024',
      statut: 'Livré',
      total: 75000,
      items: 'Costume Élégant Africain, Chemise Modern...'
    },
    {
      id: 'CMD002', 
      date: '10 Déc 2024',
      statut: 'En cours',
      total: 45000,
      items: 'Sac à Main Wax Premium'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
      <Navbar />
      
      <div className="pt-[132px] pb-16">
        {/* Header */}
        <div className="congo-gradient py-16">
          <div className="max-w-6xl mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-shadow">
              Mon Compte BB_COLLECTION
            </h1>
            <p className="text-xl opacity-90">
              🇨🇬 Bienvenue dans votre espace personnel
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 -mt-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="glass-effect shadow-xl">
                <CardHeader className="pb-4">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <User className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="font-bold text-lg text-gray-900">Marie Kongo</h3>
                    <p className="text-sm text-orange-600 font-medium">Client VIP • Pointe-Noire</p>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  {menuItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all font-medium ${
                          activeTab === item.id 
                            ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg' 
                            : 'text-gray-700 hover:bg-orange-50 hover:text-orange-600'
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                        <span>{item.name}</span>
                      </button>
                    );
                  })}
                </CardContent>
              </Card>
            </div>

            {/* Content */}
            <div className="lg:col-span-3 space-y-6">
              {activeTab === 'profil' && (
                <Card className="glass-effect shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-gray-900">Informations Personnelles</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Prénom</label>
                        <input 
                          type="text" 
                          defaultValue="Marie"
                          className="w-full px-4 py-3 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Nom</label>
                        <input 
                          type="text" 
                          defaultValue="Kongo"
                          className="w-full px-4 py-3 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                      <input 
                        type="email" 
                        defaultValue="marie.kongo@email.cg"
                        className="w-full px-4 py-3 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>

                    <div className="flex items-center space-x-3 p-4 bg-orange-50 rounded-lg">
                      <MapPin className="h-5 w-5 text-orange-600" />
                      <div>
                        <div className="font-bold text-gray-900">Adresse de livraison</div>
                        <div className="text-gray-600">Quartier Mpita, Pointe-Noire, République du Congo</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 p-4 bg-orange-50 rounded-lg">
                      <Phone className="h-5 w-5 text-orange-600" />
                      <div>
                        <div className="font-bold text-gray-900">Téléphone</div>
                        <div className="text-gray-600">+242 06 123 45 67</div>
                      </div>
                    </div>

                    <Button className="bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600 px-6 py-3 font-bold">
                      Mettre à jour
                    </Button>
                  </CardContent>
                </Card>
              )}

              {activeTab === 'commandes' && (
                <Card className="glass-effect shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-gray-900">Mes Commandes</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {commandes.map((commande) => (
                      <div key={commande.id} className="border border-orange-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="font-bold text-lg text-gray-900">Commande #{commande.id}</h3>
                            <p className="text-sm text-gray-600">{commande.date}</p>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                            commande.statut === 'Livré' 
                              ? 'bg-green-100 text-green-800'
                              : 'bg-orange-100 text-orange-800'
                          }`}>
                            {commande.statut}
                          </span>
                        </div>
                        <p className="text-gray-700 mb-4">{commande.items}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-2xl font-bold text-orange-600">
                            {new Intl.NumberFormat('fr-CG', {
                              style: 'currency',
                              currency: 'XAF',
                              minimumFractionDigits: 0,
                            }).format(commande.total)}
                          </span>
                          <Button variant="outline" className="border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white">
                            Voir détails
                          </Button>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              )}

              {activeTab === 'paiement' && (
                <Card className="glass-effect shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-gray-900">Modes de Paiement</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="border-2 border-orange-200 rounded-lg p-6 text-center hover:border-orange-400 transition-colors">
                        <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Phone className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="font-bold text-lg text-gray-900 mb-2">Mobile Money</h3>
                        <p className="text-sm text-gray-600 mb-4">+242 06 xxx xx 67</p>
                        <Button variant="outline" className="border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white">
                          Configurer
                        </Button>
                      </div>

                      <div className="border-2 border-orange-200 rounded-lg p-6 text-center hover:border-orange-400 transition-colors">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                          <CreditCard className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="font-bold text-lg text-gray-900 mb-2">Airtel Money</h3>
                        <p className="text-sm text-gray-600 mb-4">Non configuré</p>
                        <Button variant="outline" className="border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white">
                          Ajouter
                        </Button>
                      </div>

                      <div className="border-2 border-orange-200 rounded-lg p-6 text-center hover:border-orange-400 transition-colors">
                        <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                          <CreditCard className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="font-bold text-lg text-gray-900 mb-2">Carte Bancaire</h3>
                        <p className="text-sm text-gray-600 mb-4">**** 1234</p>
                        <Button variant="outline" className="border-green-500 text-green-600 hover:bg-green-500 hover:text-white">
                          Gérer
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MonCompte;
