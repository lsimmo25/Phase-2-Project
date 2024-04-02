import React from "react";
import EmployeeCard from "./EmployeeCard.js"

function EmployeeList({ employees, setEmployees }) {

    return (
        <table>
            <thead>
                <tr>
                    <th>First</th>
                    <th>Last</th>
                    <th>Hire Date</th>
                    <th>Status</th>
                </tr>
            </thead>
            {employees.map(employee => (
                    <EmployeeCard key={employee.id} {...employee} setEmployees={setEmployees} employees={employees}/>
                ))}
        </table>
    )
}

export default EmployeeList