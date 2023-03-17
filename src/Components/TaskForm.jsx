import React from "react";
import { useState } from "react";
import { BsArrowRightCircle } from "react-icons/bs";

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
      <div className="input">
        <h5>Name</h5>
        <input
          placeholder="Write your task"
          onChange={handleOnChangeInput}
          value={title}
          className="textInput"
          autoFocus
        />
      </div>
      <div className="input">
        <h5>Description</h5>
        <textarea
          placeholder="Write your descripion"
          onChange={handleOnChangeTextArea}
          value={description}
          className="textInput"
        ></textarea>
      </div>
      <button className="addTask">
        <p>Add task</p>
      </button>
    </form>
  );
};
