import React, { useState } from "react";
import CustomerList from "../components/CustomerList";
import CustomerSearch from "../components/CustomerSearch";
import AddCustomerForm from "../components/AddCustomerForm";

function CustomerPage({ customers, setCustomers, searchCustomers, setSearchCustomers }) {

    return (
        <div>
            <h1>Customers</h1>
                <AddCustomerForm setCustomers={setCustomers} customers={customers}/>
            <section>
                <CustomerSearch customers={customers} setSearchCustomers={setSearchCustomers} searchCustomers={searchCustomers}/>
            </section>
            <section>
                <CustomerList customers={customers} setCustomers={setCustomers}/>
            </section>
        </div>
    )
}

export default CustomerPage