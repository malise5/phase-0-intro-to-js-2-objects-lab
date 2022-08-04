// Write your solution in this file!
const employee = {};
function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee ={...employee,"streetAddress": "11 Broadway"};
    return newEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee.name = "Sam";
    employee.streetAddress = "12 Broadway";
    return employee;
}
function  deleteFromEmployeeByKey(employee, key){
    const newEmployee2 ={...employee};
    delete newEmployee2[key];
    return newEmployee2;
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}
