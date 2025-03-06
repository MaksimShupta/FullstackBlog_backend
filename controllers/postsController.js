import { db } from "../services/db.js"; // db connection

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
        const { author, title, context, cover, category, date } = req.body;

        // check if author,title, content, cover and category are not empty
        if (!author || !title || !context || !cover || !category || !date) {
            return res
                .status(400)
                .json({ success: false, error: "all fields are required" }); // error response
        }

        const { rows } = await db.query(
            "INSERT INTO posts (author,title, context, cover, category, date ) VALUES ($1, $2, $3, $4,$5, $6) RETURNING *",
            [author, title, context, cover, category, date]
        ); // insert a new post

        res.status(201).json({ success: true, data: rows[0] }); // success response
    } catch (error) {
        console.error("error creating post:", error); // error handling
        res.status(500).json({ success: false, error: error.message }); // error response
    }
};

export const updatePost = async (req, res) => {
    try {
        const { id } = req.params;
        const { author, title, context, cover, category, date } = req.body;

        if (!id || !title) {
            return res.status(400).json({
                success: false,
                error: "Missing required field(s): 'id' and 'title' are required.",
            });
        }

        const postCheck = await db.query("SELECT * FROM posts WHERE id = $1", [
            id,
        ]);
        if (postCheck.rows.length === 0) {
            return res.status(404).send("Post not found");
        }

        const result = await db.query(
            "UPDATE posts SET author = $1, title = $2, context = $3, cover = $4, category = $5, date = $6 WHERE id = $7 RETURNING *",
            [author, title, context, cover, category, date, id]
        );

        if (result.rows.length === 0) {
            return res.status(404).send("Post not found");
        }

        res.json(result.rows[0]);
    } catch (error) {
        console.error("Error updating post:", error.message);
        res.status(500).json({ success: false, error: error.message });
    }
};

export const deletePost = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await db.query(
            "DELETE FROM posts WHERE id = $1 RETURNING *",
            [id]
        );
        if (result.rows.length === 0) {
            return res.status(404).send("Post not found");
        }
        res.json({
            message: "Post deleted successfully",
            deletedPost: result.rows[0],
        });
    } catch (error) {
        console.error("Error deleting post:", error.message);
        res.status(500).json({ success: false, error: error.message });
    }
};

export const getAPost = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await db.query("SELECT * FROM posts WHERE id = $1", [
            id,
        ]);
        if (result.rows.length === 0) {
            return res.status(404).send("Post not found");
        }
        res.json(result.rows[0]);
    } catch (error) {
        console.error("Error fetching post:", error.message);
        res.status(500).send("Server Error");
    }
};
