import { useParams, Link } from 'react-router-dom';
import { useEmployees } from '../Context/Employecontext';

function ViewEmployee() {
  const { id } = useParams();
  const { getEmployeeById } = useEmployees();
  const employee = getEmployeeById(id);

  if (!employee) {
    return (
      <div className="container mt-4">
        <div className="alert alert-danger">Employee not found.</div>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h3>{employee.firstName} {employee.lastName}</h3>
          <Link to="/dashboard" className="btn btn-secondary">Back to List</Link>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-4 text-center">
              <img
                src={employee.profileImage}
                alt={employee.firstName}
                className="img-fluid rounded-circle mb-3"
                style={{ width: '150px', height: '150px' }}
              />
            </div>
            <div className="col-md-8">
              <table className="table table-borderless">
                <tbody>
                  <tr><th>Email:</th><td>{employee.email}</td></tr>
                  <tr><th>Phone:</th><td>{employee.phone || 'N/A'}</td></tr>
                  <tr><th>Department:</th><td>{employee.department}</td></tr>
                  <tr><th>Position:</th><td>{employee.position}</td></tr>
                  <tr><th>Salary:</th><td>${employee.salary.toLocaleString()}</td></tr>
                  <tr><th>Hire Date:</th><td>{employee.hireDate}</td></tr>
                </tbody>
              </table>
              <Link to={`/employees/${employee.id}/edit`} className="btn btn-warning">Edit</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewEmployee;