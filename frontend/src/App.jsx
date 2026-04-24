import { useState } from "react";
import {
  Home,
  CheckCircle,
  BarChart,
  Settings,
  Trash2,
  ListTodo,
  Check,
  Clock,
} from "lucide-react";

export default function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Learn Docker", completed: false, priority: "High" },
    { id: 2, title: "Deploy to Kubernetes", completed: false, priority: "Medium" },
  ]);

  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");

  // ➕ Add Task
  const addTask = () => {
    if (!input.trim()) return;
    setTasks([
      ...tasks,
      {
        id: Date.now(),
        title: input,
        completed: false,
        priority: "Low",
      },
    ]);
    setInput("");
  };

  // ❌ Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  // ✅ Toggle Complete
  const toggleTask = (id) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  // 📊 Stats
  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;
  const pending = total - completed;

  // 🔍 Filter
  const filteredTasks =
    filter === "completed"
      ? tasks.filter((t) => t.completed)
      : filter === "pending"
      ? tasks.filter((t) => !t.completed)
      : tasks;

  const colors = {
    High: "text-red-500",
    Medium: "text-orange-500",
    Low: "text-blue-500",
  };

  return (
    <div className="flex h-screen bg-gray-100">

      {/* SIDEBAR */}
      <div className="w-64 bg-[#0f172a] text-white p-5 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <CheckCircle size={18} /> DevOps Todo
          </h2>

          <div className="bg-[#1e293b] p-3 rounded-lg mb-6">
            <p className="text-sm">DevOps Learner</p>
            <p className="text-xs text-gray-400">devops@example.com</p>
          </div>

          <div className="space-y-2">
            <button
              onClick={() => setFilter("all")}
              className="w-full flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded"
            >
              <Home size={16} /> My Tasks
            </button>

            <button
              onClick={() => setFilter("completed")}
              className="w-full flex items-center gap-2 text-gray-400 hover:text-white"
            >
              <CheckCircle size={16} /> Completed
            </button>

            <button className="w-full flex items-center gap-2 text-gray-400">
              <BarChart size={16} /> Analytics
            </button>

            <button className="w-full flex items-center gap-2 text-gray-400">
              <Settings size={16} /> Settings
            </button>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-blue-500 p-4 rounded-lg text-center">
          <p className="text-sm">Keep Going 🚀</p>
          <button className="bg-white text-black px-3 py-1 rounded mt-2 text-sm">
            Stay Motivated
          </button>
        </div>
      </div>

      {/* MAIN */}
      <div className="flex-1 p-6">

        {/* HEADER */}
        <div className="flex justify-end mb-4 text-gray-600">
          Hello, DevOps Learner 👋
        </div>

        {/* HERO */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6 rounded-xl flex justify-between items-center mb-6">
          <div>
            <h1 className="text-xl font-semibold">Good Morning! ☀️</h1>
            <p className="text-sm">Let's get your tasks done today.</p>
          </div>

          <div className="flex gap-4">
            <Stat icon={<ListTodo />} value={total} label="Total" />
            <Stat icon={<Check />} value={completed} label="Done" />
            <Stat icon={<Clock />} value={pending} label="Pending" />
          </div>
        </div>

        {/* ADD TASK */}
        <div className="bg-white p-4 rounded-xl shadow mb-6 flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 border rounded px-3 py-2"
            placeholder="What needs to be done?"
          />
          <button
            onClick={addTask}
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 rounded"
          >
            Add Task
          </button>
        </div>

        {/* TASKS */}
        <div className="space-y-3">
          {filteredTasks.map((task) => (
            <div
              key={task.id}
              className="bg-white p-4 rounded-xl shadow flex justify-between items-center"
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                />
                <div>
                  <p
                    className={`font-medium ${
                      task.completed ? "line-through text-gray-400" : ""
                    }`}
                  >
                    {task.title}
                  </p>

                  {!task.completed && (
                    <p className={`text-xs ${colors[task.priority]}`}>
                      ● {task.priority}
                    </p>
                  )}

                  {task.completed && (
                    <p className="text-xs text-green-500">Completed</p>
                  )}
                </div>
              </div>

              <Trash2
                onClick={() => deleteTask(task.id)}
                className="text-red-500 cursor-pointer"
                size={18}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* STAT COMPONENT */
function Stat({ icon, value, label }) {
  return (
    <div className="bg-white text-black p-3 rounded-xl w-24 text-center">
      <div className="flex justify-center text-purple-500">{icon}</div>
      <p className="font-semibold">{value}</p>
      <p className="text-xs text-gray-500">{label}</p>
    </div>
  );
}
