import React from "react";
import VehicleList from "../components/VehicleList";

function VehiclePage() {

    return (
        <div>
            <h1>Vehicle inventory</h1>
            <form className="add-vehicle-form">
                <section>
                    <input placeholder="Stock Number"></input>
                    <input placeholder="VIN"></input>
                    <button type="button">Decode</button>
                </section>
                <section>
                    <input placeholder="Year"></input>
                    <input placeholder="Make"></input>
                    <input placeholder="Model"></input>
                </section>
            </form>
            <section>
                {/* vehicle inventory to display here */}
            </section>
        </div>
    )
}

export default VehiclePage