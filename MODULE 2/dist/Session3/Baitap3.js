"use strict";
const SLOW = 1;
const MEDIUM = 2;
const FAST = 3;
class Fan {
    constructor(tocdo, batTat, banKinh, mausac) {
        this.speed = SLOW;
        this.on = false;
        this.radius = 5;
        this.color = "blue";
    }
    get getSpeed() {
        return this.speed;
    }
    set setSpeed(value) {
        this.speed = value;
    }
    get getOn() {
        return this.on;
    }
    set setOn(value) {
        this.on = value;
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
    toString() {
        if (this.on == true) {
            console.log(this.speed, this.color, this.radius, "fan is on");
        }
        else {
            console.log(this.color, this.radius, "fan is off");
        }
    }
}
const fan1 = new Fan(FAST, true, 10, "yellow");
fan1.setSpeed = FAST;
fan1.setOn = true;
fan1.setRadius = 10;
fan1.setColor = "yellow";
fan1.toString();
const fan2 = new Fan(MEDIUM, false, 5, "blue");
fan2.setSpeed = MEDIUM;
fan2.setOn = false;
fan2.setRadius = 5;
fan2.setColor = "blue";
fan2.toString();
