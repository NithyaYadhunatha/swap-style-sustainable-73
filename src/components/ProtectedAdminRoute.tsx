
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface ProtectedAdminRouteProps {
  children: React.ReactNode;
}

const ProtectedAdminRoute = ({ children }: ProtectedAdminRouteProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    const adminAuth = localStorage.getItem('adminAuth');
    if (!adminAuth) {
      navigate('/admin-login');
    }
  }, [navigate]);

  const adminAuth = localStorage.getItem('adminAuth');
  
  if (!adminAuth) {
    return null; // or a loading spinner
  }

  return <>{children}</>;
};

export default ProtectedAdminRoute;
