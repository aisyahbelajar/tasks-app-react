import React, { useEffect, useState } from "react";
import { Button } from "../../ui/button";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { Input } from "../../ui/input";
import { taskApi } from "../../../api/taskApi";

function Main({ className, ...props }) {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const fetchedTasks = await taskApi.getTasks();
        setTasks(fetchedTasks || []);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, []);

  const handleAddTask = async () => {
    if (task.trim()) {
      try {
        const addedTask = await taskApi.addTask(task);
        if (addedTask) {
          const fetchedTasks = await taskApi.getTasks();
          setTasks(fetchedTasks || []);
          setTask("");
        } else {
          console.error("Task not added. Please try again.");
        }
      } catch (error) {
        console.error("Error adding task:", error);
      }
    } else {
      console.error("Task title cannot be empty.");
    }
  };

  const handleToggleDone = async (id) => {
    try {
      await taskApi.updateTaskStatus(id);

      const updatedTasks = tasks.map((task) =>
        task._id === id ? { ...task, isDone: !task.isDone } : task
      );
      setTasks(updatedTasks);
    } catch (error) {
      console.error("Error updating task status:", error);
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      await taskApi.deleteTask(id);

      const updatedTasks = tasks.filter((task) => task._id !== id);
      setTasks(updatedTasks);
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const completedTasks = tasks.filter((task) => task.isDone);
  const toDoTasks = tasks.filter((task) => !task.isDone);

  return (
    <Card className={cn("w-[380px] mt-10 mb-10", className)} {...props}>
      <CardContent className="flex items-center space-x-4 text-white mt-4">
        <Input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter your task"
          className="flex-2 border-[#987dca]"
        />
        <Button className="bg-[#987dca]" onClick={handleAddTask} size="icon">
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

      {/* Render Task Lists */}
      <CardHeader>
        <CardTitle className="text-white">
          Task To Do - {toDoTasks.length}
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-2">
        {toDoTasks.length > 0 ? (
          toDoTasks.map((task) => (
            <div
              key={task.id}
              className="grid grid-cols-6 items-center space-x-4 rounded-md bg-[#0d0713] p-4"
            >
              <div className="col-start-1 col-end-5">
                <p className="text-sm leading-none text-[#987dca]">
                  {task.title}
                </p>
              </div>
              <div className="col-start-5">
                <Button
                  className="bg-[#987dca]"
                  onClick={() => handleToggleDone(task._id)}
                  size="icon"
                >
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
                <Button
                  className="bg-[#987dca]"
                  onClick={() => handleDeleteTask(task._id)}
                  size="icon"
                >
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
          ))
        ) : (
          <p className="text-white">No tasks to do</p>
        )}
      </CardContent>

      {/* Completed Tasks */}
      <CardHeader>
        <CardTitle className="text-white">
          Completed Tasks - {completedTasks.length}
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-2">
        {completedTasks.length > 0 ? (
          completedTasks.map((task) => (
            <div
              key={task.id}
              className="flex items-center space-x-4 rounded-md border bg-[#0d0713] p-4"
            >
              <p className="text-green-600 text-sm leading-none">
                {task.title}
              </p>
            </div>
          ))
        ) : (
          <p className="text-white">No completed tasks</p>
        )}
      </CardContent>
    </Card>
  );
}

export default Main;
