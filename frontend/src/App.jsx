import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/SideBar";
import Home from "./pages/Home";
import AddEmployee from "./pages/AddEmployee";
import ViewEmployees from "./pages/ViewEmployee";
import EditEmployee from "./pages/EditEmployee";
import DeleteEmployee from "./pages/DeleteEmployee";
import "./index.css";


function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="app-container">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <div className={`main-content ${sidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddEmployee />} />
          <Route path="/view" element={<ViewEmployees />} />
          <Route path="/update" element={<EditEmployee />} />
          <Route path="/delete" element={<DeleteEmployee />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
