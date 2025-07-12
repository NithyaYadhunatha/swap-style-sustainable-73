
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Shield, Package, Users, CheckCircle, XCircle, Trash2, Eye, TrendingUp, ArrowLeft, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/hooks/use-toast';

// Mock data - replace with actual API calls
const mockPendingItems = [
  {
    id: 1,
    name: "Vintage Denim Jacket",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=150",
    uploader: "Sarah Mitchell",
    uploadDate: "2024-01-20",
    status: "pending",
    price: 45.00,
    description: "Classic vintage denim jacket in excellent condition"
  },
  {
    id: 2,
    name: "Designer Sneakers",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=150",
    uploader: "Alex Johnson",
    uploadDate: "2024-01-19",
    status: "pending",
    price: 85.00,
    description: "Limited edition designer sneakers, barely worn"
  },
  {
    id: 3,
    name: "Leather Handbag",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=150",
    uploader: "Morgan Parker",
    uploadDate: "2024-01-18",
    status: "pending",
    price: 120.00,
    description: "Genuine leather handbag with original tags"
  }
];

const mockApprovedItems = [
  {
    id: 4,
    name: "Cotton T-Shirt",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=150",
    uploader: "Jamie Lee",
    uploadDate: "2024-01-17",
    status: "approved",
    price: 15.00,
    description: "Soft cotton t-shirt in great condition",
    reportCount: 0
  },
  {
    id: 5,
    name: "Summer Dress",
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=150",
    uploader: "Chris Morgan",
    uploadDate: "2024-01-16",
    status: "approved",
    price: 35.00,
    description: "Beautiful summer dress, perfect for warm weather",
    reportCount: 2
  },
  {
    id: 6,
    name: "Vintage Watch",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=150",
    uploader: "Taylor Swift",
    uploadDate: "2024-01-15",
    status: "approved",
    price: 250.00,
    description: "Classic vintage watch with leather strap",
    reportCount: 1
  }
];

const mockStats = {
  totalPending: 3,
  totalApproved: 28,
  totalUsers: 150,
  totalRemoved: 5
};

const AdminDashboard = () => {
  const [pendingItems, setPendingItems] = useState(mockPendingItems);
  const [approvedItems, setApprovedItems] = useState(mockApprovedItems);
  const [stats, setStats] = useState(mockStats);
  const [activeTab, setActiveTab] = useState('pending');
  const navigate = useNavigate();

  useEffect(() => {
    // Check admin authentication
    const adminAuth = localStorage.getItem('adminAuth');
    if (!adminAuth) {
      navigate('/admin-login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    toast({
      title: "Logged Out",
      description: "You have been logged out of the admin dashboard",
    });
    navigate('/admin-login');
  };

  const handleApproveItem = (itemId: number) => {
    const item = pendingItems.find(item => item.id === itemId);
    if (item) {
      setPendingItems(prev => prev.filter(item => item.id !== itemId));
      setApprovedItems(prev => [...prev, { ...item, status: 'approved', reportCount: 0 }]);
      setStats(prev => ({
        ...prev,
        totalPending: prev.totalPending - 1,
        totalApproved: prev.totalApproved + 1
      }));
      toast({
        title: "Item Approved",
        description: `"${item.name}" has been approved and is now live on the platform`,
      });
    }
  };

  const handleRejectItem = (itemId: number) => {
    const item = pendingItems.find(item => item.id === itemId);
    setPendingItems(prev => prev.filter(item => item.id !== itemId));
    setStats(prev => ({
      ...prev,
      totalPending: prev.totalPending - 1,
      totalRemoved: prev.totalRemoved + 1
    }));
    toast({
      title: "Item Rejected",
      description: `"${item?.name || 'Item'}" has been rejected and removed from the system`,
      variant: "destructive",
    });
  };

  const handleRemoveApprovedItem = (itemId: number) => {
    const item = approvedItems.find(item => item.id === itemId);
    setApprovedItems(prev => prev.filter(item => item.id !== itemId));
    setStats(prev => ({
      ...prev,
      totalApproved: prev.totalApproved - 1,
      totalRemoved: prev.totalRemoved + 1
    }));
    toast({
      title: "Item Removed",
      description: `"${item?.name || 'Item'}" has been removed from the platform`,
      variant: "destructive",
    });
  };

  const handleViewItem = (itemId: number) => {
    // In a real app, this would navigate to the item detail page
    console.log('Viewing item:', itemId);
    toast({
      title: "Item Details",
      description: "Item details would open in a new tab (feature not implemented in demo)",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link 
                to="/admin" 
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="h-6 w-6" />
              </Link>
              <Shield className="h-8 w-8 text-primary" />
              <div>
                <h1 className="text-2xl font-bold">Admin Dashboard</h1>
                <p className="text-muted-foreground">ReWear Platform Management</p>
              </div>
            </div>
            <Button variant="outline" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Items</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalPending}</div>
              <p className="text-xs text-muted-foreground">Awaiting moderation</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Approved Items</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalApproved}</div>
              <p className="text-xs text-muted-foreground">Live on platform</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalUsers}</div>
              <p className="text-xs text-muted-foreground">Registered users</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Items Removed</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalRemoved}</div>
              <p className="text-xs text-muted-foreground">Rejected/Removed</p>
            </CardContent>
          </Card>
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-1 mb-6">
          <Button
            variant={activeTab === 'pending' ? 'default' : 'outline'}
            onClick={() => setActiveTab('pending')}
          >
            Moderate Items ({stats.totalPending})
          </Button>
          <Button
            variant={activeTab === 'approved' ? 'default' : 'outline'}
            onClick={() => setActiveTab('approved')}
          >
            Manage Live Items ({stats.totalApproved})
          </Button>
        </div>

        {/* Content */}
        <Card>
          <CardHeader>
            <CardTitle>
              {activeTab === 'pending' ? 'Moderate Item Listings' : 'Manage Live Items'}
            </CardTitle>
            <CardDescription>
              {activeTab === 'pending' 
                ? 'Review pending submissions and approve or reject items for the platform'
                : 'Monitor live items and remove inappropriate or spam content'
              }
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-16">Image</TableHead>
                  <TableHead>Item Details</TableHead>
                  <TableHead>Uploader</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Upload Date</TableHead>
                  <TableHead>Status</TableHead>
                  {activeTab === 'approved' && <TableHead>Reports</TableHead>}
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {(activeTab === 'pending' ? pendingItems : approvedItems).map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                    </TableCell>
                    <TableCell>
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {item.description}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell>{item.uploader}</TableCell>
                    <TableCell>${item.price.toFixed(2)}</TableCell>
                    <TableCell>{new Date(item.uploadDate).toLocaleDateString()}</TableCell>
                    <TableCell>
                      <Badge variant={item.status === 'approved' ? 'default' : 'secondary'}>
                        {item.status}
                      </Badge>
                    </TableCell>
                    {activeTab === 'approved' && (
                      <TableCell>
                        <div className="flex items-center gap-1">
                          {item.reportCount > 0 && (
                            <AlertTriangle className="h-4 w-4 text-yellow-500" />
                          )}
                          <span className={item.reportCount > 0 ? 'text-yellow-600 font-medium' : ''}>
                            {item.reportCount}
                          </span>
                        </div>
                      </TableCell>
                    )}
                    <TableCell className="text-right">
                      <div className="flex gap-2 justify-end">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleViewItem(item.id)}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        {activeTab === 'pending' ? (
                          <>
                            <Button
                              size="sm"
                              onClick={() => handleApproveItem(item.id)}
                              className="bg-green-600 hover:bg-green-700 text-white"
                            >
                              <CheckCircle className="h-4 w-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant="destructive"
                              onClick={() => handleRejectItem(item.id)}
                            >
                              <XCircle className="h-4 w-4" />
                            </Button>
                          </>
                        ) : (
                          <Button
                            size="sm"
                            variant="destructive"
                            onClick={() => handleRemoveApprovedItem(item.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            
            {/* Empty State */}
            {activeTab === 'pending' && pendingItems.length === 0 && (
              <div className="text-center py-8">
                <Package className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium mb-2">No pending items</h3>
                <p className="text-muted-foreground">All submissions have been reviewed</p>
              </div>
            )}
            
            {activeTab === 'approved' && approvedItems.length === 0 && (
              <div className="text-center py-8">
                <CheckCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium mb-2">No approved items</h3>
                <p className="text-muted-foreground">No items are currently live on the platform</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
