import React from "react";

function App() {
  return (
    <div className="flex h-screen bg-gray-100">

      {/* Sidebar */}
      <div className="w-64 bg-[#0f172a] text-white p-5 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            ✔ DevOps Todo
          </h2>

          <div className="flex items-center gap-3 mb-6 bg-[#1e293b] p-3 rounded-lg">
            <img
              src="https://i.pravatar.cc/40"
              className="rounded-full"
            />
            <div>
              <p className="font-semibold text-sm">DevOps Learner</p>
              <p className="text-xs text-gray-400">devops@example.com</p>
            </div>
          </div>

          <ul className="space-y-2">
            <li className="bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded">
              🏠 My Tasks
            </li>
            <li className="text-gray-400">✔ Completed</li>
            <li className="text-gray-400">📊 Analytics</li>
            <li className="text-gray-400">⚙ Settings</li>
          </ul>
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-blue-500 p-4 rounded-lg text-center">
          <p className="font-semibold mb-1">Keep Going! 🚀</p>
          <p className="text-xs mb-2">
            You're building something awesome today.
          </p>
          <button className="bg-white text-black px-3 py-1 rounded">
            Stay Motivated
          </button>
        </div>
      </div>

      {/* Main */}
      <div className="flex-1 p-6 overflow-auto">

        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-gray-700 font-semibold">
            Hello, DevOps Learner 👋
          </h2>
        </div>

        {/* Banner */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded-xl text-white mb-6 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Good Morning! ☀️</h1>
            <p className="text-sm">Let's get your tasks done today.</p>
          </div>

          <div className="flex gap-3">
            <div className="bg-white text-black p-4 rounded-xl text-center w-24">
              <p className="text-xl font-bold">5</p>
              <p className="text-xs">Total</p>
            </div>
            <div className="bg-white text-black p-4 rounded-xl text-center w-24">
              <p className="text-xl font-bold text-green-500">2</p>
              <p className="text-xs">Done</p>
            </div>
            <div className="bg-white text-black p-4 rounded-xl text-center w-24">
              <p className="text-xl font-bold text-orange-500">3</p>
              <p className="text-xs">Pending</p>
            </div>
          </div>
        </div>

        {/* Add Task */}
        <div className="bg-white p-4 rounded-xl shadow mb-6">
          <h3 className="font-semibold mb-2">Add a New Task</h3>
          <div className="flex gap-2">
            <input
              className="border p-2 flex-1 rounded-lg"
              placeholder="What needs to be done?"
            />
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 rounded-lg">
              + Add Task
            </button>
          </div>
        </div>

        {/* Tasks */}
        <h3 className="font-semibold mb-3">Your Tasks</h3>

        <div className="space-y-3">

          {/* Task 1 */}
          <div className="bg-white p-4 rounded-xl shadow flex justify-between items-center">
            <div className="flex items-center gap-3">
              <input type="radio" />
              <div>
                <p className="font-semibold">Learn Docker 🚢</p>
                <p className="text-xs text-red-500">● High Priority</p>
              </div>
            </div>
            <button className="text-red-500">🗑</button>
          </div>

          {/* Task 2 */}
          <div className="bg-white p-4 rounded-xl shadow flex justify-between items-center">
            <div className="flex items-center gap-3">
              <input type="checkbox" checked />
              <div>
                <p className="font-semibold line-through text-gray-400">
                  Setup Kubernetes Cluster ⚙️
                </p>
                <p className="text-xs text-green-500">Completed</p>
              </div>
            </div>
            <button className="text-red-500">🗑</button>
          </div>

          {/* Task 3 */}
          <div className="bg-white p-4 rounded-xl shadow flex justify-between items-center">
            <div className="flex items-center gap-3">
              <input type="radio" />
              <div>
                <p className="font-semibold">
                  Deploy App to Kubernetes 🚀
                </p>
                <p className="text-xs text-orange-500">
                  ● Medium Priority
                </p>
              </div>
            </div>
            <button className="text-red-500">🗑</button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
