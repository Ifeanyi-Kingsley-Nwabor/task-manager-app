const express = require("express");
const db = require("../database/db");

const getAllTasks = async (req, res) => {
  try {
    const allTodos = await db.query(
      `SELECT * FROM scheduled_tasks ORDER BY task_id ASC`
    );
    res.status(201).json(allTodos.rows);
  } catch (err) {
    console.log(err.message);
  }
};

const getOneTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await db.query(
      `SELECT * FROM scheduled_tasks WHERE task_id = $1`,
      [id]
    );
    res.status(201).json(task.rows);
  } catch (err) {
    console.log(err.message);
  }
};

const createTask = async (req, res) => {
  try {
    const { task, assigned_to, location, date, time } = req.body;
    const newTask = await db.query(
      `INSERT INTO scheduled_tasks (task, assigned_to, location, date, time)
            VALUES($1,$2,$3,$4,$5)
            RETURNING *
            `,
      [task, assigned_to, location, date, time]
    );
    res.status(201).json(newTask.rows[0]);
  } catch (err) {
    console.log(err.message);
  }
};

const updateTask = async (req, res) => {
  try {
    const { task, assigned_to, location, date, time } = req.body;
    const { id } = req.params;
    const editTask = await db.query(
      `
    UPDATE scheduled_tasks
    SET task=$1, assigned_to=$2, location=$3, date=$4, time=$5
    WHERE task_id=$6
    RETURNING *
    `,
      [task, assigned_to, location, date, time, id]
    );
    res.status(201).json(editTask.rows);
  } catch (err) {
    console.log(err.message);
  }
};

const deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const removeTask = {
      text: `
          DELETE FROM scheduled_tasks
          WHERE task_id=$1
          RETURNING *`,
      values: [id],
    };
    await db.query(removeTask).then((data) => {
      if (!data.rows.length) {
        res.status(404).send(`Invalid request.`);
      } else {
        res.status(200).json("Task has been successfully deleted!!!");
      }
    });
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = {
  getAllTasks,
  getOneTask,
  createTask,
  updateTask,
  deleteTask,
};
