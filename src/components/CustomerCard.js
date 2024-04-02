import React, { useState } from "react";

function CustomerCard({ id, first, last, address, setCustomers, status }) {

    const [isActive, setIsActive] = useState(true)

    const handleDelete = () => {
        fetch(`http://localhost:4000/customers/${id}`, {
            method: "DELETE"
        })
        .then(() => {
            setCustomers(prevCustomers => prevCustomers.filter(prevCustomer => prevCustomer.id !== id))
        })
    }

    const handleStatus = () => {
        fetch(`http://localhost:4000/customers/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ status: !isActive})
        })
        .then(r => r.json())
        .then(updatedCustomer => {
            setIsActive(updatedCustomer.active)
            setCustomers(prevCustomers => prevCustomers.map(customer => {
                if (customer.id === updatedCustomer.id) {
                    return {...customer, status: updatedCustomer.status}
                }
                return customer
            }))
        })   
        .catch(error => console.log(error))
    }

    return (
        <tbody>
            <tr>
                <td><button type="button" style={{float: "left"}} onClick={handleDelete}>X</button>{first}</td>
                <td>{last}</td>
                <td>{address}</td>
                <td><button type="button" onClick={handleStatus}>{status ? "Active" : "Inactive"}</button></td>
            </tr>   
        </tbody>

    )
}

export default CustomerCard