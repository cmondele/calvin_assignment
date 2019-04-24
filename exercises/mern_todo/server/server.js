const express = require("express");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/mern_todo");
const app = express();

app.listen(5000, () => console.log("Server is Running on port 5000"));
