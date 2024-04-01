import React from "react";
import { Link } from "react-router-dom";

function Home() {



    return(
        <div style={{textAlign: "center"}}>
            <header>
                <h1>Dealership Statistics</h1>
            </header>
            <section>
                <h2>Total Vehicles: {/*display total number of vehicles here*/}</h2>
            </section>
            <section>
                <h2>Active Customers: {/*display total number of active customers here*/}</h2>
            </section>
            <section>
                <h2>Active Employees: {/*display total number of active Employees here*/}</h2>
            </section>
        </div>
    )
}

export default Home


