import { useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Learn Docker", completed: false },
    { id: 2, title: "Deploy to Kubernetes", completed: false },
  ]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (!input.trim()) return;
    setTasks([
      ...tasks,
      { id: Date.now(), title: input, completed: false },
    ]);
    setInput("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;
  const pending = total - completed;

  return (
    <div style={{ display: "flex", minHeight: "100vh", fontFamily: "sans-serif" }}>
      
      {/* Sidebar */}
      <div style={{ width: "250px", background: "#0f172a", color: "white", padding: "20px" }}>
        <h2>DevOps Todo</h2>
        <p style={{ fontSize: "14px", opacity: 0.7 }}>DevOps Learner</p>

        <div style={{ marginTop: "20px" }}>
          <p>My Tasks</p>
          <p>Completed</p>
          <p>Analytics</p>
          <p>Settings</p>
        </div>
      </div>

      {/* Main */}
      <div style={{ flex: 1, padding: "20px", background: "#f1f5f9" }}>
        
        {/* Header */}
        <div style={{
          background: "linear-gradient(to right, #3b82f6, #9333ea)",
          color: "white",
          padding: "20px",
          borderRadius: "10px",
          marginBottom: "20px"
        }}>
          <h2>Good Morning ☀️</h2>
          <p>Let's get your tasks done today.</p>
        </div>

        {/* Stats */}
        <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
          <div style={card}>Total: {total}</div>
          <div style={card}>Completed: {completed}</div>
          <div style={card}>Pending: {pending}</div>
        </div>

        {/* Input */}
        <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="What needs to be done?"
            style={{ flex: 1, padding: "10px" }}
          />
          <button onClick={addTask} style={btn}>Add Task</button>
        </div>

        {/* Tasks */}
        {tasks.map((task) => (
          <div key={task.id} style={taskCard}>
            <span
              onClick={() => toggleTask(task.id)}
              style={{
                cursor: "pointer",
                textDecoration: task.completed ? "line-through" : "none"
              }}
            >
              {task.title}
            </span>
            <button onClick={() => deleteTask(task.id)} style={deleteBtn}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

const card = {
  background: "white",
  padding: "15px",
  borderRadius: "8px",
  flex: 1,
  textAlign: "center",
  fontWeight: "bold"
};

const btn = {
  background: "#9333ea",
  color: "white",
  padding: "10px 15px",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer"
};

const deleteBtn = {
  background: "transparent",
  color: "red",
  border: "none",
  cursor: "pointer"
};

const taskCard = {
  background: "white",
  padding: "15px",
  marginBottom: "10px",
  borderRadius: "8px",
  display: "flex",
  justifyContent: "space-between"
};
