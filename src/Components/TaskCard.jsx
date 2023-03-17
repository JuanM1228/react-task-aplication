import React from "react";
import { MdDelete } from "react-icons/md";

export const TaskCard = ({ task, key }) => {
  return (
    <div className="taskCard">
      <div>
        <h2>{task.title}</h2>
        <p>{task.description}</p>
      </div>
      <MdDelete className="iconDelete" />
    </div>
  );
};
