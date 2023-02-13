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

  const createTask = (task) => {
    [...tasks, task];
  };

  return (
    <div>
      <TaskForm createTask={createTask} />
      <TaskList tasks={tasks} />
    </div>
  );
};
