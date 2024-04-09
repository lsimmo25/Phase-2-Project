import React from "react";
import VehicleCard from "./VehicleCard.js"

function VehicleList({ vehicles, setVehicles }) {

    return (
        <table>
            <thead>
                <tr>
                    <th>Stock</th>
                    <th>VIN</th>
                    <th>Year</th>
                    <th>Make</th>
                    <th>Model</th>
                </tr>
            </thead>
            {vehicles.map(vehicle => (
                    <VehicleCard key={vehicle.id} {...vehicle} setVehicles={setVehicles}/>
                ))}
        </table>
    )
}

export default VehicleList