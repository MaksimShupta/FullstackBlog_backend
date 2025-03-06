import express from "express"; // import express
import {
  getAllPosts,
  createPost,
  updatePost,
  deletePost,
  getAPost,
  getUser,
} from "../controllers/postsController.js"; // import controllers
import { getUser } from "../controllers/usersController.js";

const router = express.Router(); // create a router

router.get("/posts", getAllPosts); // get all posts /api/posts
router.post("/posts", createPost); // create a post /api/posts
router.put("/posts/:id", updatePost);
router.delete("/posts/:id", deletePost);
router.get("/posts/:id", getAPost);
router.get("/users/:id", getUser);
// export router
export default router;
