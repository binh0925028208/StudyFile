class QuadraticEquation {
  private a: number;
  private b: number;
  private c: number;
  constructor(firstNumber: number, secondNumber: number, thirdNumber: number) {
    this.a = firstNumber;
    this.b = secondNumber;
    this.c = thirdNumber;
  }
  get getA(): number {
    return this.a;
  }

  set setA(value: number) {
    this.a = value;
  }

  get getB(): number {
    return this.b;
  }
  set setB(value: number) {
    this.b = value;
  }

  get getC(): number {
    return this.c;
  }
  set setC(value: number) {
    this.c = value;
  }
  getDiscriminant(): number {
    let delta = this.b * this.b - 4 * this.a * this.c;
    return delta;
  }
  getRoot1(): number {
    if (this.getDiscriminant() >= 0) {
      let r1 = (-this.b + Math.sqrt(this.getDiscriminant())) / (2 * this.a);
      return r1;
    } else {
      return 0;
    }
  }
  getRoot2(): number {
    if (this.getDiscriminant() >= 0) {
      let r2 = (-this.b - Math.sqrt(this.getDiscriminant())) / (2 * this.a);
      return r2;
    } else {
      return 0;
    }
  }
}
let test = new QuadraticEquation(1, 9, 3);
function example(): void {
  if (test.getDiscriminant() >= 0) {
    console.log(test.getRoot1(), test.getRoot2());
  } else {
    console.log(0);
  }
}
example();
