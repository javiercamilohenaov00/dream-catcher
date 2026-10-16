import "dotenv/config"
import pool from "./config/database.js"

const { rows } = await pool.query("SELECT * FROM dreams")
console.log(rows)
await pool.end()