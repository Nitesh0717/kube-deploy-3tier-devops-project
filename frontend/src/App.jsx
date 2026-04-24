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

function App() {
  return (
    <div className="flex h-screen bg-gray-100 font-sans">

      {/* SIDEBAR */}
      <div className="w-64 bg-[#0f172a] text-white flex flex-col justify-between p-5">
        <div>
          <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <CheckCircle size={20} /> DevOps Todo
          </h2>

          {/* USER */}
          <div className="flex items-center gap-3 bg-[#1e293b] p-3 rounded-xl mb-6">
            <img
              src="https://i.pravatar.cc/40"
              className="rounded-full"
            />
            <div>
              <p className="text-sm font-medium">DevOps Learner</p>
              <p className="text-xs text-gray-400">devops@example.com</p>
            </div>
          </div>

          {/* MENU */}
          <div className="space-y-2">
            <div className="flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-lg">
              <Home size={16} /> My Tasks
            </div>
            <div className="flex items-center gap-3 text-gray-400">
              <CheckCircle size={16} /> Completed
            </div>
            <div className="flex items-center gap-3 text-gray-400">
              <BarChart size={16} /> Analytics
            </div>
            <div className="flex items-center gap-3 text-gray-400">
              <Settings size={16} /> Settings
            </div>
          </div>
        </div>

        {/* MOTIVATION */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-500 p-4 rounded-xl text-center">
          <p className="font-medium mb-1">Keep Going! 🚀</p>
          <p className="text-xs mb-2">
            You're building something awesome today.
          </p>
          <button className="bg-white text-black px-3 py-1 rounded-lg text-sm">
            Stay Motivated
          </button>
        </div>
      </div>

      {/* MAIN */}
      <div className="flex-1 p-6">

        {/* TOP BAR */}
        <div className="flex justify-end mb-4 text-gray-600">
          Hello, DevOps Learner 👋
        </div>

        {/* HERO */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6 rounded-xl flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-semibold">
              Good Morning! ☀️
            </h1>
            <p className="text-sm opacity-90">
              Let's get your tasks done today.
            </p>
          </div>

          <div className="flex gap-4">
            <Stat icon={<ListTodo />} value="5" label="Total Tasks" />
            <Stat icon={<Check />} value="2" label="Completed" />
            <Stat icon={<Clock />} value="3" label="Pending" />
          </div>
        </div>

        {/* ADD TASK */}
        <div className="bg-white p-4 rounded-xl shadow-sm mb-6">
          <h3 className="font-medium mb-3">Add a New Task</h3>
          <div className="flex gap-2">
            <input
              className="flex-1 border rounded-lg px-3 py-2 text-sm"
              placeholder="What needs to be done?"
            />
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 rounded-lg">
              + Add Task
            </button>
          </div>
        </div>

        {/* TASK LIST */}
        <div>
          <div className="flex justify-between mb-3">
            <h3 className="font-medium">Your Tasks</h3>
            <button className="text-sm border px-2 py-1 rounded">
              All Tasks
            </button>
          </div>

          <Task
            title="Learn Docker"
            priority="High"
            color="red"
          />
          <Task
            title="Setup Kubernetes Cluster"
            completed
          />
          <Task
            title="Deploy App to Kubernetes"
            priority="Medium"
            color="orange"
          />
          <Task
            title="Setup Monitoring with Prometheus"
            priority="Low"
            color="blue"
          />
        </div>
      </div>
    </div>
  );
}

/* COMPONENTS */

function Stat({ icon, value, label }) {
  return (
    <div className="bg-white text-black p-4 rounded-xl w-28 text-center shadow-sm">
      <div className="flex justify-center mb-1 text-purple-500">
        {icon}
      </div>
      <p className="font-semibold">{value}</p>
      <p className="text-xs text-gray-500">{label}</p>
    </div>
  );
}

function Task({ title, priority, color, completed }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm flex justify-between items-center mb-3">
      <div className="flex items-center gap-3">
        <input type="checkbox" checked={completed} readOnly />
        <div>
          <p
            className={`font-medium ${
              completed ? "line-through text-gray-400" : ""
            }`}
          >
            {title}
          </p>

          {!completed && priority && (
            <p className={`text-xs text-${color}-500`}>
              ● {priority} Priority
            </p>
          )}

          {completed && (
            <p className="text-xs text-green-500">
              Completed
            </p>
          )}
        </div>
      </div>

      <Trash2 className="text-red-500 cursor-pointer" size={18} />
    </div>
  );
}

export default App;
