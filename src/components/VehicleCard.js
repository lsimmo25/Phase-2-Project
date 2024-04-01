import React from "react";

function VehicleCard({ id, stock, vin, year, make, model }) {

    return (
        <tbody>
            <tr>
                <td>{stock}</td>
                <td>{vin}</td>
                <td>{year}</td>
                <td>{make}</td>
                <td>{model}</td>
                <td><button type="button">X</button></td>
            </tr>
           
        </tbody>

    )
}

export default VehicleCard