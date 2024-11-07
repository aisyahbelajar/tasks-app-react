import { Button } from "../../ui/button";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import { Input } from "../../ui/input";
import "./profile.css";

function Main({ className, ...props }) {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task) {
      setTasks([
        ...tasks,
        {
          id: Date.now(),
          name: task,
          done: false,
        },
      ]);
      setTask("");
    }
  };

  const handleToggleDone = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, done: !task.done } : task
    );
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const completedTasks = tasks.filter((task) => task.done);
  const toDoTasks = tasks.filter((task) => !task.done);

  return (
    <Card className={cn("w-[380px] mt-10 mb-10", className)} {...props}>
      <CardContent className="flex items-center space-x-4 mt-4">
        <Input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter your task"
          className="flex-2"
        />
        <Button onClick={handleAddTask} size="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-plus"
          >
            <path d="M5 12h14" />
            <path d="M12 5v14" />
          </svg>
        </Button>
      </CardContent>

      {/* Task To Do */}
      <CardHeader>
        <CardTitle>Task To Do - {toDoTasks.length}</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-2">
        {toDoTasks.map((task, index) => (
          <div
            key={task.id}
            className="grid grid-cols-6 items-center space-x-4 rounded-md border p-4"
          >
            <div className="col-start-1 col-end-5">
              <p className="text-sm font-medium leading-none">{task.name}</p>
            </div>
            <div className="col-start-5">
              <Button onClick={() => handleToggleDone(task.id)} size="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-check"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </Button>
            </div>
            <div className="col-start-6">
              <Button onClick={() => handleDeleteTask(task.id)} size="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-trash-2"
                >
                  <path d="M3 6h18" />
                  <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                  <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                  <line x1="10" x2="10" y1="11" y2="17" />
                  <line x1="14" x2="14" y1="11" y2="17" />
                </svg>
              </Button>
            </div>
          </div>
        ))}
      </CardContent>

      {/* Completed Tasks */}
      <CardHeader>
        <CardTitle>Completed Tasks - {completedTasks.length}</CardTitle>
      </CardHeader>
      <CardContent>
        {completedTasks.map((task) => (
          <div
            key={task.id}
            className="flex items-center space-x-4 rounded-md border p-4"
          >
            <p>{task.name}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export default Main;
