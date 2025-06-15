import { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Star, Filter } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FoodPortionCalculator from "@/components/FoodPortionCalculator";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

const categories = [
  { id: "all", slug: "", name: "All Products", count: 24 },
  { id: "dry-wet", slug: "dry-wet-foods", name: "Dry & Wet Foods", count: 8 },
  { id: "freeze-dried", slug: "freeze-dried-raw", name: "Freeze-Dried Raw", count: 6 },
  { id: "supplements", slug: "supplements", name: "Supplements & Treats", count: 6 },
  { id: "accessories", slug: "accessories", name: "Eco-Friendly Accessories", count: 4 }
];

const products = [
  // Freeze-Dried Raw Products
  {
    id: 1,
    name: "Premium Freeze-Dried Salmon",
    category: "freeze-dried",
    price: 268,
    originalPrice: 298,
    rating: 4.9,
    reviews: 127,
    image: "https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&w=400&q=80",
    badges: ["Grain-Free", "High Protein", "AAFCO Approved"],
    isNew: true
  },
  {
    id: 2,
    name: "Freeze-Dried Beef & Organs",
    category: "freeze-dried",
    price: 298,
    rating: 4.8,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=400&q=80",
    badges: ["Raw", "Organ Meat", "Single Protein"],
    isNew: false
  },
  {
    id: 3,
    name: "Freeze-Dried Chicken Hearts",
    category: "freeze-dried",
    price: 188,
    rating: 4.7,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=400&q=80",
    badges: ["High Protein", "Training Treats"],
    isNew: false
  },
  {
    id: 4,
    name: "Freeze-Dried Duck Formula",
    category: "freeze-dried",
    price: 318,
    rating: 4.9,
    reviews: 203,
    image: "https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&w=400&q=80",
    badges: ["Limited Ingredient", "Novel Protein"],
    isNew: true
  },
  {
    id: 5,
    name: "Freeze-Dried Lamb & Green Beans",
    category: "freeze-dried",
    price: 258,
    rating: 4.6,
    reviews: 78,
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=400&q=80",
    badges: ["Grain-Free", "Vegetables"],
    isNew: false
  },
  {
    id: 6,
    name: "Freeze-Dried Venison Complete",
    category: "freeze-dried",
    price: 338,
    rating: 4.8,
    reviews: 94,
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=400&q=80",
    badges: ["Wild Game", "Hypoallergenic"],
    isNew: false
  },

  // Dry & Wet Foods
  {
    id: 7,
    name: "Organic Duck & Sweet Potato Dry Food",
    category: "dry-wet",
    price: 188,
    rating: 4.8,
    reviews: 145,
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=400&q=80",
    badges: ["Organic", "Limited Ingredient"],
    isNew: false
  },
  {
    id: 8,
    name: "Grain-Free Salmon Dry Food",
    category: "dry-wet",
    price: 168,
    rating: 4.7,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&w=400&q=80",
    badges: ["Grain-Free", "Omega-3"],
    isNew: false
  },
  {
    id: 9,
    name: "Hypoallergenic Venison Wet Food",
    category: "dry-wet",
    price: 78,
    rating: 4.7,
    reviews: 56,
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=400&q=80",
    badges: ["Hypoallergenic", "Single Protein"],
    isNew: false
  },
  {
    id: 10,
    name: "Premium Beef & Rice Wet Food",
    category: "dry-wet",
    price: 88,
    rating: 4.6,
    reviews: 123,
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=400&q=80",
    badges: ["Natural", "Complete Nutrition"],
    isNew: false
  },
  {
    id: 11,
    name: "Senior Formula Chicken & Vegetables",
    category: "dry-wet",
    price: 148,
    rating: 4.8,
    reviews: 187,
    image: "https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&w=400&q=80",
    badges: ["Senior Formula", "Joint Support"],
    isNew: false
  },
  {
    id: 12,
    name: "Puppy Growth Formula",
    category: "dry-wet",
    price: 158,
    rating: 4.9,
    reviews: 267,
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=400&q=80",
    badges: ["Puppy Formula", "DHA"],
    isNew: true
  },
  {
    id: 13,
    name: "Turkey & Cranberry Wet Food",
    category: "dry-wet",
    price: 98,
    rating: 4.5,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=400&q=80",
    badges: ["Holiday Special", "Antioxidants"],
    isNew: true
  },
  {
    id: 14,
    name: "Weight Management Formula",
    category: "dry-wet",
    price: 138,
    rating: 4.7,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&w=400&q=80",
    badges: ["Weight Control", "High Fiber"],
    isNew: false
  },

  // Supplements & Treats
  {
    id: 15,
    name: "Joint Support Formula",
    category: "supplements",
    price: 158,
    rating: 4.9,
    reviews: 203,
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=400&q=80",
    badges: ["Vet Recommended", "Glucosamine"],
    isNew: false
  },
  {
    id: 16,
    name: "Probiotic Digestive Treats",
    category: "supplements",
    price: 98,
    rating: 4.8,
    reviews: 178,
    image: "https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&w=400&q=80",
    badges: ["Probiotic", "Digestive Health"],
    isNew: false
  },
  {
    id: 17,
    name: "Omega-3 Fish Oil Capsules",
    category: "supplements",
    price: 128,
    rating: 4.7,
    reviews: 134,
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=400&q=80",
    badges: ["Omega-3", "Skin & Coat"],
    isNew: false
  },
  {
    id: 18,
    name: "Calming Anxiety Chews",
    category: "supplements",
    price: 118,
    rating: 4.6,
    reviews: 92,
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=400&q=80",
    badges: ["Natural Calming", "Stress Relief"],
    isNew: true
  },
  {
    id: 19,
    name: "Multivitamin Daily Treats",
    category: "supplements",
    price: 88,
    rating: 4.5,
    reviews: 167,
    image: "https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&w=400&q=80",
    badges: ["Complete Vitamins", "Daily Health"],
    isNew: false
  },
  {
    id: 20,
    name: "Dental Health Chews",
    category: "supplements",
    price: 78,
    rating: 4.8,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=400&q=80",
    badges: ["Dental Care", "Fresh Breath"],
    isNew: false
  },

  // Eco-Friendly Accessories
  {
    id: 21,
    name: "Bamboo Food & Water Bowl Set",
    category: "accessories",
    price: 128,
    rating: 4.6,
    reviews: 134,
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=400&q=80",
    badges: ["Eco-Friendly", "Antimicrobial"],
    isNew: true
  },
  {
    id: 22,
    name: "Organic Cotton Rope Toy",
    category: "accessories",
    price: 58,
    rating: 4.4,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=400&q=80",
    badges: ["Organic Cotton", "Safe Materials"],
    isNew: false
  },
  {
    id: 23,
    name: "Recycled Plastic Waste Bags",
    category: "accessories",
    price: 28,
    rating: 4.7,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&w=400&q=80",
    badges: ["Recycled Material", "Biodegradable"],
    isNew: false
  },
  {
    id: 24,
    name: "Hemp Fiber Dog Bed",
    category: "accessories",
    price: 198,
    rating: 4.8,
    reviews: 67,
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=400&q=80",
    badges: ["Hemp Fiber", "Sustainable"],
    isNew: true
  }
];

const Products = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const { toast } = useToast();

  // Determine selectedCategory based on route:
  // e.g. /products, /products/dry-wet-foods, /products/supplements, ...
  const categorySlug = pathname.replace(/^\/products\/?/, "");
  let initialCategory = "all";
  for (const cat of categories) {
    if (cat.slug && cat.slug === categorySlug) {
      initialCategory = cat.id;
      break;
    }
  }
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [priceRange, setPriceRange] = useState("all");

  // Sync state with route
  useEffect(() => {
    let newCategory = "all";
    for (const cat of categories) {
      if (cat.slug && cat.slug === categorySlug) {
        newCategory = cat.id;
        break;
      }
    }
    setSelectedCategory(newCategory);
  }, [categorySlug]);

  // On filter click, navigate to the appropriate route
  const handleCategoryClick = (cat: typeof categories[0]) => {
    if (cat.id === "all") {
      navigate("/products");
    } else {
      navigate(`/products/${cat.slug}`);
    }
  };

  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === "all" || product.category === selectedCategory;
    
    let priceMatch = true;
    if (priceRange !== "all") {
      const price = product.price;
      switch (priceRange) {
        case "0-100":
          priceMatch = price < 100;
          break;
        case "100-200":
          priceMatch = price >= 100 && price < 200;
          break;
        case "200-300":
          priceMatch = price >= 200 && price < 300;
          break;
        case "300+":
          priceMatch = price >= 300;
          break;
      }
    }
    
    return categoryMatch && priceMatch;
  });

  const handleAddToCart = (product: typeof products[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category
    });
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Header */}
      <section className="bg-gradient-to-r from-amber-50 to-orange-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
              Premium Pet Products
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our carefully curated collection of natural, organic nutrition and eco-friendly accessories
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter Buttons */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                className={`${
                  selectedCategory === category.id 
                    ? "bg-amber-600 hover:bg-amber-700 text-white" 
                    : "bg-white hover:bg-amber-50 text-gray-700"
                }`}
                onClick={() => handleCategoryClick(category)}
              >
                {category.name}
                <Badge variant="secondary" className="ml-2">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Food Portion Calculator Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-gray-900 mb-4">
              Not Sure How Much to Feed?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Use our food portion calculator to determine the right amount for your pet's needs
            </p>
          </div>
          <FoodPortionCalculator />
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="sticky top-24">
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center gap-2 mb-6">
                  <Filter className="w-5 h-5 text-gray-600" />
                  <h3 className="text-lg font-medium text-gray-900">Filters</h3>
                </div>

                {/* Categories */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Categories</h4>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div key={category.id} className="flex items-center justify-between">
                        <label className="flex items-center space-x-2 cursor-pointer">
                          <Checkbox 
                            checked={selectedCategory === category.id}
                            onCheckedChange={() => handleCategoryClick(category)}
                          />
                          <span className="text-gray-700 text-sm">{category.name}</span>
                        </label>
                        <span className="text-xs text-gray-500">({category.count})</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Dietary Needs */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Dietary Needs</h4>
                  <div className="space-y-2">
                    {["Grain-Free", "Hypoallergenic", "Limited Ingredient", "High Protein", "Senior Formula"].map((diet) => (
                      <label key={diet} className="flex items-center space-x-2 cursor-pointer">
                        <Checkbox />
                        <span className="text-gray-700 text-sm">{diet}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Price Range</h4>
                  <Select value={priceRange} onValueChange={setPriceRange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select price range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Prices</SelectItem>
                      <SelectItem value="0-100">Under HK$ 100</SelectItem>
                      <SelectItem value="100-200">HK$ 100 - 200</SelectItem>
                      <SelectItem value="200-300">HK$ 200 - 300</SelectItem>
                      <SelectItem value="300+">Over HK$ 300</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Protein Source */}
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Protein Source</h4>
                  <div className="space-y-2">
                    {["Salmon", "Duck", "Venison", "Chicken", "Lamb"].map((protein) => (
                      <label key={protein} className="flex items-center space-x-2 cursor-pointer">
                        <Checkbox />
                        <span className="text-gray-700 text-sm">{protein}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-8">
              <p className="text-gray-600">
                Showing {filteredProducts.length} of {products.length} products
                {selectedCategory !== "all" && (
                  <span className="ml-2 text-amber-600 font-medium">
                    in {categories.find(c => c.id === selectedCategory)?.name}
                  </span>
                )}
              </p>
              <Select defaultValue="featured">
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-xl text-gray-600 mb-4">No products found in this category</p>
                <Button 
                  variant="outline" 
                  onClick={() => setSelectedCategory("all")}
                >
                  Show All Products
                </Button>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <Card key={product.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
                    <CardContent className="p-0">
                      <div className="relative aspect-square bg-gray-100 rounded-t-lg overflow-hidden">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        {product.isNew && (
                          <Badge className="absolute top-3 left-3 bg-green-600 text-white">New</Badge>
                        )}
                        {product.originalPrice && (
                          <Badge className="absolute top-3 right-3 bg-red-600 text-white">
                            Save HK$ {product.originalPrice - product.price}
                          </Badge>
                        )}
                      </div>
                      <div className="p-6">
                        <div className="flex flex-wrap gap-1 mb-3">
                          {product.badges.slice(0, 2).map((badge, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">{badge}</Badge>
                          ))}
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
                        <p className="text-sm text-gray-600 mb-3">{
                          product.category === "freeze-dried" ? "Freeze-Dried Raw" :
                          product.category === "dry-wet" ? "Dry & Wet Foods" :
                          product.category === "supplements" ? "Supplements & Treats" :
                          product.category === "accessories" ? "Eco-Friendly Accessories" :
                          product.category
                        }</p>
                        
                        <div className="flex items-center gap-2 mb-4">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-amber-400 fill-current' : 'text-gray-300'}`} />
                            ))}
                          </div>
                          <span className="text-sm text-gray-600">({product.reviews})</span>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="text-xl font-medium text-gray-900">HK$ {product.price}</span>
                            {product.originalPrice && (
                              <span className="text-sm text-gray-500 line-through">HK$ {product.originalPrice}</span>
                            )}
                          </div>
                          <Button 
                            size="sm" 
                            className="bg-amber-600 hover:bg-amber-700"
                            onClick={() => handleAddToCart(product)}
                          >
                            Add to Cart
                          </Button>
                        </div>
                        
                        <Button variant="outline" className="w-full mt-3" asChild>
                          <Link to={`/products/${product.id}`}>View Details</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {/* Load More */}
            {filteredProducts.length > 0 && (
              <div className="text-center mt-12">
                <Button variant="outline" size="lg" className="px-8">
                  Load More Products
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Products;
