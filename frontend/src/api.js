const API_BASE = "https://ems-backend-zz5h.onrender.com/api/employees";

export async function getEmployees() {
  const res = await fetch(API_BASE);
  return res.json();
}

export async function addEmployee(employee) {
  const res = await fetch(API_BASE, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(employee),
  });
  return res.json();
}

export async function updateEmployee(id, updatedData) {
  const res = await fetch(`${API_BASE}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedData),
  });
  return res.json();
}

export async function deleteEmployee(id) {
  const res = await fetch(`${API_BASE}/${id}`, { method: "DELETE" });
  return res.json();
}
