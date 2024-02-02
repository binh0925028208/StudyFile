import express, { Request, Response } from "express";
import UserService from "../service/user.service";

const userController = express.Router();
const userService = new UserService();

userController.get("/", async (req: Request, res: Response) => {
  const result = await userService.getAllUser();
  res.status(200).json(result);
});

userController.get("/:id", async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const result = await userService.getOneUser(id);
  res.status(200).json(result);
});

userController.post("/", async (req: Request, res: Response) => {
  try {
    const newUser = {
      id: req.body.id,
      userName: req.body.userName,
      password: req.body.password,
      phone: req.body.phone,
    };
    await userService.createUser(newUser);
    res.status(201).json({ msg: "Create successfully" });
  } catch (error) {
    res.status(500).json({ msg: "Có lỗi xảy ra lúc tạo" });
    console.log(error);
  }
});

export default userController;
