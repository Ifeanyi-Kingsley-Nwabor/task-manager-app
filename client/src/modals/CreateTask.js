import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const CreateTask = ({ modal, toggle, save }) => {
  const { REACT_APP_BACKEND_URL } = process.env;

  const [task, setTask] = useState("");
  const [assigned_to, setassigned_to] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "task") {
      setTask(value);
    } else if (name === "assigned_to") {
      setassigned_to(value);
    } else if (name === "date") {
      setDate(value);
    } else if (name === "time") {
      setTime(value);
    } else {
      setLocation(value);
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    const data = { task, assigned_to, date, time, location };
    try {
      const response = await fetch(`${REACT_APP_BACKEND_URL}/tasks/create`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const taskObj = await response.json();
      console.log(taskObj);
      save(taskObj);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Create Task</ModalHeader>
        <ModalBody>
          <div>
            <label>Task</label>
            <select
              className="form-select form-select-lg mb-3"
              aria-label=".form-select-lg example"
              value={task}
              onChange={handleChange}
              name="task"
            >
              <option defaultValue>Select Task</option>
              <option value="Mowing">Mowing</option>
              <option value="Fertilisation">Fertilisation</option>
              <option value="Irrigation">Irrigation</option>
              <option value="Aeration">Aeration</option>
            </select>
          </div>
          <div className="mb-3 form-group">
            <label>Assigned To</label>
            <input
              type="text"
              className="form-control"
              value={assigned_to}
              onChange={handleChange}
              name="assigned_to"
            />
          </div>
          <div className="mb-3 form-group">
            <label>Date</label>
            <input
              type="date"
              className="form-control"
              value={date}
              onChange={handleChange}
              name="date"
            />
          </div>
          <div className="mb-3 form-group">
            <label>Time</label>
            <input
              type="time"
              className="form-control"
              value={time}
              onChange={handleChange}
              name="time"
            />
          </div>
          <div className=" mb-3 form-group">
            <label>Location</label>
            <input
              type="text"
              className="form-control"
              value={location}
              onChange={handleChange}
              name="location"
            />
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSave}>
            Schedule
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default CreateTask;
