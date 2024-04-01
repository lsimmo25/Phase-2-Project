import React, { useState } from "react";

function VehicleSearch({ searchVehicles, setSearchVehicles }) {


    return(
        <input 
            placeholder="Search: Stock, Vin, Year, Make or Model..." 
            onChange={(e) => setSearchVehicles(e.target.value)}
            type="text"
            value={searchVehicles}
            style={{marginTop: "25px", width: "50%", height: "30px"}}
        >
        </input>
    )
}

export default VehicleSearch