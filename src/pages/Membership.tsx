
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle, Crown, Gift, Star, CreditCard } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Membership = () => {
  const membershipTiers = [
    {
      name: "PawGrande Essential",
      price: "Free",
      color: "bg-gray-600",
      features: [
        "5% off all purchases",
        "Birthday treat for your pet",
        "Monthly newsletter",
        "Basic health tips",
        "Standard customer support"
      ],
      points: "1 point per HK$ 10 spent"
    },
    {
      name: "PawGrande Premium",
      price: "HK$ 200/year",
      color: "bg-amber-600",
      popular: true,
      features: [
        "10% off all purchases",
        "Free monthly grooming session",
        "Priority booking for services",
        "Exclusive product previews",
        "Personalized nutrition consultation",
        "24/7 pet care hotline"
      ],
      points: "2 points per HK$ 10 spent"
    },
    {
      name: "PawGrande Elite",
      price: "HK$ 500/year",
      color: "bg-purple-600",
      features: [
        "15% off all purchases",
        "Weekly grooming sessions included",
        "VIP service appointments",
        "Complimentary annual health check",
        "Personal pet care concierge",
        "Exclusive members-only events",
        "Premium product samples",
        "Free delivery on all orders"
      ],
      points: "3 points per HK$ 10 spent"
    }
  ];

  const rewards = [
    { points: 100, reward: "Free premium treat bag", icon: Gift },
    { points: 250, reward: "Complimentary grooming session", icon: Star },
    { points: 500, reward: "Free nutrition consultation", icon: Crown },
    { points: 1000, reward: "Exclusive member dinner event", icon: Crown }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Header */}
      <section className="bg-gradient-to-r from-purple-50 to-pink-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
              PawGrande Club
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our exclusive membership program and unlock premium benefits for you and your beloved pets
            </p>
          </div>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-gray-900 mb-4">Choose Your Membership</h2>
            <p className="text-lg text-gray-600">Select the perfect plan for your pet care needs</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {membershipTiers.map((tier, index) => (
              <Card key={index} className={`relative border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${tier.popular ? 'ring-2 ring-amber-500 scale-105' : ''}`}>
                {tier.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-amber-600 text-white px-4 py-1">
                    Most Popular
                  </Badge>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 ${tier.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Crown className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-light">{tier.name}</CardTitle>
                  <div className="text-3xl font-medium text-gray-900 mt-2">{tier.price}</div>
                  <p className="text-sm text-gray-600 mt-1">{tier.points}</p>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${tier.popular ? 'bg-amber-600 hover:bg-amber-700' : 'bg-gray-900 hover:bg-gray-800'}`}
                    size="lg"
                  >
                    {tier.price === "Free" ? "Join Free" : "Upgrade Now"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Rewards Program */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-gray-900 mb-4">Rewards Program</h2>
            <p className="text-lg text-gray-600">Earn points with every purchase and unlock exclusive rewards</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {rewards.map((reward, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <reward.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="text-2xl font-medium text-purple-600 mb-2">{reward.points} pts</div>
                  <p className="text-gray-700 text-sm">{reward.reward}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sign Up Form */}
      <section className="py-16">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-light text-gray-900 mb-4">Join PawGrande Club Today</h2>
            <p className="text-lg text-gray-600">Start earning rewards and enjoying premium benefits</p>
          </div>
          
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Enter your first name" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Enter your last name" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
                
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="Enter your phone number" />
                </div>
                
                <div>
                  <Label htmlFor="petName">Pet's Name</Label>
                  <Input id="petName" placeholder="Enter your pet's name" />
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="petType">Pet Type</Label>
                    <Input id="petType" placeholder="Dog, Cat, etc." />
                  </div>
                  <div>
                    <Label htmlFor="petBreed">Breed</Label>
                    <Input id="petBreed" placeholder="Enter breed" />
                  </div>
                </div>

                {/* Payment Methods */}
                <div className="border-t pt-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Payment Options</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <Card className="border-2 border-gray-200 hover:border-blue-500 cursor-pointer transition-colors">
                      <CardContent className="p-4 text-center">
                        <CreditCard className="w-8 h-8 mx-auto mb-2 text-gray-600" />
                        <p className="text-sm font-medium">Octopus</p>
                      </CardContent>
                    </Card>
                    <Card className="border-2 border-gray-200 hover:border-blue-500 cursor-pointer transition-colors">
                      <CardContent className="p-4 text-center">
                        <CreditCard className="w-8 h-8 mx-auto mb-2 text-gray-600" />
                        <p className="text-sm font-medium">AlipayHK</p>
                      </CardContent>
                    </Card>
                    <Card className="border-2 border-gray-200 hover:border-blue-500 cursor-pointer transition-colors">
                      <CardContent className="p-4 text-center">
                        <CreditCard className="w-8 h-8 mx-auto mb-2 text-gray-600" />
                        <p className="text-sm font-medium">WeChat Pay</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                
                <Button className="w-full bg-purple-600 hover:bg-purple-700" size="lg">
                  Join PawGrande Club
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Membership;
