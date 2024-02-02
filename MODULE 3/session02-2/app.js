const http = require("http");
const fs = require("fs"); //file system
const url = require("url");
const searchPath = "./public/search.html";
const server = http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true);
  if (req.url == "/search" && req.method == "GET") {
    const data = fs.readFileSync(searchPath, "utf-8");
    res.writeHead(200, {
      "Content-Type": "text/html",
    });

    res.end(data);
  }
});
server.listen(8000, () => {
  console.log("server listen on port 8000");
});
