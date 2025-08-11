import { useState } from "react";
import { deleteEmployee } from "../api";
import '../PageContainer.css';
export default function DeleteEmployee() {
  const [id, setId] = useState("");
  const [message, setMessage] = useState("");

  const handleDelete = async () => {
    const res = await deleteEmployee(id);
    setMessage(res.message || "Employee deleted successfully!");
  };

  return (
    <div className="home-container">
        <div className="bubble small"></div>
      <div className="bubble medium"></div>
      <div className="bubble large"></div>
 <div className="page-container">
      <h2>Delete Employee</h2>
      <input placeholder="Employee ID" value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={handleDelete}>Delete</button>
      {message && <p>{message}</p>}
    </div></div>
  );
}
