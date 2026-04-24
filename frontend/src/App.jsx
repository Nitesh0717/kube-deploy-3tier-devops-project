function App() {
  return (
    <div className="flex h-screen bg-gray-100">

      {/* Sidebar */}
      <div className="w-64 bg-[#0f172a] text-white p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            ✔ DevOps Todo
          </h2>

          <div className="bg-[#1e293b] p-4 rounded-lg mb-6">
            <p className="font-semibold">DevOps Learner</p>
            <p className="text-sm text-gray-400">devops@example.com</p>
          </div>

          <ul className="space-y-3">
            <li className="bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded">
              My Tasks
            </li>
            <li className="text-gray-400">Completed</li>
            <li className="text-gray-400">Analytics</li>
            <li className="text-gray-400">Settings</li>
          </ul>
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-blue-500 p-4 rounded-lg text-center">
          <p className="font-semibold mb-2">Keep Going! 🚀</p>
          <p className="text-sm mb-2">You're building something awesome today.</p>
          <button className="bg-white text-black px-3 py-1 rounded">
            Stay Motivated
          </button>
        </div>
      </div>

      {/* Main */}
      <div className="flex-1 p-6 overflow-auto">

        {/* Top Greeting */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-gray-700 font-semibold">
            Hello, DevOps Learner 👋
          </h2>
        </div>

        {/* Gradient Banner */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded-xl text-white mb-6 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Good Morning! ☀️</h1>
            <p>Let's get your tasks done today.</p>
          </div>

          <div className="flex gap-4">
            <div className="bg-white text-black p-3 rounded-lg text-center">
              <p className="text-xl font-bold">5</p>
              <p className="text-sm">Total Tasks</p>
            </div>

            <div className="bg-white text-black p-3 rounded-lg text-center">
              <p className="text-xl font-bold">2</p>
              <p className="text-sm">Completed</p>
            </div>

            <div className="bg-white text-black p-3 rounded-lg text-center">
              <p className="text-xl font-bold">3</p>
              <p className="text-sm">Pending</p>
            </div>
          </div>
        </div>

        {/* Add Task */}
        <div className="bg-white p-4 rounded-xl shadow mb-6">
          <h3 className="font-semibold mb-2">Add a New Task</h3>
          <div className="flex gap-2">
            <input
              className="border p-2 flex-1 rounded"
              placeholder="What needs to be done?"
            />
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 rounded">
              + Add Task
            </button>
          </div>
        </div>

        {/* Tasks */}
        <h3 className="font-semibold mb-2">Your Tasks</h3>

        <div className="space-y-3">

          <div className="bg-white p-4 rounded-xl shadow flex justify-between">
            <div>
              <p className="font-semibold">Learn Docker 🚢</p>
              <p className="text-sm text-red-500">High Priority</p>
            </div>
            <button className="text-red-500">🗑</button>
          </div>

          <div className="bg-white p-4 rounded-xl shadow flex justify-between">
            <div>
              <p className="font-semibold line-through text-gray-400">
                Setup Kubernetes Cluster ⚙️
              </p>
              <p className="text-sm text-green-500">Completed</p>
            </div>
            <button className="text-red-500">🗑</button>
          </div>

          <div className="bg-white p-4 rounded-xl shadow flex justify-between">
            <div>
              <p className="font-semibold">Deploy App to Kubernetes 🚀</p>
              <p className="text-sm text-orange-500">Medium Priority</p>
            </div>
            <button className="text-red-500">🗑</button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
