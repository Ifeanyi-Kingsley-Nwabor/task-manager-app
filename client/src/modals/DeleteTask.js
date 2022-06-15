import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const DeleteTask = ({ modal, toggle, taskObj }) => {
  const { REACT_APP_BACKEND_URL } = process.env;

  const handleDeleteTask = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${REACT_APP_BACKEND_URL}/tasks/${taskObj.task_id}`,
        {
          method: "DELETE",
          headers: {
            Accept: "application/json",
            "Content-type": "application/json",
          },
        }
      );
      const data = await response.json();
      console.log(data);
      window.location.reload();
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <div>
      <div>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Delete Task</ModalHeader>
          <ModalBody>
            Are you sure you would like to delete this task?
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={handleDeleteTask}>
              Delete Task
            </Button>{" "}
            <Button onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  );
};

export default DeleteTask;
