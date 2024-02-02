const http = require("http");
const fs = require("fs"); //file system
const homePath = "./public/index.html";
const productPath = "./public/product.html";
const userPath = "./public/user.html";
//fs.readFile => non-blocking
//fs.readFileSync=>blocking
//fs.writeFile
//fs.writeFileSync
const server = http.createServer((req, res) => {
  if (req.url == "./home" && req.method == "GET") {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });
    res.end(`<p>dhashdhasdhasd</p>`);
  } else if (req.url == "/product" && req.method == "GET") {
    const data = fs.readFileSync(productPath, "utf-8");
    res.writeHead(200, {
      "Content-Type": "text/html",
    });
    res.end(data);
  } else if (req.url == "/user" && req.method == "GET") {
    const data = fs.readFileSync(userPath, "utf-8");
    res.writeHead(200, {
      "Content-Type": "text/html",
    });
    res.end(data);
  }
});
server.listen(8000, () => {
  console.log("server listen on port 8000");
});
