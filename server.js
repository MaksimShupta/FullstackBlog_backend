import express from "express"; // import express
import dotenv from "dotenv"; // import dotenv
import cors from "cors"; // import cors
import postRoutes from "./routes/posts.js"; // import post routes

dotenv.config(); // load environment variables

// create a new pool instance
const app = express(); // create an express app
const PORT = process.env.PORT || 5001; // port setup
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    credentials: true,
  })
); // middleware cors setup
app.use(express.json()); // middleware for JSON parsing

app.get("/", (req, res) => {
  res.send("hello world from nodejs!!!!!");
}); //msg from nodejs

app.use("/api", postRoutes); // api routes

app.listen(PORT, () =>
  console.log(`server running on port ${PORT} http://localhost:${PORT}/`)
); // server port 5001
