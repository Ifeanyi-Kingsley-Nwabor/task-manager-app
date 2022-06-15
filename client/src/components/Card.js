import React, { useState } from "react";
import DeleteTask from "../modals/DeleteTask";
import EditTask from "../modals/EditTask";

const Card = ({ taskObj, index, updateListArray }) => {
  const [modal, setModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  const toggleDeleteModal = () => {
    setDeleteModal(!deleteModal);
  };

  const updateTask = (obj) => {
    updateListArray(obj, index);
  };

  return (
    <div className="card-wrapper mr-5 ">
      <div className="task-holder">
        <span className="card-header"> {taskObj["task"]} </span>
        <div className="divider"></div>

        <div>
          <p className="mt-3">Assigned to: {taskObj["assigned_to"]}</p>
          <p className="mt-3">Location: {taskObj["location"]}</p>
          <p className="mt-3">
            Scheduled Date: {taskObj["date"].split("T")[0]}
          </p>
          <p className="mt-3">Scheduled Time: {taskObj["time"]}</p>
        </div>

        <div className="icon-container">
          <i
            className="far fa-edit mr-5 edit-icon"
            onClick={() => setModal(true)}
          ></i>
          <i
            className="fas fa-trash-alt delete-icon"
            onClick={() => setDeleteModal(true)}
          ></i>
        </div>
      </div>
      <EditTask
        modal={modal}
        toggle={toggle}
        updateTask={updateTask}
        taskObj={taskObj}
      />

      <DeleteTask
        modal={deleteModal}
        toggle={toggleDeleteModal}
        taskObj={taskObj}
      />
    </div>
  );
};

export default Card;
