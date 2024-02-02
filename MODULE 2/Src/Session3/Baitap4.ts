class Student {
  private _id: number;
  private _name: string;
  private _age: number;
  private _address: string;
  private _phone: string;

  constructor(
    id: number,
    name: string,
    age: number,
    address: string,
    phone: string
  ) {
    this._id = id;
    this._name = name;
    this._age = age;
    this._address = address;
    this._phone = phone;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    this._age = value;
  }

  get address(): string {
    return this._address;
  }

  set address(value: string) {
    this._address = value;
  }

  get phone(): string {
    return this._phone;
  }

  set phone(value: string) {
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
    console.log(
      `Id: ${this._id}, Name: ${this._name}, Age: ${this._age}, Address: ${this._address}, Phone: ${this._phone}`
    );
  }
}

class StudentManager {
  private students: Student[] = [];

  createStudent() {
    let id = Number(prompt("Enter id: "));
    let name = String(prompt("Enter name: "));
    let age = Number(prompt("Enter age: "));
    let address = String(prompt("Enter address: "));
    let phone = String(prompt("Enter phone: "));
    let student = new Student(id, name, age, address, phone);
    this.students.push(student);
  }

  updateStudent(id: number) {
    let name = String(prompt("Enter name: "));
    let age = Number(prompt("Enter age: "));
    let address = String(prompt("Enter address: "));
    let phone = String(prompt("Enter phone: "));
    let student = new Student(id, name, age, address, phone);
    for (let i = 0; i < this.students.length; i++) {
      if (this.students[i].id === id) {
        this.students[i] = student;
        break;
      }
    }
  }

  deleteStudent(id: number) {
    for (let i = 0; i < this.students.length; i++) {
      if (this.students[i].id === id) {
        this.students.splice(i, 1);
        break;
      }
    }
  }

  displayAllStudents() {
    for (let i = 0; i < this.students.length; i++) {
      this.students[i].displayData();
    }
  }
}

let studentManager = new StudentManager();
let choice: number;
do {
  console.log("1. Create student");
  console.log("2. Update student");
  console.log("3. Delete student");
  console.log("4. Display all students");
  console.log("5. Exit");
  choice = Number(prompt("Enter your choice: "));
  switch (choice) {
    case 1:
      studentManager.createStudent();
      break;
    case 2:
      let id = Number(prompt("Enter id: "));
      studentManager.updateStudent(id);
      break;
    case 3:
      id = Number(prompt("Enter id: "));
      studentManager.deleteStudent(id);
      break;
    case 4:
      studentManager.displayAllStudents();
      break;
    case 5:
      break;
    default:
      console.log("Invalid choice");
  }
} while (choice !== 5);
