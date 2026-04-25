import { useState } from "react";
import { 
  CheckCircle, Circle, Trash2, Edit3, 
  LayoutDashboard, CheckSquare, BarChart2, Settings, 
  Plus, Calendar
} from "lucide-react";

export default function App() {
  const [tasks, setTasks] = useState([
    { text: "Learn Docker", priority: "High", completed: false, date: "May 25, 2024" },
    { text: "Setup Kubernetes Cluster", priority: "High", completed: true, date: "May 24, 2024" },
    { text: "Deploy App to Kubernetes", priority: "Medium", completed: false, date: "May 26, 2024" },
    { text: "Setup CI/CD Pipeline", priority: "Medium", completed: true, date: "May 23, 2024" },
    { text: "Setup Monitoring with Prometheus", priority: "Low", completed: false, date: "May 27, 2024" },
  ]);

  const [input, setInput] = useState("");

  const addTask = () => {
    if (!input.trim()) return;
    const newTask = {
      text: input,
      priority: "Medium",
      completed: false,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    };
    setTasks([...tasks, newTask]);
    setInput("");
  };

  const deleteTask = (i) => setTasks(tasks.filter((_, index) => index !== i));
  
  const toggleTask = (i) => {
    const updated = [...tasks];
    updated[i].completed = !updated[i].completed;
    setTasks(updated);
  };

  const total = tasks.length;
  const completedCount = tasks.filter(t => t.completed).length;
  const pendingCount = total - completedCount;

  return (
    <div className="flex min-h-screen bg-[#f8fafc] font-sans text-slate-900">
      
      {/* SIDEBAR */}
      <aside className="w-72 bg-[#0f172a] text-slate-300 p-6 flex flex-col">
        <div className="flex items-center gap-3 mb-10 px-2">
          <div className="bg-indigo-500 p-2 rounded-lg">
            <CheckSquare className="text-white w-6 h-6" />
          </div>
          <h1 className="text-xl font-bold text-white tracking-tight">DevOps Todo</h1>
        </div>

        <div className="flex items-center gap-4 bg-slate-800/50 p-4 rounded-xl mb-8 border border-slate-700/50">
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl">DL</div>
          <div>
            <p className="font-semibold text-white text-sm">DevOps Learner 👋</p>
            <p className="text-xs text-slate-400">devops@example.com</p>
          </div>
        </div>

        <nav className="space-y-2 flex-1">
          <NavItem icon={<LayoutDashboard size={20}/>} label="My Tasks" active />
          <NavItem icon={<CheckCircle size={20}/>} label="Completed" />
          <NavItem icon={<BarChart2 size={20}/>} label="Analytics" />
          <NavItem icon={<Settings size={20}/>} label="Settings" />
        </nav>

        <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 p-6 rounded-2xl border border-indigo-500/20 mt-auto">
          <div className="mb-4">🚀</div>
          <p className="font-bold text-white mb-1">Keep Going!</p>
          <p className="text-xs text-slate-400 mb-4 leading-relaxed">You're building something awesome today.</p>
          <button className="w-full py-2.5 bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl text-sm font-semibold transition-all shadow-lg shadow-indigo-500/20">
            Stay Motivated
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-10 overflow-y-auto">
        
        {/* TOP BAR */}
        <header className="flex justify-between items-center mb-8">
            <div />
            <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
                <span>Hello, DevOps Learner 👋</span>
                <div className="w-8 h-8 rounded-full bg-slate-200 border border-slate-300" />
            </div>
        </header>

        {/* HERO HEADER */}
        <div className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 p-8 rounded-3xl mb-8 text-white shadow-xl shadow-indigo-200 relative overflow-hidden">
            <div className="relative z-10">
                <h2 className="text-3xl font-extrabold mb-2">Good Morning! ☀️</h2>
                <p className="opacity-90 text-lg">Let’s get your tasks done today.</p>
            </div>
            {/* Simple decorative circle */}
            <div className="absolute top-[-20%] right-[-5%] w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        </div>

        {/* STATS CARDS */}
        <div className="grid grid-cols-3 gap-6 mb-10">
          <StatCard count={total} label="Total Tasks" icon={<LayoutDashboard className="text-indigo-500" size={24}/>} />
          <StatCard count={completedCount} label="Completed" icon={<CheckCircle className="text-emerald-500" size={24}/>} />
          <StatCard count={pendingCount} label="Pending" icon={<Calendar className="text-orange-500" size={24}/>} />
        </div>

        {/* ADD TASK BOX */}
        <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 mb-10">
          <h3 className="font-bold text-slate-800 mb-4">Add a New Task</h3>
          <div className="flex gap-4">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all bg-slate-50"
              placeholder="What needs to be done?"
            />
            <button
              onClick={addTask}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-all shadow-md shadow-indigo-200"
            >
              <Plus size={20} /> Add Task
            </button>
          </div>
        </section>

        {/* TASK LIST */}
        <div className="space-y-4">
          <div className="flex justify-between items-center mb-2 px-2">
            <h3 className="font-bold text-slate-800">Your Tasks</h3>
            <select className="bg-transparent text-sm font-semibold text-slate-500 outline-none">
                <option>All Tasks</option>
            </select>
          </div>
          
          {tasks.map((task, i) => (
            <div key={i} className={`group flex items-center justify-between p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all ${task.completed ? 'opacity-75' : ''}`}>
              <div className="flex items-center gap-5">
                <button onClick={() => toggleTask(i)} className="transition-transform active:scale-90">
                  {task.completed ? 
                    <CheckCircle className="text-emerald-500 fill-emerald-50" size={28} /> : 
                    <Circle className="text-slate-300 hover:text-indigo-400" size={28} />
                  }
                </button>
                <div>
                  <h4 className={`font-bold text-lg transition-all ${task.completed ? "line-through text-slate-400 font-medium" : "text-slate-800"}`}>
                    {task.text}
                  </h4>
                  <div className="flex items-center gap-4 mt-1">
                    <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full flex items-center gap-1.5 ${getPriorityStyle(task.priority)}`}>
                        <span className="w-1.5 h-1.5 rounded-full bg-current" />
                        {task.priority} Priority
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1.5">
                        <Calendar size={12} /> {task.date}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                {task.completed && <span className="text-xs font-bold text-emerald-500 bg-emerald-50 px-3 py-1 rounded-lg mr-2">Completed</span>}
                <button className="p-2 text-slate-400 hover:bg-slate-100 rounded-lg transition-colors"><Edit3 size={18} /></button>
                <button onClick={() => deleteTask(i)} className="p-2 text-rose-400 hover:bg-rose-50 rounded-lg transition-colors"><Trash2 size={18} /></button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

/* HELPER COMPONENTS */
function NavItem({ icon, label, active = false }) {
  return (
    <div className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all ${active ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-900/20' : 'hover:bg-slate-800 hover:text-white'}`}>
      {icon}
      <span className="font-medium">{label}</span>
    </div>
  );
}

function StatCard({ count, label, icon }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-5">
      <div className="bg-slate-50 p-4 rounded-2xl">
        {icon}
      </div>
      <div>
        <p className="text-3xl font-black text-slate-800 leading-none">{count}</p>
        <p className="text-sm font-semibold text-slate-400 mt-1">{label}</p>
      </div>
    </div>
  );
}

function getPriorityStyle(priority) {
    switch(priority) {
        case 'High': return 'text-rose-600 bg-rose-
