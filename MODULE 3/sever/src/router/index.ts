import { Express } from "express";
import userController from "../controller/userController";

const Router = (app: Express) => {
  app.use("/user", userController);
};

export default Router;
