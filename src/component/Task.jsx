import React from "react";

const Task = ({ task, clickEDit, changeContent, removeTask, doneTask }) => {
  return (
    <div className="row align-items-center">
      <p className="mr-auto">{task.content}</p>
      <input
        type="text"
        value={task.content}
        onChange={e => changeContent(e, task)}
        className={task.isEdit ? "d-inline" : "d-none"}
      />
      <span className="ml-auto">
        <button
          className="mr-3 btn btn-success border"
          onClick={e => doneTask(task)}
        >
          Done
        </button>
        <button className="mr-3 btn btn-warning" onClick={e => clickEDit(task)}>
          Edit
        </button>
        <button className="mr-3 btn btn-danger" onClick={e => removeTask(task)}>
          Remove
        </button>
      </span>
    </div>
  );
};
export default Task;
