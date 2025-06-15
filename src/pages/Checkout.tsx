
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, MapPin, User, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Checkout = () => {
  const { items, getTotalPrice, clearCart } = useCart();
  const [customerInfo, setCustomerInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    district: "",
    notes: ""
  });

  const deliveryFee = 50;
  const totalAmount = getTotalPrice() + deliveryFee;

  const handleInputChange = (field: string, value: string) => {
    setCustomerInfo(prev => ({ ...prev, [field]: value }));
  };

  const handlePlaceOrder = () => {
    // Order placement logic will be handled by you for payment integration
    console.log("Order placed:", { customerInfo, items, totalAmount });
    alert("Order functionality ready for payment integration!");
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-2xl font-medium text-gray-900 mb-4">Your cart is empty</h1>
            <Button asChild className="bg-amber-600 hover:bg-amber-700">
              <Link to="/products">Continue Shopping</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/products">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Products
            </Link>
          </Button>
          <h1 className="text-3xl font-light text-gray-900">Checkout</h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Customer Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Customer Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      value={customerInfo.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={customerInfo.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={customerInfo.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    value={customerInfo.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    required
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Delivery Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="address">Delivery Address *</Label>
                  <Textarea
                    id="address"
                    value={customerInfo.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                    placeholder="Building name, floor, unit number, street address..."
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="district">District *</Label>
                  <Select value={customerInfo.district} onValueChange={(value) => handleInputChange("district", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select district" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="central-western">Central & Western</SelectItem>
                      <SelectItem value="eastern">Eastern</SelectItem>
                      <SelectItem value="southern">Southern</SelectItem>
                      <SelectItem value="wan-chai">Wan Chai</SelectItem>
                      <SelectItem value="kowloon-city">Kowloon City</SelectItem>
                      <SelectItem value="kwun-tong">Kwun Tong</SelectItem>
                      <SelectItem value="sham-shui-po">Sham Shui Po</SelectItem>
                      <SelectItem value="wong-tai-sin">Wong Tai Sin</SelectItem>
                      <SelectItem value="yau-tsim-mong">Yau Tsim Mong</SelectItem>
                      <SelectItem value="islands">Islands</SelectItem>
                      <SelectItem value="kwai-tsing">Kwai Tsing</SelectItem>
                      <SelectItem value="north">North</SelectItem>
                      <SelectItem value="sai-kung">Sai Kung</SelectItem>
                      <SelectItem value="sha-tin">Sha Tin</SelectItem>
                      <SelectItem value="tai-po">Tai Po</SelectItem>
                      <SelectItem value="tsuen-wan">Tsuen Wan</SelectItem>
                      <SelectItem value="tuen-mun">Tuen Mun</SelectItem>
                      <SelectItem value="yuen-long">Yuen Long</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="notes">Delivery Notes (Optional)</Label>
                  <Textarea
                    id="notes"
                    value={customerInfo.notes}
                    onChange={(e) => handleInputChange("notes", e.target.value)}
                    placeholder="Special delivery instructions..."
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div>
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between items-start">
                      <div className="flex gap-3">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-12 h-12 object-cover rounded"
                        />
                        <div>
                          <p className="font-medium text-sm">{item.name}</p>
                          <p className="text-gray-600 text-sm">Qty: {item.quantity}</p>
                        </div>
                      </div>
                      <p className="font-medium">HK$ {item.price * item.quantity}</p>
                    </div>
                  ))}
                </div>
                
                <Separator />
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>HK$ {getTotalPrice()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery Fee</span>
                    <span>HK$ {deliveryFee}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-amber-600">HK$ {totalAmount}</span>
                  </div>
                </div>

                <div className="pt-4">
                  <p className="text-sm text-gray-600 mb-4">
                    Payment processing will be handled separately
                  </p>
                  <Button 
                    onClick={handlePlaceOrder}
                    className="w-full bg-amber-600 hover:bg-amber-700"
                    disabled={!customerInfo.firstName || !customerInfo.lastName || !customerInfo.email || !customerInfo.phone || !customerInfo.address || !customerInfo.district}
                  >
                    Place Order
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Checkout;
