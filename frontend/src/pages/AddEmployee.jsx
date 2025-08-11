import { useState } from "react";
import { addEmployee } from "../api";
import '../PageContainer.css';

export default function AddEmployee() {
  const [employeeID, setEmployeeID] = useState("");
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [salary, setSalary] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await addEmployee({employeeID, name, position, salary });
    setMessage(res.message || "Employee added successfully!");
    setEmployeeID("");
    setName("");
    setPosition("");
    setSalary("");
  };
 

  return (
   
        <div className="home-container">
            <div className="bubble small"></div>
      <div className="bubble medium"></div>
      <div className="bubble large"></div>
       <div className="page-container">
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
          
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
        <input value={position} onChange={(e) => setPosition(e.target.value)} placeholder="Position" required />
        <input value={salary} onChange={(e) => setSalary(e.target.value)} placeholder="Salary" required />
        <button type="submit">Add</button>
      </form>
      {message && <p>{message}</p>}
    </div>
    </div>
  );
}
