import { useEffect, useState } from "react";
import API from "../services/api";
import "./Monitoring.css";

export default function Monitoring() {

  const [metrics, setMetrics] = useState({
    cpu: 0,
    memory: 0,
    disk: 0,
    uptime: 0,
  });

  async function loadMetrics() {

    try {

      const res = await API.get("/api/monitoring");

      setMetrics(res.data);

    } catch (err) {

      console.log(err);

    }

  }

  useEffect(() => {

    loadMetrics();

    const interval = setInterval(loadMetrics, 5000);

    return () => clearInterval(interval);

  }, []);

  return (

    <div className="monitoring-page">

      <div className="monitoring-header">

        <div>

          <h1>📈 System Monitoring</h1>

          <p>Real-time server performance metrics</p>

        </div>

        <button
          className="refresh-btn"
          onClick={loadMetrics}
        >
          Refresh
        </button>

      </div>

      <div className="monitor-grid">

        <div className="monitor-card">

          <h3>CPU Usage</h3>

          <h2>{metrics.cpu}%</h2>

          <div className="progress">

            <div
              className="progress-bar cpu"
              style={{ width: `${metrics.cpu}%` }}
            />

          </div>

        </div>

        <div className="monitor-card">

          <h3>Memory Usage</h3>

          <h2>{metrics.memory}%</h2>

          <div className="progress">

            <div
              className="progress-bar memory"
              style={{ width: `${metrics.memory}%` }}
            />

          </div>

        </div>

        <div className="monitor-card">

          <h3>Disk Usage</h3>

          <h2>{metrics.disk}%</h2>

          <div className="progress">

            <div
              className="progress-bar disk"
              style={{ width: `${metrics.disk}%` }}
            />

          </div>

        </div>

        <div className="monitor-card">

          <h3>System Uptime</h3>

          <h2>{metrics.uptime} hrs</h2>

          <div className="uptime-box">

            Running Normally

          </div>

        </div>

      </div>

    </div>

  );

}
