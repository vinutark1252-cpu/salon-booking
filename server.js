const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// DB connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "salon_db"
});

db.connect(err => {
    if (err) throw err;
    console.log("Connected to DB");
});

// API
app.post("/book", (req, res) => {
    const { name, service, date } = req.body;

    const sql = "INSERT INTO bookings (name, service, date) VALUES (?, ?, ?)";
    db.query(sql, [name, service, date], (err) => {
        if (err) throw err;
        res.json({ message: "Done" });
    });
});

app.listen(3000, () => console.log("Server running"));