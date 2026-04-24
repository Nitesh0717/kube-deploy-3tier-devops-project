import React from "react";

function App() {
  return (
    <div className="flex h-screen bg-gray-100">

      {/* Sidebar */}
      <div className="w-64 bg-[#0f172a] text-white p-5 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold mb-6">DevOps Todo</h2>

          <div className="mb-6">
            <p className="font-semibold">DevOps Learner</p>
            <p className="text-sm text-gray-400">devops@example.com</p>
          </div>

          <ul className="space-y-3">
            <li className="bg-purple-600 p-2 rounded">My Tasks</li>
            <li className="text-gray-400">Completed</li>
            <li className="text-gray-400">Analytics</li>
            <li className="text-gray-400">Settings</li>
          </ul>
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-blue-500 p-4 rounded">
          <p className="font-semibold">Keep Going 🚀</p>
          <button className="mt-2 bg-white text-black px-3 py-1 rounded">
            Stay Motivated
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-auto">

        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded text-white mb-6">
          <h1 className="text-2xl font-bold">Good Morning! ☀️</h1>
          <p>Let's get your tasks done today.</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-4 rounded shadow">Total Tasks: 5</div>
          <div className="bg-white p-4 rounded shadow">Completed: 2</div>
          <div className="bg-white p-4 rounded shadow">Pending: 3</div>
        </div>

        {/* Add Task */}
        <div className="bg-white p-4 rounded shadow mb-6 flex gap-2">
          <input
            className="border p-2 flex-1"
            placeholder="What needs to be done?"
          />
          <button className="bg-purple-600 text-white px-4 rounded">
            Add Task
          </button>
        </div>

        {/* Task List */}
        <div className="space-y-3">
          <div className="bg-white p-4 rounded shadow flex justify-between">
            <span>Learn Docker</span>
            <button className="text-red-500">Delete</button>
          </div>

          <div className="bg-white p-4 rounded shadow flex justify-between">
            <span>Deploy to Kubernetes</span>
            <button className="text-red-500">Delete</button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
