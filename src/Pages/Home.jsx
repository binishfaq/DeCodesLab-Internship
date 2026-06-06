import { Link } from 'react-router-dom';
import { useAuth } from '../Context/Authcontext';  // adjust path if needed

function Home() {
  const { isAuthenticated } = useAuth();

  return (
    <>
      {/* Hero Section */}
      <div className="bg-primary text-white py-5">
        <div className="container text-center py-5">
          <h1 className="display-4 fw-bold">Employee Management System</h1>
          <p className="lead mb-4">
            Streamline your workforce – add, edit, view, and manage employees in one place.
          </p>
          {isAuthenticated ? (
            <Link to="/dashboard" className="btn btn-light btn-lg px-4 me-2">
              Go to Dashboard
            </Link>
          ) : (
            <Link to="/login" className="btn btn-light btn-lg px-4 me-2">
              Login to Continue
            </Link>
          )}
          <Link to="/contact" className="btn btn-outline-light btn-lg px-4">
            Contact Us
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="container my-5">
        <h2 className="text-center mb-4">Why Choose Our EMS?</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center">
                <i className="bi bi-people-fill display-4 text-primary mb-3"></i>
                <h5 className="card-title">Employee Directory</h5>
                <p className="card-text">
                  Maintain a complete list of employees with photos, roles, and contact details.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center">
                <i className="bi bi-pencil-square display-4 text-success mb-3"></i>
                <h5 className="card-title">Easy CRUD Operations</h5>
                <p className="card-text">
                  Add, edit, view, or delete employee records with a simple, intuitive interface.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center">
                <i className="bi bi-shield-lock display-4 text-warning mb-3"></i>
                <h5 className="card-title">Secure Access</h5>
                <p className="card-text">
                  Admin‑only authentication keeps your employee data safe and private.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats (optional) */}
      <div className="bg-light py-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-4 mb-3">
              <h3 className="display-5 fw-bold text-primary">100%</h3>
              <p className="lead">Free & Open Source</p>
            </div>
            <div className="col-md-4 mb-3">
              <h3 className="display-5 fw-bold text-primary">Real‑time</h3>
              <p className="lead">Instant Updates</p>
            </div>
            <div className="col-md-4 mb-3">
              <h3 className="display-5 fw-bold text-primary">Responsive</h3>
              <p className="lead">Works on All Devices</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container my-5 text-center">
        <h2>Ready to get started?</h2>
        <p className="lead mb-4">
          Manage your employees effortlessly with our simple yet powerful system.
        </p>
        {isAuthenticated ? (
          <Link to="/dashboard" className="btn btn-primary btn-lg">
            Open Dashboard
          </Link>
        ) : (
          <Link to="/login" className="btn btn-primary btn-lg">
            Sign In Now
          </Link>
        )}
      </div>
    </>
  );
}

export default Home;