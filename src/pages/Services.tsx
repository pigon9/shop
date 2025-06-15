
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Star, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BookingDialog from "@/components/BookingDialog";

const Services = () => {
  const services = [
    {
      id: "spa",
      name: "Wellness Spa & Grooming",
      description: "Premium spa treatments and grooming services for your pet's health and beauty",
      image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=800&q=80",
      features: [
        "Hydrotherapy sessions for joint health",
        "Therapeutic coat treatments with organic products",
        "Pet-friendly swimming sessions",
        "Professional grooming and styling",
        "Aromatherapy and relaxation treatments"
      ],
      pricing: "Starting from HK$ 280",
      duration: "60-90 minutes",
      rating: 4.9
    },
    {
      id: "consultation",
      name: "Nutrition & Behavior Consultation",
      description: "Personalized nutrition plans and behavior guidance from certified pet experts",
      image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=800&q=80",
      features: [
        "Comprehensive health and dietary assessment",
        "Customized nutrition plans",
        "Behavior analysis and training recommendations",
        "Follow-up consultations included",
        "Emergency support hotline"
      ],
      pricing: "HK$ 450 per session",
      duration: "45 minutes",
      rating: 4.8
    },
    {
      id: "concierge",
      name: "Pet-Care Concierge",
      description: "Full-service pet care for busy professionals - from walking to sitting",
      image: "https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&w=800&q=80",
      features: [
        "Professional dog walking services",
        "In-home pet sitting",
        "Pickup and drop-off services",
        "Medication administration",
        "Daily activity reports and photos"
      ],
      pricing: "From HK$ 120/hour",
      duration: "Flexible scheduling",
      rating: 4.9
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
              Premium Pet Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete wellness and care solutions designed for Hong Kong's most cherished pets
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={service.id} className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2">
                  <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="lg:w-1/2">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'text-amber-400 fill-current' : 'text-gray-300'}`} />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">({service.rating})</span>
                    <Badge variant="secondary" className="ml-2">Popular</Badge>
                  </div>
                  
                  <h2 className="text-3xl font-light text-gray-900 mb-4">{service.name}</h2>
                  <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center gap-6 mb-8">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="w-5 h-5" />
                      <span>{service.duration}</span>
                    </div>
                    <div className="text-2xl font-medium text-gray-900">{service.pricing}</div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <BookingDialog serviceName={service.name} servicePrice={service.pricing}>
                      <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                        <Calendar className="w-4 h-4 mr-2" />
                        Book Now
                      </Button>
                    </BookingDialog>
                    <Button variant="outline" size="lg">
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="bg-gradient-to-r from-amber-600 to-orange-600 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
            Ready to Book Your Pet's Premium Experience?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Our certified professionals are here to provide the best care for your beloved companion
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BookingDialog serviceName="Consultation" servicePrice="HK$ 450">
              <Button size="lg" variant="outline" className="bg-white text-amber-600 hover:bg-gray-100">
                <Calendar className="w-4 h-4 mr-2" />
                Schedule Consultation
              </Button>
            </BookingDialog>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-amber-600">
              Call +852 2234-5678
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
