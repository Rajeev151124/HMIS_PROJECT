const express = require("express");
const { Pool } = require("pg");

const app = express();
app.use(express.json());

const pool = new Pool({
  host: "postgres",
  user: "postgres",
  password: "postgres",
  database: "hmis",
  port: 5432
});

app.post("/appointments", async (req, res) => {
  const { patient_id, date } = req.body;

  const result = await pool.query(
    "INSERT INTO appointments(patient_id, date) VALUES($1,$2) RETURNING *",
    [patient_id, date]
  );

  res.json(result.rows[0]);
});

app.listen(3001, () => console.log("Appointment service running"));
