const express = require("express");
const { Pool } = require("pg");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const pool = new Pool({
  host: "postgres",
  user: "postgres",
  password: "postgres",
  database: "hmis",
  port: 5432
});

app.post("/patients", async (req, res) => {
  const { name, age, disease } = req.body;
  const result = await pool.query(
    "INSERT INTO patients(name, age, disease) VALUES($1,$2,$3) RETURNING *",
    [name, age, disease]
  );
  res.json(result.rows[0]);
});

app.get("/patients", async (req, res) => {
  const result = await pool.query("SELECT * FROM patients");
  res.json(result.rows);
});

app.listen(3000, () => console.log("Patient service running"));
