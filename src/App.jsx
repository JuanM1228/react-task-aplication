import React from "react";
import { TaskForm } from "./TaskForm";
import TaskList from "./TaskList";
export const App = () => {
  return (
    <div>
      <TaskForm />
      <TaskList />
    </div>
  );
};
