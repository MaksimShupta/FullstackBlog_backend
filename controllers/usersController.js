import { db } from "../services/db.js";
import bcrypt from "bcryptjs";

export const getUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await db.query(
      "SELECT * FROM users WHERE email = $1 password=$2",
      [email, password]
    );

    if (result.rows.length === 0) {
      return res.status(404).send("User not found");
    }
    const user = result.rows[0];
    // Compare hashed password
    /*const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).send("Invalid credentials");
    }*/
    res.setHeader("Content-Type", "application/json");
    res.json({ id: user.id, email: user.email }); //???
  } catch (error) {
    console.error("Error fetching post:", error.message);
    res.status(500).send("Server Error");
  }
};
