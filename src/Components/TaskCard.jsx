import React from "react";
import { MdDelete } from "react-icons/md";

export const TaskCard = ({ task, key }) => {
  return (
    <div className="taskCard">
      <div>
        <h1>{task.title}</h1>
        <p>{task.description}</p>
      </div>
      <MdDelete />
    </div>
  );
};
