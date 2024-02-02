import express, { NextFunction, Request, Response, urlencoded } from "express";
import path from "path";
import bodyParser from "body-parser";
import controller from "../src/controllers/";
import * as fs from "fs";
const server = express();
server.use(express.static("public"));
server.set("view engine", "ejs");
server.set("views", path.join(__dirname, "views"));
server.use(urlencoded());
server.use(bodyParser.json());
server.get("/", (req: Request, res: Response) => {
  let dataBase = fs.readFileSync(path.join("public/db.json"), "utf-8");
  res.render("home", { comment: JSON.parse(dataBase) });
});
controller(server);
server.listen(8000, () => {
  console.log("server lister on port 8000");
});
// npm init -y
// npm i @types/multer dotenv express @types/express @types/node nodemon body-parser @types/cors ejs  mysql2 --save-dev @types/nodemailer --save sequelize
// npx tsc --init
// npm i multer-storage-cloudinary multer cloudinary
