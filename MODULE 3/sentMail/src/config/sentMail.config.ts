import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "binh0906465289@gmail.com",
    pass: "srbi cbjh hovo lqhu",
  },
});

export default transporter;
