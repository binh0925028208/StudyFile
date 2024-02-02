class TrafficLights {
  private column: string;
  private light: string;
  private seconds: number;

  constructor(column: string, light: string, seconds: number) {
    this.column = column;
    this.light = light;
    this.seconds = seconds;

    setInterval(() => {
      this.changeColor();
    }, 1000);
  }

  private changeColor(): void {
    this.seconds--;
    if (this.seconds === 0 && this.light == "xanh") {
      this.light = "đỏ";
      this.seconds = 6;
    }
    if (this.seconds === 0 && this.light == "đỏ") {
      this.light = "xanh";
      this.seconds = 3;
    }

    console.log(`${this.column} đang là màu ${this.light} : ${this.seconds}s`);
    console.log("-");
  }
}

const trafficLights1 = new TrafficLights("cột đèn 1", "xanh", 3);
