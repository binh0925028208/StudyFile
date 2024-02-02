abstract class Shape {
  color: string;
  get getColor(): string {
    return this.color;
  }
  set setColor(value: string) {
    this.color = value;
  }
  constructor(color: string) {
    this.color = color;
  }
  abstract getArea(): number;
  display(): void {
    console.log(`${this.color} area: ${this.getArea()}`);
  }
}

class Circle extends Shape {
  radius: number;

  constructor(color: string, radius: number) {
    super(color);
    this.radius = radius;
  }

  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  width: number;
  height: number;

  constructor(color: string, width: number, height: number) {
    super(color);
    this.width = width;
    this.height = height;
  }

  getArea(): number {
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
