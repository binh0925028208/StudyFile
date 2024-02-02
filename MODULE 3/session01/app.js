// const http = require("http");
// const fs = require("fs");
// const { JSON } = require("stream/consumers");
// let filePath = "./db.json";
// const sever = http.createServer((request, response) => {
//   // if (request.url == "/user") {
//   //   response.end("user here, hehehe boy");
//   // } else if (request.url == "/product") {
//   //   response.end("here come the product");
//   // } else if (request.url == "/product" && request.method == "POST") {
//   //   response.end("product is using method Post");
//   // }

//   if (request.url == "/user" && request.method == "POST") {
//     fs.readFile(filePath, "utf-8", (err, data1) => {
//       let newData = JSON.parse(data1);
//       newData.push({ id: 2, name: "phuck" });
//       fs.writeFile(filePath, JSON.stringify(newData), (err) => {
//         response.end("ok");
//       });
//     });
//   } else if (request.url == "/user" && request.method == "GET") {
//     response.end("hahahaha");
//   }
//   response.end("ok");
// });

// sever.listen(8000, () => {
//   console.log("everything start at port 800/0,go boss");
// });
