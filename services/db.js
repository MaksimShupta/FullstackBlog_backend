import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pg;

const db = new Pool({
    connectionString: process.env.DATABASE_URL,
});

db.connect()
    .then((client) => {
        console.log("Connected to PostgreSQL database");
        client.release();
    })
    .catch((err) => {
        console.error("Database connection error:", err.message);
        process.exit(1);
    });

export { db };
