import express, { Request, Response } from "express";
import * as dotenv from "dotenv";
import bodyParser, { urlencoded } from "body-parser";
import connection from "./configs/db.config";
import { createTableInfor, createTableUsers } from "./tables";
dotenv.config();

const PORT = process.env.PORT;
const app = express();
app.use(urlencoded());
app.use(bodyParser.json());

connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected!!!");
});

connection.query(createTableUsers, (err, results) => {
  if (err) {
    console.error("error creating table:" + err.stack);
    return;
  }
  console.log("lam xong user");
});
connection.query(createTableInfor, (err, results) => {
  if (err) {
    console.error("error creating table:" + err.stack);
    return;
  }
  console.log("lam xong info");
});

app.get("/details", (req: Request, res: Response) => {
  connection.query(
    `select users.id, users.name, users.gender, information.address, information.age from users 
    left join information on users.id = information.userId;`,
    (err, results) => {
      if (err) {
        console.error("error join table:" + err.stack);
        return;
      }
      console.log(results);
      res.json(results);
    }
  );
});

app.post("/", (req: Request, res: Response) => {
  connection.execute(
    "insert into users(name,gender) value(?,?)",
    ["bảo", 2],
    (err: any, data: any) => {
      if (err) {
        console.log(err);
        res.json(err);
        return;
      }
      res.json("done post user");
    }
  );
});

app.patch("/update/:id", (req: Request, res: Response) => {
  connection.execute(
    "update users set name = ?, gender = ?  where id = ?",
    ["kakaka", 1, req.params.id],
    (err: any, data: any) => {
      if (err) {
        console.log(err);
        res.json(err);
        return;
      }
      res.json("done patch user");
    }
  );
});

app.delete("/delete/:id", (req: Request, res: Response) => {
  connection.execute(
    "delete from users where id= ?",
    [req.params.id],
    (err: any, data: any) => {
      if (err) {
        console.log(err);
        res.json(err);
        return;
      }
      res.json("done delete user");
    }
  );
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
//srbi cbjh hovo lqhu