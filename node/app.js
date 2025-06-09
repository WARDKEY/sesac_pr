import express from "express";
import userRouter from "./routes/user.router.js";

const app = express();
const PORT = 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/user", userRouter);
app.use("/post", postRouter);

app.listen(PORT, () => {
  console.log(PORT, `포트로 서버가 열림`);
});
