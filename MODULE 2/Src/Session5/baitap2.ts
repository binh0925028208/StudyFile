// Định nghĩa Interface cho một hình học
interface Playable {
  info: string;
  play(): void;
}
class AudioPlayer implements Playable {
  info: string;
  constructor(info: string) {
    this.info = info;
  }
  play() {
    console.log("đang phát audio" + `${this.info}`);
  }
}
class VideoPlayer implements Playable {
  info: string;
  constructor(info: string) {
    this.info = info;
  }
  play() {
    console.log("đang phát audio" + `${this.info}`);
  }
}
class Main2 {
  main2() {
    let audio1 = new AudioPlayer("Merry christmas");
    let video1 = new VideoPlayer("Home Alone");
    audio1.play();
    video1.play();
  }
}
let main2 = new Main2();
main2.main2();
