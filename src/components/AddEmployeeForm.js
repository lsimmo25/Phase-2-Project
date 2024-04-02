import React, { useState } from "react";

function AddEmployeeForm({ setEmployees, employees }) {

    const defaultForm = {
        first: "",
        last: "",
        hireDate: "",
        status: ""
    }

    const [newEmployee, setNewEmployee] = useState(defaultForm)

    const handleChange = (e) => {
        setNewEmployee({
            ...newEmployee,
            [e.target.name]: e.target.value
        })
    }

    const handleAddEmployee = () => {
        console.log("employee added", newEmployee)

        fetch(`http://localhost:4000/employees`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEmployee)
        })
        .then(r => r.json())
        .then(addedEmployee => {
            setEmployees([...employees, addedEmployee])
            setNewEmployee(defaultForm)
        })
        .catch(error => console.log(error))
    }

    return (
        <form className="add-employee-form">
            <section>
                <input placeholder="First Name" name="first" value={newEmployee.first} onChange={handleChange}></input>
                <input placeholder="Last Name" name="last" value={newEmployee.last} onChange={handleChange}></input>
                <input placeholder="Address" name="address" value={newEmployee.address} onChange={handleChange}></input>
                <button type="button" onClick={handleAddEmployee}>Add</button>
            </section>
        </form>
    )
}

export default AddEmployeeForm