"use strict";
class Car {
    constructor(id, name, brand, price, color, category) {
        this.id = id;
        this.name = name;
        this.brand = brand;
        this.price = price;
        this.color = color;
        this.category = category;
    }
    get getId() {
        return this.id;
    }
    set setId(value) {
        this.id = value;
    }
    get getName() {
        return this.name;
    }
    set setName(value) {
        this.name = value;
    }
    get getBrand() {
        return this.brand;
    }
    set setBrand(value) {
        this.brand = value;
    }
    get getPrice() {
        return this.price;
    }
    set setPrice(value) {
        this.price = value;
    }
    get getColor() {
        return this.color;
    }
    set setColor(value) {
        this.color = value;
    }
    get getCategory() {
        return this.category;
    }
    set setCategory(value) {
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
        let carList = document.getElementById("table");
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
    constructor() {
        this.cars = [];
    }
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
    updateCar(id) {
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
    deleteCar(id) {
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
    let yourChoice;
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
