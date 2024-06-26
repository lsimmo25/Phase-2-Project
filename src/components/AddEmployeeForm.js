import React, { useState } from "react";

function AddEmployeeForm({ setEmployees, employees }) {

    const defaultForm = {
        first: "",
        last: "",
        hireDate: "",
        active: true
    }

    const [newEmployee, setNewEmployee] = useState(defaultForm)

    const handleChange = (e) => {
        setNewEmployee({
            ...newEmployee,
            [e.target.name]: e.target.value
        })
    }

    const handleAddEmployee = (e) => {
        e.preventDefault()

        fetch(`http://localhost:4000/employees`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({...newEmployee, active: true})
        })
        .then(r => r.json())
        .then(addedEmployee => {
            setEmployees([...employees, addedEmployee])
            setNewEmployee(defaultForm)
        })
        .catch(error => console.log(error))
    }

    return (
        <form onSubmit={handleAddEmployee}>
                <input placeholder="First Name" name="first" value={newEmployee.first} onChange={handleChange}></input>
                <input placeholder="Last Name" name="last" value={newEmployee.last} onChange={handleChange}></input>
                <input placeholder="Hire Date" name="hireDate" value={newEmployee.hireDate} onChange={handleChange}></input>
                <button type="submit">Add</button>
        </form>
    )
}

export default AddEmployeeForm