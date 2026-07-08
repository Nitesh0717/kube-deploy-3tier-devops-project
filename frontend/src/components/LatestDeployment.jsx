import { useEffect, useState } from "react";
import API from "../services/api";

export default function LatestDeployment() {
  const [deployment, setDeployment] = useState(null);

  useEffect(() => {
    loadDeployment();
  }, []);

  async function loadDeployment() {
    const res = await API.get("/api/deployment");
    setDeployment(res.data);
  }

  if (!deployment) return <div className="dashboard-box">Loading...</div>;

  return (
    <div className="dashboard-box">
      <h2>🚀 Latest Deployment</h2>

      <p><strong>Version:</strong> {deployment.version}</p>

      <p>
        <strong>Status:</strong>{" "}
        <span style={{ color: "#22c55e" }}>
          {deployment.status}
        </span>
      </p>

      <p><strong>Deployed:</strong> {deployment.deployedAt}</p>

      <p><strong>Duration:</strong> {deployment.duration}</p>
    </div>
  );
}
