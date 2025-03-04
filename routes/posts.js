import express from "express"; // import express
import {
    getAllPosts,
    createPost,
    updatePost,
    deletePost,
    getAPost,
} from "../controllers/postsController.js"; // import controllers

const router = express.Router(); // create a router

router.get("/posts", getAllPosts); // get all posts /api/posts
router.post("/posts", createPost); // create a post /api/posts
router.put("/posts/:id", updatePost);
router.delete("/posts/:id", deletePost);
router.get("/posts/:id", getAPost);

// export router
export default router;
