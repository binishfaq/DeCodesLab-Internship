import { Link } from 'react-router-dom';
import { useEmployees } from '../Context/Employecontext';

function Dashboard() {
  const { employees, deleteEmployee } = useEmployees();

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this employee?')) {
      deleteEmployee(id);
    }
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Employee Dashboard</h2>
        <Link to="/employees/add" className="btn btn-success">+ Add Employee</Link>
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Photo</th>
              <th>Name</th>
              <th>Email</th>
              <th>Department</th>
              <th>Position</th>
              <th>Salary</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp) => (
              <tr key={emp.id}>
                <td>{emp.id}</td>
                <td>
                  <img
                    src={emp.profileImage}
                    alt={emp.firstName}
                    width="40" height="40"
                    className="rounded-circle"
                  />
                </td>
                <td>{emp.firstName} {emp.lastName}</td>
                <td>{emp.email}</td>
                <td>{emp.department}</td>
                <td>{emp.position}</td>
                <td>${emp.salary.toLocaleString()}</td>
                <td>
                  <Link to={`/employees/${emp.id}`} className="btn btn-sm btn-info me-1">View</Link>
                  <Link to={`/employees/${emp.id}/edit`} className="btn btn-sm btn-warning me-1">Edit</Link>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDelete(emp.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;