import express, { urlencoded } from "express";
import Upload from "./config/multer.config";
import path from "path";
import uploadCloud from "./config/multerCloud.config";
const app = express();
const PORT: any = 8000;

app.use(express.static("public"));
app.use(urlencoded());

// app.post("/", Upload.single("file"), (req: any, res: any) => {
//   const file = req.file as Express.Multer.File;
//   if (!file) {
//     return res.status(400).send("No file uploaded.");
//   }
//   const relativePath = path.join("/img/", file.filename);
//   const directUrl = `http://localhost:${PORT}${relativePath}`;
//   res.status(200).json(directUrl);
// });

// app.post("/uploads", Upload.array("files", 5), (req: any, res: any) => {
//   const uploadFiles = req.files as Express.Multer.File[];

//   const filePaths = uploadFiles.map((file) => {
//     const relativePath = path.join("/img", file.filename);
//     const directUrl = `http://localhost:${PORT}${relativePath}`;
//     return directUrl;
//   });
//   res.json(filePaths);
// });

// app.get("/img/:filename", (req: any, res: any) => {
//   const filename = req.params.filename;
//   const publicFolder = path.join(__dirname, "public");
//   const filePath = path.join(publicFolder, "img", filename);
//   res.sendFile(filePath);
// });

app.post("/uploads", uploadCloud.array("files", 5), (req: any, res: any) => {
  const uploadFiles = req.files as Express.Multer.File[];

  const filePaths = uploadFiles.map((file) => {
    const relativePath = path.join("/img", file.filename);
    const directUrl = `http://localhost:${PORT}${relativePath}`;
    return directUrl;
  });
  res.json(filePaths);
});
app.listen(8000, () => {
  console.log("http://localhost:8000");
});
