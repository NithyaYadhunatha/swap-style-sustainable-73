
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Package, Users, CheckCircle, XCircle, Trash2, Eye, TrendingUp } from 'lucide-react';
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
    status: "pending"
  },
  {
    id: 2,
    name: "Designer Sneakers",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=150",
    uploader: "Alex Johnson",
    uploadDate: "2024-01-19",
    status: "pending"
  },
  {
    id: 3,
    name: "Leather Handbag",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=150",
    uploader: "Morgan Parker",
    uploadDate: "2024-01-18",
    status: "pending"
  }
];

const mockApprovedItems = [
  {
    id: 4,
    name: "Cotton T-Shirt",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=150",
    uploader: "Jamie Lee",
    uploadDate: "2024-01-17",
    status: "approved"
  },
  {
    id: 5,
    name: "Summer Dress",
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=150",
    uploader: "Chris Morgan",
    uploadDate: "2024-01-16",
    status: "approved"
  }
];

const mockStats = {
  totalPending: 3,
  totalApproved: 25,
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
    setPendingItems(prev => prev.filter(item => item.id !== itemId));
    setStats(prev => ({
      ...prev,
      totalPending: prev.totalPending - 1,
      totalApproved: prev.totalApproved + 1
    }));
    toast({
      title: "Item Approved",
      description: "Item has been approved and is now live",
    });
  };

  const handleRejectItem = (itemId: number) => {
    setPendingItems(prev => prev.filter(item => item.id !== itemId));
    setStats(prev => ({
      ...prev,
      totalPending: prev.totalPending - 1,
      totalRemoved: prev.totalRemoved + 1
    }));
    toast({
      title: "Item Rejected",
      description: "Item has been rejected and removed",
      variant: "destructive",
    });
  };

  const handleRemoveApprovedItem = (itemId: number) => {
    setApprovedItems(prev => prev.filter(item => item.id !== itemId));
    setStats(prev => ({
      ...prev,
      totalApproved: prev.totalApproved - 1,
      totalRemoved: prev.totalRemoved + 1
    }));
    toast({
      title: "Item Removed",
      description: "Approved item has been removed from the platform",
      variant: "destructive",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
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
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Approved Items</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalApproved}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalUsers}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Items Removed</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalRemoved}</div>
            </CardContent>
          </Card>
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-1 mb-6">
          <Button
            variant={activeTab === 'pending' ? 'default' : 'outline'}
            onClick={() => setActiveTab('pending')}
          >
            Pending Items ({stats.totalPending})
          </Button>
          <Button
            variant={activeTab === 'approved' ? 'default' : 'outline'}
            onClick={() => setActiveTab('approved')}
          >
            Approved Items ({stats.totalApproved})
          </Button>
        </div>

        {/* Content */}
        <Card>
          <CardHeader>
            <CardTitle>
              {activeTab === 'pending' ? 'Moderate Item Listings' : 'Manage Approved Items'}
            </CardTitle>
            <CardDescription>
              {activeTab === 'pending' 
                ? 'Review and approve or reject pending item submissions'
                : 'Remove inappropriate or spam items from approved listings'
              }
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Item</TableHead>
                  <TableHead>Uploader</TableHead>
                  <TableHead>Upload Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {(activeTab === 'pending' ? pendingItems : approvedItems).map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <span className="font-medium">{item.name}</span>
                      </div>
                    </TableCell>
                    <TableCell>{item.uploader}</TableCell>
                    <TableCell>{new Date(item.uploadDate).toLocaleDateString()}</TableCell>
                    <TableCell>
                      <Badge variant={item.status === 'approved' ? 'default' : 'secondary'}>
                        {item.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => console.log('View item', item.id)}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        {activeTab === 'pending' ? (
                          <>
                            <Button
                              size="sm"
                              onClick={() => handleApproveItem(item.id)}
                              className="bg-green-600 hover:bg-green-700"
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
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
