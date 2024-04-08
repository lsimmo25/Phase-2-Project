import React from "react";
import VehicleList from "../components/VehicleList";
import VehicleSearch from "../components/VehicleSearch";
import AddVehicleForm from "../components/AddVehicleForm";

function VehiclePage({ vehicles, setVehicles, searchVehicles, setSearchVehicles }) {

    return (
        <div>
            <h1>Vehicle Inventory</h1>
                <AddVehicleForm setVehicles={setVehicles} vehicles={vehicles}/>
            <section>
                <VehicleSearch vehicles={vehicles} setSearchVehicles={setSearchVehicles} searchVehicles={searchVehicles}/>
            </section>
            <section>
                <VehicleList vehicles={vehicles} setVehicles={setVehicles}/>
            </section>
        </div>
    )
}

export default VehiclePage