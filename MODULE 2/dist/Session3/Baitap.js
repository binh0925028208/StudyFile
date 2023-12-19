"use strict";
class Circles {
    constructor(banKinh, color) {
        this.radius = banKinh;
        this.color = color;
    }
    get getRadius() {
        return this.radius;
    }
    set setRadius(value) {
        this.radius = value;
    }
    get getColor() {
        return this.color;
    }
    set setColor(value) {
        this.color = value;
    }
    perimeter(banKinh) {
        if (banKinh > 0) {
            return banKinh * 2 * Math.PI;
        }
        else
            ("Bán kính không hợp lệ");
    }
    acreage(banKinh) {
        if (banKinh > 0) {
            return banKinh * banKinh * Math.PI;
        }
        else
            ("Bán kính không hợp lệ");
    }
    inputData() {
        this.radius = Number(prompt("nhập bán kính"));
        this.color = String(prompt("nhập màu"));
    }
    outputData() {
        console.log("bán kính:", this.radius);
        console.log("màu sắc:", this.radius);
    }
}
let hinhtron = new Circles(5, 'red');
console.log(hinhtron.perimeter(5));
console.log(hinhtron.acreage(5));
hinhtron.inputData();
hinhtron.outputData();
