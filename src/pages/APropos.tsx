
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Users, Award, Heart, Sparkles, Star, Zap, Target, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const APropos = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <div className="pt-24">
        
        {/* Hero Section Ultra */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 gradient-primary"></div>
          <div className="absolute inset-0 pattern-dots-ultra opacity-30"></div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full animate-float-ultra"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-white/20 rounded-full animate-float-ultra" style={{ animationDelay: '2s' }}></div>
          
          <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-8 py-4 glass-ultra rounded-full text-lg font-medium mb-8">
                <Heart className="h-6 w-6 mr-3 text-red-400 animate-pulse" />
                Notre Histoire
                <Sparkles className="h-6 w-6 ml-3 text-yellow-400 animate-pulse" />
              </div>
              
              <h1 className="text-6xl md:text-8xl font-space font-black leading-tight">
                À Propos de <br />
                <span className="text-yellow-300 text-glow">BB_COLLECTION</span>
              </h1>
              
              <p className="text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
                L'histoire passionnante d'une marque qui révolutionne la mode africaine moderne
              </p>
              
              <div className="flex items-center justify-center space-x-8 text-white/80">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-6 w-6 animate-pulse" />
                  <span className="text-xl font-medium">Congo-Brazzaville</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Sparkles className="h-6 w-6 animate-pulse text-yellow-400" />
                  <span className="text-xl font-medium">Depuis 2020</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Notre Histoire Ultra */}
        <section className="py-32 relative">
          <div className="absolute inset-0 gradient-dark opacity-50"></div>
          <div className="max-w-6xl mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              
              <div className="space-y-8 animate-slide-up">
                <div className="inline-flex items-center px-6 py-3 glass-ultra rounded-full text-sm font-medium">
                  <Zap className="w-4 h-4 mr-2 text-yellow-400" />
                  Notre genèse
                </div>
                
                <h2 className="text-5xl md:text-6xl font-space font-bold">
                  Une <span className="gradient-text">Vision</span> Née au Congo
                </h2>
                
                <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                  <p>
                    Née au cœur vibrant du Congo-Brazzaville, <span className="gradient-text font-semibold">BB_COLLECTION</span> incarne 
                    la vision audacieuse d'une mode africaine contemporaine qui célèbre notre riche héritage 
                    tout en embrassant l'innovation moderne.
                  </p>
                  <p>
                    Depuis notre création, nous nous sommes donnés pour mission ambitieuse de révolutionner 
                    l'industrie de la mode en Afrique centrale, en proposant des créations uniques 
                    qui allient tradition séculaire et design avant-gardiste.
                  </p>
                  <p>
                    Chaque pièce de notre collection exclusive raconte une histoire profonde : celle de notre continent, 
                    de nos artisans talentueux et de notre vision d'un avenir où la mode africaine 
                    brille de mille feux sur la scène internationale.
                  </p>
                </div>
                
                <div className="flex space-x-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text">500+</div>
                    <div className="text-gray-400">Créations</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text">1000+</div>
                    <div className="text-gray-400">Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text">50+</div>
                    <div className="text-gray-400">Artisans</div>
                  </div>
                </div>
              </div>
              
              <div className="relative animate-scale-in">
                <img 
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800" 
                  alt="Atelier de couture africain"
                  className="rounded-3xl shadow-2xl w-full h-96 object-cover card-ultra"
                />
                <div className="absolute -bottom-8 -right-8 w-32 h-32 gradient-primary rounded-full flex items-center justify-center shadow-2xl animate-float-ultra">
                  <Award className="h-16 w-16 text-white" />
                </div>
                <div className="absolute -top-6 -left-6 w-20 h-20 gradient-secondary rounded-full flex items-center justify-center shadow-xl animate-pulse">
                  <Star className="h-10 w-10 text-white" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nos Valeurs Ultra */}
        <section className="py-32 relative">
          <div className="absolute inset-0 pattern-grid-ultra opacity-20"></div>
          <div className="max-w-6xl mx-auto px-4 relative z-10">
            
            <div className="text-center mb-20">
              <div className="inline-flex items-center px-8 py-4 glass-ultra rounded-full text-lg font-medium mb-8">
                <Heart className="w-6 h-6 mr-3 text-red-400 animate-pulse" />
                Ce qui nous guide
              </div>
              
              <h2 className="text-5xl md:text-6xl font-space font-bold mb-8">
                Nos <span className="gradient-text">Valeurs</span> Fondamentales
              </h2>
              
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Les principes sacrés qui guident chacune de nos créations et notre engagement envers vous
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Heart,
                  title: "Passion",
                  description: "Une passion dévorante pour la mode africaine et l'artisanat de qualité exceptionnelle",
                  image: "https://images.unsplash.com/photo-1558618666-fbd55c3cd44c?auto=format&fit=crop&q=80&w=800",
                  gradient: "from-red-500 to-pink-600"
                },
                {
                  icon: Users,
                  title: "Communauté",
                  description: "Soutenir nos artisans locaux et créer des emplois durables dans notre belle région",
                  image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
                  gradient: "from-blue-500 to-teal-600"
                },
                {
                  icon: Target,
                  title: "Excellence",
                  description: "Une quête incessante de perfection dans chaque détail de nos créations uniques",
                  image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=800",
                  gradient: "from-purple-500 to-indigo-600"
                }
              ].map((value, index) => (
                <div key={index} className="group animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="card-ultra rounded-3xl overflow-hidden h-full hover-scale-ultra">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={value.image} 
                        alt={value.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>
                    <div className="p-8 text-center space-y-6">
                      <div className={`w-20 h-20 bg-gradient-to-r ${value.gradient} rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform shadow-2xl`}>
                        <value.icon className="h-10 w-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision Ultra */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 gradient-dark"></div>
          <div className="absolute inset-0 pattern-dots-ultra opacity-30"></div>
          
          <div className="max-w-6xl mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              {/* Mission */}
              <div className="space-y-8 animate-slide-up">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-4xl font-space font-bold gradient-text">Notre Mission</h3>
                </div>
                
                <p className="text-lg text-gray-300 leading-relaxed">
                  Révolutionner la mode africaine en créant des pièces exceptionnelles qui célèbrent 
                  notre héritage culturel tout en embrassant l'innovation moderne. Nous nous engageons 
                  à soutenir nos communautés locales et à promouvoir l'excellence artisanale congolaise 
                  sur la scène internationale.
                </p>
                
                <div className="space-y-4">
                  {[
                    "Créer des vêtements de qualité premium",
                    "Soutenir l'artisanat local congolais",
                    "Promouvoir la mode africaine moderne",
                    "Offrir une expérience client exceptionnelle"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 gradient-primary rounded-full"></div>
                      <span className="text-gray-400">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Vision */}
              <div className="space-y-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 gradient-secondary rounded-2xl flex items-center justify-center">
                    <Eye className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-4xl font-space font-bold gradient-text">Notre Vision</h3>
                </div>
                
                <p className="text-lg text-gray-300 leading-relaxed">
                  Devenir la référence incontournable de la mode africaine contemporaine, 
                  en inspirant une nouvelle génération de créateurs et en positionnant 
                  le Congo-Brazzaville comme un hub majeur de l'innovation mode en Afrique centrale.
                </p>
                
                <div className="space-y-4">
                  {[
                    "Leader de la mode africaine moderne",
                    "Expansion internationale réussie",
                    "Impact positif sur nos communautés",
                    "Innovation constante et durable"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 gradient-secondary rounded-full"></div>
                      <span className="text-gray-400">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section Ultra */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 gradient-congo"></div>
          <div className="absolute inset-0 pattern-grid-ultra opacity-20"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <div className="space-y-12">
              <div className="space-y-8">
                <div className="inline-flex items-center px-8 py-4 glass-ultra rounded-full text-lg font-medium">
                  <Sparkles className="w-6 h-6 mr-3 text-yellow-400 animate-pulse" />
                  Rejoignez l'aventure
                </div>
                
                <h2 className="text-5xl md:text-7xl font-space font-bold leading-tight">
                  Ensemble, écrivons <br />
                  <span className="text-yellow-300 text-glow">l'histoire de la mode</span>
                </h2>
                
                <p className="text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                  Découvrez notre univers créatif et laissez-vous séduire par la beauté 
                  intemporelle de la mode africaine moderne
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-8 justify-center">
                <Link to="/boutique">
                  <Button className="bg-white text-black hover:bg-gray-100 px-16 py-6 text-xl font-bold rounded-full shadow-2xl group">
                    <ShoppingBag className="mr-3 h-6 w-6" />
                    Découvrir nos créations
                    <Sparkles className="ml-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
                  </Button>
                </Link>
                
                <Link to="/mon-compte">
                  <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-16 py-6 text-xl font-semibold rounded-full glass-ultra">
                    <Users className="mr-3 h-6 w-6" />
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
