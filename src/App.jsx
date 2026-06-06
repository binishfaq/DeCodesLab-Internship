import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './Context/Authcontext';
import { EmployeeProvider } from './Context/Employecontext';
import Navbar from './Mycomponents/Navbar';
import Home from './Pages/Home';;
import Login from './pages/Login';
import Dashboard from './Pages/Dashboard';
import Contact from './Pages/Contact';
import AddEmployee from './Pages/Addemploye';
import EditEmployee from './Pages/Editemploye';
import ViewEmployee from './Pages/Viewemploye';
import ProtectedRoute from './components/ProtectedRoute';
import Footer from './Mycomponents/Footer';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <EmployeeProvider>
          <Navbar />
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />

            {/* Protected routes */}
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
            <Route path="/employees/add" element={
              <ProtectedRoute>
                <AddEmployee />
              </ProtectedRoute>
            } />
            <Route path="/employees/:id" element={
              <ProtectedRoute>
                <ViewEmployee />
              </ProtectedRoute>
            } />
            <Route path="/employees/:id/edit" element={
              <ProtectedRoute>
                <EditEmployee />
              </ProtectedRoute>
            } />
          </Routes>
          <Footer/>
        </EmployeeProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;