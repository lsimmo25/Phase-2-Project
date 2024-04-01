import React from "react";
import { Link } from "react-router-dom";

function Home({ vehicles, customers, employees }) {

    const totalVehicles = vehicles.length
    const totalCustomers = customers.length
    const totalEmployees = employees.length

    return(
        <div style={{textAlign: "center"}}>
            <header>
                <h1>Dealership Statistics</h1>
            </header>
            <section>
                <h2>Total Vehicles: <Link to="/vehicle-inventory">{totalVehicles}</Link></h2>
            </section>
            <section>
                <h2>Active Customers: <Link to="/customers">{totalCustomers}</Link></h2>
            </section>
            <section>
                <h2>Active Employees: <Link to="/employees">{totalEmployees}</Link></h2>
            </section>
        </div>
    )
}

export default Home


