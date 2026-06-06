import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/Authcontext';

function Navbar() {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
      <div className="container">
        <Link className="navbar-brand" to="/">EMS</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
            {isAuthenticated && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/dashboard">Dashboard</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/employees/add">Add Employee</Link>
                </li>
              </>
            )}
          </ul>
          <div className="d-flex align-items-center">
            {isAuthenticated ? (
              <>
                <span className="text-light me-3">Hi, {user?.username}</span>
                <button className="btn btn-outline-light btn-sm" onClick={handleLogout}>Logout</button>
              </>
            ) : (
              <Link className="btn btn-outline-light btn-sm" to="/login">Login</Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;