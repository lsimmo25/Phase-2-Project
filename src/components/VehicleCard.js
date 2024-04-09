import React from "react";

function VehicleCard({ id, stock, vin, year, make, model, setVehicles }) {

    const handleDelete = () => {
        fetch(`http://localhost:4000/vehicles/${id}`, {
            method: "DELETE"
        })
        .then(() => {
            setVehicles(prevVehicles => prevVehicles.filter(prevVehicle => prevVehicle.id !== id))
        })
    }

    return (
        <tbody>
            <tr>
                <td><button type="button" style={{float: "left"}} onClick={handleDelete}>X</button>{stock}</td>
                <td>{vin}</td>
                <td>{year}</td>
                <td>{make}</td>
                <td>{model}</td>
            </tr>
           
        </tbody>

    )
}

export default VehicleCard