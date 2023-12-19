"use strict";
class QuadraticEquation {
    constructor(firstNumber, secondNumber, thirdNumber) {
        this.a = firstNumber;
        this.b = secondNumber;
        this.c = thirdNumber;
    }
    get getA() {
        return this.a;
    }
    set setA(value) {
        this.a = value;
    }
    get getB() {
        return this.b;
    }
    set setB(value) {
        this.b = value;
    }
    get getC() {
        return this.c;
    }
    set setC(value) {
        this.c = value;
    }
    getDiscriminant() {
        let delta = this.b * this.b - 4 * this.a * this.c;
        return delta;
    }
    getRoot1() {
        if (this.getDiscriminant() >= 0) {
            let r1 = (-this.b + Math.sqrt(this.getDiscriminant())) / (2 * this.a);
            return r1;
        }
        else {
            return 0;
        }
    }
    getRoot2() {
        if (this.getDiscriminant() >= 0) {
            let r2 = (-this.b - Math.sqrt(this.getDiscriminant())) / (2 * this.a);
            return r2;
        }
        else {
            return 0;
        }
    }
}
let test = new QuadraticEquation(1, 9, 3);
function example() {
    if (test.getDiscriminant() >= 0) {
        console.log(test.getRoot1(), test.getRoot2());
    }
    else {
        console.log(0);
    }
}
example();
