import React, { useState } from "react";

function EmployeeSearch({ searchEmployees, setSearchEmployees }) {

    return(
        <>
            <input 
                placeholder="First Name, Last Name, Address..." 
                onChange={(e) => setSearchEmployees(e.target.value)}
                type="text"
                value={searchEmployees}
                style={{marginTop: "25px", width: "50%", height: "30px"}}
            >
            </input>
            <button type="button">Show Active</button>
        </>
    )
}

export default EmployeeSearch