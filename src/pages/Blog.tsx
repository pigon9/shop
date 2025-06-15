
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, User, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Blog = () => {
  const featuredPosts = [
    {
      id: 1,
      title: "5 Functional Foods for Healthy Joints",
      excerpt: "Discover the best natural ingredients that support your pet's joint health and mobility as they age.",
      author: "Dr. Sarah Chen",
      date: "2024-03-15",
      readTime: "5 min read",
      category: "Nutrition",
      image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=800&q=80",
      featured: true
    },
    {
      id: 2,
      title: "How to Transition to a Raw Diet Safely",
      excerpt: "A comprehensive guide to switching your pet to a raw food diet without digestive upset.",
      author: "Dr. Michael Wong",
      date: "2024-03-12",
      readTime: "8 min read",
      category: "Diet Transition",
      image: "https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&w=800&q=80",
      featured: true
    }
  ];

  const recentPosts = [
    {
      id: 3,
      title: "Understanding Your Pet's Nutritional Needs by Age",
      excerpt: "Learn how dietary requirements change from puppyhood to senior years.",
      author: "Dr. Lisa Zhang",
      date: "2024-03-10",
      readTime: "6 min read",
      category: "Health",
      image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 4,
      title: "The Benefits of Freeze-Dried Raw Food",
      excerpt: "Why freeze-dried raw might be the perfect convenient nutrition solution.",
      author: "Dr. Sarah Chen",
      date: "2024-03-08",
      readTime: "4 min read",
      category: "Nutrition",
      image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 5,
      title: "Creating a Stress-Free Grooming Experience",
      excerpt: "Tips and techniques to make grooming enjoyable for anxious pets.",
      author: "Emily Chan",
      date: "2024-03-05",
      readTime: "7 min read",
      category: "Grooming",
      image: "https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 6,
      title: "Seasonal Pet Care: Spring Preparation",
      excerpt: "Essential steps to prepare your pet for the changing season.",
      author: "Dr. Michael Wong",
      date: "2024-03-03",
      readTime: "5 min read",
      category: "Seasonal Care",
      image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=400&q=80"
    }
  ];

  const categories = [
    "Nutrition", "Health", "Grooming", "Behavior", "Diet Transition", "Seasonal Care", "Senior Pets", "Puppies & Kittens"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Header */}
      <section className="bg-gradient-to-r from-green-50 to-teal-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
              Pet Care Resources
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert advice, tips, and insights from Hong Kong's leading pet care professionals
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="lg:w-2/3">
            {/* Featured Posts */}
            <div className="mb-12">
              <h2 className="text-2xl font-light text-gray-900 mb-6">Featured Articles</h2>
              <div className="space-y-8">
                {featuredPosts.map((post) => (
                  <Card key={post.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-48 md:h-full object-cover"
                        />
                      </div>
                      <CardContent className="md:w-2/3 p-6">
                        <div className="flex items-center gap-4 mb-3">
                          <Badge variant="secondary">{post.category}</Badge>
                          <Badge className="bg-green-600 text-white">Featured</Badge>
                        </div>
                        <h3 className="text-xl font-medium text-gray-900 mb-3 hover:text-blue-600 cursor-pointer">
                          <Link to={`/blog/${post.id}`}>{post.title}</Link>
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(post.date).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Recent Posts */}
            <div>
              <h2 className="text-2xl font-light text-gray-900 mb-6">Recent Articles</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {recentPosts.map((post) => (
                  <Card key={post.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                    <CardContent className="p-0">
                      <div className="aspect-video bg-gray-100 overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <Badge variant="secondary" className="mb-3">{post.category}</Badge>
                        <h3 className="text-lg font-medium text-gray-900 mb-3 hover:text-blue-600">
                          <Link to={`/blog/${post.id}`}>{post.title}</Link>
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="sticky top-24 space-y-8">
              {/* Ask Our Vet */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Ask Our Vet</h3>
                  <p className="text-gray-600 mb-4">Have a question about your pet's health or nutrition?</p>
                  <form className="space-y-4">
                    <div>
                      <Label htmlFor="name">Your Name</Label>
                      <Input id="name" placeholder="Enter your name" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Enter your email" />
                    </div>
                    <div>
                      <Label htmlFor="question">Your Question</Label>
                      <Textarea id="question" placeholder="What would you like to know?" rows={3} />
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Submit Question
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Categories */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <Link 
                        key={category}
                        to={`/blog/category/${category.toLowerCase().replace(' ', '-')}`}
                        className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors group"
                      >
                        <div className="flex items-center gap-2">
                          <Tag className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
                          <span className="text-gray-700 group-hover:text-blue-600">{category}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Latest Promotions */}
              <Card className="border-0 shadow-lg bg-gradient-to-br from-amber-50 to-orange-50">
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Latest Promotions</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-amber-600 pl-4">
                      <h4 className="font-medium text-gray-900">Spring Health Check Special</h4>
                      <p className="text-sm text-gray-600">Complete wellness package with 20% off</p>
                      <Badge className="mt-2 bg-amber-600 text-white">Ends March 31</Badge>
                    </div>
                    <div className="border-l-4 border-green-600 pl-4">
                      <h4 className="font-medium text-gray-900">New Member Bonus</h4>
                      <p className="text-sm text-gray-600">Free nutrition consultation + premium treats</p>
                      <Badge className="mt-2 bg-green-600 text-white">Limited Time</Badge>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    View All Offers
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
