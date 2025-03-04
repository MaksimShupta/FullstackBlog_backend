import { db } from "../server.js"; // db connection

// get all posts
export const getAllPosts = async (req, res) => {
  try {
    const { rows } = await db.query("SELECT * FROM posts"); // query all posts
    res.status(200).json({ success: true, data: rows }); // success response
  } catch (error) {
    console.error("error fetching posts:", error); // error handling
    res.status(500).json({ success: false, error: error.message }); // error response
  }
};
