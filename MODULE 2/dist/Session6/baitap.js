"use strict";
const game = [
    {
        id: 1,
        name: "DARK SOULS",
        price: 55,
        img: "../../gameimg/81a8lr30ITL._AC_UF1000,1000_QL80_.jpg",
        stock: 10,
    },
    {
        id: 2,
        name: "ELDEN RING",
        price: 65,
        img: "../../gameimg/81WXtGNkhTS._AC_UF894,1000_QL80_.jpg",
        stock: 10,
    },
    {
        id: 3,
        name: "CUPHEAD",
        price: 45,
        img: "../../gameimg/ae23ff306eeb256e6d2061134fc477ad.png",
        stock: 10,
    },
    {
        id: 4,
        name: "SEKIRO",
        price: 68,
        img: "../../gameimg/Sekiro-Shadows-Die-Twice---PlayStation-4_41002_5c94a08aaa5304.30098009.jpg",
        stock: 10,
    },
];
if (!JSON.parse(localStorage.getItem("game"))) {
    localStorage.setItem("game", JSON.stringify(game));
}
const cartGame = [];
if (!JSON.parse(localStorage.getItem("cartGame"))) {
    localStorage.setItem("cartGame", JSON.stringify(cartGame));
}
function renderGames() {
    let gameList = getAllItems("game");
    let render = document.getElementById("products");
    render.innerHTML = ``;
    gameList.forEach((item) => {
        render.innerHTML += `<div class="producstDetail">
    <img src="${item.img}" alt="" />
    <h4>${item.name}</h4>
    <p>$ ${item.price}</p>
    <button onclick="addToCart(${item.id})">Add to cart</button>
  </div>`;
    });
}
renderGames();
class Game {
    constructor(id, name, price, img, stock) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.img = img;
        this.stock = stock;
    }
    get getId() {
        return this.id;
    }
    set setId(value) {
        this.id = value;
    }
}
class CartDetail {
    constructor(id, name, price, img, stock, quantity) {
        this.listGame = getAllItems("gameCart");
        this.id = id;
        this.name = name;
        this.price = price;
        this.img = img;
        this.stock = stock;
        this.quantity = quantity;
    }
    get getId() {
        return this.id;
    }
    deleteProduct(id) {
        for (let i = 0; i < this.listGame.length; i++) {
            if (this.listGame[i].getId === id) {
                this.listGame.splice(i, 1);
                break;
            }
        }
    }
}
function displayCart() {
    let productsList = getAllItems("cartGame");
    let gameList = document.getElementById("table");
    gameList.innerHTML = ``;
    productsList.forEach((item, index) => {
        gameList.innerHTML += `<tr>
          <td>${index}</td>
          <td>${item.name}</td>
          <td>${item.price}</td>
          <td>${item.quantity}</td>
          <td class="tableBtn">
            <button onclick="updateProduct(${item.id})">EDIT</button>
            <button onclick="deleteProduct(${item.id})">DELETE</button>
          </td>
        </tr>`;
    });
}
function addToCart(id) {
    const cart = getAllItems("cartGame");
    let gameList = getAllItems("game");
    gameList.find((item) => {
        if (item.id == id) {
            cart.push(item);
        }
    });
    localStorage.setItem("cartGame", JSON.stringify(cart));
}
// displayCart()
// function deleteProduct(id: number) {
//   cartList.deleteProduct(id);
//   bakeryList.displayAllBakery();
// }
