import React, { useState } from "react";

function AddCustomerForm({ setCustomers, customers }) {

    const defaultForm = {
        first: "",
        last: "",
        address: "",
    }

    const [newCustomer, setNewCustomer] = useState(defaultForm)

    const handleChange = (e) => {
        setNewCustomer({
            ...newCustomer,
            [e.target.name]: e.target.value
        })
    }

    const handleAddCustomer = () => {
        console.log("customer added", newCustomer)

        fetch(`http://localhost:4000/customers`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newCustomer)
        })
        .then(r => r.json())
        .then(addedCustomer => {
            setCustomers([...customers, addedCustomer])
            setNewCustomer(defaultForm)
        })
        .catch(error => console.log(error))
    }

    return (
        <form className="add-customer-form">
            <section>
                <input placeholder="First Name" name="first" value={newCustomer.first} onChange={handleChange}></input>
                <input placeholder="Last Name" name="last" value={newCustomer.last} onChange={handleChange}></input>
                <input placeholder="Address" name="address" value={newCustomer.address} onChange={handleChange}></input>
                <button type="button" onClick={handleAddCustomer}>Add</button>
            </section>
        </form>
    )
}

export default AddCustomerForm