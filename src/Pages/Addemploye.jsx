import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEmployees } from '../Context/Employecontext';

function AddEmployee() {
  const navigate = useNavigate();
  const { addEmployee } = useEmployees();

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    department: '',
    position: '',
    salary: '',
    hireDate: '',
    profileImage: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    // clear the error for this field when user types
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!form.firstName.trim()) newErrors.firstName = 'Required';
    if (!form.lastName.trim()) newErrors.lastName = 'Required';
    if (!form.email.trim()) newErrors.email = 'Required';
    if (!form.department.trim()) newErrors.department = 'Required';
    if (!form.position.trim()) newErrors.position = 'Required';
    if (!form.salary || form.salary <= 0) newErrors.salary = 'Must be > 0';
    if (!form.hireDate) newErrors.hireDate = 'Required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    addEmployee({
      ...form,
      salary: parseFloat(form.salary),
      profileImage: form.profileImage || 'https://i.pravatar.cc/150?img=0'
    });
    navigate('/dashboard');
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Add New Employee</h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label">First Name *</label>
            <input
              type="text"
              name="firstName"
              className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
              value={form.firstName}
              onChange={handleChange}
            />
            <div className="invalid-feedback">{errors.firstName}</div>
          </div>
          <div className="col-md-6 mb-3">
            <label className="form-label">Last Name *</label>
            <input
              type="text"
              name="lastName"
              className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
              value={form.lastName}
              onChange={handleChange}
            />
            <div className="invalid-feedback">{errors.lastName}</div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label">Email *</label>
            <input
              type="email"
              name="email"
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              value={form.email}
              onChange={handleChange}
            />
            <div className="invalid-feedback">{errors.email}</div>
          </div>
          <div className="col-md-6 mb-3">
            <label className="form-label">Phone</label>
            <input
              type="text"
              name="phone"
              className="form-control"
              value={form.phone}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 mb-3">
            <label className="form-label">Department *</label>
            <input
              type="text"
              name="department"
              className={`form-control ${errors.department ? 'is-invalid' : ''}`}
              value={form.department}
              onChange={handleChange}
            />
            <div className="invalid-feedback">{errors.department}</div>
          </div>
          <div className="col-md-4 mb-3">
            <label className="form-label">Position *</label>
            <input
              type="text"
              name="position"
              className={`form-control ${errors.position ? 'is-invalid' : ''}`}
              value={form.position}
              onChange={handleChange}
            />
            <div className="invalid-feedback">{errors.position}</div>
          </div>
          <div className="col-md-4 mb-3">
            <label className="form-label">Salary *</label>
            <input
              type="number"
              name="salary"
              className={`form-control ${errors.salary ? 'is-invalid' : ''}`}
              value={form.salary}
              onChange={handleChange}
            />
            <div className="invalid-feedback">{errors.salary}</div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label">Hire Date *</label>
            <input
              type="date"
              name="hireDate"
              className={`form-control ${errors.hireDate ? 'is-invalid' : ''}`}
              value={form.hireDate}
              onChange={handleChange}
            />
            <div className="invalid-feedback">{errors.hireDate}</div>
          </div>
          <div className="col-md-6 mb-3">
            <label className="form-label">Profile Image URL</label>
            <input
              type="text"
              name="profileImage"
              className="form-control"
              placeholder="https://..."
              value={form.profileImage}
              onChange={handleChange}
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Add Employee</button>
      </form>
    </div>
  );
}

export default AddEmployee;