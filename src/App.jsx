import React from "react";
import { TaskForm } from "./TaskForm";
import { data } from "./task";
import TaskList from "./TaskList";
import { useState, useEffect } from "react";
export const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  const createTask = (titleTask) => {
    setTasks([
      ...tasks,
      {
        title: titleTask,
        id: 4,
        description: "nueva tarea",
      },
    ]);
  };

  return (
    <div>
      <TaskForm createTask={createTask} />
      <TaskList tasks={tasks} />
    </div>
  );
};
