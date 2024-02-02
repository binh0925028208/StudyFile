"use strict";
class AudioPlayer {
    constructor(info) {
        this.info = info;
    }
    play() {
        console.log("đang phát audio" + `${this.info}`);
    }
}
class VideoPlayer {
    constructor(info) {
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
