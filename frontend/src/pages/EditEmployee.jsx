import { useState } from "react";
import { updateEmployee } from "../api";
import '../PageContainer.css';
export default function EditEmployee() {
  const [employeeID, setEmployeeID] = useState(""); // renamed to match usage
  const [position, setPosition] = useState("");
  const [salary, setSalary] = useState("");
  const [message, setMessage] = useState("");

  const handleUpdate = async () => {
    const res = await updateEmployee(employeeID, { position, salary }); // now matches state name
    setMessage(res.message || "Employee updated successfully!");
  };

  return (
    <div className="home-container"> 
        <div className="bubble small"></div>
      <div className="bubble medium"></div>
      <div className="bubble large"></div>
      <div className="page-container">
      <h2>Update Employee</h2>
      <input
        placeholder="Employee ID"
        value={employeeID}
        onChange={(e) => setEmployeeID(e.target.value)}
      />
      <input
        placeholder="New Position"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
      />
      <input
        placeholder="New Salary"
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
      />
      <button onClick={handleUpdate}>Update</button>
      {message && <p>{message}</p>}
    </div>
    </div>
  );
}
