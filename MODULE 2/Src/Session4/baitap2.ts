class Car {
  id: number;
  name: string;
  brand: string;
  price: number;
  color: string;
  category: string;
  constructor(
    id: number,
    name: string,
    brand: string,
    price: number,
    color: string,
    category: string
  ) {
    this.id = id;
    this.name = name;
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.category = category;
  }

  get getId(): number {
    return this.id;
  }
  set setId(value: number) {
    this.id = value;
  }
  get getName(): string {
    return this.name;
  }
  set setName(value: string) {
    this.name = value;
  }

  get getBrand(): string {
    return this.brand;
  }
  set setBrand(value: string) {
    this.brand = value;
  }
  get getPrice(): number {
    return this.price;
  }
  set setPrice(value: number) {
    this.price = value;
  }
  get getColor(): string {
    return this.color;
  }
  set setColor(value: string) {
    this.color = value;
  }
  get getCategory(): string {
    return this.category;
  }
  set setCategory(value: string) {
    this.category = value;
  }

  inPutData() {
    this.id = Number(prompt("Enter id: "));
    this.name = String(prompt("Enter name: "));
    this.brand = String(prompt("Enter brand: "));
    this.price = Number(prompt("Enter price: "));
    this.color = String(prompt("Enter color: "));
    this.category = String(prompt("Enter category: "));
  }
  ouPutData() {
    let carList: HTMLElement = document.getElementById("table") as HTMLElement;
    carList.innerHTML += ` <tr>
   <td style="padding: 20px 20px">${this.id}</td>
   <td style="padding: 20px 20px">${this.name}</td>
   <td style="padding: 20px 20px">${this.brand}</td>
   <td style="padding: 20px 20px">${this.price}</td>
   <td style="padding: 20px 20px">${this.color}</td>
   <td style="padding: 20px 20px">${this.category}</td>
 </tr>`;
  }
}

class CarManager {
  private cars: Car[] = [];

  createCar() {
    let id = Number(prompt("Enter id: "));
    let name = String(prompt("Enter name: "));
    let brand = String(prompt("Enter brand: "));
    let price = Number(prompt("Enter price: "));
    let color = String(prompt("Enter color: "));
    let category = String(prompt("Enter catetory: "));
    let newCar = new Car(id, name, brand, price, color, category);
    this.cars.push(newCar);
  }

  updateCar(id: number) {
    let name = String(prompt("Enter name: "));
    let brand = String(prompt("Enter brand: "));
    let price = Number(prompt("Enter price: "));
    let color = String(prompt("Enter color: "));
    let category = String(prompt("Enter catetory: "));
    let newCar = new Car(id, name, brand, price, color, category);
    for (let i = 0; i < this.cars.length; i++) {
      if (this.cars[i].id === id) {
        this.cars[i] = newCar;
        break;
      }
    }
  }

  deleteCar(id: number) {
    for (let i = 0; i < this.cars.length; i++) {
      if (this.cars[i].id === id) {
        this.cars.splice(i, 1);
        break;
      }
    }
  }

  displayAllCars() {
    for (let i = 0; i < this.cars.length; i++) {
      this.cars[i].ouPutData();
    }
  }
}

function carOption() {
  let NewCarManager = new CarManager();
  let yourChoice: string;
  do {
    yourChoice = String(prompt("Enter your choice: "));
    switch (yourChoice) {
      case "Create":
        NewCarManager.createCar();
        break;
      case "Update":
        let id = Number(prompt("Enter id: "));
        NewCarManager.updateCar(id);
        break;
      case "Delete":
        id = Number(prompt("Enter id: "));
        NewCarManager.deleteCar(id);
        break;
      case "Read":
        NewCarManager.displayAllCars();
        break;
      case "Exit":
        break;
      default:
        console.log("Invalid choice");
    }
  } while (yourChoice !== "Exit");
}
