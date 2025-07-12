import { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Star, Package, ShoppingBag, Plus, Edit, Trash2, MessageCircle } from 'lucide-react';
import Navbar from '../components/Navbar';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Mock user data
  const user = {
    name: "Sarah Mitchell",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b1c5?w=150",
    points: 750,
    level: "Gold Swapper",
    rating: 4.8,
    totalSwaps: 23,
    joinDate: "March 2023"
  };

  // Mock listings data
  const myListings = [
    {
      id: 1,
      title: "Vintage Denim Jacket",
      image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=300",
      points: 150,
      status: "Available",
      views: 45,
      likes: 12
    },
    {
      id: 2,
      title: "Designer Sneakers",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300",
      points: 200,
      status: "Swapped",
      views: 67,
      likes: 18
    },
    {
      id: 3,
      title: "Summer Dress",
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300",
      points: 120,
      status: "Pending",
      views: 23,
      likes: 8
    }
  ];

  // Mock swaps data
  const mySwaps = [
    {
      id: 1,
      title: "Leather Boots",
      image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=300",
      points: 180,
      status: "Completed",
      date: "2024-01-15",
      swappedWith: "Alex K."
    },
    {
      id: 2,
      title: "Knit Sweater",
      image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=300",
      points: 100,
      status: "In Progress",
      date: "2024-01-20",
      swappedWith: "Jamie L."
    }
  ];

  const stats = [
    { label: "Total Items Listed", value: myListings.length, icon: Package },
    { label: "Successful Swaps", value: user.totalSwaps, icon: ShoppingBag },
    { label: "Points Earned", value: user.points, icon: Star },
    { label: "Community Rating", value: user.rating, icon: User }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Available':
        return 'bg-primary/20 text-primary border-primary/30';
      case 'Swapped':
        return 'bg-green-500/20 text-green-400 border-green-400/30';
      case 'Pending':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-400/30';
      case 'Completed':
        return 'bg-green-500/20 text-green-400 border-green-400/30';
      case 'In Progress':
        return 'bg-blue-500/20 text-blue-400 border-blue-400/30';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Profile Header */}
        <div className="card-rewear mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="relative">
              <img 
                src={user.avatar} 
                alt={user.name}
                className="w-24 h-24 rounded-full border-4 border-primary glow-neon"
              />
              <button className="absolute bottom-0 right-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground hover:bg-primary/80 transition-colors duration-200">
                <Edit size={14} />
              </button>
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl font-bold text-foreground mb-2">{user.name}</h1>
              <p className="text-primary font-medium mb-4">{user.level}</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <stat.icon className="text-primary mr-1" size={16} />
                      <span className="text-xl font-bold text-foreground">{stat.value}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex gap-3">
              <Link to="/add-item" className="btn-neon">
                <Plus size={20} className="mr-2" />
                List New Item
              </Link>
              <Link to="/profile/edit" className="btn-neon-outline">
                Edit Profile
              </Link>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-border">
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'listings', label: 'My Listings' },
            { id: 'swaps', label: 'My Swaps' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 font-medium transition-colors duration-200 border-b-2 ${
                activeTab === tab.id
                  ? 'text-primary border-primary'
                  : 'text-muted-foreground border-transparent hover:text-foreground'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link to="/add-item" className="card-rewear text-center group hover:border-primary transition-colors duration-200">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:glow-neon transition-all duration-200">
                  <Plus className="text-primary" size={32} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">List New Item</h3>
                <p className="text-muted-foreground">Share your unused clothes</p>
              </Link>
              
              <Link to="/browse" className="card-rewear text-center group hover:border-primary transition-colors duration-200">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:glow-neon transition-all duration-200">
                  <Package className="text-primary" size={32} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Browse Items</h3>
                <p className="text-muted-foreground">Find your next favorite piece</p>
              </Link>
              
              <div className="card-rewear text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="text-primary" size={32} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Messages</h3>
                <p className="text-muted-foreground">3 new messages</p>
              </div>
            </div>

            {/* Recent Activity */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Recent Activity</h2>
              <div className="space-y-4">
                <div className="card-rewear">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <ShoppingBag className="text-primary" size={20} />
                    </div>
                    <div className="flex-1">
                      <p className="text-foreground">You completed a swap with Alex K.</p>
                      <p className="text-sm text-muted-foreground">2 hours ago</p>
                    </div>
                  </div>
                </div>
                
                <div className="card-rewear">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Star className="text-primary" size={20} />
                    </div>
                    <div className="flex-1">
                      <p className="text-foreground">Your listing "Vintage Denim Jacket" received 5 new likes</p>
                      <p className="text-sm text-muted-foreground">1 day ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'listings' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-foreground">My Listings</h2>
              <Link to="/add-item" className="btn-neon">
                <Plus size={20} className="mr-2" />
                Add New Item
              </Link>
            </div>
            
            <div className="grid-items">
              {myListings.map((item) => (
                <div key={item.id} className="card-rewear">
                  <div className="aspect-square mb-4 overflow-hidden rounded-lg relative">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 right-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(item.status)}`}>
                        {item.status}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-primary font-bold mb-3">{item.points} points</p>
                  
                  <div className="flex justify-between text-sm text-muted-foreground mb-4">
                    <span>{item.views} views</span>
                    <span>{item.likes} likes</span>
                  </div>
                  
                  <div className="flex gap-2">
                    <Link 
                      to={`/item/${item.id}`}
                      className="flex-1 btn-neon-outline text-center justify-center text-sm py-2"
                    >
                      View
                    </Link>
                    <button className="p-2 border border-border rounded-lg text-muted-foreground hover:text-foreground hover:border-primary transition-colors duration-200">
                      <Edit size={16} />
                    </button>
                    <button className="p-2 border border-border rounded-lg text-muted-foreground hover:text-destructive hover:border-destructive transition-colors duration-200">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'swaps' && (
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">My Swaps</h2>
            
            <div className="space-y-4">
              {mySwaps.map((swap) => (
                <div key={swap.id} className="card-rewear">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="w-24 h-24 overflow-hidden rounded-lg">
                      <img 
                        src={swap.image} 
                        alt={swap.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-semibold text-foreground">{swap.title}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(swap.status)}`}>
                          {swap.status}
                        </span>
                      </div>
                      
                      <p className="text-primary font-bold mb-2">{swap.points} points</p>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                        <span>Swapped with {swap.swappedWith}</span>
                        <span className="hidden sm:block">•</span>
                        <span>{new Date(swap.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Link 
                        to={`/item/${swap.id}`}
                        className="btn-neon-outline text-sm px-4 py-2"
                      >
                        View Details
                      </Link>
                      <button className="btn-neon-outline text-sm px-4 py-2">
                        <MessageCircle size={16} className="mr-1" />
                        Message
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;