import { useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (!input.trim()) return;
    setTasks([...tasks, { text: input, completed: false }]);
    setInput("");
  };

  const deleteTask = (i) => {
    setTasks(tasks.filter((_, index) => index !== i));
  };

  const toggleTask = (i) => {
    const updated = [...tasks];
    updated[i].completed = !updated[i].completed;
    setTasks(updated);
  };

  const completed = tasks.filter(t => t.completed).length;
  const pending = tasks.length - completed;

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <div className="w-64 bg-[#0f172a] text-white p-5">
        <h1 className="text-xl font-bold mb-6">DevOps Todo</h1>

        <div className="space-y-3">
          <p className="bg-gradient-to-r from-purple-500 to-blue-500 p-2 rounded">
            My Tasks
          </p>
          <p>Completed</p>
          <p>Analytics</p>
          <p>Settings</p>
        </div>
      </div>

      {/* Main */}
      <div className="flex-1 p-6">

        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6 rounded-xl mb-6">
          <h2 className="text-2xl font-bold">Good Morning! ☀️</h2>
          <p>Let’s get your tasks done today.</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-4 rounded shadow">Total: {tasks.length}</div>
          <div className="bg-white p-4 rounded shadow">Completed: {completed}</div>
          <div className="bg-white p-4 rounded shadow">Pending: {pending}</div>
        </div>

        {/* Input */}
        <div className="flex gap-2 mb-6">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 p-3 border rounded"
            placeholder="What needs to be done?"
          />
          <button
            onClick={addTask}
            className="bg-purple-500 text-white px-4 rounded"
          >
            Add Task
          </button>
        </div>

        {/* Tasks */}
        <div className="space-y-3">
          {tasks.map((task, i) => (
            <div
              key={i}
              className="bg-white p-4 rounded shadow flex justify-between items-center"
            >
              <div
                onClick={() => toggleTask(i)}
                className={`cursor-pointer ${
                  task.completed ? "line-through text-gray-400" : ""
                }`}
              >
                {task.text}
              </div>

              <button
                onClick={() => deleteTask(i)}
                className="text-red-500"
              >
                Delete
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
