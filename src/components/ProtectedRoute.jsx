import { Navigate } from 'react-router-dom';
import { useAuth } from '../Context/Authcontext';   // adjust path if needed

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <div className="text-center mt-5">Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;