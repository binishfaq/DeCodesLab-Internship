import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div className="container my-5">
      <h2 className="mb-4">Contact Us</h2>
      <div className="row">
        {/* Contact Information */}
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title">Get in Touch</h5>
              <p className="card-text">
                Have questions or need support? We’re here to help.
              </p>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <i className="bi bi-envelope-fill me-2 text-primary"></i>
                  <strong>Email:</strong> support@ems.com
                </li>
                <li className="mb-2">
                  <i className="bi bi-telephone-fill me-2 text-primary"></i>
                  <strong>Phone:</strong> +1 (234) 567-890
                </li>
                <li className="mb-2">
                  <i className="bi bi-geo-alt-fill me-2 text-primary"></i>
                  <strong>Address:</strong> 123 Business Ave, Suite 100<br />
                  <span className="ms-4">Tech City, TC 12345</span>
                </li>
                <li className="mb-2">
                  <i className="bi bi-clock-fill me-2 text-primary"></i>
                  <strong>Hours:</strong> Mon – Fri, 9 AM – 5 PM
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Simple Contact Form (static) */}
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title">Send a Message</h5>
              <form>
                <div className="mb-3">
                  <label className="form-label">Your Name</label>
                  <input type="text" className="form-control" placeholder="Name" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Your Email</label>
                  <input type="email" className="form-control" placeholder="Gmail.com" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea className="form-control" rows="4" placeholder="How can we help?"></textarea>
                </div>
                <button type="submit" className="btn btn-primary" disabled>
                  Send Message (frontend only)
                </button>
              </form>
              <small className="text-muted mt-2 d-block">
                This form is for demonstration only – no backend is connected.
              </small>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-4">
        <Link to="/" className="btn btn-outline-secondary">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}

export default Contact;