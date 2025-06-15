
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ShieldCheck, Heart, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6 leading-tight">
            Elevate Your Pet's Health with 
            <span className="font-medium text-amber-200"> Premium, Natural</span> Nutrition
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-4 font-light">
            Free-range proteins • Freeze-dried freshness • Vet-approved wellness
          </p>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Hong Kong's most trusted boutique for discerning pet parents who demand the finest nutrition and care for their beloved companions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg">
              <Link to="/products">Shop Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg">
              <Link to="/services">Book a Nutrition Consultation</Link>
            </Button>
          </div>
        </div>
        <div className="absolute inset-0 bg-cover bg-center" style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=2000&q=80')`
        }}></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">Why PawGrande</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We curate only the finest natural nutrition and wellness solutions for Hong Kong's most cherished pets
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ShieldCheck className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-4">Vet-Approved Quality</h3>
                <p className="text-gray-600 leading-relaxed">
                  Every product is carefully vetted by our team of veterinary nutritionists to ensure optimal health benefits for your pet.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-4">Natural & Organic</h3>
                <p className="text-gray-600 leading-relaxed">
                  Sourced from trusted farms with free-range proteins and organic ingredients, free from artificial preservatives and fillers.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-4">Same-Day Delivery</h3>
                <p className="text-gray-600 leading-relaxed">
                  Fast, reliable delivery across Hong Kong. Order before 2PM for same-day delivery to your doorstep.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">Featured Products</h2>
            <p className="text-xl text-gray-600">Discover our most loved premium nutrition solutions</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Freeze-Dried Raw Salmon",
                category: "Freeze-Dried Raw",
                price: "HK$ 268",
                rating: 4.9,
                image: "https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&w=400&q=80"
              },
              {
                name: "Organic Grain-Free Duck",
                category: "Premium Dry Food",
                price: "HK$ 188",
                rating: 4.8,
                image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=400&q=80"
              },
              {
                name: "Joint Support Supplements",
                category: "Wellness",
                price: "HK$ 158",
                rating: 4.9,
                image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=400&q=80"
              }
            ].map((product, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <CardContent className="p-0">
                  <div className="aspect-square bg-gray-100 rounded-t-lg overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <Badge variant="secondary" className="mb-2 text-xs">{product.category}</Badge>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">{product.name}</h3>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-amber-400 fill-current' : 'text-gray-300'}`} />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">({product.rating})</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-medium text-gray-900">{product.price}</span>
                      <Button size="sm" className="bg-amber-600 hover:bg-amber-700">Add to Cart</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">Premium Pet Services</h2>
            <p className="text-xl text-gray-600">Complete wellness and care solutions for your beloved pets</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-medium text-gray-900 mb-6">Wellness Spa & Grooming</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Hydrotherapy sessions for joint health and recovery</span>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Therapeutic coat treatments with organic products</span>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Pet-friendly swimming and exercise sessions</span>
                </li>
              </ul>
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
            <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=800&q=80" 
                alt="Pet spa services"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
