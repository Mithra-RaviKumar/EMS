import { useEffect, useState } from "react";
import { getEmployees } from "../api";
import '../PageContainer.css';
export default function ViewEmployee() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getEmployees().then(data => setEmployees(data));
  }, []);

  return (
    <div className="home-container">
        <div className="bubble small"></div>
      <div className="bubble medium"></div>
      <div className="bubble large"></div>
<div className="page-container">
      <h2>All Employees</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Position</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(emp => (
            <tr >
              <td>{emp.employeeID}</td>
              <td>{emp.name}</td>
              <td>{emp.position}</td>
              <td>{emp.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div></div>
  );
}
