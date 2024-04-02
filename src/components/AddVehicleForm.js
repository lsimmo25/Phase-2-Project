import React, { useState } from "react";

function AddVehicleForm({ setVehicles, vehicles }) {

    const defaultForm = {
        stock: "",
        vin: "",
        year: "",
        make: "",
        model: ""
    }

    const [newVehicle, setNewVehicle] = useState(defaultForm)

    const handleChange = (e) => {
        setNewVehicle({
            ...newVehicle,
            [e.target.name]: e.target.value
        })
    }

    const handleAddVehicle = () => {
        console.log("vehicle added", newVehicle)

        fetch(`http://localhost:4000/vehicles`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newVehicle)
        })
            .then(r => r.json())
            .then(addedVehicle => {
                setVehicles([...vehicles, addedVehicle])
                setNewVehicle(defaultForm)
            })
            .catch(error => console.log(error))
    }

    const decodeVin = () => {
        fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/decodevinvalues/${newVehicle.vin}*BA?format=json&modelyear=2011`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setNewVehicle({
                    ...newVehicle,
                    year: data.Results[0].ModelYear,
                    make: data.Results[0].Make,
                    model: data.Results[0].Model
                })
            })
            .catch(error => console.log(error))
    }


    return (
        <form className="add-vehicle-form">
            <section>
                <input placeholder="Stock Number" name="stock" value={newVehicle.stock} onChange={handleChange}></input>
                <input placeholder="VIN" name="vin" value={newVehicle.vin} onChange={handleChange}></input>
                <button type="button" style={{ marginRight: "10px" }} onClick={decodeVin}>Decode</button>
                <input placeholder="Year" name="year" value={newVehicle.year} onChange={handleChange}></input>
                <input placeholder="Make" name="make" value={newVehicle.make} onChange={handleChange}></input>
                <input placeholder="Model" name="model" value={newVehicle.model} onChange={handleChange}></input>
                <button type="button" onClick={handleAddVehicle}>Add</button>
            </section>
        </form>
    )
}

export default AddVehicleForm