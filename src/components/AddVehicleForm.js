import React, { useState } from "react";

function AddVehicleForm({ setVehicles }) {

    const [newVehicle, setNewVehicle] = useState({
        stock: "",
        vin: "",
        year: "",
        make: "",
        model: ""
    })

    const handleChange = (e) => {
        setNewVehicle({
            ...newVehicle,
            [e.target.name]: e.target.value
        })
    }

    const handleAddVehicle = () => {
        console.log("vehicle added", newVehicle)
    }

    return (
        <form className="add-vehicle-form">
            <section>
                <input placeholder="Stock Number" name="stock" value={newVehicle.stock} onChange={handleChange}></input>
                <input placeholder="VIN" name="vin" value={newVehicle.vin} onChange={handleChange}></input>
                <input placeholder="Year" name="year" value={newVehicle.year} onChange={handleChange}></input>
                <input placeholder="Make" name="make" value={newVehicle.make} onChange={handleChange}></input>
                <input placeholder="Model" name="model" value={newVehicle.model} onChange={handleChange}></input>
                <button type="button" onClick={handleAddVehicle}>Add</button>
            </section>
        </form>
    )
}

export default AddVehicleForm