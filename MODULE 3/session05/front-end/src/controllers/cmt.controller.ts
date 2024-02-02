import express, { Router } from "express";
import CmtService from "../services/cmt.service";

const cmtController = express.Router();
const cmtService = new CmtService();

//GET => get toàn bộ cmts & sort theo id
cmtController.get("/", cmtService.getAllCmt);

//POST => thêm mới cmt
cmtController.post("/", cmtService.createCmt);

//PATCH => cập nhật cmt
cmtController.patch("/update/:id", cmtService.updateCmt);

//DELETE => xoá cmt
cmtController.delete("/delete/:id", cmtService.deleteCmt);

export default cmtController;
