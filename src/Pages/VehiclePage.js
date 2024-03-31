import React from "react";
import VehicleList from "../components/VehicleList";
import VehicleSearch from "../components/VehicleSearch";

function VehiclePage() {

    return (
        <div>
            <h1>Vehicle Inventory</h1>
            <form className="add-vehicle-form">
                <section>
                    <input placeholder="Stock Number"></input>
                    <input placeholder="VIN"></input>
                    <input placeholder="Year"></input>
                    <input placeholder="Make"></input>
                    <input placeholder="Model"></input>
                    <button type="submit">Add</button>
                </section>
            </form>
            <section>
                <VehicleSearch />
            </section>
            <section>
                <VehicleList />
            </section>
        </div>
    )
}

export default VehiclePage