"use strict";
class Students {
    constructor(id, name, age, address, phone) {
        this._id = id;
        this._name = name;
        this._age = age;
        this._address = address;
        this._phone = phone;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value;
    }
    get address() {
        return this._address;
    }
    set address(value) {
        this._address = value;
    }
    get phone() {
        return this._phone;
    }
    set phone(value) {
        this._phone = value;
    }
    inputData() {
        this._id = Number(prompt("Enter id: "));
        this._name = String(prompt("Enter name: "));
        this._age = Number(prompt("Enter age: "));
        this._address = String(prompt("Enter address: "));
        this._phone = String(prompt("Enter phone: "));
    }
    displayData() {
        console.log(`Id: ${this._id}, Name: ${this._name}, Age: ${this._age}, Address: ${this._address}, Phone: ${this._phone}`);
    }
}
class StudentsManager {
    constructor() {
        this.studentss = [];
    }
    createStudents() {
        let id = Number(prompt("Enter id: "));
        let name = String(prompt("Enter name: "));
        let age = Number(prompt("Enter age: "));
        let address = String(prompt("Enter address: "));
        let phone = String(prompt("Enter phone: "));
        let students = new Students(id, name, age, address, phone);
        this.studentss.push(students);
    }
    updateStudents(id) {
        let name = String(prompt("Enter name: "));
        let age = Number(prompt("Enter age: "));
        let address = String(prompt("Enter address: "));
        let phone = String(prompt("Enter phone: "));
        let students = new Students(id, name, age, address, phone);
        for (let i = 0; i < this.studentss.length; i++) {
            if (this.studentss[i].id === id) {
                this.studentss[i] = students;
                break;
            }
        }
    }
    deleteStudents(id) {
        for (let i = 0; i < this.studentss.length; i++) {
            if (this.studentss[i].id === id) {
                this.studentss.splice(i, 1);
                break;
            }
        }
    }
    displayAllStudentss() {
        for (let i = 0; i < this.studentss.length; i++) {
            this.studentss[i].displayData();
        }
    }
}
let studentsManager = new StudentsManager();
let option;
do {
    console.log("1. Create students");
    console.log("2. Update students");
    console.log("3. Delete students");
    console.log("4. Display all studentss");
    console.log("5. Exit");
    option = Number(prompt("Enter your option: "));
    switch (option) {
        case 1:
            studentsManager.createStudents();
            break;
        case 2:
            let id = Number(prompt("Enter id: "));
            studentsManager.updateStudents(id);
            break;
        case 3:
            id = Number(prompt("Enter id: "));
            studentsManager.deleteStudents(id);
            break;
        case 4:
            studentsManager.displayAllStudentss();
            break;
        case 5:
            break;
        default:
            console.log("Invalid option");
    }
} while (option !== 5);
