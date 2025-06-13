
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Users, Award, Heart, Sparkles, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const APropos = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-24">
        {/* Hero Section */}
        <section className="relative py-24 congo-sunset overflow-hidden">
          <div className="absolute inset-0 pattern-dots opacity-30"></div>
          <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
            <div className="space-y-8">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <Heart className="h-8 w-8 text-white animate-pulse" />
                <h1 className="text-5xl md:text-7xl font-display font-bold text-white">
                  À Propos de Nous
                </h1>
                <Heart className="h-8 w-8 text-white animate-pulse" />
              </div>
              <p className="text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
                L'histoire de BB_COLLECTION, une passion pour la mode africaine moderne
              </p>
              <div className="flex items-center justify-center space-x-3 text-white/80">
                <MapPin className="h-6 w-6" />
                <span className="text-xl font-medium">Congo-Brazzaville</span>
                <Sparkles className="h-6 w-6 animate-pulse" />
              </div>
            </div>
          </div>
        </section>

        {/* Notre Histoire */}
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900">
                  Notre <span className="text-gradient">Histoire</span>
                </h2>
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    Née au cœur du Congo-Brazzaville, BB_COLLECTION incarne la vision d'une mode africaine 
                    contemporaine qui célèbre notre héritage tout en embrassant la modernité.
                  </p>
                  <p>
                    Depuis notre création, nous nous sommes donnés pour mission de révolutionner 
                    l'industrie de la mode en Afrique centrale, en proposant des créations uniques 
                    qui allient tradition et innovation.
                  </p>
                  <p>
                    Chaque pièce de notre collection raconte une histoire, celle de notre continent, 
                    de nos artisans et de notre vision d'un avenir où la mode africaine brille 
                    sur la scène internationale.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80" 
                  alt="Atelier de couture africain"
                  className="rounded-3xl shadow-2xl w-full h-96 object-cover"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 congo-forest rounded-full flex items-center justify-center shadow-xl">
                  <Award className="h-16 w-16 text-white" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nos Valeurs */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
                Nos <span className="text-gradient">Valeurs</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Les principes qui guident chacune de nos créations et notre engagement envers vous
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Heart,
                  title: "Passion",
                  description: "Une passion dévorante pour la mode africaine et l'artisanat de qualité",
                  image: "https://images.unsplash.com/photo-1558618666-fbd55c3cd44c?auto=format&fit=crop&q=80"
                },
                {
                  icon: Users,
                  title: "Communauté",
                  description: "Soutenir nos artisans locaux et créer des emplois dans notre région",
                  image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80"
                },
                {
                  icon: Star,
                  title: "Excellence",
                  description: "Une quête constante de perfection dans chaque détail de nos créations",
                  image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80"
                }
              ].map((value, index) => (
                <div key={index} className="group hover-lift">
                  <div className="card-modern rounded-3xl overflow-hidden h-full">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={value.image} 
                        alt={value.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 congo-forest/20"></div>
                    </div>
                    <div className="p-8 text-center">
                      <div className="w-16 h-16 congo-forest rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                        <value.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-24 congo-forest relative overflow-hidden">
          <div className="absolute inset-0 pattern-grid opacity-20"></div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight">
                Rejoignez l'aventure <br />
                <span className="text-yellow-300">BB_COLLECTION</span>
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                Découvrez notre univers et laissez-vous séduire par la beauté de la mode africaine moderne
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/boutique">
                  <Button className="bg-white text-emerald-600 hover:bg-gray-100 px-10 py-4 text-lg font-bold rounded-2xl shadow-xl">
                    Découvrir nos créations
                  </Button>
                </Link>
                <Link to="/mon-compte">
                  <Button variant="outline" className="border-white text-white hover:bg-white/10 px-10 py-4 text-lg font-semibold rounded-2xl">
                    Nous contacter
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default APropos;
