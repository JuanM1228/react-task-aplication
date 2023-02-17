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
  };
  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Escribe tu tarea" onChange={handleOnChangeInput} />
      <textarea
        placeholder="Escribe tu descripción"
        onChange={handleOnChangeTextArea}
      ></textarea>
      <button>Guardar</button>
    </form>
  );
};
