import { Link } from 'react-router-dom';
import { Recycle, Star, ChevronRight, ArrowRight, Users, Shirt, Award } from 'lucide-react';
import Navbar from '../components/Navbar';
import heroImage from '../assets/hero-image.jpg';

const Landing = () => {
  const featuredItems = [
    {
      id: 1,
      title: "Vintage Denim Jacket",
      image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=400",
      points: 150,
      condition: "Excellent"
    },
    {
      id: 2,
      title: "Designer Sneakers",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400",
      points: 200,
      condition: "Good"
    },
    {
      id: 3,
      title: "Summer Dress",
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400",
      points: 120,
      condition: "Like New"
    }
  ];

  const categories = [
    { name: "Jackets", icon: "🧥", count: "150+ items" },
    { name: "Dresses", icon: "👗", count: "200+ items" },
    { name: "Shoes", icon: "👟", count: "180+ items" },
    { name: "Accessories", icon: "👜", count: "95+ items" }
  ];

  const recentListings = [
    {
      id: 1,
      title: "Classic White Shirt",
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=300",
      points: 80,
      status: "Available"
    },
    {
      id: 2,
      title: "Leather Boots",
      image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=300",
      points: 180,
      status: "Available"
    },
    {
      id: 3,
      title: "Knit Sweater",
      image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=300",
      points: 100,
      status: "Available"
    },
    {
      id: 4,
      title: "Running Shoes",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300",
      points: 120,
      status: "Available"
    }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      text: "ReWear transformed my wardrobe sustainably. I've found amazing pieces while helping the environment!",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b1c5?w=100"
    },
    {
      name: "Alex K.",
      text: "The points system is brilliant. I've swapped clothes I never wear for items I absolutely love.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-background/80"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Ready to Transform Your{' '}
            <span className="text-green-400">Wardrobe?</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto animate-slide-up">
            Join thousands of fashion-forward individuals making sustainable choices.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up text-center">
            <Link to="/register" className="inline-flex items-center justify-center px-6 py-3 bg-green-400 text-black font-medium rounded-lg hover:bg-green-500 transition">
              Start Swapping
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link to="/browse" className="inline-flex items-center justify-center px-6 py-3 border border-green-400 text-green-400 bg-transparent font-medium rounded-lg hover:bg-green-800 hover:text-white transition">
              Browse Items
            </Link>
            <Link to="/add-item" className="inline-flex items-center justify-center px-6 py-3 border border-green-400 text-green-400 bg-transparent font-medium rounded-lg hover:bg-green-800 hover:text-white transition">
              List an Item
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Items Carousel */}
      <section className="py-16 bg-darker-surface">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Featured Items</h2>
            <p className="text-muted-foreground">Discover trending pieces from our community</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredItems.map((item) => (
              <div key={item.id} className="card-rewear group cursor-pointer">
                <div className="aspect-square mb-4 overflow-hidden rounded-lg">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-primary font-bold">{item.points} points</span>
                  <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded">
                    {item.condition}
                  </span>
                </div>
                <Link to={`/item/${item.id}`} className="inline-flex items-center justify-center w-full text-green-400 border border-green-400 px-4 py-2 rounded-md hover:bg-green-800 hover:text-white transition">
                  View Details
                  <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Browse by Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Browse by Category</h2>
            <p className="text-muted-foreground">Find exactly what you're looking for</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link
                key={category.name}
                to={`/browse?category=${category.name.toLowerCase()}`}
                className="card-rewear text-center group hover:border-primary transition-colors duration-200"
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{category.name}</h3>
                <p className="text-sm text-muted-foreground">{category.count}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Listings */}
      <section className="py-16 bg-darker-surface">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Recent Listings</h2>
              <p className="text-muted-foreground">Fresh additions to our marketplace</p>
            </div>
            <Link to="/browse" className="inline-flex items-center justify-center py-2 px-4 border-2 border-primary text-primary bg-transparent font-medium rounded-md transition-all duration-300 hover:bg-primary hover:text-primary-foreground">
              View All
              <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid-items">
            {recentListings.map((item) => (
              <div key={item.id} className="card-rewear group cursor-pointer">
                <div className="aspect-square mb-4 overflow-hidden rounded-lg relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                      {item.status}
                    </span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-primary font-bold">{item.points} points</span>
                  <Link to={`/item/${item.id}`} className="text-green-400 border border-green-400 px-4 py-2 rounded-md hover:bg-green-800 hover:text-white transition text-sm">
                    View Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 glow-neon">
                <Users className="text-primary" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-2">5,000+</h3>
              <p className="text-muted-foreground">Active Swappers</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 glow-neon">
                <Shirt className="text-primary" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-2">25,000+</h3>
              <p className="text-muted-foreground">Items Swapped</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 glow-neon">
                <Recycle className="text-primary" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-2">50 Tons</h3>
              <p className="text-muted-foreground">Waste Prevented</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-darker-surface">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">What Our Community Says</h2>
            <p className="text-muted-foreground">Real stories from real swappers</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card-rewear">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className="text-primary fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Ready to Transform Your Wardrobe?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of fashion-forward individuals making sustainable choices.
          </p>
          <div className="flex justify-center">
            <Link to="/register" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-medium text-lg rounded-lg transition-all duration-300 hover:bg-primary/90 hover:scale-105 active:scale-95">
              Join ReWear Today
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;