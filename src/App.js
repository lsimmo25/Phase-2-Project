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

  useEffect(() => {
    fetch(`http://localhost:4000/vehicles`)
    .then(r => r.json())
    .then(retrievedVehicles => setVehicles(retrievedVehicles))
  }, [])

  return (
    <Router>
      <div className="App">
        <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/vehicle-inventory" element={<VehiclePage vehicles={vehicles} setVehicles={setVehicles}/>} />
            <Route path="/customers" element={<CustomersPage />} />
            <Route path="/employees" element={<EmployeesPage />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
