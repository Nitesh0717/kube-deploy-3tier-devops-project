import { useEffect, useState } from "react";
import API from "../services/api";
import "./Kubernetes.css";

export default function Kubernetes() {

  const [cluster, setCluster] = useState({
    pods: 0,
    deployments: 0,
    services: 0,
    nodes: 0,
    podList: [],
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadCluster();
  }, []);

  async function loadCluster() {

    try {

      setLoading(true);

      const res = await API.get("/api/cluster");

      setCluster(res.data);

    } catch (err) {

      console.log(err);

    } finally {

      setLoading(false);

    }

  }

  return (

    <div className="kubernetes-page">

      <div className="page-header">

        <div>

          <h1>☸ Kubernetes Cluster</h1>

          <p>
            Live Kubernetes Monitoring Dashboard
          </p>

        </div>

        <button
          className="refresh-btn"
          onClick={loadCluster}
        >
          Refresh
        </button>

      </div>

      {/* Summary Cards */}

      <div className="cluster-cards">

        <div className="cluster-card">

          <h3>Pods</h3>

          <h2>{cluster.pods}</h2>

        </div>

        <div className="cluster-card">

          <h3>Deployments</h3>

          <h2>{cluster.deployments}</h2>

        </div>

        <div className="cluster-card">

          <h3>Services</h3>

          <h2>{cluster.services}</h2>

        </div>

        <div className="cluster-card">

          <h3>Nodes</h3>

          <h2 className="healthy">
            {cluster.nodes}
          </h2>

        </div>

      </div>

      {/* Live Pods */}

      <div className="cluster-table">

        <h2>Running Pods</h2>

        {loading ? (

          <p>Loading...</p>

        ) : (

          <table>

            <thead>

              <tr>

                <th>Pod Name</th>

                <th>Status</th>

              </tr>

            </thead>

            <tbody>

              {cluster.podList.length === 0 ? (

                <tr>

                  <td colSpan="2">

                    No Pods Found

                  </td>

                </tr>

              ) : (

                cluster.podList.map((pod) => (

                  <tr key={pod.name}>

                    <td>{pod.name}</td>

                    <td>

                      <span
                        className={
                          pod.status === "Running"
                            ? "status running"
                            : "status"
                        }
                      >

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

      <div className="cluster-bottom">

        <div className="info-card">

          <h3>Cluster Information</h3>

          <p>

            <strong>Cluster :</strong> Minikube

          </p>

          <p>

            <strong>Nodes :</strong> {cluster.nodes}

          </p>

          <p>

            <strong>Deployments :</strong> {cluster.deployments}

          </p>

          <p>

            <strong>Services :</strong> {cluster.services}

          </p>

        </div>

        <div className="info-card">

          <h3>Running Pods</h3>

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
