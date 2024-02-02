import { Request, Response } from "express";
import readFileCommon from "../common/readFile";
import path from "path";
import writeFileCommon from "../common/writeFile";

class CmtService {
  public getAllCmt(req: Request, res: Response) {
    try {
      const cmts = readFileCommon(path.join("public/db.json"));
      if (req.query.sort) {
        if (req.query.sort == "ASC") {
          cmts.sort((item1: any, item2: any) => item1.id - item2.id);
          res.json(cmts);
        } else if (req.query.sort == "DESC") {
          cmts.sort((item1: any, item2: any) => item2.id - item1.id);
          res.json(cmts);
        } else {
          res.status(200).json(cmts);
        }
      } else {
        res.status(200).json(cmts);
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }

  public createCmt(req: Request, res: Response) {
    try {
      const cmts = readFileCommon(path.join("public/db.json"));
      const newCmt = {
        id: cmts.length > 0 ? cmts[cmts.length - 1].id + 1 : 1,
        rate: req.body.rate,
        comment: req.body.comment,
      };
      cmts.push(newCmt);
      writeFileCommon(path.join("public/db.json"), cmts);
      res.status(201).json("Đã thêm thành công");
    } catch (error) {
      res.status(400).json("có lỗi");
    }
  }

  public updateCmt(req: Request, res: Response) {
    try {
      const cmts = readFileCommon(path.join("public/db.json"));
      const id = req.params.id;
      const newCmt = {
        rate: req.body.rate,
        comment: req.body.comment,
      };
      const newData = cmts.map((item: any) => {
        if (item.id == id) {
          return {
            ...item,
            ...newCmt,
          };
        } else {
          return item;
        }
      });
      writeFileCommon(path.join("public/db.json"), newData);
      res.status(200).json("Đã sửa thành công");
    } catch (error) {
      res.status(400).json("Có lỗi xảy ra");
    }
  }

  public deleteCmt(req: Request, res: Response) {
    try {
      const cmts = readFileCommon(path.join("public/db.json"));
      const id = req.params.id;
      const newData = cmts.filter((item: any) => item.id !== Number(id));
      writeFileCommon(path.join("public/db.json"), newData);
      res.status(200).json("Đã xoá thành công");
    } catch (error) {
      res.status(400).json("Có lỗi xảy ra");
    }
  }
}

export default CmtService;
