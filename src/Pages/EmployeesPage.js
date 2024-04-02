import React, { useState } from "react";
import EmployeeList from "../components/EmployeeList";
import EmployeeSearch from "../components/EmployeeSearch";
import AddEmployeeForm from "../components/AddEmployeeForm";

function EmployeesPage({ employees, setEmployees, searchEmployees, setSearchEmployees}) {

    return (
        <div>
            <h1>Employees</h1>
            <AddEmployeeForm setEmployees={setEmployees} employees={employees} />
            <section>
                <EmployeeSearch employees={employees} setSearchEmployees={setSearchEmployees} searchEmployees={searchEmployees} />
            </section>
            <section>
                <EmployeeList employees={employees} setEmployees={setEmployees} />
            </section>
        </div>
    )
}

export default EmployeesPage