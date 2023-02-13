import React from "react";
import { useState } from "react";

export const TaskForm = () => {
  const [title, setTitle] = useState("");

  const handleOnChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Escribe tu tarea" onChange={handleOnChange} />
      <button>Guardar</button>
    </form>
  );
};
