import express from "express"; // import express
import dotenv from "dotenv"; // import dotenv
import pg from "pg"; //  client for node

dotenv.config(); // load environment variables

const { Pool } = pg; // create a new pool instance
const app = express(); // create an express app
const PORT = process.env.PORT || 5000; // port setup
const db = new Pool({
  connectionString: process.env.DATABASE_URL,
});

app.get("/", (req, res) => {
  res.send("hello world from nodejs!!!!!");
}); //msg from nodejs

// test database connection on startup
db.connect()
  .then((client) => {
    console.log("connected db");
    client.release();
  })
  .catch((err) => {
    console.error("error db", err.message);
    process.exit(1);
  });

app.listen(PORT, () =>
  console.log(`server running on port ${PORT} http://localhost:${PORT}/`)
); // server port 5000

export { db };
