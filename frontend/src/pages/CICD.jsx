import { useEffect, useState } from "react";
import "./CICD.css";

export default function CICD() {

  const [pipeline, setPipeline] = useState({
    status: "Running",
    lastRun: "2 minutes ago",
    branch: "main",
    build: "#154",
    duration: "3m 42s",
    successRate: "98%",
    stages: [
      {
        name: "Source",
        status: "Success",
      },
      {
        name: "Build",
        status: "Success",
      },
      {
        name: "Test",
        status: "Success",
      },
      {
        name: "Docker Build",
        status: "Success",
      },
      {
        name: "Push Image",
        status: "Success",
      },
      {
        name: "Deploy",
        status: "Running",
      },
    ],
  });

  useEffect(() => {

    const interval = setInterval(() => {

      setPipeline((prev) => ({
        ...prev,
      }));

    }, 10000);

    return () => clearInterval(interval);

  }, []);

  return (

    <div className="cicd-page">

      {/* Header */}

      <div className="cicd-header">

        <div>

          <h1>⚙ CI/CD Pipeline</h1>

          <p>

            GitHub Actions Pipeline Monitoring

          </p>

        </div>

        <button
          className="refresh-btn"
          onClick={() => window.location.reload()}
        >
          Refresh
        </button>

      </div>

      {/* Summary */}

      <div className="pipeline-cards">

        <div className="pipeline-card">

          <h3>Pipeline Status</h3>

          <h2 className="healthy">

            {pipeline.status}

          </h2>

        </div>

        <div className="pipeline-card">

          <h3>Build Number</h3>

          <h2>

            {pipeline.build}

          </h2>

        </div>

        <div className="pipeline-card">

          <h3>Branch</h3>

          <h2>

            {pipeline.branch}

          </h2>

        </div>

        <div className="pipeline-card">

          <h3>Success Rate</h3>

          <h2 className="healthy">

            {pipeline.successRate}

          </h2>

        </div>

      </div>

      {/* Pipeline Table */}

      <div className="pipeline-table">

        <h2>Pipeline Stages</h2>

        <table>

          <thead>

            <tr>

              <th>Stage</th>

              <th>Status</th>

            </tr>

          </thead>

          <tbody>

            {pipeline.stages.map((stage, index) => (

              <tr key={index}>

                <td>

                  {stage.name}

                </td>

                <td>

                  <span
                    className={
                      stage.status === "Success"
                        ? "status running"
                        : stage.status === "Running"
                        ? "status pending"
                        : "status stopped"
                    }
                  >

                    {stage.status}

                  </span>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {/* Bottom Cards */}

      <div className="pipeline-bottom">

        <div className="info-card">

          <h3>Pipeline Information</h3>

          <p>

            <strong>Last Run:</strong>

            {" "}

            {pipeline.lastRun}

          </p>

          <p>

            <strong>Duration:</strong>

            {" "}

            {pipeline.duration}

          </p>

          <p>

            <strong>Branch:</strong>

            {" "}

            {pipeline.branch}

          </p>

          <p>

            <strong>Pipeline:</strong>

            GitHub Actions

          </p>

        </div>

        <div className="info-card">

          <h3>Execution Flow</h3>

          <ul>

            {pipeline.stages.map((stage, index) => (

              <li key={index}>

                {stage.status === "Success"
                  ? "✅"
                  : stage.status === "Running"
                  ? "🟡"
                  : "❌"}

                {" "}

                {stage.name}

              </li>

            ))}

          </ul>

        </div>

      </div>

    </div>

  );

}
