import { useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState([
    { text: "Learn Docker", priority: "High", completed: false },
    { text: "Setup Kubernetes Cluster", priority: "High", completed: true },
    { text: "Deploy App to Kubernetes", priority: "Medium", completed: false },
    { text: "Setup CI/CD Pipeline", priority: "Medium", completed: true },
    { text: "Setup Monitoring with Prometheus", priority: "Low", completed: false },
  ]);

  const [input, setInput] = useState("");

  const addTask = () => {
    if (!input.trim()) return;
    setTasks([
      ...tasks,
      { text: input, priority: "Low", completed: false },
    ]);
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

  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;
  const pending = total - completed;

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* SIDEBAR */}
      <div className="w-64 bg-[#0f172a] text-white p-5 flex flex-col justify-between">
        <div>
          <h1 className="text-xl font-bold mb-6">DevOps Todo</h1>

          <div className="bg-[#1e293b] p-3 rounded mb-6">
            <p className="font-semibold">DevOps Learner</p>
            <p className="text-sm text-gray-400">devops@example.com</p>
          </div>

          <div className="space-y-2">
            <p className="bg-gradient-to-r from-purple-500 to-blue-500 p-2 rounded cursor-pointer">
              My Tasks
            </p>
            <p className="cursor-pointer">Completed</p>
            <p className="cursor-pointer">Analytics</p>
            <p className="cursor-pointer">Settings</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-4 rounded">
          <p className="font-semibold">Keep Going 🚀</p>
          <button className="bg-white text-black px-3 py-1 rounded mt-2">
            Stay Motivated
          </button>
        </div>
      </div>

      {/* MAIN */}
      <div className="flex-1 p-6">

        {/* HEADER */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6 rounded-xl mb-6">
          <h2 className="text-2xl font-bold">Good Morning! ☀️</h2>
          <p>Let’s get your tasks done today.</p>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-4 rounded shadow text-center">
            <p className="text-xl font-bold">{total}</p>
            <p>Total Tasks</p>
          </div>
          <div className="bg-white p-4 rounded shadow text-center">
            <p className="text-xl font-bold text-green-500">{completed}</p>
            <p>Completed</p>
          </div>
          <div className="bg-white p-4 rounded shadow text-center">
            <p className="text-xl font-bold text-orange-500">{pending}</p>
            <p>Pending</p>
          </div>
        </div>

        {/* INPUT */}
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

        {/* TASK LIST */}
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
                <span className="ml-2 text-sm text-gray-500">
                  ({task.priority})
                </span>
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
