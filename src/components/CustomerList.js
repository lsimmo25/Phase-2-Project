import React from "react";
import CustomerCard from "./CustomerCard.js"

function CustomerList({ customers, setCustomers }) {

    return (
        <table>
            <thead>
                <tr>
                    <th>First</th>
                    <th>Last</th>
                    <th>Address</th>
                    <th>Status</th>
                </tr>
            </thead>
            {customers.map(customer => (
                    <CustomerCard key={customer.id} {...customer} setCustomers={setCustomers} customers={customers}/>
                ))}
        </table>
    )
}

export default CustomerList