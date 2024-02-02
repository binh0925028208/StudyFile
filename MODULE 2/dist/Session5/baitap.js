"use strict";
class Shape {
    get getColor() {
        return this.color;
    }
    set setColor(value) {
        this.color = value;
    }
    constructor(color) {
        this.color = color;
    }
    display() {
        console.log(`${this.color} area: ${this.getArea()}`);
    }
}
class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}
class Rectangle extends Shape {
    constructor(color, width, height) {
        super(color);
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
class Main {
    main() {
        let Circless = new Circle("Circle 1", 5);
        let Rectangless = new Rectangle("Rectangle 1", 4, 6);
        Circless.display();
        Rectangless.display();
    }
}
let main = new Main();
main.main();
