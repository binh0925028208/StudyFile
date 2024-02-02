import multer from "multer";
import path from "path";

const storage: any = multer.diskStorage({
  destination: (req: any, file: any, cb: any) => {
    const uploadFolder = "public/img/";
    cb(null, uploadFolder);
  },
  filename: (req: any, file: any, cb: any) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const fileExtension = path.extname(file.originalname);
    cb(null, file.fieldName + "-" + uniqueSuffix + fileExtension);
  },
});
const upload = multer({
  storage: storage,
  limits: { fieldSize: 1024 },
  fileFilter(req, file, callback) {
    if (
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg"
    ) {
      callback(null, true);
    } else {
      callback(null, false);
    }
  },
});
export default upload;
