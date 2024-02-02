class Products5 {
  private id: number;
  private name: string;
  private price: number;
  private quantity: number;

  constructor(id: number, name: string, price: number, quantity: number) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
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

  get getPrice(): number {
    return this.price;
  }

  set setPrice(value: number) {
    this.price = value;
  }

  get getQuantity(): number {
    return this.quantity;
  }

  set setQuantity(value: number) {
    this.quantity = value;
  }

  inputData() {
    this.id = Number(prompt("Enter id: "));
    this.name = String(prompt("Enter name: "));
    this.price = Number(prompt("Enter price: "));
    this.quantity = Number(prompt("Enter quantity: "));
  }

  displayData() {
    let bakeryList: HTMLElement = document.getElementById(
      "bakery"
    ) as HTMLElement;
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
  constructor(id: number = 0, name: string, price: number, quantity: number) {
    super(id, name, price, quantity);
  }
  bakeryProducts5: Bakerys5[] = [];
  createProduct(): void {
    let id: number = Number(prompt("Enter id: "));
    let name: string = String(prompt("Enter name: "));
    let price: number = Number(prompt("Enter price: "));
    let quantity: number = Number(prompt("Enter quantity: "));
    let newProducts5: Bakerys5 = new Bakerys5(id, name, price, quantity);
    this.bakeryProducts5.push(newProducts5);
  }

  updateProduct(id: number): void {
    let name: string = String(prompt("Enter name: "));
    let price: number = Number(prompt("Enter price: "));
    let quantity: number = Number(prompt("Enter quantity: "));
    let newProducts5: Bakerys5 = new Bakerys5(id, name, price, quantity);
    for (let i = 0; i < this.bakeryProducts5.length; i++) {
      if (this.bakeryProducts5[i].getId === id) {
        this.bakeryProducts5[i] = newProducts5;
        break;
      }
    }
  }

  deleteProduct(id: number): void {
    for (let i = 0; i < this.bakeryProducts5.length; i++) {
      if (this.bakeryProducts5[i].getId === id) {
        this.bakeryProducts5.splice(i, 1);
        break;
      }
    }
  }

  displayAllBakery(): void {
    let bakeryList: HTMLElement = document.getElementById(
      "bakery"
    ) as HTMLElement;
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
function updateProduct(id: number) {
  bakeryList.updateProduct(id);
  bakeryList.displayAllBakery();
}
function deleteProduct(id: number) {
  bakeryList.deleteProduct(id);
  bakeryList.displayAllBakery();
}
