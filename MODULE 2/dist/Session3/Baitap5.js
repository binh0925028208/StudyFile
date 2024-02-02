"use strict";
class Employee {
    constructor(id, name, age, gen, rate) {
        this.employeeId = id;
        this.employeeName = name;
        this.age = age;
        this.gen = gen;
        this.rate = rate;
        this.salary = 0;
    }
    inputData(id, name, age, gen, rate) {
        this.employeeId = id;
        this.employeeName = name;
        this.age = age;
        this.gen = gen;
        this.rate = rate;
    }
    displayData() {
        return `
          Mã nhân viên: ${this.employeeId}
          Tên nhân viên: ${this.employeeName}
          Tuổi: ${this.age}
          Giới tính: ${this.gen}
          Hệ số lương: ${this.rate}
          Lương: ${this.salary}
      `;
    }
    calSalary() {
        this.salary = this.rate * 1300000;
    }
}
const employees = [];
function onAddEmployee() {
    const id = Number(prompt("Nhập mã nhân viên:"));
    const name = String(prompt("Nhập tên nhân viên:"));
    const age = Number(prompt("Nhập tuổi:"));
    const gen = Number(prompt("Nhập giới tính:"));
    const rate = Number(prompt("Nhập hệ số lương:"));
    const newEmployee = new Employee(id, name, age, gen, rate);
    newEmployee.inputData(id, name, age, gen, rate);
    newEmployee.calSalary();
    employees.push(newEmployee);
}
function onDisplayEmployees() {
    let displayInfo = "Thông tin của các nhân viên:";
    for (const emp of employees) {
        displayInfo += emp.displayData();
    }
    let displayList = document.getElementById("employeeData");
    displayList.innerText = displayInfo;
}
