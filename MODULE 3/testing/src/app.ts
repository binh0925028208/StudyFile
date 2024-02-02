import bodyParser from "body-parser";
import express, { Request, Response, NextFunction } from "express";
import * as fs from "fs";
import { url } from "inspector";
import * as path from "path";

const app = express();
const port = process.env.PORT || 3000;
// app.use(express.json());
// app.use(express.static("public"));

// app.get("/", (req: Request, res: Response) => {
//   res.sendFile("public/danhSach.html");
// });
app.get("/", (req: Request, res: Response) => {
  res.sendFile(path.join("/public/ask.html)"));
});

// app.get("/ask", (req: Request, res: Response) => {
//   res.sendFile("public/ask.html");
// });
// app.get("/question-detail/:id", (req: Request, res: Response) => {
//   res.sendFile("public/question-detail.html");
// });

// app.get("/questions", (req: Request, res: Response) => {
//   let questionsData = fs.readFileSync(
//     path.join("public/questions.json"),
//     "utf-8"
//   );
//   res.status(200).json(JSON.parse(questionsData));
// });
// app.get("/questions/:id", (req: Request, res: Response) => {
//   res.send(`<h1>id gửi qua url là ${req.params.id} </h1>`);
// });

// app.post("/questions"), (req: Request, res: Response) => {};

app.get("*", (req: Request, res: Response) => {
  res.json("PAGE NOT FOUND");
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
