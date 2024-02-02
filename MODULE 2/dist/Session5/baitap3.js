"use strict";
class Products5 {
    constructor(id, name, price, quantity) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
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
    get getPrice() {
        return this.price;
    }
    set setPrice(value) {
        this.price = value;
    }
    get getQuantity() {
        return this.quantity;
    }
    set setQuantity(value) {
        this.quantity = value;
    }
    inputData() {
        this.id = Number(prompt("Enter id: "));
        this.name = String(prompt("Enter name: "));
        this.price = Number(prompt("Enter price: "));
        this.quantity = Number(prompt("Enter quantity: "));
    }
    displayData() {
        let bakeryList = document.getElementById("bakery");
        bakeryList.innerHTML += `<ul>
    <li>Id : ${this.id}</li>
    <li>Name : ${this.name}</li>
    <li>Price : ${this.price}</li>
    <li>Quantity : ${this.quantity}</li>
    <li><button onclick="updateProduct(${this.id})">thay đổi bánh</button></li>
    <li><button onclick="deleteProduct(${this.id})">xóa bánh</button></li>
  </ul>`;
    }
}
class Bakerys5 extends Products5 {
    constructor(id = 0, name, price, quantity) {
        super(id, name, price, quantity);
        this.bakeryProducts5 = [];
    }
    createProduct() {
        let id = Number(prompt("Enter id: "));
        let name = String(prompt("Enter name: "));
        let price = Number(prompt("Enter price: "));
        let quantity = Number(prompt("Enter quantity: "));
        let newProducts5 = new Bakerys5(id, name, price, quantity);
        this.bakeryProducts5.push(newProducts5);
    }
    updateProduct(id) {
        let name = String(prompt("Enter name: "));
        let price = Number(prompt("Enter price: "));
        let quantity = Number(prompt("Enter quantity: "));
        let newProducts5 = new Bakerys5(id, name, price, quantity);
        for (let i = 0; i < this.bakeryProducts5.length; i++) {
            if (this.bakeryProducts5[i].getId === id) {
                this.bakeryProducts5[i] = newProducts5;
                break;
            }
        }
    }
    deleteProduct(id) {
        for (let i = 0; i < this.bakeryProducts5.length; i++) {
            if (this.bakeryProducts5[i].getId === id) {
                this.bakeryProducts5.splice(i, 1);
                break;
            }
        }
    }
    displayAllBakery() {
        let bakeryList = document.getElementById("bakery");
        bakeryList.innerHTML = ``;
        for (let i = 0; i < this.bakeryProducts5.length; i++) {
            this.bakeryProducts5[i].displayData();
        }
    }
}
let bakeryList = new Bakerys5(1, "a", 2, 2);
function createProduct() {
    bakeryList.createProduct();
    bakeryList.displayAllBakery();
}
function updateProduct(id) {
    bakeryList.updateProduct(id);
    bakeryList.displayAllBakery();
}
function deleteProduct(id) {
    bakeryList.deleteProduct(id);
    bakeryList.displayAllBakery();
}
