const { Router } = require("express");
const Employee = require("../models/Employee");


// GET all employees
exports.getEmployees = async (req, res) => {

  try {
    const employees = await Employee.find();
    res.json(employees);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
  
};

// ADD new employee
exports.addEmployee = async (req, res) => {
  try {
    const { employeeID,name, position, salary } = req.body;
    const newEmployee = new Employee({ employeeID,name, position, salary });
    await newEmployee.save();
    res.json({ message: "Employee added successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE employee
exports.updateEmployee = async (req, res) => {
  try {
    const { id } = req.params; // This will be your employeeID from the URL
    const updated = await Employee.findOneAndUpdate(
      { employeeID: id }, // Match using custom employeeID
      req.body,
      { new: true }
    );

    if (!updated) return res.status(404).json({ message: "Employee not found" });

    res.json({ message: "Employee updated successfully", updated });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//delete

exports.deleteEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Employee.findOneAndDelete({ employeeID: id });
    if (!deleted) return res.status(404).json({ message: "Employee not found" });
    res.json({ message: "Employee deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
