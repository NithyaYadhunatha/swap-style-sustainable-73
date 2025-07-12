import { useState } from 'react';
import { Search, Eye, Check, X, Trash2, Users, Shield, Package } from 'lucide-react';
import Navbar from '../components/Navbar';

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('users');
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data
  const users = [
    {
      id: 1,
      name: "Sarah Mitchell",
      email: "sarah.mitchell@email.com",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b1c5?w=100",
      status: "Active",
      swaps: 23,
      joinDate: "2023-03-15",
      points: 750
    },
    {
      id: 2,
      name: "Alex Johnson",
      email: "alex.johnson@email.com",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
      status: "Pending",
      swaps: 0,
      joinDate: "2024-01-20",
      points: 0
    },
    {
      id: 3,
      name: "Morgan Parker",
      email: "morgan.parker@email.com",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100",
      status: "Suspended",
      swaps: 12,
      joinDate: "2023-08-10",
      points: 320
    }
  ];

  const offenses = [
    {
      id: 1,
      user: "Jamie Lee",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
      offense: "Posted item with misleading photos",
      date: "2024-01-18",
      status: "Under Review",
      severity: "Medium"
    },
    {
      id: 2,
      user: "Chris Morgan",
      avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=100",
      offense: "Failed to complete swap after agreement",
      date: "2024-01-17",
      status: "Pending",
      severity: "High"
    }
  ];

  const listings = [
    {
      id: 1,
      title: "Vintage Leather Jacket",
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=100",
      owner: "Taylor Rivera",
      points: 250,
      status: "Pending Review",
      flaggedReason: "Condition mismatch",
      reportDate: "2024-01-19"
    },
    {
      id: 2,
      title: "Designer Handbag",
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=100",
      owner: "Jordan Kim",
      points: 300,
      status: "Under Review",
      flaggedReason: "Suspicious authenticity",
      reportDate: "2024-01-18"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active':
      case 'approved':
        return 'bg-green-500/20 text-green-400 border-green-400/30';
      case 'pending':
      case 'pending review':
      case 'under review':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-400/30';
      case 'suspended':
      case 'rejected':
        return 'bg-red-500/20 text-red-400 border-red-400/30';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity.toLowerCase()) {
      case 'high':
        return 'bg-red-500/20 text-red-400 border-red-400/30';
      case 'medium':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-400/30';
      case 'low':
        return 'bg-blue-500/20 text-blue-400 border-blue-400/30';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const handleAction = (action: string, id: number, type: string) => {
    console.log(`${action} ${type} with ID:`, id);
    // Handle the action based on type and action
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredOffenses = offenses.filter(offense =>
    offense.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
    offense.offense.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredListings = listings.filter(listing =>
    listing.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    listing.owner.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Admin Panel</h1>
          <p className="text-muted-foreground">Manage users, offenses, and listings</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-border">
          {[
            { id: 'users', label: 'Manage Users', icon: Users },
            { id: 'offenses', label: 'Manage Offenses', icon: Shield },
            { id: 'listings', label: 'Manage Listings', icon: Package }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 font-medium transition-colors duration-200 border-b-2 ${
                activeTab === tab.id
                  ? 'text-primary border-primary'
                  : 'text-muted-foreground border-transparent hover:text-foreground'
              }`}
            >
              <tab.icon size={20} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Search and Filter Bar */}
        <div className="card-rewear mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
              <input
                type="text"
                placeholder={`Search ${activeTab}...`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input-rewear pl-10 w-full"
              />
            </div>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'users' && (
          <div className="card-rewear">
            <h2 className="text-xl font-semibold text-foreground mb-6">User Management</h2>
            
            <div className="space-y-4">
              {filteredUsers.map((user) => (
                <div key={user.id} className="flex flex-col md:flex-row items-start md:items-center gap-4 p-4 bg-muted rounded-lg">
                  <div className="flex items-center gap-4 flex-1">
                    <img 
                      src={user.avatar} 
                      alt={user.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-foreground">{user.name}</h3>
                      <p className="text-sm text-muted-foreground">{user.email}</p>
                      <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                        <span>{user.swaps} swaps</span>
                        <span>{user.points} points</span>
                        <span>Joined {new Date(user.joinDate).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(user.status)}`}>
                      {user.status}
                    </span>
                  </div>
                  
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleAction('view', user.id, 'user')}
                      className="p-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors duration-200"
                      title="View Details"
                    >
                      <Eye size={16} />
                    </button>
                    <button
                      onClick={() => handleAction('approve', user.id, 'user')}
                      className="p-2 bg-green-500/10 text-green-400 rounded-lg hover:bg-green-500/20 transition-colors duration-200"
                      title="Approve"
                    >
                      <Check size={16} />
                    </button>
                    <button
                      onClick={() => handleAction('suspend', user.id, 'user')}
                      className="p-2 bg-yellow-500/10 text-yellow-400 rounded-lg hover:bg-yellow-500/20 transition-colors duration-200"
                      title="Suspend"
                    >
                      <X size={16} />
                    </button>
                    <button
                      onClick={() => handleAction('delete', user.id, 'user')}
                      className="p-2 bg-red-500/10 text-red-400 rounded-lg hover:bg-red-500/20 transition-colors duration-200"
                      title="Delete"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'offenses' && (
          <div className="card-rewear">
            <h2 className="text-xl font-semibold text-foreground mb-6">Offense Management</h2>
            
            <div className="space-y-4">
              {filteredOffenses.map((offense) => (
                <div key={offense.id} className="flex flex-col md:flex-row items-start md:items-center gap-4 p-4 bg-muted rounded-lg">
                  <div className="flex items-center gap-4 flex-1">
                    <img 
                      src={offense.avatar} 
                      alt={offense.user}
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-foreground">{offense.user}</h3>
                      <p className="text-sm text-muted-foreground mb-1">{offense.offense}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>Reported {new Date(offense.date).toLocaleDateString()}</span>
                        <span className={`px-2 py-1 rounded text-xs border ${getSeverityColor(offense.severity)}`}>
                          {offense.severity}
                        </span>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(offense.status)}`}>
                      {offense.status}
                    </span>
                  </div>
                  
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleAction('review', offense.id, 'offense')}
                      className="p-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors duration-200"
                      title="Review"
                    >
                      <Eye size={16} />
                    </button>
                    <button
                      onClick={() => handleAction('resolve', offense.id, 'offense')}
                      className="p-2 bg-green-500/10 text-green-400 rounded-lg hover:bg-green-500/20 transition-colors duration-200"
                      title="Resolve"
                    >
                      <Check size={16} />
                    </button>
                    <button
                      onClick={() => handleAction('dismiss', offense.id, 'offense')}
                      className="p-2 bg-yellow-500/10 text-yellow-400 rounded-lg hover:bg-yellow-500/20 transition-colors duration-200"
                      title="Dismiss"
                    >
                      <X size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'listings' && (
          <div className="card-rewear">
            <h2 className="text-xl font-semibold text-foreground mb-6">Listing Management</h2>
            
            <div className="space-y-4">
              {filteredListings.map((listing) => (
                <div key={listing.id} className="flex flex-col md:flex-row items-start md:items-center gap-4 p-4 bg-muted rounded-lg">
                  <div className="flex items-center gap-4 flex-1">
                    <img 
                      src={listing.image} 
                      alt={listing.title}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-foreground">{listing.title}</h3>
                      <p className="text-sm text-muted-foreground">by {listing.owner}</p>
                      <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                        <span>{listing.points} points</span>
                        <span>Flagged: {listing.flaggedReason}</span>
                        <span>Reported {new Date(listing.reportDate).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(listing.status)}`}>
                      {listing.status}
                    </span>
                  </div>
                  
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleAction('view', listing.id, 'listing')}
                      className="p-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors duration-200"
                      title="View Listing"
                    >
                      <Eye size={16} />
                    </button>
                    <button
                      onClick={() => handleAction('approve', listing.id, 'listing')}
                      className="p-2 bg-green-500/10 text-green-400 rounded-lg hover:bg-green-500/20 transition-colors duration-200"
                      title="Approve"
                    >
                      <Check size={16} />
                    </button>
                    <button
                      onClick={() => handleAction('reject', listing.id, 'listing')}
                      className="p-2 bg-red-500/10 text-red-400 rounded-lg hover:bg-red-500/20 transition-colors duration-200"
                      title="Reject"
                    >
                      <X size={16} />
                    </button>
                    <button
                      onClick={() => handleAction('delete', listing.id, 'listing')}
                      className="p-2 bg-red-500/10 text-red-400 rounded-lg hover:bg-red-500/20 transition-colors duration-200"
                      title="Delete"
                    >
                      <Trash2 size={16} />
                    </button>
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

export default AdminPanel;