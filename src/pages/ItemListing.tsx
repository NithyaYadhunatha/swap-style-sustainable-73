import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Heart, Share2, Star, User, MapPin, Clock, RefreshCw } from 'lucide-react';
import Navbar from '../components/Navbar';

const ItemListing = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  // Mock item data - in a real app, this would come from an API
  const item = {
    id: id,
    title: "Vintage Denim Jacket",
    description: "A beautiful vintage denim jacket in excellent condition. Perfect for layering and adding a classic touch to any outfit. This piece has been well-maintained and shows minimal signs of wear.",
    images: [
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=600",
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600",
      "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=600"
    ],
    points: 150,
    condition: "Excellent",
    size: "Medium",
    category: "Jackets",
    tags: ["vintage", "denim", "casual", "blue"],
    owner: {
      name: "Sarah M.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b1c5?w=100",
      rating: 4.8,
      swaps: 23
    },
    location: "San Francisco, CA",
    postedDate: "2 days ago",
    status: "Available"
  };

  const relatedItems = [
    {
      id: 2,
      title: "Blue Jeans",
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=300",
      points: 100,
      condition: "Good"
    },
    {
      id: 3,
      title: "Leather Jacket",
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300",
      points: 200,
      condition: "Like New"
    },
    {
      id: 4,
      title: "White T-Shirt",
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=300",
      points: 50,
      condition: "Excellent"
    }
  ];

  const handleSwapRequest = () => {
    // Handle swap request logic
    console.log('Swap request sent for item:', id);
  };

  const handleRedeemPoints = () => {
    // Handle points redemption logic
    console.log('Redeem points for item:', id);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Back Button */}
        <Link 
          to="/browse" 
          className="flex items-center text-muted-foreground hover:text-foreground mb-6 transition-colors duration-200"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Browse
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div>
            {/* Main Image */}
            <div className="aspect-square mb-4 overflow-hidden rounded-xl bg-card">
              <img 
                src={item.images[selectedImage]} 
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Thumbnail Images */}
            <div className="flex gap-3">
              {item.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors duration-200 ${
                    selectedImage === index ? 'border-primary' : 'border-border'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`${item.title} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Item Details */}
          <div>
            {/* Status Badge */}
            <div className="flex justify-between items-start mb-4">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                item.status === 'Available' 
                  ? 'bg-primary/20 text-primary border border-primary/30' 
                  : 'bg-muted text-muted-foreground'
              }`}>
                {item.status}
              </span>
              
              <div className="flex gap-2">
                <button
                  onClick={() => setIsLiked(!isLiked)}
                  className={`p-2 rounded-lg border transition-colors duration-200 ${
                    isLiked 
                      ? 'border-primary bg-primary/10 text-primary' 
                      : 'border-border bg-card text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Heart size={20} className={isLiked ? 'fill-current' : ''} />
                </button>
                <button className="p-2 rounded-lg border border-border bg-card text-muted-foreground hover:text-foreground transition-colors duration-200">
                  <Share2 size={20} />
                </button>
              </div>
            </div>

            {/* Title and Points */}
            <h1 className="text-3xl font-bold text-foreground mb-2">{item.title}</h1>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-2xl font-bold text-primary">{item.points} points</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-muted-foreground">{item.condition} condition</span>
            </div>

            {/* Item Info */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-card p-4 rounded-lg border border-border">
                <h3 className="text-sm font-medium text-muted-foreground mb-1">Size</h3>
                <p className="text-foreground">{item.size}</p>
              </div>
              <div className="bg-card p-4 rounded-lg border border-border">
                <h3 className="text-sm font-medium text-muted-foreground mb-1">Category</h3>
                <p className="text-foreground">{item.category}</p>
              </div>
            </div>

            {/* Tags */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-muted-foreground mb-2">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-foreground mb-3">Description</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <button 
                onClick={handleSwapRequest}
                className="btn-neon justify-center"
              >
                <RefreshCw size={20} className="mr-2" />
                Send Swap Request
              </button>
              <button 
                onClick={handleRedeemPoints}
                className="btn-neon-outline justify-center"
              >
                Redeem via Points
              </button>
            </div>

            {/* Owner Info */}
            <div className="card-rewear">
              <h3 className="text-lg font-semibold text-foreground mb-4">Listed by</h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img 
                    src={item.owner.avatar} 
                    alt={item.owner.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h4 className="font-medium text-foreground">{item.owner.name}</h4>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Star size={14} className="text-primary fill-current" />
                      <span>{item.owner.rating}</span>
                      <span>•</span>
                      <span>{item.owner.swaps} swaps</span>
                    </div>
                  </div>
                </div>
                <Link to={`/profile/${item.owner.name}`} className="btn-neon-outline text-sm px-4 py-2">
                  View Profile
                </Link>
              </div>
              
              <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <MapPin size={14} />
                  <span>{item.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  <span>Posted {item.postedDate}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Items */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-foreground mb-8">Related Items</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedItems.map((relatedItem) => (
              <Link key={relatedItem.id} to={`/item/${relatedItem.id}`} className="card-rewear group">
                <div className="aspect-square mb-4 overflow-hidden rounded-lg">
                  <img 
                    src={relatedItem.image} 
                    alt={relatedItem.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{relatedItem.title}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-primary font-bold">{relatedItem.points} points</span>
                  <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded">
                    {relatedItem.condition}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ItemListing;