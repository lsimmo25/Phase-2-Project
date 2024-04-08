import React from "react";

function EmployeeSearch({ searchEmployees, setSearchEmployees, setShowActive, showActive }) {

    const handleShowActiveClick = () => {
        setShowActive(prevState => !prevState)
    }

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
            <button type="button" onClick={handleShowActiveClick}>{showActive ? "Show All" : "Show Active"}</button>
        </>
    )
}

export default EmployeeSearch