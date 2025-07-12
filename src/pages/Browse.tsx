import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Grid, List, Heart, Star, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';

const Browse = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCondition, setSelectedCondition] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  const categories = [
    { id: 'all', name: 'All Categories', count: 1250 },
    { id: 'tops', name: 'Tops', count: 300 },
    { id: 'bottoms', name: 'Bottoms', count: 220 },
    { id: 'outerwear', name: 'Outerwear', count: 160 },
    { id: 'dresses', name: 'Dresses', count: 200 },
    { id: 'footwear', name: 'Footwear', count: 180 },
    { id: 'accessories', name: 'Accessories', count: 95 },
    { id: 'activewear', name: 'Activewear', count: 90 },
    { id: 'ethnic', name: 'Ethnic Wear', count: 70 },
    { id: 'seasonal', name: 'Seasonal Collections', count: 60 }
  ];

  const conditions = [
    { id: 'all', name: 'All Conditions' },
    { id: 'like-new', name: 'Like New' },
    { id: 'excellent', name: 'Excellent' },
    { id: 'good', name: 'Good' },
    { id: 'fair', name: 'Fair' }
  ];

  const sortOptions = [
    { id: 'newest', name: 'Newest First' },
    { id: 'points-low', name: 'Points: Low to High' },
    { id: 'points-high', name: 'Points: High to Low' },
    { id: 'popular', name: 'Most Popular' }
  ];

  // Mock items data
  const items = [
    // Tops
    {
      id: 1,
      title: "Classic White T-Shirt",
      image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=400",
      points: 50,
      condition: "Excellent",
      category: "Tops",
      owner: "Aarav S.",
      likes: 14,
      status: "Available"
    },
    {
      id: 2,
      title: "Striped Crop Top",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400",
      points: 60,
      condition: "Like New",
      category: "Tops",
      owner: "Nisha P.",
      likes: 10,
      status: "Available"
    },
    {
      id: 3,
      title: "Oversized Hoodie",
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=400",
      points: 90,
      condition: "Good",
      category: "Tops",
      owner: "Rohan M.",
      likes: 7,
      status: "Available"
    },
    // Bottoms
    {
      id: 4,
      title: "High-Waisted Jeans",
      image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=400",
      points: 120,
      condition: "Excellent",
      category: "Bottoms",
      owner: "Priya R.",
      likes: 11,
      status: "Available"
    },
    {
      id: 5,
      title: "Black Leggings",
      image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=400",
      points: 70,
      condition: "Like New",
      category: "Bottoms",
      owner: "Saanvi L.",
      likes: 9,
      status: "Available"
    },
    {
      id: 6,
      title: "Denim Shorts",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
      points: 60,
      condition: "Good",
      category: "Bottoms",
      owner: "Kabir D.",
      likes: 8,
      status: "Available"
    },
    // Outerwear
    {
      id: 7,
      title: "Vintage Denim Jacket",
      image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=400",
      points: 150,
      condition: "Excellent",
      category: "Outerwear",
      owner: "Aarav S.",
      likes: 12,
      status: "Available"
    },
    {
      id: 8,
      title: "Classic Trench Coat",
      image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=400",
      points: 180,
      condition: "Good",
      category: "Outerwear",
      owner: "Simran K.",
      likes: 10,
      status: "Available"
    },
    {
      id: 9,
      title: "Bomber Jacket",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400",
      points: 160,
      condition: "Like New",
      category: "Outerwear",
      owner: "Rahul G.",
      likes: 9,
      status: "Available"
    },
    // Dresses
    {
      id: 10,
      title: "Summer Dress",
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400",
      points: 120,
      condition: "Like New",
      category: "Dresses",
      owner: "Riya M.",
      likes: 8,
      status: "Available"
    },
    {
      id: 11,
      title: "Floral Maxi Dress",
      image: "https://images.unsplash.com/photo-1469398715555-76331a9957a0?w=400",
      points: 140,
      condition: "Excellent",
      category: "Dresses",
      owner: "Megha S.",
      likes: 12,
      status: "Available"
    },
    {
      id: 12,
      title: "Little Black Dress",
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400",
      points: 130,
      condition: "Good",
      category: "Dresses",
      owner: "Tara J.",
      likes: 10,
      status: "Available"
    },
    // Footwear
    {
      id: 13,
      title: "Designer Sneakers",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400",
      points: 200,
      condition: "Good",
      category: "Footwear",
      owner: "Priya R.",
      likes: 18,
      status: "Available"
    },
    {
      id: 14,
      title: "Leather Boots",
      image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400",
      points: 180,
      condition: "Excellent",
      category: "Footwear",
      owner: "Arjun K.",
      likes: 15,
      status: "Available"
    },
    {
      id: 15,
      title: "Classic Loafers",
      image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=400",
      points: 120,
      condition: "Like New",
      category: "Footwear",
      owner: "Sonal V.",
      likes: 11,
      status: "Available"
    },
    // Accessories
    {
      id: 16,
      title: "Leather Belt",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400",
      points: 40,
      condition: "Excellent",
      category: "Accessories",
      owner: "Rajiv N.",
      likes: 6,
      status: "Available"
    },
    {
      id: 17,
      title: "Silk Scarf",
      image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400",
      points: 35,
      condition: "Good",
      category: "Accessories",
      owner: "Nikita S.",
      likes: 5,
      status: "Available"
    },
    {
      id: 18,
      title: "Statement Earrings",
      image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=400",
      points: 25,
      condition: "Like New",
      category: "Accessories",
      owner: "Zara F.",
      likes: 8,
      status: "Available"
    },
    // Activewear
    {
      id: 19,
      title: "Yoga Pants",
      image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=400",
      points: 70,
      condition: "Excellent",
      category: "Activewear",
      owner: "Kavya T.",
      likes: 10,
      status: "Available"
    },
    {
      id: 20,
      title: "Sports Bra",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400",
      points: 50,
      condition: "Good",
      category: "Activewear",
      owner: "Ishaan P.",
      likes: 6,
      status: "Available"
    },
    {
      id: 21,
      title: "Running Shorts",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
      points: 55,
      condition: "Like New",
      category: "Activewear",
      owner: "Sana Y.",
      likes: 7,
      status: "Available"
    },
    // Ethnic Wear
    {
      id: 22,
      title: "Kurta Set",
      image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=400",
      points: 110,
      condition: "Excellent",
      category: "Ethnic",
      owner: "Manav B.",
      likes: 8,
      status: "Available"
    },
    {
      id: 23,
      title: "Saree",
      image: "https://images.unsplash.com/photo-1469398715555-76331a9957a0?w=400",
      points: 150,
      condition: "Like New",
      category: "Ethnic",
      owner: "Pooja R.",
      likes: 10,
      status: "Available"
    },
    {
      id: 24,
      title: "Embroidered Dupatta",
      image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400",
      points: 60,
      condition: "Good",
      category: "Ethnic",
      owner: "Siddhi K.",
      likes: 5,
      status: "Available"
    },
    // Seasonal Collections
    {
      id: 25,
      title: "Woolen Beanie",
      image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400",
      points: 20,
      condition: "Excellent",
      category: "Seasonal",
      owner: "Rajat S.",
      likes: 4,
      status: "Available"
    },
    {
      id: 26,
      title: "Raincoat",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400",
      points: 80,
      condition: "Good",
      category: "Seasonal",
      owner: "Ananya V.",
      likes: 6,
      status: "Available"
    },
    {
      id: 27,
      title: "Summer Hat",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
      points: 30,
      condition: "Like New",
      category: "Seasonal",
      owner: "Devika M.",
      likes: 7,
      status: "Available"
    }
  ];

  const filteredItems = items.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category.toLowerCase() === selectedCategory;
    const matchesCondition = selectedCondition === 'all' || item.condition.toLowerCase().replace(' ', '-') === selectedCondition;
    return matchesSearch && matchesCategory && matchesCondition;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Browse Items</h1>
          <p className="text-muted-foreground">Discover your next favorite piece from our community</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="card-rewear sticky top-8">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                <Filter className="mr-2" size={20} />
                Filters
              </h3>
              
              {/* Categories */}
              <div className="mb-6">
                <h4 className="font-medium text-foreground mb-3">Category</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left p-2 rounded-lg transition-colors duration-200 ${
                        selectedCategory === category.id
                          ? 'bg-primary/20 text-primary'
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span>{category.name}</span>
                        <span className="text-sm">{category.count}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Condition */}
              <div className="mb-6">
                <h4 className="font-medium text-foreground mb-3">Condition</h4>
                <div className="space-y-2">
                  {conditions.map((condition) => (
                    <button
                      key={condition.id}
                      onClick={() => setSelectedCondition(condition.id)}
                      className={`w-full text-left p-2 rounded-lg transition-colors duration-200 ${
                        selectedCondition === condition.id
                          ? 'bg-primary/20 text-primary'
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                      }`}
                    >
                      {condition.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedCondition('all');
                  setSearchTerm('');
                }}
                className="w-full btn-neon-outline"
              >
                Clear All Filters
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search and Controls */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
                <input
                  type="text"
                  placeholder="Search items..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="input-rewear pl-10 w-full"
                />
              </div>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="input-rewear w-full md:w-48"
              >
                {sortOptions.map((option) => (
                  <option key={option.id} value={option.id}>{option.name}</option>
                ))}
              </select>

              {/* View Mode */}
              <div className="flex border border-border rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded transition-colors duration-200 ${
                    viewMode === 'grid'
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Grid size={20} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded transition-colors duration-200 ${
                    viewMode === 'list'
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <List size={20} />
                </button>
              </div>
            </div>

            {/* Results Count */}
            <div className="flex justify-between items-center mb-6">
              <p className="text-muted-foreground">
                {filteredItems.length} items found
              </p>
            </div>

            {/* Items Grid/List */}
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredItems.map((item) => (
                  <div key={item.id} className="group cursor-pointer">
                    <div className="bg-card rounded-lg overflow-hidden">
                      <div className="aspect-[4/3] relative">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-3 left-3">
                          <span className="bg-green-400 text-black text-xs px-2.5 py-1 rounded-full">
                            Available
                          </span>
                        </div>
                        <div className="absolute top-3 right-3">
                          <button className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center text-muted-foreground hover:text-primary transition-colors duration-200">
                            <Heart size={14} />
                          </button>
                        </div>
                      </div>
                      
                      <div className="p-4">
                        <h3 className="text-lg font-semibold text-foreground mb-2 truncate">
                          {item.title}
                        </h3>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-green-400 font-bold">{item.points} points</span>
                          <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded">
                            {item.condition}
                          </span>
                        </div>
                        
                        <div className="flex justify-between items-center text-sm text-muted-foreground mb-3">
                          <span>by {item.owner}</span>
                          <div className="flex items-center gap-1">
                            <Heart size={12} />
                            <span>{item.likes}</span>
                          </div>
                        </div>
                        
                        <Link 
                          to={`/item/${item.id}`} 
                          className="w-full btn-neon-outline text-sm py-2 px-4 flex items-center justify-center gap-2 hover:bg-green-400 hover:text-black transition-colors duration-200"
                        >
                          View Details
                          <ArrowRight size={12} />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredItems.map((item) => (
                  <div key={item.id} className="card-rewear">
                    <div className="flex gap-4">
                      <div className="w-24 h-24 overflow-hidden rounded-lg flex-shrink-0">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                          <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full ml-2">
                            {item.status}
                          </span>
                        </div>
                        
                        <div className="flex items-center gap-4 mb-2">
                          <span className="text-primary font-bold">{item.points} points</span>
                          <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded">
                            {item.condition}
                          </span>
                          <span className="text-sm text-muted-foreground">by {item.owner}</span>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Heart size={12} />
                            <span>{item.likes} likes</span>
                          </div>
                          <Link to={`/item/${item.id}`} className="btn-neon-outline text-sm px-4 py-2">
                            View Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {filteredItems.length === 0 && (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="text-muted-foreground" size={48} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">No items found</h3>
                <p className="text-muted-foreground mb-4">Try adjusting your search or filters</p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedCondition('all');
                    setSearchTerm('');
                  }}
                  className="btn-neon"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Browse;