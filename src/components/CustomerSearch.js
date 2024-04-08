import React from "react";

function CustomerSearch({ searchCustomers, setSearchCustomers }) {

    return(
        <input 
            placeholder="First Name, Last Name, Address..." 
            onChange={(e) => setSearchCustomers(e.target.value)}
            type="text"
            value={searchCustomers}
            style={{marginTop: "25px", width: "50%", height: "30px"}}
        >
        </input>
    )
}

export default CustomerSearch