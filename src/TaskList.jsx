import React from "react";
import { tareas } from "./task";
import { useState, useEffect } from "react";

function TaskList() {
  const [task, setTask] = useState([]);

  useEffect(() => {
    setTask(tareas);
  }, []);

  if (task.length === 0) {
    return <h1>No hay tareas aun</h1>;
  }

  return (
    <div>
      {task.map((task) => (
        <div>tarea</div>
      ))}
    </div>
  );
}

export default TaskList;
