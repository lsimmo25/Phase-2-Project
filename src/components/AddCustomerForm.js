import React, { useState } from "react";

function AddCustomerForm({ setCustomers, customers }) {

    const defaultForm = {
        first: "",
        last: "",
        address: "",
        status: true
    }

    const [newCustomer, setNewCustomer] = useState(defaultForm)

    const handleChange = (e) => {
        setNewCustomer({
            ...newCustomer,
            [e.target.name]: e.target.value
        })
    }

    const handleAddCustomer = (e) => {

        e.preventDefault()

        fetch(`http://localhost:4000/customers`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({...newCustomer, status: true})
        })
        .then(r => r.json())
        .then(addedCustomer => {
            setCustomers([...customers, addedCustomer])
            setNewCustomer(defaultForm)
        })
        .catch(error => console.log(error))
    }

    return (
        <form onSubmit={handleAddCustomer}>
            <section>
                <input placeholder="First Name" name="first" value={newCustomer.first} onChange={handleChange}></input>
                <input placeholder="Last Name" name="last" value={newCustomer.last} onChange={handleChange}></input>
                <input placeholder="Address" name="address" value={newCustomer.address} onChange={handleChange}></input>
                <button type="submit">Add</button>
            </section>
        </form>
    )
}

export default AddCustomerForm