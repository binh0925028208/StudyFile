import { Express } from "express";
import cmtController from "./cmt.controller";

const controller = (app: Express) => {
  app.use("/", cmtController);
};

export default controller;
