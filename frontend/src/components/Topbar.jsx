import "./Topbar.css";

export default function Topbar() {
  return (
    <header className="topbar">
      <div>
        <h1>KubeDeploy Dashboard</h1>
        <p>Cloud Native DevOps Monitoring Platform</p>
      </div>

      <button
        className="refresh-btn"
        onClick={() => window.location.reload()}
      >
        Refresh
      </button>
    </header>
  );
}
