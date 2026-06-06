import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-white mt-5" style={{ backgroundColor: '#000' }}>
      <div className="container py-4">
        <div className="row">
          <div className="col-md-6 mb-3 mb-md-0">
            <h5 className="text-uppercase">Employee Management System</h5>
            <p className="small text-white-50 mb-0">
              A simple and effective way to manage your workforce.
            </p>
          </div>
          <div className="col-md-3 mb-3 mb-md-0">
            <h6>Quick Links</h6>
            <ul className="list-unstyled small">
              <li><Link to="/" className="text-white text-decoration-none">Home</Link></li>
              <li><Link to="/contact" className="text-white text-decoration-none">Contact</Link></li>
              <li><Link to="/login" className="text-white text-decoration-none">Login</Link></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h6>Contact</h6>
            <ul className="list-unstyled small text-white-50">
              <li>support@ems.com</li>
              <li>+1 (234) 567-890</li>
            </ul>
          </div>
        </div>
        <hr className="border-secondary" />
        <div className="text-center small text-white-50">
          &copy; {currentYear} Employee Management System. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;