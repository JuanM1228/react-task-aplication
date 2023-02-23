import React from "react";
import { useState } from "react";

export const TaskForm = ({ createTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleOnChangeInput = (e) => {
    setTitle(e.target.value);
  };

  const handleOnChangeTextArea = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };
  return (
    <form onSubmit={handleSubmit} className="Form">
      <div className="inputs">
        <input
          placeholder="Write your task"
          onChange={handleOnChangeInput}
          value={title}
          autoFocus
        />
        <textarea
          placeholder="Description"
          onChange={handleOnChangeTextArea}
          value={description}
        ></textarea>
      </div>

      <button className="addTask">Add Task</button>
    </form>
  );
};
