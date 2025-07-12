import { Link } from 'react-router-dom';
import { Recycle, Star, ChevronRight, ArrowRight, Users, Shirt, Award } from 'lucide-react';
import Navbar from '../components/Navbar';
import heroImage from '../assets/hero-image.jpg';
import FeaturedItemsCarousel from '../components/FeaturedItemsCarousel';

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
    },
    {
      id: 4,
      title: "Leather Handbag",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
      points: 180,
      condition: "Excellent"
    },
    {
      id: 5,
      title: "Wool Sweater",
      image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400",
      points: 90,
      condition: "Good"
    },
    {
      id: 6,
      title: "Sports Watch",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
      points: 250,
      condition: "Like New"
    },
    {
      id: 7,
      title: "Silk Scarf",
      image: "https://images.unsplash.com/photo-1601762603339-fd61e28b698a?w=400",
      points: 70,
      condition: "Excellent"
    },
    {
      id: 8,
      title: "Canvas Backpack",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
      points: 110,
      condition: "Good"
    },
    {
      id: 9,
      title: "Sunglasses",
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400",
      points: 85,
      condition: "Like New"
    },
    {
      id: 10,
      title: "Baseball Cap",
      image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400",
      points: 40,
      condition: "Good"
    }
  ];

  const categories = [
    { name: "Jackets", icon: "🧥", count: 150 },
    { name: "Dresses", icon: "👗", count: 200 },
    { name: "Shoes", icon: "👟", count: 180 },
    { name: "Accessories", icon: "👜", count: 95 },
    { name: "Bags", icon: "👜", count: 80 },
    { name: "Shirts", icon: "👕", count: 250 }
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
      name: "Aarav S.",
      text: "ReWear has helped me build a sustainable wardrobe. I've found amazing traditional pieces while reducing waste!",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100"
    },
    {
      name: "Priya R.",
      text: "The points system is amazing. I've swapped my unused ethnic wear for beautiful new pieces that I love.",
      avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=100"
    }
  ];

  return (
    <div className="min-h-screen bg-darker-surface">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <img
          src={heroImage}
          alt="Sustainable Fashion"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40">
          <div className="container mx-auto h-full flex flex-col justify-center px-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Swap. Style. Sustain.
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl">
              Join the sustainable fashion revolution. Trade your unused clothes for fresh styles.
              Earn points, reduce waste, and discover your next favorite outfit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/register" className="inline-flex items-center justify-center px-6 py-3 bg-green-400 text-black font-medium rounded-lg hover:bg-green-500 transition">
                Start Swapping
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link to="/browse" className="inline-flex items-center justify-center px-6 py-3 border border-green-400 text-green-400 bg-transparent font-medium rounded-lg hover:bg-green-800 hover:text-white transition">
                Browse Items
              </Link>
              <Link to="/about" className="inline-flex items-center justify-center px-6 py-3 border border-green-400 text-green-400 bg-transparent font-medium rounded-lg hover:bg-green-800 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-green-400">
                About
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Items Section */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-white mb-8">Featured Items</h2>
        <div className="w-full">
          <FeaturedItemsCarousel
            items={featuredItems.map(item => ({
              ...item,
              description: `Condition: ${item.condition} • ${item.points} points`,
              link: `/item/${item.id}`
            }))}
          />
        </div>
      </div>

      {/* Browse by Category Section */}
      <div className="container mx-auto px-4 py-12 bg-darker-surface">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Browse by Category</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={`/browse?category=${category.name.toLowerCase()}`}
              className="group relative overflow-hidden rounded-lg bg-card hover:shadow-lg transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-primary text-2xl font-bold">{category.icon}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.count}+ items</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      
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
