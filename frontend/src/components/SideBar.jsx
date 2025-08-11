import { Link } from "react-router-dom";

export default function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isOpen ? "←" : "→"}
      </button>
      <h2>EMS</h2>
      {isOpen && (
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/add">Add Employee</Link></li>
          <li><Link to="/view">View Employees</Link></li>
          <li><Link to="/update">Edit Employee</Link></li>
          <li><Link to="/delete">Delete Employee</Link></li>
        </ul>
      )}
    </div>
  );
}
