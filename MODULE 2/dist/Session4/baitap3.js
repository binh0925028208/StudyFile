"use strict";
// class Product {
//   private id: number;
//   private name: string;
//   private price: number;
//   private quantity: number;
//   constructor(id: number, name: string, price: number, quantity: number) {
//     this.id = id;
//     this.name = name;
//     this.price = price;
//     this.quantity = quantity;
//   }
//   get getId(): number {
//     return this.id;
//   }
//   set setId(value: number) {
//     this.id = value;
//   }
//   get getName(): string {
//     return this.name;
//   }
//   set setName(value: string) {
//     this.name = value;
//   }
//   get getPrice(): number {
//     return this.price;
//   }
//   set setPrice(value: number) {
//     this.price = value;
//   }
//   get getQuantity(): number {
//     return this.quantity;
//   }
//   set setQuantity(value: number) {
//     this.quantity = value;
//   }
//   inputData() {
//     this.id = Number(prompt("Enter id: "));
//     this.name = String(prompt("Enter name: "));
//     this.price = Number(prompt("Enter price: "));
//     this.quantity = Number(prompt("Enter quantity: "));
//   }
//   displayData() {
//     let bakeryList: HTMLElement = document.getElementById(
//       "bakery"
//     ) as HTMLElement;
//     bakeryList.innerHTML += `<ul>
//     <li>Id : ${this.id}</li>
//     <li>Name : ${this.name}</li>
//     <li>Price : ${this.price}</li>
//     <li>Quantity : ${this.quantity}</li>
//     <li><button onclick="updateProduct(${this.id})">thay đổi bánh</button></li>
//     <li><button onclick="deleteProduct(${this.id})">xóa bánh</button></li>
//   </ul>`;
//   }
// }
// class Bakery extends Product {
//   constructor(id: number = 0, name: string, price: number, quantity: number) {
//     super(id, name, price, quantity);
//   }
//   bakeryProduct: Bakery[] = [];
//   createProduct(): void {
//     let id: number = Number(prompt("Enter id: "));
//     let name: string = String(prompt("Enter name: "));
//     let price: number = Number(prompt("Enter price: "));
//     let quantity: number = Number(prompt("Enter quantity: "));
//     let newProduct: Bakery = new Bakery(id, name, price, quantity);
//     this.bakeryProduct.push(newProduct);
//   }
//   updateProduct(id: number): void {
//     let name: string = String(prompt("Enter name: "));
//     let price: number = Number(prompt("Enter price: "));
//     let quantity: number = Number(prompt("Enter quantity: "));
//     let newProduct: Bakery = new Bakery(id, name, price, quantity);
//     for (let i = 0; i < this.bakeryProduct.length; i++) {
//       if (this.bakeryProduct[i].getId === id) {
//         this.bakeryProduct[i] = newProduct;
//         break;
//       }
//     }
//   }
//   deleteProduct(id: number): void {
//     for (let i = 0; i < this.bakeryProduct.length; i++) {
//       if (this.bakeryProduct[i].getId === id) {
//         this.bakeryProduct.splice(i, 1);
//         break;
//       }
//     }
//   }
//   displayAllBakery(): void {
//     let bakeryList: HTMLElement = document.getElementById(
//       "bakery"
//     ) as HTMLElement;
//     bakeryList.innerHTML = ``;
//     for (let i = 0; i < this.bakeryProduct.length; i++) {
//       this.bakeryProduct[i].displayData();
//     }
//   }
//   findProduct(): void {
//     let name: string = String(prompt("Enter name: "));
//     for (let i = 0; i < this.bakeryProduct.length; i++) {
//       if (this.bakeryProduct[i].getName === name) {
//         this.bakeryProduct[i].displayAllcart();
//       } else {
//         alert("we don't have that item");
//       }
//     }
//   }
// }
// let bakeryList = new Bakery(1, "a", 2, 2);
// function createProduct() {
//   bakeryList.createProduct();
//   bakeryList.displayAllBakery();
// }
// function updateProduct(id: number) {
//   bakeryList.updateProduct(id);
//   bakeryList.displayAllBakery();
// }
// function deleteProduct(id: number) {
//   bakeryList.deleteProduct(id);
//   bakeryList.displayAllBakery();
// }
class Product {
    constructor(id, name, price, quantity) {
        this._id = id;
        this._name = name;
        this._price = price;
        this._quantity = quantity;
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    get price() {
        return this._price;
    }
    get quantity() {
        return this._quantity;
    }
    set quantity(value) {
        this._quantity = value;
    }
    inputData() {
        this._id = Number(prompt("Enter id: "));
        this._name = String(prompt("Enter name: "));
        this._price = Number(prompt("Enter price: "));
        this._quantity = Number(prompt("Enter quantity: "));
    }
    displayData() {
        console.log(`Id: ${this._id}`);
        console.log(`Name: ${this._name}`);
        console.log(`Price: ${this._price}`);
        console.log(`Quantity: ${this._quantity}`);
    }
}
class Bakery {
    constructor(products) {
        this._products = products;
    }
    get products() {
        return this._products;
    }
    set products(value) {
        this._products = value;
    }
    createProduct() {
        const product = new Product(0, "", 0, 0);
        product.inputData();
        this._products.push(product);
    }
    updateProduct(id) {
        const product = this._products.find((product) => product.id === id);
        if (product) {
            product.inputData();
        }
        else {
            console.log("Product not found");
        }
    }
    showAllProduct() {
        this._products.forEach((product) => product.displayData());
    }
    deleteProduct(id) {
        const index = this._products.findIndex((product) => product.id === id);
        if (index !== -1) {
            this._products.splice(index, 1);
        }
        else {
            console.log("Product not found");
        }
    }
}
class Cart {
    constructor(cart) {
        this._cart = cart;
    }
    get cart() {
        return this._cart;
    }
    set cart(value) {
        this._cart = value;
    }
    addToCart(product) {
        const index = this._cart.findIndex((item) => item.id === product.id);
        if (index === -1) {
            this._cart.push(product);
        }
        else {
            this._cart[index].quantity++;
        }
    }
    updateCart(id, quantity) {
        const index = this._cart.findIndex((item) => item.id === id);
        if (index !== -1) {
            this._cart[index].quantity = quantity;
        }
        else {
            console.log("Product not found");
        }
    }
    showAllCart() {
        this._cart.forEach((product) => product.displayData());
    }
    deleteCart(id) {
        const index = this._cart.findIndex((item) => item.id === id);
        if (index !== -1) {
            this._cart.splice(index, 1);
        }
        else {
            console.log("Product not found");
        }
    }
}
const products = [
    new Product(1, "Chocolate", 45000, 100),
    new Product(2, "Cookies", 90000, 100),
    new Product(3, "Cupcake", 10000, 100),
    new Product(4, "Bread", 5000, 100),
    new Product(5, "Muffin", 20000, 100),
];
const bakery = new Bakery(products);
const cart = new Cart([]);
while (true) {
    const userInput = prompt("Enter product name: ");
    const product = bakery.products.find((product) => product.name === userInput);
    if (product) {
        cart.addToCart(product);
    }
    else {
        console.log("We don't have that item");
    }
    const userChoice = prompt("Do you want to continue (yes/no): ");
    if (userChoice === "no") {
        break;
    }
}
cart.showAllCart();
console.log("Thank you for buying");
