import React from "react";
import { Link } from 'react-router-dom'

function NavBar() {


    return(
        <nav>
                    <Link to="/">Home</Link>
                    <Link to="/vehicle-inventory">Vehicles</Link>
                    <Link to="/customers">Customers</Link>
                    <Link to="/employees">Employees</Link>
        </nav>
    )
}

export default NavBar