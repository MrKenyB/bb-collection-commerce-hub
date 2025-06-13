
import React, { useState } from 'react';
import { 
  Package, 
  Users, 
  ShoppingCart, 
  TrendingUp, 
  Plus,
  Edit,
  Trash2,
  Eye
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const AdminDashboard = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Costume Élégant",
      price: 299,
      stock: 15,
      category: "Vêtements Hommes",
      status: "En stock"
    },
    {
      id: 2,
      name: "Sac à Main Cuir",
      price: 189,
      stock: 8,
      category: "Sacs Femmes", 
      status: "En stock"
    },
    {
      id: 3,
      name: "Chemise Oxford",
      price: 89,
      stock: 0,
      category: "Vêtements Hommes",
      status: "Rupture"
    }
  ]);

  const stats = [
    {
      title: "Ventes du mois",
      value: "12,847€",
      change: "+12%",
      icon: TrendingUp,
      color: "text-green-600"
    },
    {
      title: "Commandes",
      value: "156",
      change: "+8%", 
      icon: ShoppingCart,
      color: "text-blue-600"
    },
    {
      title: "Produits",
      value: "89",
      change: "+3%",
      icon: Package,
      color: "text-purple-600"
    },
    {
      title: "Clients",
      value: "1,247",
      change: "+15%",
      icon: Users,
      color: "text-orange-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-light text-gray-900">
              Tableau de Bord - BB_COLLECTION
            </h1>
            <div className="flex space-x-4">
              <Button className="bg-black text-white hover:bg-gray-900">
                <Plus className="w-4 h-4 mr-2" />
                Nouveau Produit
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500 mb-1">
                      {stat.title}
                    </p>
                    <p className="text-2xl font-light text-gray-900">
                      {stat.value}
                    </p>
                    <p className={`text-sm font-medium ${stat.color}`}>
                      {stat.change} vs mois dernier
                    </p>
                  </div>
                  <div className={`p-3 rounded-full bg-gray-100`}>
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <Tabs defaultValue="products" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="products">Produits</TabsTrigger>
            <TabsTrigger value="orders">Commandes</TabsTrigger>
            <TabsTrigger value="customers">Clients</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="products">
            <Card>
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  <span>Gestion des Produits</span>
                  <Button className="bg-black text-white hover:bg-gray-900">
                    <Plus className="w-4 h-4 mr-2" />
                    Ajouter
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-medium text-gray-500">Produit</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-500">Catégorie</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-500">Prix</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-500">Stock</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-500">Statut</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-500">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.map((product) => (
                        <tr key={product.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-4 font-medium">{product.name}</td>
                          <td className="py-3 px-4 text-gray-600">{product.category}</td>
                          <td className="py-3 px-4 font-medium">{product.price}€</td>
                          <td className="py-3 px-4">{product.stock}</td>
                          <td className="py-3 px-4">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              product.status === 'En stock' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-red-100 text-red-800'
                            }`}>
                              {product.status}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex space-x-2">
                              <Button variant="ghost" size="sm">
                                <Eye className="w-4 h-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Edit className="w-4 h-4" />
                              </Button>
                              <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-800">
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="orders">
            <Card>
              <CardHeader>
                <CardTitle>Gestion des Commandes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 text-center py-8">
                  Interface de gestion des commandes à venir...
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="customers">
            <Card>
              <CardHeader>
                <CardTitle>Gestion des Clients</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 text-center py-8">
                  Interface de gestion des clients à venir...
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <Card>
              <CardHeader>
                <CardTitle>Analytics & Rapports</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 text-center py-8">
                  Tableaux de bord analytics à venir...
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
