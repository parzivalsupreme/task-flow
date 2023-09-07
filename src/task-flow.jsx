import React, { useState } from "react";

function Tasks({ tasks, setTasks }) {
  const deleteTask = (indexToDelete) => {
    const updatedTasks = tasks.filter((_, index) => index !== indexToDelete);
    setTasks(updatedTasks);
  };

  return (
    <div className="button-85">
      {tasks.map((task, index) => (
        <div className="task" key={index} onClick={() => deleteTask(index)}>
          {task}
        </div>
      ))}
    </div>
  );
}

function AddTask({ tasks, setTasks, maxTasks }) {
  const [newTask, setNewTask] = useState("");

  const addItem = (e) => {
    e.preventDefault();
    if (newTask.trim() !== "" && tasks.length < maxTasks) {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  return (
    <div className="addTask">
      <div className="addTaskForm">
        <form onSubmit={addItem}>
          <label id="Submit">
            <input
              type="text"
              value={newTask}
              placeholder="Add a Task"
              onChange={(e) => setNewTask(e.target.value)}
            />
            <button type="submit">✙</button>
          </label>
        </form>
      </div>
    </div>
  );
}

export default function TaskFlow() {
  const [tasks, setTasks] = useState([]);
  const maxTasks = 7;

  return (
    <>
      <AddTask tasks={tasks} setTasks={setTasks} maxTasks={maxTasks} />
      <Tasks tasks={tasks} setTasks={setTasks} />
    </>
  );
}