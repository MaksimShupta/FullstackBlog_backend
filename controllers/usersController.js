import { db } from "../services/db.js";
import bcrypt from "bcryptjs";

export const getUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await db.query(
      "SELECT * FROM users WHERE email = $1 AND password = $2",
      [email, password]
    );

    if (result.rows.length === 0) {
      return res.status(404).send("User not found or invalid credentials");
    }

    const user = result.rows[0];
    // Compare hashed password
    /*const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).send("Invalid credentials");
    }*/
    res.setHeader("Content-Type", "application/json");
    res.json({ id: user.id, email: user.email });
  } catch (error) {
    console.error("Error fetching post:", error.message);
    res.status(500).send("Server Error");
  }
};

export const createUser = async (req, res) => {
  try {
    const { email, password, fullname } = req.body;
    const result = await db.query(
      "INSERT INTO users (email, password, fullname) VALUES ($1, $2, $3) RETURNING id, email, fullname",
      [email, password, fullname]
    );

    if (result.rows.length === 0) {
      return res.status(404).send("User not created !");
    }

    const user = result.rows[0];

    //res.setHeader("Content-Type", "application/json");
    res
      .status(201)
      .json({ id: user.id, email: user.email, fullname: user.fullname });
  } catch (error) {
    console.error("Error by user creating:", error.message);
    res.status(500).send("Server Error");
  }
};
