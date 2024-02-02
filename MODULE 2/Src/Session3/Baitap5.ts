class Employee {
  employeeId: number;
  employeeName: string;
  age: number;
  gen: number; //1 là nam, 2 là nữ
  rate: number;
  salary: number;

  constructor(
    id: number,
    name: string,
    age: number,
    gen: number,
    rate: number
  ) {
    this.employeeId = id;
    this.employeeName = name;
    this.age = age;
    this.gen = gen;
    this.rate = rate;
    this.salary = 0;
  }

  inputData(
    id: number,
    name: string,
    age: number,
    gen: number,
    rate: number
  ): void {
    this.employeeId = id;
    this.employeeName = name;
    this.age = age;
    this.gen = gen;
    this.rate = rate;
  }

  displayData(): string {
    return `
          Mã nhân viên: ${this.employeeId}
          Tên nhân viên: ${this.employeeName}
          Tuổi: ${this.age}
          Giới tính: ${this.gen}
          Hệ số lương: ${this.rate}
          Lương: ${this.salary}
      `;
  }

  calSalary(): void {
    this.salary = this.rate * 1300000;
  }
}

const employees: Employee[] = [];

function onAddEmployee(): void {
  const id: number = Number(prompt("Nhập mã nhân viên:"));
  const name: string = String(prompt("Nhập tên nhân viên:"));
  const age: number = Number(prompt("Nhập tuổi:"));
  const gen: number = Number(prompt("Nhập giới tính:"));
  const rate: number = Number(prompt("Nhập hệ số lương:"));
  const newEmployee = new Employee(id, name, age, gen, rate);
  newEmployee.inputData(id, name, age, gen, rate);
  newEmployee.calSalary();
  employees.push(newEmployee);
}

function onDisplayEmployees(): void {
  let displayInfo: string = "Thông tin của các nhân viên:";
  for (const emp of employees) {
    displayInfo += emp.displayData();
  }
  let displayList: HTMLElement = document.getElementById(
    "employeeData"
  ) as HTMLElement;
  displayList.innerText = displayInfo;
}
