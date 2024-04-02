import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './Pages/HomePage';
import VehiclePage from './Pages/VehiclePage';
import CustomersPage from './Pages/CustomersPage';
import EmployeesPage from './Pages/EmployeesPage';


function App() {

  const [vehicles, setVehicles] = useState([])
  const [searchVehicles, setSearchVehicles] = useState("")
  const [searchCustomers, setSearchCustomers] = useState("")
  const [customers, setCustomers] = useState([])
  const [employees, setEmployees] = useState([])
  const [searchEmployees, setSearchEmployees] = useState("")

  useEffect(() => {
    fetch(`http://localhost:4000/vehicles`)
      .then(r => r.json())
      .then(retrievedVehicles => setVehicles(retrievedVehicles))
  }, [])

  useEffect(() => {
    fetch(`http://localhost:4000/customers`)
      .then(r => r.json())
      .then(retrievedCustomers => setCustomers(retrievedCustomers))
  }, [])

  useEffect(() => {
    fetch(`http://localhost:4000/employees`)
      .then(r => r.json())
      .then(retrievedEmployees => setEmployees(retrievedEmployees))
  }, [])

  const searchVehicleResult = vehicles.filter(vehicle =>
    vehicle.stock.toLowerCase().includes(searchVehicles.toLowerCase()) ||
    vehicle.vin.toLowerCase().includes(searchVehicles.toLowerCase()) ||
    vehicle.year.toLowerCase().includes(searchVehicles.toLowerCase()) ||
    vehicle.make.toLowerCase().includes(searchVehicles.toLowerCase()) ||
    vehicle.model.toLowerCase().includes(searchVehicles.toLowerCase())
  )

  const searchCustomerResult = customers.filter(customer =>
    customer.first.toLowerCase().includes(searchCustomers.toLowerCase()) ||
    customer.last.toLowerCase().includes(searchCustomers.toLowerCase()) ||
    customer.address.toLowerCase().includes(searchCustomers.toLowerCase())
  )

  const searchEmployeeResult = employees.filter(employee =>
    employee.first.toLowerCase().includes(searchEmployees.toLowerCase()) ||
    employee.last.toLowerCase().includes(searchEmployees.toLowerCase()) ||
    employee.hireDate.toLowerCase().includes(searchEmployees.toLowerCase())
  )

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={
            <HomePage
              vehicles={vehicles}
              customers={customers}
              employees={employees}
            />
          }
          />
          <Route path="/vehicle-inventory" element={
            <VehiclePage
              vehicles={searchVehicleResult}
              setVehicles={setVehicles}
              searchVehicles={searchVehicles}
              setSearchVehicles={setSearchVehicles}
            />
          }
          />
          <Route path="/customers" element={
            <CustomersPage
              customers={searchCustomerResult}
              setCustomers={setCustomers}
              searchCustomers={searchCustomers}
              setSearchCustomers={setSearchCustomers}
            />
          }
          />
          <Route path="/employees" element={
            <EmployeesPage
              employees={searchEmployeeResult}
              setEmployees={setEmployees}
              searchEmployees={searchEmployees}
              setSearchEmployees={setSearchEmployees}
            />
          }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
