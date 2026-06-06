import { createContext, useContext, useState, useEffect } from 'react';
import sampleData from '../data/sampleData';

const EmployeeContext = createContext();
export const useEmployees = () => useContext(EmployeeContext);

export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);

  // Load from localStorage or use sample data on first load
  useEffect(() => {
    const stored = localStorage.getItem('ems_employees');
    if (stored) {
      setEmployees(JSON.parse(stored));
    } else {
      setEmployees(sampleData);
      localStorage.setItem('ems_employees', JSON.stringify(sampleData));
    }
  }, []);

  // Save to localStorage whenever employees change
  const saveToStorage = (newList) => {
    localStorage.setItem('ems_employees', JSON.stringify(newList));
    setEmployees(newList);
  };

  const addEmployee = (employee) => {
    const newEmployee = { ...employee, id: Date.now() };
    saveToStorage([...employees, newEmployee]);
  };

  const updateEmployee = (updatedEmployee) => {
    const updated = employees.map(emp =>
      emp.id === updatedEmployee.id ? updatedEmployee : emp
    );
    saveToStorage(updated);
  };

  const deleteEmployee = (id) => {
    saveToStorage(employees.filter(emp => emp.id !== id));
  };

  const getEmployeeById = (id) =>
    employees.find(emp => emp.id === parseInt(id));

  return (
    <EmployeeContext.Provider
      value={{ employees, addEmployee, updateEmployee, deleteEmployee, getEmployeeById }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};