import { error } from "console";
import express, { NextFunction, Request, Response, urlencoded } from "express";
import * as fs from "fs";
import * as path from "path";
const server = express();
const PORT = 8000;
server.use(urlencoded());
const testMiddleWare = (req: Request, res: Response, next: NextFunction) => {
  if (+req.params.idUser % 2 == 0) {
    next();
  } else {
    res.status(400).json("hello");
  }
};
server.get("/", (req: Request, res: Response) => {
  // let data = fs.readFileSync(path.join("public/db.json"), "utf-8");
  // JSON.parse(data).pop();
  // res.status(200).json(JSON.parse(data).pop());
  res.status(200).send("<h1> what's up my boyz </h1>");
});
// server.get("/user", (req: Request, res: Response) => {
//   req.body;
//   req.params;
//   res.json("heheheh boyz");
// });
server
  .route("/user/:idUser")
  .get(testMiddleWare, (req, res) => {
    res.status(400).json("hello there");
  })
  .post((req, res) => {
    console.log(req.params.idUser);
    console.log(req.query.name);
    console.log(req.path);
    res.json(req.body);
  });
server.listen(8000, () => {
  console.log("server lister on port 8000");
});
// npm init --y
// npm i express @types/express @types/node nodemon body-parser @types/cors
// npx tsc --init
