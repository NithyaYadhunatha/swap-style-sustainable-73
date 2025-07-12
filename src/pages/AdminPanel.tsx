
import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Shield, ArrowRight, Database, Users, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const AdminPanel = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if admin is already logged in, redirect to dashboard
    const adminAuth = localStorage.getItem('adminAuth');
    if (adminAuth) {
      navigate('/admin-dashboard');
    }
  }, [navigate]);

  const adminFeatures = [
    {
      icon: Database,
      title: "Item Moderation",
      description: "Review and approve pending item submissions"
    },
    {
      icon: Users,
      title: "User Management", 
      description: "Monitor user activity and platform usage"
    },
    {
      icon: Eye,
      title: "Content Oversight",
      description: "Remove inappropriate or spam content"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center border-2 border-primary">
              <Shield size={48} className="text-primary" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">Admin Panel</h1>
          <p className="text-xl text-muted-foreground">
            Manage and oversee the ReWear platform
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {adminFeatures.map((feature, index) => (
            <Card key={index}>
              <CardHeader className="text-center">
                <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link to="/admin-login" className="inline-flex items-center gap-2">
              Access Admin Dashboard
              <ArrowRight size={20} />
            </Link>
          </Button>
          
          <Button variant="outline" asChild size="lg">
            <Link to="/">
              Back to Platform
            </Link>
          </Button>
        </div>

        {/* Info Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Admin access requires authentication. Contact system administrator for credentials.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
