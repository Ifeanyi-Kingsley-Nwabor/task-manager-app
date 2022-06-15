import React, { useState, useEffect } from "react";
import CreateTask from "../modals/CreateTask";
import Card from "./Card";

const Tasks = () => {
  const [modal, setModal] = useState(false);

  const [taskList, setTaskList] = useState();
  const { REACT_APP_BACKEND_URL } = process.env;

  useEffect(() => {
    let arr = localStorage.getItem("taskList");
    if (arr) {
      let obj = JSON.parse(arr);
      setTaskList(obj);
    }
  }, []);

  const toggle = () => {
    setModal(!modal);
  };

  const updateListArray = (obj, index) => {
    let newList = taskList;
    newList[index] = obj;
    localStorage.setItem("taskList", JSON.stringify(newList));
    setTaskList(newList);
    setModal(false);
    window.location.reload();
  };

  const saveTask = (taskObj) => {
    let newList = taskList;
    newList.push(taskObj);
    localStorage.setItem("taskList", JSON.stringify(newList));
    setTaskList(newList);
    setModal(false);
  };

  const getAllTasks = async () => {
    try {
      const res = await fetch(`${REACT_APP_BACKEND_URL}/tasks`);
      const data = await res.json();
      setTaskList(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getAllTasks();
  }, []);

  return (
    <>
      <div className="header text-center">
        <h3>Task Organiser 3.0</h3>
        <button className="mt-4 btn btn-primary" onClick={() => setModal(true)}>
          Schedule New Task
        </button>
      </div>

      <div className="task-container">
        {taskList &&
          taskList.map((task, index) => (
            <div key={index}>
              <Card
                taskObj={task}
                index={index}
                updateListArray={updateListArray}
              />
            </div>
          ))}
      </div>
      <CreateTask toggle={toggle} modal={modal} save={saveTask} />
    </>
  );
};

export default Tasks;
