import React from "react";
import { useState } from "react";

export const TaskForm = (createTask) => {
  const [title, setTitle] = useState("");

  const handleOnChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(title);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Escribe tu tarea" onChange={handleOnChange} />
      <button>Guardar</button>
    </form>
  );
};
