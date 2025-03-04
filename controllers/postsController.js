import { db } from "../db.js"; // db connection

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

// create a post
export const createPost = async (req, res) => {
    try {
        // get author,title, content, cover and category   from the request body
        const { author, title, content, cover, category } = req.body;

        // check if author,title, content, cover and category are not empty
        if (!author || !title || !content || !cover || !category) {
            return res
                .status(400)
                .json({ success: false, error: "all fields are required" }); // error response
        }

        const { rows } = await db.query(
            "INSERT INTO posts (author,title, content, cover,category ) VALUES ($1, $2, $3, $4,$5 ) RETURNING *",
            [author, title, content, cover, category]
        ); // insert a new post

        res.status(201).json({ success: true, data: rows[0] }); // success response
    } catch (error) {
        console.error("error creating post:", error); // error handling
        res.status(500).json({ success: false, error: error.message }); // error response
    }
};
