import express from "express";
import sequelize from "./configs/db.config";
import createTable from "./models";
import Todo from "./models/todo.model";
import User from "./models/user.model";
import { Op } from "sequelize";

const app = express();
sequelize.authenticate();
createTable();

// get all todoList
app.get("/", async (req, res) => {
  const data = await Todo.findAll();
  res.json(data);
});

// get all user
app.get("/user", async (req, res) => {
  const data = await Todo.findAll();
  res.json(data);
});

// add user
app.post("/user", async (req, res) => {
  await User.create({
    userName: "tien",
    password: "24443",
    role: 1,
  });
  res.json("đã tạo được user");
});

// add todoList
app.post("/add", async (req, res) => {
  await Todo.create({
    title: "bai tap",
    detail: "sau khi an toi",
    userId: 3,
    status: 1,
  });
  res.json("đã tạo todolist");
});

// delete todoList
app.delete("/delete/:id", async (req, res) => {
  await Todo.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.json(`đã xóa id ${req.params.id}`);
});

// update todoList
app.patch("/patch/:id", async (req, res) => {
  await Todo.update(
    {
      title: "múa yasuo",
      detail: "sau khi hoc",
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );
  res.json(`đã cập nhật id ${req.params.id}`);
});

// join 2 bảng theo điều kiện
app.get("/join", async (req, res) => {
  const data = await User.findAll({
    include: [Todo],
    // where: {
    //   id: {
    //     [Op.or]: [1, 2],
    //   },
    // },
  });

  res.json(data);
});
app.listen(8000, () => {
  console.log("http://localhost:8000");
});
