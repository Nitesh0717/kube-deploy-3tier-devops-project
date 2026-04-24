import { useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Learn Docker", completed: false },
    { id: 2, title: "Deploy App to Kubernetes", completed: true },
  ]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (!input.trim()) return;
    setTasks([...tasks, { id: Date.now(), title: input, completed: false }]);
    setInput("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;
  const pending = total - completed;

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <div className="w-64 bg-[#0f172a] text-white p-6 flex flex-col justify-between">
        <div>
          <h1 className="text-xl font-bold mb-6">DevOps Todo</h1>

          <div className="mb-6">
            <p className="font-medium">DevOps Learner</p>
            <p className="text-sm text-gray-400">devops@example.com</p>
          </div>

          <nav className="space-y-2">
            <button className="w-full text-left px-3 py-2 rounded-lg bg-purple-600">
              My Tasks
            </button>
            <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-700">
              Completed
            </button>
            <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-700">
              Analytics
            </button>
            <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-700">
              Settings
            </button>
          </nav>
        </div>

        <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-4 rounded-lg">
          <p className="font-semibold">Keep Going 🚀</p>
          <button className="mt-2 bg-white text-black px-3 py-1 rounded">
            Stay Motivated
          </button>
        </div>
      </div>

      {/* Main */}
      <div className="flex-1 p-6">

        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6 rounded-xl mb-6">
          <h2 className="text-2xl font-bold">Good Morning! ☀️</h2>
          <p className="text-sm">Let's get your tasks done today.</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-4 rounded-xl shadow text-center">
            <p className="text-xl font-bold">{total}</p>
            <p className="text-sm text-gray-500">Total Tasks</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow text-center">
            <p className="text-xl font-bold text-green-500">{completed}</p>
            <p className="text-sm text-gray-500">Completed</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow text-center">
            <p className="text-xl font-bold text-orange-500">{pending}</p>
            <p className="text-sm text-gray-500">Pending</p>
          </div>
        </div>

        {/* Input */}
        <div className="flex gap-3 mb-6">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="What needs to be done?"
            className="flex-1 p-3 rounded-lg border"
          />
          <button
            onClick={addTask}
            className="bg-purple-600 text-white px-4 rounded-lg"
          >
            Add Task
          </button>
        </div>

        {/* Tasks */}
        <div className="space-y-3">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="bg-white p-4 rounded-xl shadow flex justify-between items-center"
            >
              <span
                className={`${
                  task.completed ? "line-through text-gray-400" : ""
                }`}
              >
                {task.title}
              </span>
              <button
                onClick={() => deleteTask(task.id)}
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
