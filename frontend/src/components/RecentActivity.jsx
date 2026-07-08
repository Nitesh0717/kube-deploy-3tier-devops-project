import { useEffect, useState } from "react";
import API from "../services/api";

export default function RecentActivity() {

  const [activity, setActivity] = useState([]);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const res = await API.get("/api/activity");
    setActivity(res.data);
  }

  return (
    <div className="dashboard-box">
      <h2>📋 Recent Activity</h2>

      {activity.map((item, index) => (
        <div
          key={index}
          style={{
            padding: "12px 0",
            borderBottom: "1px solid #374151",
          }}
        >
          <strong>{item.title}</strong>
          <br />
          <small>{item.time}</small>
        </div>
      ))}
    </div>
  );
}
