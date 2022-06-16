import { useState } from "react";

export const TaskCreator = ({ createNewTask }) => {
  const [newTaskName, setNewTaskName] = useState("");

  const handleTaskName = (event) => {
    setNewTaskName(event.target.value);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    createNewTask(newTaskName);
    setNewTaskName("");
  };

  return (
    <form onSubmit={handleSubmitForm} className="my-2 row">
      <div className="col-9">
        <input
          type="text"
          placeholder="Enter a new task"
          value={newTaskName}
          onChange={handleTaskName}
          className="form-control "
        />
      </div>
      <div className="col-3">
        <button className="btn btn-primary btn-sm">Save task</button>
      </div>
    </form>
  );
};
