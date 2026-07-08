import { useEffect, useMemo, useState } from "react";
import API from "../services/api";
import "./Tasks.css";

export default function Tasks() {

  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState("");

  async function loadTasks() {
    try {
      const res = await API.get("/api/tasks");
      setTasks(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    loadTasks();
  }, []);

  async function addTask() {

    if (!title.trim()) return;

    await API.post("/api/tasks", {
      title,
    });

    setTitle("");

    loadTasks();

  }

  async function deleteTask(id) {

    if (!window.confirm("Delete this task?")) return;

    await API.delete(`/api/tasks/${id}`);

    loadTasks();

  }

  function startEdit(task) {

    setEditingId(task.id);

    setEditTitle(task.title);

  }

  async function saveEdit(task) {
    if (!editTitle.trim()) return;

await API.put(`/api/tasks/${task.id}`, {
    title: editTitle,
      status: task.status,
      priority: task.priority,
    });

    setEditingId(null);
    await loadTasks();
  }

  async function updateStatus(task) {

    let next = "Pending";

    if (task.status === "Pending")
      next = "In Progress";

    else if (task.status === "In Progress")
      next = "Completed";

    await API.put(`/api/tasks/${task.id}`, {
      title: task.title,
      status: next,
      priority: task.priority,
    });

    loadTasks();

  }

  const filteredTasks = useMemo(() => {

    return tasks.filter(task => {

      const matchSearch =
        task.title.toLowerCase().includes(search.toLowerCase());

      const matchFilter =
        filter === "All" || task.status === filter;

      return matchSearch && matchFilter;

    });

  }, [tasks, search, filter]);

  return (

    <div className="tasks-page">

      <div className="tasks-header">

        <h1>Task Management</h1>

      </div>

      <div className="task-controls">

        <input
          placeholder="Add new task..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button onClick={addTask}>
          Add Task
        </button>

        <input
          placeholder="Search..."
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
        />

        <select
          value={filter}
          onChange={(e)=>setFilter(e.target.value)}
        >

          <option>All</option>
          <option>Pending</option>
          <option>In Progress</option>
          <option>Completed</option>

        </select>

      </div>

      <div className="table-container">

        <table>

          <thead>

            <tr>

              <th>ID</th>

              <th>Task</th>

              <th>Status</th>

              <th>Priority</th>

              <th>Actions</th>

            </tr>

          </thead>

          <tbody>            
            {filteredTasks.length === 0 ? (

              <tr>

                <td
                  colSpan="5"
                  className="no-data"
                >
                  No tasks found
                </td>

              </tr>

            ) : (

              filteredTasks.map((task, index) => (

                <tr key={task.id || index}>

                  <td>{index + 1}</td>

                  <td>

                    {editingId === task.id ? (

                      <input
                        className="edit-input"
                        value={editTitle}
                        onChange={(e)=>setEditTitle(e.target.value)}
                      />

                    ) : (

                      task.title

                    )}

                  </td>

                  <td>

                    <span
                      className={
                        task.status === "Completed"
                          ? "status completed"
                          : task.status === "In Progress"
                          ? "status progress"
                          : "status pending"
                      }
                      onClick={() => updateStatus(task)}
                      style={{cursor:"pointer"}}
                    >

                      {task.status}

                    </span>

                  </td>

                  <td>

                    <span
                      className={
                        task.priority === "High"
                          ? "priority high"
                          : task.priority === "Medium"
                          ? "priority medium"
                          : "priority low"
                      }
                    >

                      {task.priority}

                    </span>

                  </td>

                  <td>

                    <div className="action-buttons">

                      {editingId === task.id ? (

                        <>

                          <button
                            className="save-btn"
                            onClick={() => saveEdit(task)}
                          >
                            Save
                          </button>

                          <button
                            className="cancel-btn"
                            onClick={() => setEditingId(null)}
                          >
                            Cancel
                          </button>

                        </>

                      ) : (

                        <>

                          <button
                            className="edit-btn"
                            onClick={() => startEdit(task)}
                          >
                            Edit
                          </button>

                          <button
                            className="delete-btn"
                            onClick={() => deleteTask(task.id)}
                          >
                            Delete
                          </button>

                        </>

                      )}

                    </div>

                  </td>

                </tr>

              ))

            )}

          </tbody>

        </table>

      </div>

    </div>

  );

}