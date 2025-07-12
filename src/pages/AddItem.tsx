import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, X, Plus, Tag, Star } from 'lucide-react';
import Navbar from '../components/Navbar';

const AddItem = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    size: '',
    condition: '',
    points: '',
    tags: []
  });
  const [images, setImages] = useState([]);
  const [tagInput, setTagInput] = useState('');

  const categories = [
    'Jackets', 'Dresses', 'Shoes', 'Pants', 'Shirts', 'Accessories', 'Bags', 'Other'
  ];

  const sizes = [
    'XS', 'S', 'M', 'L', 'XL', 'XXL', 'One Size'
  ];

  const conditions = [
    'Like New', 'Excellent', 'Good', 'Fair'
  ];

  // Mock recent listings for preview
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
    }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    // In a real app, you would upload these to a server
    const newImages = files.map((file, index) => ({
      id: Date.now() + index,
      file,
      preview: URL.createObjectURL(file)
    }));
    setImages([...images, ...newImages]);
  };

  const removeImage = (id) => {
    setImages(images.filter(img => img.id !== id));
  };

  const handleAddTag = (e) => {
    e.preventDefault();
    if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
      setFormData({
        ...formData,
        tags: [...formData.tags, tagInput.trim()]
      });
      setTagInput('');
    }
  };

  const removeTag = (tagToRemove) => {
    setFormData({
      ...formData,
      tags: formData.tags.filter(tag => tag !== tagToRemove)
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { ...formData, images });
    // Navigate to dashboard or item listing after successful submission
    navigate('/dashboard');
  };

  const getConditionStars = (condition) => {
    switch (condition) {
      case 'Like New': return 5;
      case 'Excellent': return 4;
      case 'Good': return 3;
      case 'Fair': return 2;
      default: return 0;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">List Your Item</h1>
          <p className="text-muted-foreground">Share your unused clothes with the ReWear community</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="card-rewear">
              {/* Image Upload */}
              <div className="mb-8">
                <label className="block text-lg font-semibold text-foreground mb-4">
                  Photos
                </label>
                
                {/* Upload Area */}
                <div className="border-2 border-dashed border-border rounded-xl p-8 text-center mb-4 hover:border-primary transition-colors duration-200">
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="image-upload"
                  />
                  <label htmlFor="image-upload" className="cursor-pointer">
                    <Upload className="mx-auto mb-4 text-muted-foreground" size={48} />
                    <p className="text-lg font-medium text-foreground mb-2">Upload Photos</p>
                    <p className="text-muted-foreground">Drag and drop or click to browse</p>
                  </label>
                </div>
                
                {/* Image Previews */}
                {images.length > 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {images.map((image) => (
                      <div key={image.id} className="relative group">
                        <img 
                          src={image.preview} 
                          alt="Preview"
                          className="w-full aspect-square object-cover rounded-lg"
                        />
                        <button
                          type="button"
                          onClick={() => removeImage(image.id)}
                          className="absolute top-2 right-2 w-6 h-6 bg-destructive rounded-full flex items-center justify-center text-destructive-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                        >
                          <X size={14} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Item Details */}
              <div className="space-y-6">
                {/* Title */}
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-foreground mb-2">
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="input-rewear w-full"
                    placeholder="e.g., Vintage Denim Jacket"
                    required
                  />
                </div>

                {/* Description */}
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-foreground mb-2">
                    Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={4}
                    className="input-rewear w-full resize-none"
                    placeholder="Describe your item, including any details about fit, style, or condition..."
                    required
                  />
                </div>

                {/* Category and Size */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="category" className="block text-sm font-medium text-foreground mb-2">
                      Category
                    </label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="input-rewear w-full"
                      required
                    >
                      <option value="">Select category</option>
                      {categories.map((category) => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="size" className="block text-sm font-medium text-foreground mb-2">
                      Size
                    </label>
                    <select
                      id="size"
                      name="size"
                      value={formData.size}
                      onChange={handleChange}
                      className="input-rewear w-full"
                      required
                    >
                      <option value="">Select size</option>
                      {sizes.map((size) => (
                        <option key={size} value={size}>{size}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Condition and Points */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="condition" className="block text-sm font-medium text-foreground mb-2">
                      Condition
                    </label>
                    <select
                      id="condition"
                      name="condition"
                      value={formData.condition}
                      onChange={handleChange}
                      className="input-rewear w-full"
                      required
                    >
                      <option value="">Select condition</option>
                      {conditions.map((condition) => (
                        <option key={condition} value={condition}>
                          {condition} {condition && '★'.repeat(getConditionStars(condition))}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="points" className="block text-sm font-medium text-foreground mb-2">
                      Points Value
                    </label>
                    <input
                      type="number"
                      id="points"
                      name="points"
                      value={formData.points}
                      onChange={handleChange}
                      className="input-rewear w-full"
                      placeholder="e.g., 150"
                      min="1"
                      required
                    />
                  </div>
                </div>

                {/* Tags */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Tags
                  </label>
                  <div className="flex gap-2 mb-3">
                    <input
                      type="text"
                      value={tagInput}
                      onChange={(e) => setTagInput(e.target.value)}
                      className="input-rewear flex-1"
                      placeholder="Add a tag..."
                      onKeyPress={(e) => e.key === 'Enter' && handleAddTag(e)}
                    />
                    <button
                      type="button"
                      onClick={handleAddTag}
                      className="btn-neon-outline px-4 py-2"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  
                  {formData.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {formData.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="flex items-center gap-1 px-3 py-1 bg-primary/20 text-primary rounded-full text-sm"
                        >
                          <Tag size={12} />
                          {tag}
                          <button
                            type="button"
                            onClick={() => removeTag(tag)}
                            className="ml-1 text-primary hover:text-primary/70"
                          >
                            <X size={12} />
                          </button>
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-8 pt-6 border-t border-border">
                <button
                  type="submit"
                  className="btn-neon w-full justify-center"
                >
                  List Your Item
                </button>
              </div>
            </form>
          </div>

          {/* Preview Section */}
          <div className="lg:col-span-1">
            <div className="card-rewear sticky top-8">
              <h3 className="text-lg font-semibold text-foreground mb-4">Recent Listings</h3>
              <div className="space-y-4">
                {recentListings.map((item) => (
                  <div key={item.id} className="flex gap-3 p-3 bg-muted rounded-lg">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-foreground text-sm truncate">{item.title}</h4>
                      <p className="text-primary font-bold text-sm">{item.points} points</p>
                      <span className="text-xs text-muted-foreground">{item.status}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/30">
                <h4 className="font-semibold text-primary mb-2">💡 Tips for Better Listings</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Use clear, well-lit photos</li>
                  <li>• Include multiple angles</li>
                  <li>• Be honest about condition</li>
                  <li>• Add detailed descriptions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddItem;