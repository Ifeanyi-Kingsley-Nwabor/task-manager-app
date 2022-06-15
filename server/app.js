require("dotenv").config();
const createError = require("http-errors");
const express = require("express");
const cors = require("cors");

const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const tasksRouter = require("./routes/tasks");

const app = express();

app.use(cors());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/tasks", tasksRouter);

module.exports = app;
