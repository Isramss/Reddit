import { Router } from "express";
import {
  allPost,
  deletePost,
  newPost,
  updatePost,
} from "../controllers/postController";
import { auth } from "../middlewares/AuthToken";

const postRoute = Router();

postRoute.get("/", allPost);
// postRoute.get("/:id", allPostOfUser);
postRoute.post("/add", auth, newPost);
postRoute.put("/edit/:postId", auth, updatePost);
postRoute.delete("/delete/:postId", auth, deletePost);

export default postRoute;
