const express = require("express");
const app = express();
const {authAdmin,authStudent} = require("./middleware")
app.use(express.json());

app.get("/home", (req, res) => {
    res.json("HOME PAGE");
});

app.get("/admin",authAdmin(["admin","superadmin"]), (req, res) => {
    res.json("ADMIN PAGE");
});

app.get("/student", (req, res) => {
    res.json("STUDENT PAGE");
});

app.listen(5000, () => {
    console.log("listening")
});