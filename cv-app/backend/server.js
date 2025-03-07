const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

let userSession = null;
let cvData = null;

// Route untuk login
app.post("/login", (req, res) => {
    const { email, password } = req.body;
    const domain = email.split("@")[1];

    if (password !== domain) {
        return res.status(401).json({ message: "Password salah!" });
    }
    
    userSession = { email };
    res.json({ message: "Login berhasil", email });
});

// Route untuk menyimpan data CV
app.post("/save-cv", (req, res) => {
    if (!userSession) return res.status(401).json({ message: "Unauthorized" });

    cvData = { ...req.body, email: userSession.email };
    res.json({ message: "CV berhasil disimpan" });
});

// Route untuk mendapatkan data CV
app.get("/get-cv", (req, res) => {
    if (!cvData) return res.status(404).json({ message: "CV tidak ditemukan" });
    res.json(cvData);
});

app.listen(5000, () => console.log("Server berjalan di port 5000"));
