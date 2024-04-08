import React from "react";
import EmployeeList from "../components/EmployeeList";
import EmployeeSearch from "../components/EmployeeSearch";
import AddEmployeeForm from "../components/AddEmployeeForm";

function EmployeesPage({ employees, setEmployees, searchEmployees, setSearchEmployees, setShowActive, showActive}) {


    return (
        <div>
            <h1>Employees</h1>
            <AddEmployeeForm setEmployees={setEmployees} employees={employees} />
            <section>
                <EmployeeSearch 
                    setSearchEmployees={setSearchEmployees} 
                    SearchEmployees={searchEmployees} 
                    setShowActive={setShowActive}
                    showActive={showActive}
                />
            </section>
            <section>
                <EmployeeList employees={employees} setEmployees={setEmployees}/>
            </section>
        </div>
    )
}

export default EmployeesPage