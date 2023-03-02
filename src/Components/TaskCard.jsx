import React from "react";
import { MdDelete } from "react-icons/md";

export const TaskCard = ({ task, key }) => {
  return (
    <div className="taskCard">
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <MdDelete />
    </div>
  );
};
