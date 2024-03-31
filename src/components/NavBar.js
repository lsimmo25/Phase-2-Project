import React from "react";
import { Link } from 'react-router-dom'
import reactLogo from "../images/reactLogo.png"

function NavBar() {


    return(
        <nav>
            <img src={reactLogo} alt="React Logo" style={{width: "40px", height: "auto", paddingRight: "100%"}}/>
            <Link to="/">Home</Link>
            <Link to="/vehicle-inventory">Vehicles</Link>
            <Link to="/customers">Customers</Link>
            <Link to="/employees">Employees</Link>
        </nav>
    )
}

export default NavBar