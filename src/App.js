import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './Pages/HomePage';
import VehiclePage from './Pages/VehiclePage';
import CustomersPage from './Pages/CustomersPage';
import EmployeesPage from './Pages/EmployeesPage';


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/vehicle-inventory" element={<VehiclePage />} />
            <Route path="/customers" element={<CustomersPage />} />
            <Route path="/employees" element={<EmployeesPage />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
