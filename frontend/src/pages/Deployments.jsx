import { useEffect, useState } from "react";
import API from "../services/api";
import "./Deployments.css";

export default function Deployments() {

  const [cluster, setCluster] = useState({
    deployments: 0,
    pods: 0,
    services: 0,
    nodes: 0,
    podList: [],
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDeployments();
  }, []);

  async function loadDeployments() {

    try {

      setLoading(true);

      const res = await API.get("/api/cluster");

      setCluster(res.data);

    } catch (err) {

      console.error(err);

    } finally {

      setLoading(false);

    }

  }

  return (

    <div className="deployments-page">

      <div className="deployments-header">

        <div>

          <h1>🚀 Deployments</h1>

          <p>
            Kubernetes Deployment Overview
          </p>

        </div>

        <button
          className="refresh-btn"
          onClick={loadDeployments}
        >
          Refresh
        </button>

      </div>

      {/* Summary Cards */}

      <div className="deployment-cards">

        <div className="deployment-card">

          <h3>Total Deployments</h3>

          <h2>{cluster.deployments}</h2>

        </div>

        <div className="deployment-card">

          <h3>Running Pods</h3>

          <h2 className="healthy">
            {cluster.pods}
          </h2>

        </div>

        <div className="deployment-card">

          <h3>Services</h3>

          <h2>{cluster.services}</h2>

        </div>

        <div className="deployment-card">

          <h3>Cluster Nodes</h3>

          <h2 className="healthy">
            {cluster.nodes}
          </h2>

        </div>

      </div>

      {/* Table */}

      <div className="deployment-table">

        <h2>Live Deployments</h2>

        {loading ? (

          <p>Loading...</p>

        ) : (

          <table>

            <thead>

              <tr>

                <th>Deployment</th>
                <th>Status</th>

              </tr>

            </thead>

            <tbody>

              {cluster.podList.length === 0 ? (

                <tr>

                  <td colSpan="2">

                    No Deployments Found

                  </td>

                </tr>

              ) : (

                cluster.podList.map((pod) => (

                  <tr key={pod.name}>

                    <td>{pod.name}</td>

                    <td>

                      <span className="status running">

                        {pod.status}

                      </span>

                    </td>

                  </tr>

                ))

              )}

            </tbody>

          </table>

        )}

      </div>

      {/* Bottom Cards */}

      <div className="deployment-bottom">

        <div className="info-card">

          <h3>Deployment Summary</h3>

          <p>

            <strong>Deployments:</strong> {cluster.deployments}

          </p>

          <p>

            <strong>Pods:</strong> {cluster.pods}

          </p>

          <p>

            <strong>Services:</strong> {cluster.services}

          </p>

          <p>

            <strong>Nodes:</strong> {cluster.nodes}

          </p>

        </div>

        <div className="info-card">

          <h3>Deployment Health</h3>

          <ul>

            {cluster.podList.map((pod) => (

              <li key={pod.name}>

                ✅ {pod.name}

              </li>

            ))}

          </ul>

        </div>

      </div>

    </div>

  );

}
