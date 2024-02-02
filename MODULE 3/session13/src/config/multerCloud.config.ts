import { v2 as cloudinary } from "cloudinary";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
cloudinary.config({
  cloud_name: "dzk6s6cvc",
  api_key: "315828545543434",
  api_secret: "Js5AarxXi7qN0eUuTwivEergpOc",
});

const store = new CloudinaryStorage({
  cloudinary,
  params: async (req: any, file: any) => {
    return {
      folder: "avatar",
      format: "png",
    };
  },
});
const fileFilter = (req: any, file: any, cb: any) => {
  //kiểm tra kiểu file
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    const maxSize = 5 * 1024 * 1024; //5MB
    if (file.size > maxSize) {
      console.log("Kích thước file vượt quá giới hạn");
      cb(null, false);
    } else {
      console.log("Kiểm tra file thành công");
      cb(null, true);
    }
  } else {
    console.log("Định dạng file không hợp lệ");
    cb(null, false);
  }
};
const uploadCloud = multer({
  storage: store,
  fileFilter,
});
export default uploadCloud;
