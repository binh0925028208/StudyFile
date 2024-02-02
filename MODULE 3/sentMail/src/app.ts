import express, { type Express } from "express";
import transporter from "./config/sentMail.config";
import { confirmTemplate } from "./common/confirm";

const app: Express = express();

app.get("/send", async (req, res) => {
  try {
    const randomNumber = Math.floor(Math.random() * 10000);
    await transporter.sendMail({
      to: "nguyenthanhbinh0925028208@gmail.com",
      subject: "Chào mừng bạn đã đăng ký thành công",
      html: `
                <div>
                    <img src="https://media.istockphoto.com/id/1025152800/vi/anh/bi%E1%BB%83n-hi%E1%BB%87u-m%E1%BB%9F-tr%C3%AAn-qu%C3%A1n-c%C3%A0-ph%C3%AA-treo-tr%C3%AAn-c%E1%BB%ADa-%E1%BB%9F-l%E1%BB%91i-v%C3%A0o.jpg?s=1024x1024&w=is&k=20&c=2QPeN8vyDNvv87nIkexHfx66kxyKcj9fJjI3nwabReA=" />
                    <h1 style='color:silver'>Chào mừng bạn đến với gundamshop</h1>
                    <p><strong>${confirmTemplate(randomNumber)}</strong></p>
                </div>
            `,
    });
    res.json("Email sent successfully!");
  } catch (error) {
    res.status(500).json("Error sending email");
  }
});

app.listen(8000, () => {
  console.log("http://localhost:8000");
});
