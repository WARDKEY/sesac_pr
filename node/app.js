import express from "express";
import UsersRouter from "./routes/user.router.js";
import PostsRouter from "./routes/post.router.js";

const app = express();
const PORT = 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", [UsersRouter, PostsRouter]);

app.listen(PORT, () => {
  console.log(PORT, `포트로 서버가 열림`);
});
