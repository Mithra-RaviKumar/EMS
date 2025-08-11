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
    const { name, position, salary } = req.body;

    
    const employees = await Employee.find({}, { employeeID: 1, _id: 0 }).sort({ employeeID: 1 });
    const usedIDs = employees.map(emp => Number(emp.employeeID));

    
    function findSmallestMissing(arr) {
      let smallest = 1;
      for (const num of arr) {
        if (num === smallest) smallest++;
        else if (num > smallest) break;
      }
      return smallest;
    }

    const newEmployeeID = findSmallestMissing(usedIDs);

    
    const newEmployee = new Employee({
      employeeID: newEmployeeID.toString(), 
      name,
      position,
      salary
    });

    await newEmployee.save();
    res.json({ message: "Employee added successfully", employeeID: newEmployeeID });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// UPDATE employee
exports.updateEmployee = async (req, res) => {
  try {
    const { id } = req.params; 
    const updated = await Employee.findOneAndUpdate(
      { employeeID: id }, 
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
