const http = require("http");
const fs = require("fs");
const { JSON } = require("stream/consumers");
let fileAppent = "./baitap/file-appent.txt";
let fileFolder = "./baitap/folder.txt";
let fileInput = "./baitap/input.txt";
let fileRead = "./baitap/read-this.txt";
const sever = http.createServer((request, response) => {
  if (request.url == "/user" && request.method == "GET") {
    fs.readFile(fileAppent, "utf-8", (err, data1) => {
      fs.writeFile(fileAppent, JSON.stringify(newData), (err) => {
        response.end("ok file Appent");
      });
    });
    fs.readFile(fileFolder, "utf-8", (err, data1) => {
      fs.writeFile(fileFolder, JSON.stringify(newData), (err) => {
        response.end("ok file folder");
      });
    });
    fs.readFile(fileInput, "utf-8", (err, data1) => {
      fs.writeFile(fileInput, JSON.stringify(newData), (err) => {
        response.end("ok file input");
      });
    });
    fs.readFile(fileRead, "utf-8", (err, data1) => {
      fs.writeFile(fileRead, JSON.stringify(newData), (err) => {
        response.end("ok file read");
      });
    });
  }
});

sever.listen(8000, () => {
  console.log("everything start at port 8000,go boss");
});
