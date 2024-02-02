import express from "express";
import sequelize from "./config/db.config";
import User from "./models/user.model";
import createTable from "./models";
import Information from "./models/infor.model";
import { Op } from "sequelize";

const app = express();
sequelize.authenticate();
createTable();

// app.get("/", async (req, res) => {
//   await User.create({
//     firstName: "dong",
//     lastName: "tran",
//   });
//   res.json("ok");
// });

app.get("/", async (req, res) => {
  await Information.create({
    userName: "binh",
    password: "123",
    userId: "1",
  });
  res.json("xong infor");
});
// app.get("/", async (req, res) => {
//   const data = await User.findAll({
//     include: [Information],
//     where: {
//       id: {
//         [Op.or]: [1, 2],
//       },
//     },
//   });

//   res.json(data);
// });
app.listen(8000, () => {
  console.log("đã kết nối thành công port 8000");
});
