import "./Settings.css";

export default function Settings() {

  return (

    <div className="settings-page">

      <div className="settings-header">

        <h1>⚙ Settings</h1>

        <p>

          Project configuration and environment information

        </p>

      </div>

      <div className="settings-grid">

        <div className="setting-card">

          <h2>Application</h2>

          <p><strong>Name:</strong> KubeDeploy</p>

          <p><strong>Version:</strong> v1.0.0</p>

          <p><strong>Frontend:</strong> React + Vite</p>

          <p><strong>Backend:</strong> Node.js + Express</p>

        </div>

        <div className="setting-card">

          <h2>Infrastructure</h2>

          <p><strong>Containers:</strong> Docker</p>

          <p><strong>Orchestration:</strong> Kubernetes</p>

          <p><strong>Cluster:</strong> Minikube</p>

          <p><strong>Database:</strong> MongoDB</p>

        </div>

        <div className="setting-card">

          <h2>Monitoring</h2>

          <p><strong>Metrics:</strong> Prometheus</p>

          <p><strong>Visualization:</strong> Grafana</p>

          <p><strong>Status:</strong> Active</p>

        </div>

        <div className="setting-card">

          <h2>Developer</h2>

          <p><strong>Project:</strong> Cloud Native Dashboard</p>

          <p><strong>CI/CD:</strong> GitHub Actions</p>

          <p><strong>IaC:</strong> Terraform</p>

        </div>

      </div>

    </div>

  );

}
