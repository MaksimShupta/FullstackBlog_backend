import express from "express"; // import express
import { getAllPosts,createPost, } from "../controllers/postsController.js"; // import controllers

const router = express.Router(); // create a router

router.get("/posts", getAllPosts); // get all posts /api/posts
router.post("/posts", createPost); // create a post /api/posts
// export router
export default router;
