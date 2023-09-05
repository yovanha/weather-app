import { Pool } from "pg"

const pool = new Pool({
  user: "postgres",
  password: "1234",
  host: "localhost",
  port: 5434,
  database: "gfgbackend",
})

export default pool
