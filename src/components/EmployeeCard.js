import React, { useState } from "react";

function EmployeeCard({ id, setEmployees, first, last, hireDate, active, employees }) {

    const [isActive, setIsActive] = useState(true)

    const handleDelete = () => {
        fetch(`http://localhost:4000/employees/${id}`, {
            method: "DELETE"
        })
        .then(() => {
            setEmployees(prevEmployees => prevEmployees.filter(prevEmployee => prevEmployee.id !== id))
        })
    }

    const handleStatus = () => {
        fetch(`http://localhost:4000/employees/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ active: !isActive})
        })
        .then(r => r.json())
        .then(updatedEmployee => {
            setIsActive(updatedEmployee.active)
            setEmployees(prevEmployees => prevEmployees.map(employee => {
                if (employee.id === updatedEmployee.id) {
                    return {...employee, active: updatedEmployee.active}
                }
                return employee
            }))
        })   
        .catch(error => console.log(error))
    }

    return (
        <tbody>
            <tr>
                <td><button type="button" style={{float: "left"}} onClick={handleDelete}>X</button>{first}</td>
                <td>{last}</td>
                <td>{hireDate}</td>
                <td><button type="button" onClick={handleStatus}>{active ? "Active" : "Inactive"}</button></td>
            </tr>   
        </tbody>

    )
}

export default EmployeeCard