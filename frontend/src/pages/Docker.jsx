import { useEffect, useState } from "react";
import API from "../services/api";
import "./Docker.css";

export default function Docker() {

  const [containers, setContainers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadContainers();
  }, []);

  async function loadContainers() {

    try {

      setLoading(true);

      const res = await API.get("/api/docker");

      setContainers(res.data);

    } catch (err) {

      console.error(err);

      alert("Unable to fetch Docker containers");

    } finally {

      setLoading(false);

    }

  }

  const running = containers.filter(
    c => c.status === "running"
  ).length;

  const stopped = containers.length - running;

  return (

    <div className="docker-page">

      {/* Header */}

      <div className="docker-header">

        <div>

          <h1>🐳 Docker Dashboard</h1>

          <p>
            Live Docker Container Monitoring
          </p>

        </div>

        <button
          className="refresh-btn"
          onClick={loadContainers}
        >
          Refresh
        </button>

      </div>

      {/* Summary Cards */}

      <div className="docker-cards">

        <div className="docker-card">

          <h3>Total Containers</h3>

          <h2>{containers.length}</h2>

        </div>

        <div className="docker-card">

          <h3>Running</h3>

          <h2 className="healthy">
            {running}
          </h2>

        </div>

        <div className="docker-card">

          <h3>Stopped</h3>

          <h2>
            {stopped}
          </h2>

        </div>

        <div className="docker-card">

          <h3>Docker Engine</h3>

          <h2 className="healthy">
            Active
          </h2>

        </div>

      </div>

      {/* Table */}

      <div className="docker-table">

        <h2>Running Containers</h2>

        {loading ? (

          <p>Loading...</p>

        ) : (

          <table>

            <thead>

              <tr>

                <th>Container</th>

                <th>Image</th>

                <th>Status</th>

                <th>State</th>

                <th>Container ID</th>

              </tr>

            </thead>

            <tbody>

              {containers.length === 0 ? (

                <tr>

                  <td
                    colSpan="5"
                    className="no-data"
                  >
                    No Containers Running
                  </td>

                </tr>

              ) : (

                containers.map(container => (

                  <tr key={container.id}>

                    <td>

                      <strong>
                        {container.container}
                      </strong>

                    </td>

                    <td>
                      {container.image}
                    </td>

                    <td>

                      <span
                        className={
                          container.status === "running"
                            ? "status running"
                            : "status stopped"
                        }
                      >

                        {container.status}

                      </span>

                    </td>

                    <td>
                      {container.state}
                    </td>

                    <td>

                      <code>
                        {container.id}
                      </code>

                    </td>

                  </tr>

                ))

              )}

            </tbody>

          </table>

        )}

      </div>

      {/* Bottom Section */}

      <div className="docker-bottom">

        <div className="info-card">

          <h3>Docker Summary</h3>

          <p>

            <strong>Total Containers:</strong>

            {" "}
            {containers.length}

          </p>

          <p>

            <strong>Running:</strong>

            {" "}
            {running}

          </p>

          <p>

            <strong>Stopped:</strong>

            {" "}
            {stopped}

          </p>

          <p>

            <strong>Refresh:</strong>

            Manual

          </p>

        </div>

        <div className="info-card">

          <h3>Container Health</h3>

          <ul>

            {containers.length === 0 ? (

              <li>No running containers.</li>

            ) : (

              containers.map(container => (

                <li key={container.id}>

                  {container.status === "running"
                    ? "✅"
                    : "❌"}

                  {" "}

                  {container.container}

                </li>

              ))

            )}

          </ul>

        </div>

      </div>

    </div>

  );

}