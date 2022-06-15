const express = require("express");
const taskRouter = express.Router();

const {
  getAllTasks,
  getOneTask,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/taskControllers");

/* GET home page. */
taskRouter.get("/", getAllTasks);
taskRouter.get("/:id", getOneTask);

taskRouter.post("/create", createTask);
taskRouter.put("/:id", updateTask);
taskRouter.delete("/:id", deleteTask);

module.exports = taskRouter;
